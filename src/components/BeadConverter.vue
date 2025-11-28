<template>
  <div class="converter">
    <!-- 顶部导航 -->
    <nav class="navbar">
      <div class="brand">
        <span class="logo-icon">🎨</span>
        <span class="logo-text">拼豆转换器</span>
      </div>
      <button class="icon-btn theme-toggle" @click="toggleTheme" :title="isDark ? '切换亮色' : '切换暗色'">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </nav>
    
    <!-- AI生成模态框 -->
    <div v-if="showAIModal" class="ai-modal-overlay" @click.self="showAIModal = false">
      <div class="ai-modal">
        <div class="ai-modal-header">
          <h3> AI生成拼豆图</h3>
          <button class="close-btn" @click="showAIModal = false">×</button>
        </div>
        <div class="ai-modal-body">
          <div class="ai-input-section">
            <label>描述你自己的想法：</label>
            <textarea 
              v-model="aiPrompt" 
              placeholder="例如：想把图片调成暖色且突出主体；将构图换成像素风；只微调背景光效等。"
              class="ai-textarea"
              rows="3"
            ></textarea>
          </div>
          
          <div class="ai-style-section">
            <label>生成风格：</label>
            <div class="style-options">
              <button 
                v-for="style in aiStyles" 
                :key="style.key"
                @click="selectedAIStyle = style.key"
                :class="['style-btn', { active: selectedAIStyle === style.key }]"
              >
                {{ style.name }}
              </button>
            </div>
          </div>

          <div class="ai-settings-section">
            <div class="setting-row">
              <label>API Key:</label>
              <input 
                v-model="aiApiKey" 
                type="password" 
                placeholder="输入你的API Key"
                class="api-key-input"
              >
            </div>
            <small class="hint-text">还没有对接AI API，暂时无法使用。</small>
          </div>

          <div class="ai-actions">
            <button 
              @click="generateAIImage" 
              :disabled="!aiApiKey || !aiPrompt || isAIGenerating"
              class="ai-generate-btn"
            >
              {{ isAIGenerating ? '生成中...' : '✨ 生成图片' }}
            </button>
          </div>

          <div v-if="aiError" class="ai-error">
            {{ aiError }}
          </div>
        </div>
      </div>
    </div>

    <div class="main-layout">
      <!-- 左侧：控制面板 -->
      <div class="left-panel">
        <!-- 上传区域 -->
        <div class="upload-section">
          <div class="upload-tabs">
            <button class="tab-btn active" @click="handleAIGenerateClick">
               AI辅助
            </button>
          </div>
         

          <div class="upload-area" @click="fileInputRef?.click()">
            <input 
              ref="fileInputRef"
              type="file" 
              accept="image/*" 
              @change="handleFile" 
              style="display: none;"
            >
            <div v-if="!originalImage" class="upload-placeholder">
              <div class="upload-icon">📷</div>
              <div><strong>点击上传图片</strong></div>
              <div style="color: #666; font-size: 0.9rem; margin-top: 8px;">支持 JPG / PNG / WebP</div>
            </div>
            <div v-else class="preview-container">
              <img :src="originalImage" alt="原始图" class="preview-img">
              <div class="preview-overlay">
                <span>点击更换图片</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 参数控制 -->
        <div class="controls" v-if="originalImage">
          <div class="panel-header">
            <span> 转换参数</span>
            <!-- 色库选择 -->
            <div class="library-selector">
              <select v-model="selectedLibrary" @change="handleLibraryChange" class="library-select">
                <option value="24色">24色（新手）</option>
                <option value="48色">48色（扩展）</option>
                <option value="72色">72色（完整）</option>
                <option value="221色">221色（专业）</option>
                <option value="Mard/Coco">Mard/Coco</option>
                <option value="全色系">全色系</option>
              </select>
            </div>
          </div>
          <!-- JSON导入入口 -->
          <div class="import-section">
            <div class="import-box" @click="jsonInputRef?.click()">
              <span class="import-icon">📂</span>
              <span class="import-text">{{ libName }}</span>
            </div>
            <input type="file" ref="jsonInputRef" hidden accept=".json" @change="handleJsonImport">
          </div>
          <!-- 图片格式化选项 -->
          <div class="format-section" v-if="originalImage">
            <div class="slider-label" style="margin-bottom: 10px;">
              <span> 图片格式化</span>
              <button 
                class="format-toggle-btn" 
                @click="showImageFormatter = !showImageFormatter"
                :class="{ active: showImageFormatter }"
              >
                {{ showImageFormatter ? '收起' : '展开' }}
              </button>
            </div>
            
            <div v-if="showImageFormatter" class="format-options">
              <div class="format-info">
                <small>原始尺寸: {{ originalImageWidth }} × {{ originalImageHeight }} 像素</small><br>
                <small>目标尺寸: {{ formatTargetWidth }} × {{ formatTargetHeight }} 像素</small>
              </div>

              <div class="slider-container">
                <div class="slider-label">
                  <span>格式化模式</span>
                </div>
                <select v-model="imageFormatMode" @change="applyImageFormat" class="format-select">
                  <option value="auto">自动适配（保持比例，居中）</option>
                  <option value="crop">裁剪（保持比例，裁剪多余）</option>
                  <option value="fill">填充（保持比例，添加背景）</option>
                  <option value="stretch">拉伸（强制匹配尺寸）</option>
                  <option value="square">裁剪为正方形</option>
                </select>
              </div>

              <div v-if="imageFormatMode === 'crop' || imageFormatMode === 'square'" class="slider-container">
                <div class="slider-label">
                  <span>裁剪位置</span>
                </div>
                <select v-model="imageCropPosition" @change="applyImageFormat" class="format-select">
                  <option value="center">居中</option>
                  <option value="top">顶部</option>
                  <option value="bottom">底部</option>
                  <option value="left">左侧</option>
                  <option value="right">右侧</option>
                </select>
              </div>

              <div class="format-tips">
                <strong>提示：</strong><br>
                • <strong>自动适配</strong>：保持原图比例，适合大多数情况<br>
                • <strong>裁剪</strong>：适合需要精确尺寸的场景<br>
                • <strong>填充</strong>：保持原图完整，添加背景色<br>
                • <strong>拉伸</strong>：可能造成变形，谨慎使用<br>
                • <strong>正方形</strong>：适合制作方形拼豆图案
              </div>
            </div>
          </div>
          
          <div class="slider-container">
            <div class="slider-label">
              <span>珠子数量（宽度）</span>
              <span>{{ resolvedWidth }} × {{ expectedHeight }} 格</span>
            </div>
            <input 
              type="range" 
              v-model.number="beadCount" 
              :min="MIN_BEAD_COUNT" 
              :max="MAX_BEAD_COUNT" 
              @input="handleBeadSliderInput"
              class="slider"
            >
          </div>

          <div class="resolution-section">
            <div class="slider-label">
              <span>常用方形分辨率</span>
              <button 
                v-if="resolutionPreset !== 'auto'"
                class="resolution-reset"
                @click="resetResolutionPreset"
              >
                恢复自动
              </button>
            </div>
            <div class="resolution-pills">
              <button 
                v-for="size in resolutionOptions" 
                :key="size"
                type="button"
                class="resolution-pill"
                :class="{ active: resolutionPreset === size }"
                @click="applyResolutionPreset(size)"
              >
                <strong>{{ size }} × {{ size }}</strong>
                <small>方形</small>
              </button>
            </div>
          </div>

          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="enhance-edges"
              v-model="enhanceEdges" 
              @change="debouncedConvert"
            >
            <label for="enhance-edges">启用边缘增强</label>
          </div>

          <!-- 像素风格开关 -->
          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="pixel-style"
              v-model="enablePixelStyle" 
              @change="debouncedConvert"
            >
            <label for="pixel-style" title="平滑颜色，减少杂色">先转像素风(卡通化)</label>
          </div>

          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="clean-bg"
              v-model="cleanBackground" 
              @change="debouncedConvert"
            >
            <label for="clean-bg">净化背景（去条纹/统一色）</label>
          </div>

          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="preserve-details"
              v-model="preserveDetails" 
              @change="debouncedConvert"
            >
            <label for="preserve-details">小尺寸细节增强</label>
          </div>

          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="color-clustering"
              v-model="enableColorClustering" 
              @change="debouncedConvert"
            >
            <label for="color-clustering">智能颜色聚类（约 {{ clusterTargetColors }} 色）</label>
          </div>

          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="generate-template"
              v-model="generateTemplate" 
              @change="debouncedConvert"
            >
            <label for="generate-template">生成模板（带行列编号和代码）</label>
          </div>

          <!-- 模板参数 -->
          <div v-if="generateTemplate" class="template-options">
            <div class="slider-container">
              <div class="slider-label">
                <span>背景色代码</span>
                <select v-model="backgroundCode" @change="debouncedConvert" class="code-select">
                  <option value="H2">H2 - 白色</option>
                  <option value="H1">H1 - 透明</option>
                  <option value="H7">H7 - 黑色</option>
                </select>
              </div>
            </div>

            <div class="slider-container">
              <div class="slider-label">
                <span>模板宽度（格数）</span>
                <input 
                  type="number" 
                  v-model.number="templateWidth" 
                  :min="MIN_BEAD_COUNT" 
                  :max="MAX_GRID_DIMENSION" 
                  placeholder="自动"
                  @input="debouncedConvert"
                  class="number-input"
                >
              </div>
            </div>

            <div class="slider-container">
              <div class="slider-label">
                <span>模板高度（格数）</span>
                <input 
                  type="number" 
                  v-model.number="templateHeight" 
                  min="1" 
                  :max="MAX_GRID_DIMENSION" 
                  placeholder="自动"
                  @input="debouncedConvert"
                  class="number-input"
                >
              </div>
            </div>
          </div>

          <button 
            v-if="!isConverting" 
            @click="startConvert"
            class="btn convert-btn"
          >
            🚀 开始转换
          </button>
          
          <div v-else class="loading">
            <div class="loading-spinner"></div>
            <p>正在转换中... {{ progress }}%</p>
          </div>

          <div class="tips-box">
            <strong>提示：</strong><br>
            • 珠子越多，细节越丰富，耗时越长<br>
            • 边缘增强适合卡通图案<br>
            • 建议使用清晰度较高的图片
          </div>
        </div>
      </div>

      <!-- 右侧：结果展示 -->
      <div class="right-panel">
        <div v-if="!hasResult" class="empty-result">
          <div class="empty-icon">✨</div>
          <p>转换结果将显示在这里</p>
          <small>上传图片并点击转换按钮开始</small>
        </div>

        <div v-else class="results">
          <!-- 效果预览 -->
          <div class="result-section">
            <div class="panel-header"> 效果预览</div>
            
            <!-- 视图切换 -->
            <div class="view-toggle" v-if="hasResult">
              <span :class="{ active: showOriginal }" @click="showOriginal = true">原图</span>
              <span :class="{ active: !showOriginal && !showTemplate }" @click="showOriginal = false; showTemplate = false">效果</span>
              <span v-if="generateTemplate" :class="{ active: showTemplate }" @click="showOriginal = false; showTemplate = true">模板</span>
            </div>

            <div 
              ref="previewContainerRef"
              class="image-preview-large" 
              @wheel.prevent="handleWheelZoom"
              @mousedown="handleMouseDown"
            >
              <div 
                class="zoom-inner" 
                :style="{ transform: 'scale(' + zoomScale.toFixed(2) + ')', transformOrigin: 'center center' }"
              >
                <img 
                  v-if="showOriginal && originalImage" 
                  :src="originalImage" 
                  alt="原始图片"
                  class="display-img"
                >
                <canvas 
                  ref="templateCanvasRef" 
                  v-show="showTemplate"
                  class="display-img"
                ></canvas>
                <canvas 
                  ref="resultCanvasRef" 
                  v-show="!showOriginal && !showTemplate"
                  class="display-img"
                ></canvas>
              </div>
            </div>
          </div>

          <!-- 色号统计 -->
          <div class="result-section" v-if="statistics">
            <div class="panel-header"> 色号统计</div>
            <div class="stats-info">
              共 <strong>{{ statistics.totalBeads }}</strong> 颗豆子 · <strong>{{ statistics.totalColors }}</strong> 种颜色
            </div>
            
            <div class="stats-grid">
              <div 
                v-for="stat in statistics.usedColors" 
                :key="stat.color.code"
                class="stat-card"
              >
                <div 
                  class="color-block" 
                  :style="{ backgroundColor: stat.color.hex }"
                ></div>
                <div class="stat-info">
                  <div class="stat-name">#{{ stat.color.code }} - {{ stat.color.name }}</div>
                  <div class="stat-detail">{{ stat.count }}颗 ({{ stat.percentage }}%)</div>
                </div>
              </div>
            </div>

            <div class="download-actions">
              <div class="download-header">
                <div>
                  <div class="download-title">📥 导出与分享</div>
                  <p class="download-subtitle">选择需要下载的格式</p>
                </div>
                <div class="grid-chip">
                  {{ statistics.dimensions.width }} × {{ statistics.dimensions.height }} 格
                </div>
              </div>
              <div class="download-hero">
               <button @click="downloadOneClick" class="action-card hero-btn" :disabled="isDownloading">
                 <span class="action-main">📥 一键下载</span>
                 <small>{{ isDownloading ? '正在生成模板...' : '自动生成200DPI模板' }}</small>
               </button>
             </div>
              <div class="download-grid">
                <button @click="downloadImage" class="action-card primary">
                  <span class="action-main">📥 下载效果图</span>
                  <small  >用于展示和分享</small>
                </button>

                <button 
                  v-if="generateTemplate" 
                  @click="downloadTemplate" 
                  class="action-card secondary"
                >
                  <span class="action-main">📥 下载模板</span>
                  <!-- （200DPI） -->
                  <small>默认打印清晰度</small>
                </button>

              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import BeadWorker from '../core/bead.worker.js?worker';
