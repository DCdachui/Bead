// src/core/template-generator.js
// 拼豆模板生成器 - 已适配 Worker 环境

// 工具函数：自动适配环境
function createOffscreenAwareCanvas(width, height) {
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  if (typeof OffscreenCanvas !== 'undefined') {
    return new OffscreenCanvas(width, height);
  }
  throw new Error('当前环境不支持 Canvas');
}

// export class TemplateGenerator {
//   constructor() {
//     this.cellSize = 20; // 每格像素大小（96DPI）
//     this.numberAreaWidth = 30; // 行编号区域宽度
//     this.numberAreaHeight = 30; // 列编号区域高度
//     this.codeFontSize = 10; // 代码字体大小（自适应）
//     this.codeFontFamily = 'Consolas, "Courier New", Monaco, monospace'; // 等宽字体
//     this.backgroundCode = 'H2'; // 默认背景色代码
//   }

//   generateTemplate(beadMap, options = {}) {
//     const {
//       width,
//       height,
//       backgroundCode = this.backgroundCode,
//       codeFontFamily = this.codeFontFamily,
//       codeFontSize = null,
//       dpi = 96,
//       usedColors = []
//     } = options;

//     const dpiScale = dpi / 96;
//     const scaledCellSize = this.cellSize * dpiScale;
//     const scaledNumberWidth = this.numberAreaWidth * dpiScale;
//     const scaledNumberHeight = this.numberAreaHeight * dpiScale;

//     const gridWidth = width * scaledCellSize;
//     const gridHeight = height * scaledCellSize;
//     const canvasWidth = scaledNumberWidth + gridWidth;
//     const canvasHeight = scaledNumberHeight + gridHeight;

//     const colorTableHeight = usedColors.length > 0 ? this.calculateColorTableHeight(usedColors, dpiScale) : 0;
//     const totalHeight = canvasHeight + colorTableHeight;

//     // --- 修改点：使用环境感知 Canvas ---
//     const canvas = createOffscreenAwareCanvas(canvasWidth, totalHeight);
//     const ctx = canvas.getContext('2d');

//     ctx.imageSmoothingEnabled = false;
//     ctx.textBaseline = 'middle';
//     ctx.textAlign = 'center';

//     ctx.fillStyle = '#FFFFFF';
//     ctx.fillRect(0, 0, canvasWidth, totalHeight);

//     this.drawColumnNumbers(ctx, width, scaledCellSize, scaledNumberWidth, scaledNumberHeight, dpiScale);
//     this.drawRowNumbers(ctx, height, scaledCellSize, scaledNumberWidth, scaledNumberHeight, dpiScale);

//     const actualCodeFontSize = codeFontSize || this.calculateAutoFontSize(scaledCellSize, dpiScale);
//     this.drawGridWithCodes(ctx, beadMap, width, height, scaledCellSize, scaledNumberWidth, scaledNumberHeight, {
//       codeFontFamily,
//       codeFontSize: actualCodeFontSize,
//       backgroundCode,
//       dpiScale
//     });

//     if (usedColors.length > 0) {
//       this.drawColorTable(ctx, usedColors, canvasWidth, canvasHeight, dpiScale);
//     }

//     // --- 修改点：Worker 兼容性返回 ---
//     if (typeof document === 'undefined' && canvas instanceof OffscreenCanvas) {
//       return canvas.transferToImageBitmap();
//     }

//     return canvas;
//   }

//   // ... 以下辅助方法保持不变 ...
//   drawColumnNumbers(ctx, width, cellSize, numberAreaWidth, numberAreaHeight, dpiScale) {
//     ctx.fillStyle = '#000000';
//     ctx.font = `${12 * dpiScale}px ${this.codeFontFamily}`;
//     ctx.textBaseline = 'middle';
//     ctx.textAlign = 'center';

//     for (let x = 0; x < width; x++) {
//       const centerX = numberAreaWidth + x * cellSize + cellSize / 2;
//       const centerY = numberAreaHeight / 2;
//       ctx.fillText(String(x + 1), centerX, centerY);
//     }
//   }

