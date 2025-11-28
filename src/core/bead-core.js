// src/core/bead-core.js
import { DEFAULT_LIBRARY, ALL_LIBRARIES } from './bead-libraries.js';
import { TemplateGenerator } from './template-generator.js';

/**
 * 环境感知 Canvas 创建器
 * 修复版：优先判断是否在主线程，解决 toDataURL 报错
 */
function createOffscreenAwareCanvas(width, height) {
  // 1. 如果有 document 对象，说明在主线程，强制使用标准 Canvas
  // 这样可以保留 toDataURL 方法，兼容旧的 UI 代码
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  
  // 2. 如果没有 document (在 Web Worker 中)，才使用 OffscreenCanvas
  if (typeof OffscreenCanvas !== 'undefined') {
    return new OffscreenCanvas(width, height);
  }
  
  throw new Error('当前环境不支持 Canvas');
}

export class BeadConverter {
  constructor() {
    this.beadMap = [];
    this.usedColors = new Map();
    // 颜色匹配缓存，大幅提升性能
    this.colorCache = new Map();
    
    // 初始化加载默认库
    this.initLibrary(DEFAULT_LIBRARY);
    
    this.templateGenerator = new TemplateGenerator();
    this.templateGenerator.setColorLibrary(this.library);
    this.backgroundCode = 'H2';
    this.lastDimensions = null;
    this.lastUsedColors = [];
    this.lastTemplateDpi = 200;
  }

  /**
   * 初始化色库并预计算Lab值（性能关键）
   */
  initLibrary(libData) {
    this.library = libData.colors.map(c => {
      const rgb = c.rgb || this.hexToRgb(c.hex);
      return {
        code: c.code,
        name: c.name,
        hex: c.hex,
        rgb: rgb,
        // 预计算 Lab 值，避免匹配时重复计算
        lab: this.rgbToLab(rgb),
        transparent: c.transparent || false
      };
    });
    // 每次切换色库，必须清空缓存
    this.colorCache.clear();
  }

  switchLibrary(libraryName) {
    const lib = ALL_LIBRARIES[libraryName];
    if (!lib) throw new Error(`色库 "${libraryName}" 不存在`);
    this.initLibrary(lib);
    this.templateGenerator.setColorLibrary(this.library);
    return lib.name;
  }

  updateLibrary(colors) {
    if (!Array.isArray(colors) || colors.length === 0) throw new Error("无效的色号数据");
    this.initLibrary({ colors });
    this.templateGenerator.setColorLibrary(this.library);
  }

  setBackgroundCode(code) {
    this.backgroundCode = code;
  }

  // --- 颜色空间转换算法 (Lab) ---