import { ALL_LIBRARIES } from '../core/bead-libraries.js';
import { ImageFormatter } from '../core/image-formatter.js';
import { AIGenerator } from '../core/ai-generator.js';

// --- 核心 Worker ---
const worker = ref(null);

const MIN_BEAD_COUNT = 20;
const MAX_BEAD_COUNT = 500;
const MAX_GRID_DIMENSION = 500;
const DEFAULT_TEMPLATE_DPI = 200;
const MIN_CLUSTER_COLORS = 8;
const MAX_CLUSTER_COLORS = 48;
const resolutionOptions = [32, 52, 64, 96, 128, 160, 200];

// --- Refs ---
const fileInputRef = ref(null);
const jsonInputRef = ref(null);
const previewContainerRef = ref(null);
const resultCanvasRef = ref(null);
const templateCanvasRef = ref(null);
const originalCanvasRef = ref(document.createElement('canvas'));

// --- 状态变量 ---
const imageFormatter = new ImageFormatter();
const aiGenerator = new AIGenerator();

// 修复：提前定义防抖定时器变量
let debounceTimer = null;

const originalImage = ref('');
const rawImageBitmap = ref(null); // 保存原始图片数据 (Image Element)
const imageAspectRatio = ref(1);
const originalImageWidth = ref(0);
const originalImageHeight = ref(0);