//   drawRowNumbers(ctx, height, cellSize, numberAreaWidth, numberAreaHeight, dpiScale) {
//     ctx.fillStyle = '#000000';
//     ctx.font = `${12 * dpiScale}px ${this.codeFontFamily}`;
//     ctx.textBaseline = 'middle';
//     ctx.textAlign = 'center';

//     for (let y = 0; y < height; y++) {
//       const centerX = numberAreaWidth / 2;
//       const centerY = numberAreaHeight + y * cellSize + cellSize / 2;
//       ctx.fillText(String(y + 1), centerX, centerY);
//     }
//   }

//   drawGridWithCodes(ctx, beadMap, width, height, cellSize, numberAreaWidth, numberAreaHeight, options) {
//     const { codeFontFamily, codeFontSize, backgroundCode, dpiScale } = options;
//     const bgColor = this.findColorByCode(backgroundCode) || { code: backgroundCode, hex: '#FFFFFF', rgb: [255, 255, 255], name: '白色' };

//     ctx.strokeStyle = '#000000';
//     ctx.lineWidth = 1 * dpiScale;

//     for (let x = 0; x <= width; x++) {
//       const xPos = numberAreaWidth + x * cellSize;
//       ctx.beginPath();
//       ctx.moveTo(xPos, numberAreaHeight);
//       ctx.lineTo(xPos, numberAreaHeight + height * cellSize);
//       ctx.stroke();
//     }

//     for (let y = 0; y <= height; y++) {
//       const yPos = numberAreaHeight + y * cellSize;
//       ctx.beginPath();
//       ctx.moveTo(numberAreaWidth, yPos);
//       ctx.lineTo(numberAreaWidth + width * cellSize, yPos);
//       ctx.stroke();
//     }

//     ctx.font = `${codeFontSize}px ${codeFontFamily}`;
//     ctx.textBaseline = 'middle';
//     ctx.textAlign = 'center';

//     for (let y = 0; y < height; y++) {
//       if (!beadMap[y]) continue;
//       for (let x = 0; x < width; x++) {
//         const cellX = numberAreaWidth + x * cellSize;
//         const cellY = numberAreaHeight + y * cellSize;
//         const centerX = cellX + cellSize / 2;
//         const centerY = cellY + cellSize / 2;

//         const bead = beadMap[y][x];
//         const color = bead || bgColor;

//         ctx.fillStyle = color.hex;
//         ctx.fillRect(cellX, cellY, cellSize, cellSize);

//         ctx.fillStyle = '#000000';
//         ctx.fillText(color.code || backgroundCode, centerX, centerY);
//       }
//     }
//   }

//   drawColorTable(ctx, usedColors, canvasWidth, gridBottom, dpiScale) {
//     const tablePadding = 20 * dpiScale;
//     const tableTop = gridBottom + tablePadding;
//     const itemHeight = 30 * dpiScale;
//     const itemSpacing = 15 * dpiScale;
//     const colorBlockSize = 20 * dpiScale;
//     const codeFontSize = 12 * dpiScale;

//     let currentX = tablePadding;
//     let currentY = tableTop;
//     const maxWidth = canvasWidth - tablePadding * 2;
//     let lineHeight = 0;

//     ctx.font = `${codeFontSize}px ${this.codeFontFamily}`;
//     ctx.textBaseline = 'middle';
//     ctx.textAlign = 'left';

//     ctx.fillStyle = '#000000';
//     ctx.font = `${14 * dpiScale}px ${this.codeFontFamily}`;
//     ctx.fillText('颜色对照表', currentX, currentY);
//     currentY += itemHeight + 10 * dpiScale;

//     ctx.font = `${codeFontSize}px ${this.codeFontFamily}`;
//     for (const colorItem of usedColors) {
//       const { color, count } = colorItem;
//       const itemWidth = colorBlockSize + 5 * dpiScale + ctx.measureText(color.code).width + 10 * dpiScale;

//       if (currentX + itemWidth > maxWidth && currentX > tablePadding) {
//         currentX = tablePadding;
//         currentY += lineHeight + itemSpacing;
//         lineHeight = 0;
//       }

//       ctx.fillStyle = color.hex;
//       ctx.fillRect(currentX, currentY - colorBlockSize / 2, colorBlockSize, colorBlockSize);
      