  /**
   * RGB 转 Lab (CIELAB)
   * 这种转换能让颜色匹配更符合人眼感知
   */
  rgbToLab([r, g, b]) {
    // 1. RGB to XYZ
    let r1 = r / 255, g1 = g / 255, b1 = b / 255;
    r1 = (r1 > 0.04045) ? Math.pow((r1 + 0.055) / 1.055, 2.4) : r1 / 12.92;
    g1 = (g1 > 0.04045) ? Math.pow((g1 + 0.055) / 1.055, 2.4) : g1 / 12.92;
    b1 = (b1 > 0.04045) ? Math.pow((b1 + 0.055) / 1.055, 2.4) : b1 / 12.92;

    let x = (r1 * 0.4124 + g1 * 0.3576 + b1 * 0.1805) / 0.95047;
    let y = (r1 * 0.2126 + g1 * 0.7152 + b1 * 0.0722) / 1.00000;
    let z = (r1 * 0.0193 + g1 * 0.1192 + b1 * 0.9505) / 1.08883;

    // 2. XYZ to Lab
    x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
    y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
    z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)];
  }

  /**
   * 计算颜色差异 (Delta E 76)
   * 简单高效的欧氏距离，但在 Lab 空间下效果远好于 RGB
   */
  deltaE(labA, labB) {
    const dL = labA[0] - labB[0];
    const dA = labA[1] - labB[1];
    const dB = labA[2] - labB[2];
    return dL * dL + dA * dA + dB * dB;
  }

  findClosestColor(rgb) {
    // 1. 缓存键生成：利用位运算压缩 RGB 为唯一整数
    const key = (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
    
    // 2. 查缓存
    if (this.colorCache.has(key)) {
      return this.colorCache.get(key);
    }

    // 3. 计算最佳匹配
    const targetLab = this.rgbToLab(rgb);
    let closest = this.library[0];
    let minDist = Infinity;

    for (let i = 0; i < this.library.length; i++) {
      const color = this.library[i];
      const dist = this.deltaE(targetLab, color.lab);
      if (dist < minDist) {
        minDist = dist;
        closest = color;
      }
    }

    // 4. 存缓存
    this.colorCache.set(key, closest);
    return closest;
  }

  // --- 图像处理核心流程 ---

 async convert(imageData, beadCount, options = {}) {
    const {
      generateTemplate = false,
      backgroundCode = this.backgroundCode,
      templateWidth = null,
      templateHeight = null,
      targetHeight = null,
      detailMode = 'average',
      detailFactor = 1,
      preprocess = false, // 原有的边缘增强
      pixelStyle = false,  // ✨ 新增：是否启用像素风/卡通化
      templateDpi = 200,
      colorClustering = { enabled: false, targetColors: 24 }
    } = options;

    const aspectRatio = imageData.height / imageData.width;
    const width = Math.max(1, Math.floor(beadCount));
    const height = targetHeight || Math.round(width * aspectRatio);
    
    const virtualWidth = Math.max(1, Math.round(width * detailFactor));
    const virtualHeight = Math.max(1, Math.round(height * detailFactor));

    // 1. 预处理：智能锐化 (边缘增强)
    let processedData = preprocess ? this.preprocessImage(imageData, width) : imageData;

    // 2. ✨ 新增步骤：像素风格化 (在缩放前处理效果较弱，建议在缩放后处理，这里我们先缩放)
    // 先进行硬像素化缩放
    const pixelCanvas = this.hardPixelate(processedData, virtualWidth, virtualHeight, detailMode);
    const pixelCtx = pixelCanvas.getContext('2d', { willReadFrequently: true });
    let pixelData = pixelCtx.getImageData(0, 0, virtualWidth, virtualHeight);

    // ✨ 如果开启了像素风，对缩放后的数据进行色彩平滑处理
    if (pixelStyle) {
      pixelData = this.applyPixelArtStyle(pixelData);
    }

    if (colorClustering?.enabled) {
      const clusterCount = Math.max(2, Math.min(colorClustering.targetColors || 24, 96));
      pixelData = this.applyColorClustering(pixelData, clusterCount);
    }

    // 3. 颜色匹配 (后续流程不变)
    this.usedColors.clear();
    const highResMap = [];
    const bgColor = this.library.find(c => c.code === backgroundCode) || this.library[0];

    const data = pixelData.data;
    const len = data.length;
    
    for (let i = 0; i < len; i += 4) {
      const pixelIndex = i / 4;
      const x = pixelIndex % virtualWidth;
      const y = Math.floor(pixelIndex / virtualWidth);
      
      if (!highResMap[y]) highResMap[y] = [];

      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      const a = data[i+3];

      if (a < 128 || (r > 250 && g > 250 && b > 250)) {
        highResMap[y][x] = bgColor;
      } else {
        highResMap[y][x] = this.findClosestColor([r, g, b]);
      }
    }

    if (detailFactor > 1) {
      this.beadMap = this.downscaleBeadMap(highResMap, detailFactor, width, height);
    } else {
      this.beadMap = highResMap;
    }

    if (width <= 64) {
      this.beadMap = this.refineForSmallBoard(this.beadMap);
    }

    this.recalculateUsage();

    const usedColorsArray = this.getUsedColorsArray();
    this.lastUsedColors = usedColorsArray;
    this.lastDimensions = {
      width: templateWidth || width,
      height: templateHeight || height,
      backgroundCode
    };
    this.lastTemplateDpi = templateDpi;

    const resultCanvas = this.generateDisplayCanvas(width, height);
    
    const result = {
      canvas: resultCanvas,
      statistics: this.generateStatistics(width, height)
    };

    if (generateTemplate) {
      this.templateGenerator.setColorLibrary(this.library);
      result.templateCanvas = this.templateGenerator.generateTemplate(this.beadMap, {
        width: this.lastDimensions.width,
        height: this.lastDimensions.height,
        backgroundCode,
        usedColors: usedColorsArray,
        dpi: templateDpi
      });
    }
    
    return result;
  }


  /**
   * ✨ 新增：像素风格化滤镜
   * 作用：通过色彩量化和饱和度提升，减少杂色，使图片更像"画"
   */
  applyPixelArtStyle(imageData) {
    const { data, width, height } = imageData;
    const output = new Uint8ClampedArray(data);
    
    // 参数配置
    const levels = 24; // 色阶数量 (越小色块越明显，比如 8 或 16)
    const satBoost = 1.2; // 饱和度提升倍数

    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i+1];
      let b = data[i+2];

      // 1. 提升饱和度 (简单的 RGB 空间算法)
      const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
      r = -gray * (satBoost - 1) + r * satBoost;
      g = -gray * (satBoost - 1) + g * satBoost;
      b = -gray * (satBoost - 1) + b * satBoost;

      // 2. 色彩量化 (Posterization)
      // 将 0-255 的连续色彩压缩到 levels 个台阶上
      // 这一步能把相近的颜色强制合并，形成干净的色块
      r = Math.floor(r / (255 / levels)) * (255 / levels);
      g = Math.floor(g / (255 / levels)) * (255 / levels);
      b = Math.floor(b / (255 / levels)) * (255 / levels);

      output[i] = Math.min(255, Math.max(0, r));
      output[i+1] = Math.min(255, Math.max(0, g));
      output[i+2] = Math.min(255, Math.max(0, b));
      output[i+3] = data[i+3]; // Alpha 不变
    }

    return new ImageData(output, width, height);
  }

  applyColorClustering(imageData, targetColors = 24) {
    const { data, width, height } = imageData;
    const pixelCount = (data.length / 4) | 0;
    if (!pixelCount) return imageData;
    const clusterCount = Math.max(2, Math.min(targetColors || 24, pixelCount));
    const samples = [];
    const sampleStep = Math.max(1, Math.floor(pixelCount / (clusterCount * 400)) || 1);
    for (let i = 0; i < pixelCount; i += sampleStep) {
      const idx = i * 4;
      samples.push([data[idx], data[idx + 1], data[idx + 2]]);
      if (samples.length >= clusterCount * 8) break;
    }

    if (samples.length === 0) return imageData;

    const centroids = [];
    for (let i = 0; i < Math.min(clusterCount, samples.length); i++) {
      const pick = samples[Math.floor(Math.random() * samples.length)];
      centroids.push(pick ? pick.slice() : [0, 0, 0]);
    }

    const colorDistance = (a, b) => {
      const dr = a[0] - b[0];
      const dg = a[1] - b[1];
      const db = a[2] - b[2];
      return dr * dr + dg * dg + db * db;
    };

    for (let iter = 0; iter < 5; iter++) {
      const sums = centroids.map(() => ({ r: 0, g: 0, b: 0, count: 0 }));
      for (const sample of samples) {
        let bestIndex = 0;
        let bestDist = Infinity;
        for (let c = 0; c < centroids.length; c++) {
          const dist = colorDistance(sample, centroids[c]);
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = c;
          }
        }
        const bucket = sums[bestIndex];
        bucket.r += sample[0];
        bucket.g += sample[1];
        bucket.b += sample[2];
        bucket.count += 1;
      }

      for (let c = 0; c < centroids.length; c++) {
        const bucket = sums[c];
        if (bucket.count > 0) {
          centroids[c] = [
            Math.round(bucket.r / bucket.count),
            Math.round(bucket.g / bucket.count),
            Math.round(bucket.b / bucket.count)
          ];
        }
      }
    }

    const output = new Uint8ClampedArray(data.length);
    for (let i = 0; i < pixelCount; i++) {
      const idx = i * 4;
      const current = [data[idx], data[idx + 1], data[idx + 2]];
      let bestIndex = 0;
      let bestDist = Infinity;
      for (let c = 0; c < centroids.length; c++) {
        const dist = colorDistance(current, centroids[c]);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = c;
        }
      }
      const chosen = centroids[bestIndex];
      output[idx] = chosen[0];
      output[idx + 1] = chosen[1];
      output[idx + 2] = chosen[2];
      output[idx + 3] = data[idx + 3];
    }

    return new ImageData(output, width, height);
  }
  preprocessImage(imageData, targetWidth) {
    const { data, width, height } = imageData;
    const output = new Uint8ClampedArray(data.length);
    
    // --- 动态调整参数 ---
    // 目标尺寸越小，锐化和对比度增强就要越猛烈
    let contrast = 1.0;
    let kernelCenter = 5;
    let kernelSide = -1;

    if (targetWidth <= 40) {
      contrast = 1.4; // 32格：极高对比度
      kernelCenter = 9; // 强锐化
      kernelSide = -2; // 强抑制
    } else if (targetWidth <= 60) {
      contrast = 1.25; // 52格：高对比度
      kernelCenter = 7; // 中强锐化
      kernelSide = -1.5;
    } else {
      contrast = 1.1; // 100格：轻微优化
    }

    // 3x3 锐化卷积核
    const kernel = [
      0, kernelSide, 0,
      kernelSide, kernelCenter, kernelSide,
      0, kernelSide, 0
    ];
    const kernelSum = kernel.reduce((a, b) => a + b, 0) || 1;

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4;
        let r = 0, g = 0, b = 0;

        // 1. 卷积锐化
        let kIndex = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const pIdx = ((y + ky) * width + (x + kx)) * 4;
            const weight = kernel[kIndex++];
            r += data[pIdx] * weight;
            g += data[pIdx + 1] * weight;
            b += data[pIdx + 2] * weight;
          }
        }
        r /= kernelSum;
        g /= kernelSum;
        b /= kernelSum;

        // 2. 对比度增强 (S曲线，让深色更深，浅色更浅)
        // 这是小图清晰的关键！
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        const applyContrast = (val) => {
           let c = factor * (val - 128) + 128;
           return Math.min(255, Math.max(0, c));
        };

        output[idx] = applyContrast(r);
        output[idx + 1] = applyContrast(g);
        output[idx + 2] = applyContrast(b);
        output[idx + 3] = data[idx + 3];
      }
    }
    
    return new ImageData(output, width, height);
  }

 hardPixelate(imageData, width, height, mode) {
  // 1. 先用 Canvas 高质量缩放到 2倍尺寸 (超采样)
  const superWidth = width * 2;
  const superHeight = height * 2;
  
  const tempCanvas = createOffscreenAwareCanvas(superWidth, superHeight);
  const ctx = tempCanvas.getContext('2d');
  
  // 绘制原图到 2倍大
  const sourceCanvas = createOffscreenAwareCanvas(imageData.width, imageData.height);
  sourceCanvas.getContext('2d').putImageData(imageData, 0, 0);
  
  ctx.drawImage(sourceCanvas, 0, 0, superWidth, superHeight);
  const superData = ctx.getImageData(0, 0, superWidth, superHeight).data;

  // 2. 手动降采样 (2x2 -> 1x1)
  const finalData = new Uint8ClampedArray(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // 检查对应的 2x2 区域
      // 策略：寻找这4个点中，对比度最大的颜色保留下来
      // ... 简化版：直接取中心点，或者取最暗的点(如果是画线稿) ...
      
      // 这里我们用一个简单的“中心点采样”作为演示，它通常比平均值更锐利
      // 你也可以尝试 "Mode Hybrid" (混合模式)
      
      // 对应超采样图中的坐标
      const sx = x * 2 + 1; 
      const sy = y * 2 + 1;
      const sIdx = (sy * superWidth + sx) * 4;
      
      const idx = (y * width + x) * 4;
      finalData[idx] = superData[sIdx];
      finalData[idx+1] = superData[sIdx+1];
      finalData[idx+2] = superData[sIdx+2];
      finalData[idx+3] = 255;
    }
  }
  
  const finalCanvas = createOffscreenAwareCanvas(width, height);
  finalCanvas.getContext('2d').putImageData(new ImageData(finalData, width, height), 0, 0);
  
  return finalCanvas;
}

  // --- 辅助工具 ---

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  }

  downscaleBeadMap(map, factor, targetWidth, targetHeight) {
    // 简单的众数采样（谁多选谁）
    const newMap = [];
    for (let y = 0; y < targetHeight; y++) {
      newMap[y] = [];
      for (let x = 0; x < targetWidth; x++) {
        const counts = new Map();
        for (let dy = 0; dy < factor; dy++) {
          for (let dx = 0; dx < factor; dx++) {
            const sy = y * factor + dy;
            const sx = x * factor + dx;
            if (map[sy] && map[sy][sx]) {
              const code = map[sy][sx].code;
              counts.set(code, (counts.get(code) || 0) + 1);
            }
          }
        }
        
        // 找出现次数最多的颜色
        let maxCode = null;
        let maxCount = -1;
        counts.forEach((v, k) => {
          if (v > maxCount) { maxCount = v; maxCode = k; }
        });
        
        newMap[y][x] = maxCode ? this.library.find(c => c.code === maxCode) : this.library[0];
      }
    }
    return newMap;
  }

  refineForSmallBoard(map) {
    // 简单去噪：如果一个像素被不同颜色的邻居包围，则同化
    // 适合 32x32 这种极小尺寸
    const h = map.length;
    const w = map[0].length;
    const newMap = JSON.parse(JSON.stringify(map)); // Deep copy

    for(let y=1; y<h-1; y++){
      for(let x=1; x<w-1; x++){
        const current = map[y][x];
        const neighbors = [
          map[y-1][x], map[y+1][x], map[y][x-1], map[y][x+1]
        ];
        
        // 如果四周颜色都相同，且与中心不同，则替换中心
        const first = neighbors[0].code;
        if(neighbors.every(n => n.code === first) && first !== current.code){
          newMap[y][x] = neighbors[0];
        }
      }
    }
    return newMap;
  }

  recalculateUsage() {
    this.usedColors.clear();
    for (const row of this.beadMap) {
      if (!row) continue;
      for (const bead of row) {
        if (!bead) continue;
        this.usedColors.set(bead.code, (this.usedColors.get(bead.code) || 0) + 1);
      }
    }
  }

  getUsedColorsArray() {
    return Array.from(this.usedColors.entries())
      .map(([code, count]) => {
        const color = this.library.find(c => c.code === code);
        return { color, count };
      })
      .sort((a, b) => a.color.code.localeCompare(b.color.code));
  }

  generateDisplayCanvas(width, height) {
    const cellSize = 20;
    const canvas = createOffscreenAwareCanvas(width * cellSize, height * cellSize);
    const ctx = canvas.getContext('2d');
    
    // ... (中间的绘图逻辑不变，不需要动) ...
    // ... 保持原本的绘制圆圈和高光的代码 ...
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < this.beadMap.length; y++) {
      if (!this.beadMap[y]) continue;
      for (let x = 0; x < this.beadMap[y].length; x++) {
        const bead = this.beadMap[y][x];
        if (!bead) continue;
        const cx = x * cellSize + cellSize / 2;
        const cy = y * cellSize + cellSize / 2;
        const r = (cellSize / 2) - 1;
        
        ctx.fillStyle = bead.hex;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(cx - 3, cy - 3, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // --- 修改点在这里 ---
    // 只有在 Worker 环境中（没有 document），才转为 ImageBitmap
    // 主线程中直接返回 canvas 对象，这样 UI 层就能调用 .toDataURL() 了
    if (typeof document === 'undefined' && canvas instanceof OffscreenCanvas) {
      return canvas.transferToImageBitmap(); 
    }
    
    return canvas;
  }
  
  generateStatistics(width, height) {
      // 保持原有逻辑
      const totalBeads = Array.from(this.usedColors.values()).reduce((a, b) => a + b, 0);
      const usedColorsArray = Array.from(this.usedColors.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([code, count]) => {
          const color = this.library.find(c => c.code === code) || { code, name: '未知', hex: '#000' };
          return {
            color,
            count,
            percentage: totalBeads > 0 ? ((count / totalBeads) * 100).toFixed(1) : '0.0'
          };
        });

      return {
        usedColors: usedColorsArray,
        totalColors: usedColorsArray.length,
        totalBeads,
        dimensions: { width, height }
      };
  }
  
  // 保持 generateHighResTemplate 不变，只需确保内部使用的是 templateGenerator
  generateHighResTemplate(options = {}) {
     if (!this.beadMap || this.beadMap.length === 0) {
       throw new Error('请先完成一次转换后再导出模板');
     }
     const fallbackWidth = this.beadMap[0]?.length || 0;
     const fallbackHeight = this.beadMap.length;
     const width = options.width || this.lastDimensions?.width || fallbackWidth;
     const height = options.height || this.lastDimensions?.height || fallbackHeight;
     const backgroundCode = options.backgroundCode || this.lastDimensions?.backgroundCode || this.backgroundCode;
     const dpi = options.dpi || this.lastTemplateDpi || 200;
     const usedColors = options.usedColors || this.lastUsedColors || this.getUsedColorsArray();

     this.templateGenerator.setColorLibrary(this.library);
     return this.templateGenerator.generateTemplate(this.beadMap, {
       width,
       height,
       backgroundCode,
       usedColors,
       dpi,
       codeFontFamily: options.codeFontFamily
     });
  }
}