// 设置
const beadCount = ref(50);
const gridHeight = ref(null);
const resolutionPreset = ref('auto');
const autoGridFromImage = ref(true);
const enhanceEdges = ref(false);
const enablePixelStyle = ref(false); // 像素风开关
const cleanBackground = ref(false);
const preserveDetails = ref(true);
const selectedLibrary = ref('72色');
const libName = ref('72色完整色库');
const generateTemplate = ref(true);
const backgroundCode = ref('H2');
const templateWidth = ref(null);
const templateHeight = ref(null);
const codeFontFamily = ref('Consolas, "Courier New", Monaco, monospace');

// 结果变量 (已修复)
const resultCanvasUrl = ref('');
const templateCanvasUrl = ref('');
const showTemplate = ref(false);
const enableColorClustering = ref(false);
const isDownloading = ref(false);

// 图片格式化
const showImageFormatter = ref(false);
const imageFormatMode = ref('auto');
const imageCropPosition = ref('center');

// UI 交互
const isConverting = ref(false);
const progress = ref(0);
const hasResult = ref(false);
const showOriginal = ref(false);
const statistics = ref(null);
const isDark = ref(false);
const zoomScale = ref(1);
const isPanning = ref(false);
const panState = ref({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

const showAIModal = ref(false);
const aiPrompt = ref('');
const selectedAIStyle = ref('perlerBead');
const aiApiKey = ref('');
const isAIGenerating = ref(false);
const aiError = ref('');
const aiStyles = computed(() => aiGenerator.getAvailableStyles());

// 本地库列表
const localLibrary = ref(ALL_LIBRARIES['72色'].colors);

// --- 计算属性 ---
const formatTargetWidth = computed(() => resolvedWidth.value * 20);
const formatTargetHeight = computed(() => expectedHeight.value * 20);
const resolvedWidth = computed(() => clampWidth(templateWidth.value ?? beadCount.value ?? MIN_BEAD_COUNT));

const expectedHeight = computed(() => {
  if (templateHeight.value) return clampHeight(templateHeight.value);
  if (gridHeight.value) return clampHeight(gridHeight.value);
  if (!imageAspectRatio.value) return clampHeight(resolvedWidth.value);
  const width = resolvedWidth.value;
  return clampHeight(width * imageAspectRatio.value);
});

const detailMode = computed(() => {
  if (!preserveDetails.value) return 'average';
  if (beadCount.value <= 45) return 'center';
  if (beadCount.value <= 70) return 'hybrid';
  return 'average';
});

const detailFactor = computed(() => {
  if (!preserveDetails.value) return 1;
  const width = resolvedWidth.value || beadCount.value || 50;
  if (width <= 32) return 5;
  if (width <= 56) return 5;
  if (width <= 80) return 4;
  if (width <= 120) return 3;
  return 1;
});

const fullSpectrumColorCount = computed(() => {
  const currentLibrary = ALL_LIBRARIES[selectedLibrary.value];
  if (currentLibrary?.colors?.length) {
    return Math.max(MIN_CLUSTER_COLORS, Math.min(96, currentLibrary.colors.length));
  }
  return MAX_CLUSTER_COLORS;
});

const clusterTargetColors = computed(() => fullSpectrumColorCount.value);

const clampWidth = (value) => {
  if (value == null || Number.isNaN(value)) return MIN_BEAD_COUNT;
  return Math.max(MIN_BEAD_COUNT, Math.min(MAX_BEAD_COUNT, Math.round(value)));
};

const clampHeight = (value) => {
  if (value == null || Number.isNaN(value)) return 1;
  return Math.max(1, Math.min(MAX_GRID_DIMENSION, Math.round(value)));
};

const computeAutoHeight = (width) => {
  if (!width || !imageAspectRatio.value) return clampHeight(width);
  const heightGuess = Math.round(width * imageAspectRatio.value);
  return clampHeight(heightGuess);
};

const calculateAdaptiveWidth = (imgWidth, imgHeight) => {
  if (!imgWidth || !imgHeight) return clampWidth(beadCount.value);
  const longest = Math.max(imgWidth, imgHeight);
  const megapixels = (imgWidth * imgHeight) / 1_000_000;
  const detailWeight = Math.min(1.6, Math.max(0.8, megapixels / 4));
  const pixelsPerBead = 16 * detailWeight;
  const recommended = longest / pixelsPerBead;
  return clampWidth(recommended);
};

watch(beadCount, (val) => {
  const clamped = clampWidth(val);
  if (clamped !== val) {
    beadCount.value = clamped;
    return;
  }
  if (!templateHeight.value) {
    gridHeight.value = computeAutoHeight(clamped);
  }
});

watch(templateWidth, (val) => {
  if (val == null) return;
  const clamped = clampWidth(val);
  if (clamped !== val) {
    templateWidth.value = clamped;
  }
  beadCount.value = clamped;
  debouncedConvert();
});

watch(templateHeight, (val) => {
  if (val == null) return;
  const clamped = clampHeight(val);
  if (clamped !== val) {
    templateHeight.value = clamped;
  }
  gridHeight.value = clamped;
  debouncedConvert();
});


// --- Worker 初始化 ---
const initWorker = () => {
  worker.value = new BeadWorker();
  worker.value.onmessage = (e) => {
    const { type, payload, error } = e.data;
    if (type === 'ERROR') {
      console.error('Worker Error:', error);
      alert('转换出错: ' + error);
      isConverting.value = false;
      return;
    }
    
    if (type === 'SUCCESS') {
      if (payload.displayBitmap) {
        drawBitmapToCanvas(resultCanvasRef.value, payload.displayBitmap);
        statistics.value = payload.statistics;
        if (payload.statistics?.dimensions?.height) {
          gridHeight.value = clampHeight(payload.statistics.dimensions.height);
        }
        hasResult.value = true;
        isConverting.value = false;
        progress.value = 150;
        showOriginal.value = false;
        showTemplate.value = false;
      }
      
      if (payload.templateBitmap) {
        drawBitmapToCanvas(templateCanvasRef.value, payload.templateBitmap);
      }
      
      if (payload.name) {
        console.log(`Worker 色库已切换: ${payload.name}`);
      }
    }
  };
  
  worker.value.postMessage({ 
    type: 'INIT_LIBRARY', 
    payload: { libraryName: selectedLibrary.value } 
  });
};

const drawBitmapToCanvas = (canvas, bitmap) => {
  if (!canvas || !bitmap) return;
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0);
  // 更新 URL 用于下载
  try {
    if (canvas === resultCanvasRef.value) resultCanvasUrl.value = canvas.toDataURL('image/png');
    if (canvas === templateCanvasRef.value) templateCanvasUrl.value = canvas.toDataURL('image/png');
  } catch(e) { console.warn(e); }
  bitmap.close();
};

// --- 生命周期 ---
onMounted(() => {
  initWorker();
  
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  const savedApiKey = localStorage.getItem('ai_api_key');
  if (savedApiKey) {
    aiApiKey.value = savedApiKey;
    aiGenerator.setApiKey(savedApiKey);
  }
  
  updateLocalLibraryColors();
});

onUnmounted(() => {
  if (worker.value) worker.value.terminate();
});

// --- 方法 ---

// 1. 文件处理 (修复版：使用FileReader + Image)
const handleFile = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const isImageMime = file.type && file.type.startsWith('image/');
  const isIconExt = /\.(ico|cur|icns|svg)$/i.test(file.name);
  if (!isImageMime && !isIconExt) {
    alert('请上传图片文件！');
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const result = ev.target?.result;
    if (!result) return;

    originalImage.value = result;
    
    const img = new Image();
    img.onload = () => {
      // 直接存储 Image 元素，避免 createImageBitmap 兼容性问题
      rawImageBitmap.value = img;
      
      originalImageWidth.value = img.width;
      originalImageHeight.value = img.height;
      imageAspectRatio.value = img.height / img.width;
      
      // 重置状态
      autoSetBeadCount(img.width, img.height);
      zoomScale.value = 1;
      showImageFormatter.value = true;
      hasResult.value = false;
      resultCanvasUrl.value = '';
      templateCanvasUrl.value = '';
      showOriginal.value = false;
      
      applyImageFormat();
      startConvert();
    };
    img.onerror = () => {
      alert('图片解析失败，请尝试其他格式');
    };
    img.src = result;
  };
  reader.readAsDataURL(file);
  e.target.value = '';
};