//       ctx.strokeStyle = '#000000';
//       ctx.lineWidth = 1 * dpiScale;
//       ctx.strokeRect(currentX, currentY - colorBlockSize / 2, colorBlockSize, colorBlockSize);

//       currentX += colorBlockSize + 5 * dpiScale;
//       ctx.fillStyle = '#000000';
//       ctx.fillText(color.code, currentX, currentY);
//       currentX += ctx.measureText(color.code).width + itemSpacing;

//       lineHeight = Math.max(lineHeight, itemHeight);
//     }
//   }

//   calculateColorTableHeight(usedColors, dpiScale) {
//     const tablePadding = 20 * dpiScale;
//     const titleHeight = 30 * dpiScale;
//     const itemHeight = 30 * dpiScale;
//     const itemSpacing = 15 * dpiScale;
//     const maxWidth = 1000 * dpiScale;

//     let currentX = tablePadding;
//     let lines = 1;
//     const itemWidth = 100 * dpiScale;

//     for (let i = 0; i < usedColors.length; i++) {
//       if (currentX + itemWidth > maxWidth && currentX > tablePadding) {
//         currentX = tablePadding;
//         lines++;
//       }
//       currentX += itemWidth;
//     }

//     return tablePadding + titleHeight + lines * (itemHeight + itemSpacing) + tablePadding;
//   }

//   calculateAutoFontSize(cellSize, dpiScale) {
//     return Math.floor(cellSize * 0.6);
//   }

//   setColorLibrary(library) {
//     this.library = library;
//   }

//   findColorByCode(code) {
//     if (!this.library) return null;
//     return this.library.find(c => c.code === code) || null;
//   }
// }


export class TemplateGenerator {
  constructor() {
    this.cellSize = 20; // 每格像素大小（96DPI）
    this.numberAreaWidth = 30; // 行编号区域宽度
    this.numberAreaHeight = 30; // 列编号区域高度
    this.codeFontSize = 10; // 代码字体大小（自适应）
    this.codeFontFamily = 'Consolas, "Courier New", Monaco, monospace'; // 等宽字体
    this.backgroundCode = 'H2'; // 默认背景色代码
  }

  generateTemplate(beadMap, options = {}) {
    const {
      width,
      height,
      backgroundCode = this.backgroundCode,
      codeFontFamily = this.codeFontFamily,
      codeFontSize = null,
      dpi = 96,
      usedColors = []
    } = options;

    const dpiScale = dpi / 96;
    const scaledCellSize = this.cellSize * dpiScale;
    const scaledNumberWidth = this.numberAreaWidth * dpiScale;
    const scaledNumberHeight = this.numberAreaHeight * dpiScale;

    const gridWidth = width * scaledCellSize;
    const gridHeight = height * scaledCellSize;
    const canvasWidth = scaledNumberWidth + gridWidth;
    const canvasHeight = scaledNumberHeight + gridHeight;

    // 预计算总数以便生成百分比
    const totalBeads = usedColors.reduce((sum, item) => sum + item.count, 0);

    const colorTableHeight = usedColors.length > 0 
      ? this.calculateColorTableHeight(usedColors, dpiScale, canvasWidth, totalBeads) 
      : 0;
    
    const totalHeight = canvasHeight + colorTableHeight;

    // --- 创建 Canvas ---
    const canvas = createOffscreenAwareCanvas(canvasWidth, totalHeight);
    const ctx = canvas.getContext('2d');

    // 填充白色背景
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasWidth, totalHeight);

    // 设置绘图参数
    ctx.imageSmoothingEnabled = false;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    // 1. 绘制标尺
    this.drawColumnNumbers(ctx, width, scaledCellSize, scaledNumberWidth, scaledNumberHeight, dpiScale);
    this.drawRowNumbers(ctx, height, scaledCellSize, scaledNumberWidth, scaledNumberHeight, dpiScale);

    // 2. 绘制网格主体
    const actualCodeFontSize = codeFontSize || this.calculateAutoFontSize(scaledCellSize, dpiScale);
    this.drawGridWithCodes(ctx, beadMap, width, height, scaledCellSize, scaledNumberWidth, scaledNumberHeight, {
      codeFontFamily,
      codeFontSize: actualCodeFontSize,
      backgroundCode,
      dpiScale
    });