// 2. 格式化预览
const applyImageFormat = () => {
  if (!rawImageBitmap.value) return;

  const canvas = originalCanvasRef.value;
  // 限制预览分辨率
  const displayWidth = Math.min(800, rawImageBitmap.value.width);
  const scale = displayWidth / rawImageBitmap.value.width;
  const displayHeight = rawImageBitmap.value.height * scale;

  canvas.width = displayWidth;
  canvas.height = displayHeight;
  // 修复：添加 willReadFrequently 以提升性能并消除警告
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  
  // rawImageBitmap.value 是 img 元素，直接绘制
  ctx.drawImage(rawImageBitmap.value, 0, 0, displayWidth, displayHeight);

  const imageData = ctx.getImageData(0, 0, displayWidth, displayHeight);
  const width = resolvedWidth.value || MIN_BEAD_COUNT;
  const height = expectedHeight.value || computeAutoHeight(width);
  const targetSize = imageFormatter.calculateTargetSize(
    width, 
    height
  );

  imageFormatter.formatImage(imageData, {
    mode: imageFormatMode.value,
    targetWidth: imageFormatMode.value === 'auto' ? targetSize.width : displayWidth,
    targetHeight: imageFormatMode.value === 'auto' ? targetSize.height : displayHeight,
    cropPosition: imageCropPosition.value
  });

  debouncedConvert();
};

// 3. 转换逻辑
const startConvert = () => {
  if (!rawImageBitmap.value || !worker.value) return;
  const width = resolvedWidth.value;
  const height = expectedHeight.value;
  if (!width || !height) {
    alert('请先设置有效的宽高格数');
    return;
  }
  
  isConverting.value = true;
  progress.value = 10;

  // 准备数据：将原始图片绘制到 Canvas 获取 ImageData
  const canvas = originalCanvasRef.value;
  const processWidth = Math.min(1000, rawImageBitmap.value.width);
  const scale = processWidth / rawImageBitmap.value.width;
  canvas.width = processWidth;
  canvas.height = rawImageBitmap.value.height * scale;
  
  // 修复：添加 willReadFrequently
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(rawImageBitmap.value, 0, 0, canvas.width, canvas.height);
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // 格式化逻辑
  const targetSize = imageFormatter.calculateTargetSize(width, height);
  if (imageFormatMode.value !== 'auto') {
     imageData = imageFormatter.formatImage(imageData, {
        mode: imageFormatMode.value,
        targetWidth: targetSize.width,
        targetHeight: targetSize.height,
        fillColor: '#FFFFFF',
        cropPosition: imageCropPosition.value
     });
  } else {
     imageData = imageFormatter.formatImage(imageData, {
        mode: 'auto',
        targetWidth: targetSize.width,
        targetHeight: targetSize.height,
        fillColor: '#FFFFFF',
        cropPosition: 'center'
     });
  }
  
  // 预处理
  if (cleanBackground.value) {
     imageData = removeBackgroundStriping(imageData, '#FFFFFF');
  }
  if (enhanceEdges.value) {
     enhanceImageEdges(imageData);
  }

  const interval = setInterval(() => {
    progress.value = Math.min(progress.value + 10, 90);
  }, 200);

  worker.value.postMessage({
    type: 'CONVERT',
    payload: {
      imageData: imageData,
      beadCount: width,
      options: {
        generateTemplate: generateTemplate.value,
        backgroundCode: backgroundCode.value,
        templateWidth: templateWidth.value,
        templateHeight: templateHeight.value,
        targetHeight: height,
        detailFactor: detailFactor.value,
        detailMode: detailMode.value,
        pixelStyle: enablePixelStyle.value,
        templateDpi: DEFAULT_TEMPLATE_DPI,
        colorClustering: {
          enabled: enableColorClustering.value,
          targetColors: clusterTargetColors.value
        }
      }
    }
  });
};

// --- 辅助功能 ---

const autoSetBeadCount = (width, height) => {
  if (!width || !autoGridFromImage.value) return;
  const recommended = calculateAdaptiveWidth(width, height || width);
  beadCount.value = recommended;
  if (!templateHeight.value) {
    gridHeight.value = computeAutoHeight(recommended);
  }
  resolutionPreset.value = 'auto';
};

const debouncedConvert = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => startConvert(), 300);
};

const updateLocalLibraryColors = () => {
  if (ALL_LIBRARIES[selectedLibrary.value]) {
    localLibrary.value = ALL_LIBRARIES[selectedLibrary.value].colors;
  }
};

const handleLibraryChange = () => {
  updateLocalLibraryColors();
  if (worker.value) {
    worker.value.postMessage({ 
      type: 'INIT_LIBRARY', 
      payload: { libraryName: selectedLibrary.value } 
    });
  }
  if (ALL_LIBRARIES[selectedLibrary.value]) {
    libName.value = ALL_LIBRARIES[selectedLibrary.value].name;
  }
  if (originalImage.value) debouncedConvert();
};

const handleJsonImport = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.colors) {
        worker.value.postMessage({ type: 'UPDATE_LIBRARY', payload: { colors: data.colors } });
        localLibrary.value = data.colors;
        libName.value = data.name || '自定义色库';
        alert('🎨 色库已更新成功！');
        if (originalImage.value) debouncedConvert();
      }
    } catch (err) { alert('JSON格式错误'); }
  };
  reader.readAsText(file);
  e.target.value = '';
};

// --- 图像处理辅助 ---
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

const removeBackgroundStriping = (imageData, fillColor) => {
  const { data, width, height } = imageData;
  const cleaned = new Uint8ClampedArray(data);
  const fillRgb = hexToRgb(fillColor);
  
  for(let i=0; i<data.length; i+=4) {
    const r = data[i], g = data[i+1], b = data[i+2];
    if(r > 240 && g > 240 && b > 240) {
      cleaned[i] = fillRgb[0]; cleaned[i+1] = fillRgb[1]; cleaned[i+2] = fillRgb[2]; cleaned[i+3] = 255;
    } else {
      cleaned[i] = r; cleaned[i+1] = g; cleaned[i+2] = b; cleaned[i+3] = data[i+3];
    }
  }
  return new ImageData(cleaned, width, height);
};

const enhanceImageEdges = (imageData) => {
  const { data, width, height } = imageData;
  const output = new Uint8ClampedArray(data);
  const sx = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
  const sy = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let gxR = 0, gyR = 0;
      for (let ky = -1; ky <= 1; ky++) {
        for (let kx = -1; kx <= 1; kx++) {
          const idx = ((y + ky) * width + (x + kx)) * 4;
          const val = (data[idx] + data[idx+1] + data[idx+2]) / 3;
          gxR += val * sx[ky+1][kx+1];
          gyR += val * sy[ky+1][kx+1];
        }
      }
      const mag = Math.sqrt(gxR*gxR + gyR*gyR);
      const idx = (y * width + x) * 4;
      
      if (mag > 50) { 
        output[idx] = Math.max(0, data[idx] - 30);
        output[idx+1] = Math.max(0, data[idx+1] - 30);
        output[idx+2] = Math.max(0, data[idx+2] - 30);
      } else {
        output[idx] = data[idx];
        output[idx+1] = data[idx+1];
        output[idx+2] = data[idx+2];
      }
      output[idx+3] = data[idx+3];
    }
  }
  imageData.data.set(output);
};