    // 3. 绘制增强版色卡表
    if (usedColors.length > 0) {
      this.drawColorTable(ctx, usedColors, canvasWidth, canvasHeight, dpiScale, totalBeads);
    }

    // Worker 兼容返回
    if (typeof document === 'undefined' && canvas instanceof OffscreenCanvas) {
      return canvas.transferToImageBitmap();
    }

    return canvas;
  }

  /**
   * 绘制底部色卡对照表 (增强版：包含颗数和百分比)
   */
  drawColorTable(ctx, usedColors, canvasWidth, gridBottom, dpiScale, totalBeads) {
    const tablePadding = 20 * dpiScale;
    const tableTop = gridBottom + tablePadding;
    const itemHeight = 30 * dpiScale;
    const itemSpacing = 25 * dpiScale; // 增加间距
    const colorBlockSize = 20 * dpiScale;
    const fontSize = 12 * dpiScale;

    let currentX = tablePadding;
    let currentY = tableTop;
    const maxWidth = canvasWidth - tablePadding * 2;
    
    // 绘制标题
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${14 * dpiScale}px ${this.codeFontFamily}`;
    ctx.textAlign = 'left';
    ctx.fillText(`颜色对照表 (共 ${totalBeads} 颗)`, currentX, currentY);
    currentY += itemHeight + 10 * dpiScale;

    ctx.font = `${fontSize}px ${this.codeFontFamily}`;

    for (const colorItem of usedColors) {
      const { color, count } = colorItem;
      
      // 计算百分比
      const percentage = totalBeads > 0 ? ((count / totalBeads) * 100).toFixed(1) : '0.0';
      
      // 构建显示文本：色号 数量 (占比)
      // 例如: "A1 150颗 (12.5%)"
      const text = `${color.code}  ${count}颗 (${percentage}%)`;
      
      // 计算当前项目的总宽度 (色块 + 间距 + 文字)
      const textWidth = ctx.measureText(text).width;
      const itemWidth = colorBlockSize + 8 * dpiScale + textWidth;

      // 换行判断
      if (currentX + itemWidth > maxWidth && currentX > tablePadding) {
        currentX = tablePadding;
        currentY += itemHeight + 5 * dpiScale;
      }

      // 1. 绘制色块
      ctx.fillStyle = color.hex;
      ctx.fillRect(currentX, currentY - colorBlockSize / 2, colorBlockSize, colorBlockSize);
      
      // 色块描边
      ctx.strokeStyle = '#666666';
      ctx.lineWidth = 1 * dpiScale;
      ctx.strokeRect(currentX, currentY - colorBlockSize / 2, colorBlockSize, colorBlockSize);

      // 2. 绘制文字
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      // 文字位置：色块右侧
      ctx.fillText(text, currentX + colorBlockSize + 8 * dpiScale, currentY);

      // 移动 X 坐标到下一个项目位置
      currentX += itemWidth + itemSpacing;
    }
  }

  /**
   * 计算底部高度 (增强版：考虑更宽的文字)
   */
  calculateColorTableHeight(usedColors, dpiScale, canvasWidth, totalBeads) {
    const tablePadding = 20 * dpiScale;
    const titleHeight = 30 * dpiScale;
    const itemHeight = 30 * dpiScale;
    const itemSpacing = 25 * dpiScale;
    const colorBlockSize = 20 * dpiScale;
    const maxWidth = canvasWidth - tablePadding * 2;

    // 创建一个临时 Context 用于测量文字宽度 (OffscreenCanvas 既然是计算逻辑，不需要真实绘图)
    // 简单估算：每个字符宽约 8*scale (Consolas)
    // "A1 999颗 (100.0%)" 约 16个字符
    // 为了性能，这里使用平均估算，而不是真实 measureText
    const avgCharWidth = 7 * dpiScale; 
    
    let currentX = tablePadding;
    let lines = 1;

    for (const item of usedColors) {
      // 估算文字长度
      const textLength = item.color.code.length + String(item.count).length + 10; // 粗略加上 "颗 (xx.x%)"
      const itemWidth = colorBlockSize + 8 * dpiScale + (textLength * avgCharWidth);

      if (currentX + itemWidth > maxWidth && currentX > tablePadding) {
        currentX = tablePadding;
        lines++;
      }
      currentX += itemWidth + itemSpacing;
    }

    return tablePadding + titleHeight + 10 * dpiScale + lines * (itemHeight + 5 * dpiScale) + tablePadding;
  }

  // ... 保持原有的 drawColumnNumbers, drawRowNumbers, drawGridWithCodes, setColorLibrary, findColorByCode, calculateAutoFontSize 不变 ...
  
  drawColumnNumbers(ctx, width, cellSize, numberAreaWidth, numberAreaHeight, dpiScale) {
    ctx.fillStyle = '#000000';
    ctx.font = `${12 * dpiScale}px ${this.codeFontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (let x = 0; x < width; x++) {
      const centerX = numberAreaWidth + x * cellSize + cellSize / 2;
      const centerY = numberAreaHeight / 2;
      ctx.fillText(String(x + 1), centerX, centerY);
    }
  }

  drawRowNumbers(ctx, height, cellSize, numberAreaWidth, numberAreaHeight, dpiScale) {
    ctx.fillStyle = '#000000';
    ctx.font = `${12 * dpiScale}px ${this.codeFontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (let y = 0; y < height; y++) {
      const centerX = numberAreaWidth / 2;
      const centerY = numberAreaHeight + y * cellSize + cellSize / 2;
      ctx.fillText(String(y + 1), centerX, centerY);
    }
  }

  drawGridWithCodes(ctx, beadMap, width, height, cellSize, numberAreaWidth, numberAreaHeight, options) {
    const { codeFontFamily, codeFontSize, backgroundCode, dpiScale } = options;
    const bgColor = this.findColorByCode(backgroundCode) || { code: backgroundCode, hex: '#FFFFFF' };

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1 * dpiScale;

    // 绘制网格线
    ctx.beginPath();
    for (let x = 0; x <= width; x++) {
      const xPos = numberAreaWidth + x * cellSize;
      ctx.moveTo(xPos, numberAreaHeight);
      ctx.lineTo(xPos, numberAreaHeight + height * cellSize);
    }
    for (let y = 0; y <= height; y++) {
      const yPos = numberAreaHeight + y * cellSize;
      ctx.moveTo(numberAreaWidth, yPos);
      ctx.lineTo(numberAreaWidth + width * cellSize, yPos);
    }
    ctx.stroke();

    // 填充内容
    ctx.font = `${codeFontSize}px ${codeFontFamily}`;
    ctx.textAlign = 'center';
    
    for (let y = 0; y < height; y++) {
      if (!beadMap[y]) continue;
      for (let x = 0; x < width; x++) {
        const bead = beadMap[y][x];
        // 如果是背景色且不显示背景色块(可视需求调整)，这里假设都填充
        const color = bead || bgColor;
        
        const cellX = numberAreaWidth + x * cellSize;
        const cellY = numberAreaHeight + y * cellSize;
        
        ctx.fillStyle = color.hex;
        ctx.fillRect(cellX + 1, cellY + 1, cellSize - 2, cellSize - 2); // 留出网格线

        // 智能反色：深色背景用白字，浅色背景用黑字
        // 简单判断：RGB平均值 < 128 为深色
        const rgb = this.hexToRgb(color.hex);
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        ctx.fillStyle = brightness > 128 ? '#000000' : '#FFFFFF';
        
        ctx.fillText(color.code || '', cellX + cellSize / 2, cellY + cellSize / 2);
      }
    }
  }

  // 简单的 hex 转 rgb 辅助，用于计算文字反色
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [255, 255, 255];
  }

  calculateAutoFontSize(cellSize, dpiScale) {
    return Math.floor(cellSize * 0.5); // 稍微调小一点，防止溢出
  }

  setColorLibrary(library) {
    this.library = library;
  }

  findColorByCode(code) {
    if (!this.library) return null;
    return this.library.find(c => c.code === code) || null;
  }
}