// 下载相关
// 1. 核心保存函数：支持添加背景色，防止图片泛白
const saveCanvasAsPng = (sourceCanvas, filename) => {
  if (!sourceCanvas) return;

  // 创建临时 Canvas
  const canvas = document.createElement('canvas');
  canvas.width = sourceCanvas.width;
  canvas.height = sourceCanvas.height;
  const ctx = canvas.getContext('2d');

  // 🎨 关键修复：填充深色背景 (模拟网页显示效果)
  // 如果不填这个，透明缝隙在白色背景下就会显得发白
  ctx.fillStyle = '#2d2d2d'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 绘制原图
  ctx.drawImage(sourceCanvas, 0, 0);

  // 导出并下载
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
};

const saveBitmapAsPng = (bitmap, filename) => {
  if (!bitmap) return;
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0);
  saveCanvasAsPng(canvas, filename);
  if (typeof bitmap.close === 'function') {
    bitmap.close();
  }
};

// 2. 下载效果图
const downloadImage = () => {
  // 修改点：这里必须传 resultCanvasRef.value (Canvas对象)，不能传 resultCanvasUrl (字符串)
  if (!resultCanvasRef.value) return alert('请先转换');
  const width = resolvedWidth.value;
  const height = expectedHeight.value || width;
  saveCanvasAsPng(resultCanvasRef.value, `拼豆效果图_${Date.now()}_${width}x${height}.png`);
};

// 3. 下载模板
const downloadTemplate = () => {
  if (!generateTemplate.value) return alert('请先勾选生成模板');
  if (!templateCanvasRef.value) return alert('请先转换并生成模板');
  const width = resolvedWidth.value;
  const height = expectedHeight.value || width;
  saveCanvasAsPng(templateCanvasRef.value, `拼豆模板_${Date.now()}_${width}x${height}_${DEFAULT_TEMPLATE_DPI}DPI.png`);
};

// ✨ 一键下载：同时下载效果图 + 模板
const downloadOneClick = async () => {
  if (!hasResult.value) return alert('请先完成转换');
  try {
    isDownloading.value = true;
    downloadImage();
    if (generateTemplate.value) {
      downloadTemplate();
    }
  } catch (err) {
    alert(err.message || '下载失败，请重试');
  } finally {
    isDownloading.value = false;
  }
};

// const saveCanvasAsPng = (dataUrl, filename) => {
//   const link = document.createElement('a');
//   link.download = filename;
//   link.href = dataUrl;
//   link.click();
// };


// const downloadImage = () => {
//   if (!resultCanvasUrl.value) return alert('请先转换');
//   const width = resolvedWidth.value;
//   const height = expectedHeight.value || width;
//   saveCanvasAsPng(resultCanvasUrl.value, `拼豆效果图_${Date.now()}_${width}x${height}.png`);
// };

// const downloadTemplate = () => {
//   if (!templateCanvasUrl.value) return alert('请先转换并生成模板');
//   const width = resolvedWidth.value;
//   const height = expectedHeight.value || width;
//   saveCanvasAsPng(templateCanvasUrl.value, `拼豆模板_${Date.now()}_${width}x${height}_96DPI.png`);
// };

// const downloadHighResTemplate = () => {
//   if (!statistics.value) return alert('请先生成模板');
//   alert('正在生成高清模板(演示)');
//   downloadTemplate();
// };

// const downloadUltraResTemplate = () => {
//   if (!statistics.value) return alert('请先生成模板');
//   alert('正在生成超清模板(演示)');
//   downloadTemplate();
// };

// AI 生成
const generateAIImage = async () => {
  if (!aiApiKey.value || !aiPrompt.value) return (aiError.value = '请输入Key和描述');
  isAIGenerating.value = true;
  aiError.value = '';
  try {
    localStorage.setItem('ai_api_key', aiApiKey.value);
    aiGenerator.setApiKey(aiApiKey.value);
    const result = await aiGenerator.generatePerlerBeadImage(
      aiPrompt.value,
      selectedAIStyle.value,
      { size: '1024x1024', quality: 'standard' }
    );
    originalImage.value = result.imageDataURL;
    
    // 同样使用 new Image 方式处理 AI 生成的图片数据
    const img = new Image();
    img.onload = () => {
        rawImageBitmap.value = img;
        originalImageWidth.value = result.imageData.width;
        originalImageHeight.value = result.imageData.height;
        imageAspectRatio.value = result.imageData.height / result.imageData.width;
        autoSetBeadCount(result.imageData.width, result.imageData.height);
        showAIModal.value = false;
        showImageFormatter.value = true;
        startConvert();
    };
    img.src = result.imageDataURL;

  } catch (err) {
    aiError.value = err.message;
  } finally {
    isAIGenerating.value = false;
  }
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const handleAIGenerateClick = () => {
  aiError.value = '';
  if (!originalImage.value) {
    return alert('请先上传图片，再使用AI辅助处理');
  }
  showAIModal.value = true;
};

// 交互处理
const handleBeadSliderInput = () => { 
  resolutionPreset.value = 'custom'; 
  if (templateWidth.value !== null) {
    templateWidth.value = null;
  }
  if (!templateHeight.value) {
    gridHeight.value = computeAutoHeight(beadCount.value);
  }
  debouncedConvert(); 
};
const resetResolutionPreset = () => { 
  resolutionPreset.value = 'auto'; 
  autoSetBeadCount(originalImageWidth.value, originalImageHeight.value); 
  debouncedConvert(); 
};
const applyResolutionPreset = (size) => { 
  const clamped = clampWidth(size);
  resolutionPreset.value = size; 
  templateWidth.value = clamped;
  templateHeight.value = clamped;
  beadCount.value = clamped; 
  gridHeight.value = clamped;
  debouncedConvert(); 
};

// 缩放
const handleWheelZoom = (e) => {
  if (!hasResult.value) return;
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  zoomScale.value = Math.max(0.2, Math.min(4, zoomScale.value + delta));
};
const handleMouseDown = (event) => {
  if (event.button !== 0) return;
  const container = previewContainerRef.value;
  if (!container) return;
  event.preventDefault();
  isPanning.value = true;
  container.classList.add('panning');
  panState.value = { x: event.clientX, y: event.clientY, scrollLeft: container.scrollLeft, scrollTop: container.scrollTop };
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};
const handleMouseMove = (event) => {
  if (!isPanning.value) return;
  if (event.buttons === 0) { handleMouseUp(); return; }
  const container = previewContainerRef.value;
  event.preventDefault();
  const dx = event.clientX - panState.value.x;
  const dy = event.clientY - panState.value.y;
  container.scrollLeft = panState.value.scrollLeft - dx;
  container.scrollTop = panState.value.scrollTop - dy;
};
const handleMouseUp = () => {
  if (!isPanning.value) return;
  isPanning.value = false;
  const container = previewContainerRef.value;
  if (container) container.classList.remove('panning');
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
};

</script>

<style scoped>
.converter {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  background: var(--bg-body);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .navbar {
  background: rgba(31, 41, 55, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand {
  font-weight: 800;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.logo-icon {
  font-size: 1.5rem;
}

.theme-toggle {
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.2s;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

[data-theme="dark"] .theme-toggle {
  border-color: rgba(255, 255, 255, 0.1);
}

.main-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 28px;
  align-items: start;
  padding: 24px;
  max-width: 1800px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-out;
}

@media (max-width: 1200px) {
  .main-layout {
    grid-template-columns: 350px 1fr;
    gap: 20px;
  padding: 20px;
  }
}

@media (max-width: 968px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .left-panel {
    position: static;
    max-height: none;
  }
  
  .left-panel {
    position: static;
    max-height: none;
  }
}

/* 左侧面板 */
.left-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: 8px;
}

.left-panel::-webkit-scrollbar {
  width: 6px;
}

.left-panel::-webkit-scrollbar-track {
  background: transparent;
}

.left-panel::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

[data-theme="dark"] .left-panel::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

.upload-area {
  border: 3px dashed var(--primary-color);
  border-radius: var(--border-radius);
  transition: all 0.3s;
  background: var(--bg-panel);
  cursor: pointer;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.upload-area:hover {
  border-color: var(--primary-active);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.upload-placeholder {
  text-align: center;
  padding: 40px 20px;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.upload-placeholder p {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 8px;
  font-weight: 600;
}

.upload-placeholder small {
  color: #666;
  font-size: 0.9rem;
}

.preview-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.preview-container:hover .preview-overlay {
  opacity: 1;
}

.preview-overlay span {
  color: white;
  font-weight: 500;
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.9);
  border-radius: 6px;
}

.controls {
  background: var(--bg-panel);
  padding: 24px;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeIn 0.5s ease-out;
}

.controls:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.controls:hover {
  box-shadow: var(--shadow-lg);
}

[data-theme="dark"] .controls {
  border-color: rgba(255, 255, 255, 0.1);
}

.panel-header {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-primary);
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative;
}

.panel-header::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--primary-color);
  border-radius: 2px;
}

.import-section {
  margin-bottom: 15px;
}

.import-box {
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--bg-body);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--primary-color);
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .import-box {
  border-color: rgba(255, 255, 255, 0.1);
}

.import-box:hover {
  background: var(--toggle-bg);
}

.import-icon {
  font-size: 0.9rem;
}

.library-selector {
  display: flex;
  align-items: center;
}

.library-select {
  background: var(--bg-body);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 0.85rem;
  color: var(--text-primary);
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}

[data-theme="dark"] .library-select {
  border-color: rgba(255, 255, 255, 0.1);
}

.library-select:hover {
  border-color: var(--primary-color);
}

.library-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.slider-container {
  margin: 20px 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}

.slider-label span:last-child {
  color: var(--primary-color);
  font-weight: 700;
  background: var(--bg-body);
  padding: 2px 6px;
  border-radius: 4px;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-body);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.resolution-section {
  margin-top: 10px;
}

.resolution-reset {
  border: none;
  background: transparent;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 0.85rem;
  text-decoration: underline;
}

.resolution-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.resolution-pill {
  flex: 1;
  min-width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  background: var(--bg-panel);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  transition: all 0.2s;
}

.resolution-pill strong {
  font-size: 0.95rem;
}

.resolution-pill small {
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.resolution-pill.active {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
}

.checkbox-container input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--primary-color);
}

.checkbox-container label {
  cursor: pointer;
  color: var(--text-primary);
  font-weight: 500;
}

.btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  margin-top: 20px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn:hover {
  background: var(--primary-active);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  background: var(--text-secondary);
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

.convert-btn {
  margin-top: 0;
}

.tips-box {
  margin-top: 20px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.tips-box strong {
  color: var(--primary-color);
}

.loading {
  text-align: center;
  padding: 20px;
  background: var(--bg-body);
  border-radius: 8px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: var(--primary-color);
  font-weight: 500;
  margin: 0;
}

/* 右侧面板 */
.right-panel {
  min-height: 500px;
}

.empty-result {
  background: var(--bg-panel);
  border-radius: var(--border-radius);
  padding: 80px 40px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .empty-result {
  border-color: rgba(255, 255, 255, 0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-result p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-weight: 500;
}

.empty-result small {
  color: var(--text-secondary);
  opacity: 0.7;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-section {
  background: var(--bg-panel);
  padding: 28px;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
}

.result-section:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

[data-theme="dark"] .result-section {
  border-color: rgba(255, 255, 255, 0.1);
}

/* 视图切换 */
.view-toggle {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 4px;
  display: inline-flex;
  gap: 4px;
  margin-bottom: 15px;
  backdrop-filter: blur(4px);
}

.view-toggle span {
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 12px;
  font-size: 0.8rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.view-toggle span.active {
  background: white;
  color: black;
  font-weight: 600;
}

.image-preview-large {
  background: var(--bg-body);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  overflow: auto;
  padding: 12px;
  cursor: grab;
}

.image-preview-large.panning {
  cursor: grabbing;
  user-select: none;
}

.zoom-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.image-preview-large:active {
  cursor: grabbing;
}

.display-img {
  width: 600px;
  height: 600px;
  object-fit: contain;
  border-radius: 4px;
}

.empty-preview {
  color: var(--text-secondary);
  font-size: 1.2rem;
}

.stats-info {
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.stats-info strong {
  color: var(--primary-color);
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 8px;
}

.stats-grid::-webkit-scrollbar {
  width: 6px;
}

.stats-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.stats-grid::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.stats-grid::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.stat-card {
  background: var(--bg-body);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

[data-theme="dark"] .stat-card {
  border-color: rgba(255, 255, 255, 0.1);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.color-block {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
  min-width: 0;
}

.stat-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.stat-detail {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.download-actions {
  margin-top: 24px;
  padding: 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(59, 130, 246, 0.12));
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
}

[data-theme="dark"] .download-actions {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.18));
  border-color: rgba(59, 130, 246, 0.4);
}

.download-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.download-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.download-subtitle {
  margin: 4px 0 0;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.grid-chip {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.8);
  color: #065f46;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

[data-theme="dark"] .grid-chip {
  background: rgba(15, 23, 42, 0.6);
  color: #d1fae5;
}

.download-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
}

.download-grid .action-card {
  align-items: center;
  text-align: center;
  justify-content: center;
}

.download-grid .action-card .action-main {
  font-size: 1.05rem;
}

.download-grid .action-card small {
  text-align: center;
}

.action-card {
  border: none;
  border-radius: 14px;
  padding: 16px;
  text-align: left;
  background: rgba(255,255,255,0.9);
  color: var(--text-primary);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.action-card small {
  font-weight: 500;
  color: rgba(15, 23, 42, 0.75);
}

[data-theme="dark"] .action-card small {
  color: rgba(248, 250, 252, 0.85);
}

.action-card.primary small,
.action-card.secondary small,
.action-card.accent small,
.action-card.ultra small {
  color: rgba(255, 255, 255, 0.92);
}

.action-card:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 16px 30px rgba(0,0,0,0.12);
}

.action-card.primary {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
}

.action-card.secondary {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
}

.action-card.accent {
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff;
}

.action-card.muted {
  background: rgba(255,255,255,0.6);
  color: var(--text-secondary);
  cursor: not-allowed;
  box-shadow: none;
}

.action-card.ultra {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: #fff;
}

.action-card:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 0 0 transparent;
}

[data-theme="dark"] .action-card:disabled {
  box-shadow: none;
}

[data-theme="dark"] .action-card {
  background: rgba(17, 24, 39, 0.8);
  box-shadow: 0 12px 25px rgba(0,0,0,0.4);
}

[data-theme="dark"] .action-card.muted {
  background: rgba(55, 65, 81, 0.6);
  color: rgba(243, 244, 246, 0.4);
}

.action-main {
  font-size: 1rem;
  display: block;
}

.download-footer {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.download-footer .action-card {
  flex: 1 1 260px;
}

.coming-soon-tip {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.template-options {
  margin-top: 15px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .template-options {
  border-color: rgba(255, 255, 255, 0.1);
}

.code-select {
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85rem;
  color: var(--text-primary);
  cursor: pointer;
  outline: none;
  min-width: 150px;
}

[data-theme="dark"] .code-select {
  border-color: rgba(255, 255, 255, 0.1);
}

.code-select:hover {
  border-color: var(--primary-color);
}

.number-input {
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85rem;
  color: var(--text-primary);
  width: 80px;
  outline: none;
}

[data-theme="dark"] .number-input {
  border-color: rgba(255, 255, 255, 0.1);
}

.number-input:hover,
.number-input:focus {
  border-color: var(--primary-color);
}

.format-section {
  margin-top: 15px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .format-section {
  border-color: rgba(255, 255, 255, 0.1);
}

.format-toggle-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.format-toggle-btn:hover {
  background: var(--primary-active);
}

.format-toggle-btn.active {
  background: var(--primary-active);
}

.format-options {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .format-options {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.format-info {
  margin-bottom: 15px;
  padding: 8px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.format-select {
  width: 100%;
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 0.85rem;
  color: var(--text-primary);
  cursor: pointer;
  outline: none;
  margin-top: 5px;
}

[data-theme="dark"] .format-select {
  border-color: rgba(255, 255, 255, 0.1);
}

.format-select:hover,
.format-select:focus {
  border-color: var(--primary-color);
}

.format-tips {
  margin-top: 15px;
  padding: 10px;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.format-tips strong {
  color: var(--accent-color);
}

@media (max-width: 1200px) {
  .main-layout {
    grid-template-columns: 350px 1fr;
  }
}

@media (max-width: 968px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
  
  .left-panel {
    position: static;
  }
  
  .preview-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 768px) {
  .converter {
    padding: 15px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .upload-area {
    min-height: 150px;
  }
  
  .upload-icon {
    font-size: 2rem;
  }
  
  .preview-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .image-preview {
    min-height: 200px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    max-height: none;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

/* AI生成相关样式 */
.ai-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.ai-modal {
  background: var(--bg-panel);
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ai-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .ai-modal-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.ai-modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
  color: var(--text-primary);
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--bg-body);
  color: var(--text-primary);
}

.ai-modal-body {
  padding: 24px;
}

.ai-input-section,
.ai-style-section,
.ai-settings-section {
  margin-bottom: 24px;
}

.ai-input-section label,
.ai-style-section label,
.ai-settings-section label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.ai-textarea {
    width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  background: var(--bg-body);
  color: var(--text-primary);
  transition: border-color 0.2s;
}

[data-theme="dark"] .ai-textarea {
  border-color: rgba(255, 255, 255, 0.1);
}

.ai-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.style-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.style-btn {
  padding: 10px 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: var(--bg-body);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  font-weight: 500;
}

[data-theme="dark"] .style-btn {
  border-color: rgba(255, 255, 255, 0.1);
}

.style-btn:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.style-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.api-key-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.9rem;
  background: var(--bg-body);
  color: var(--text-primary);
  transition: border-color 0.2s;
}

[data-theme="dark"] .api-key-input {
  border-color: rgba(255, 255, 255, 0.1);
}

.api-key-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.hint-text {
  display: block;
  margin-top: 6px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.ai-actions {
  margin-top: 24px;
}

.ai-generate-btn {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.ai-generate-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.ai-generate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.ai-error {
  margin-top: 16px;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #dc2626;
  font-size: 0.9rem;
}

.upload-section {
  background: var(--bg-panel);
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .upload-section {
  border-color: rgba(255, 255, 255, 0.1);
}

.upload-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  background: var(--bg-body);
  padding: 4px;
  border-radius: 8px;
}

.tab-btn {
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: #fff;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}

[data-theme="dark"] .tab-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 4px rgba(0, 0, 0, 0.25);
}

.tab-btn:hover {
  background: var(--bg-panel);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
}

.tab-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);
}



.download-hero {
  margin: 15px 0;
}

.hero-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  width: 100%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.hero-btn:hover {
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  transform: translateY(-3px);
}

.hero-btn .action-main {
  font-size: 1.1rem;
}

.hero-btn small {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
}
</style>