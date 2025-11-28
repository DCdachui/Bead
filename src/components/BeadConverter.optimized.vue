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
    
    <!-- 通知提示 -->
    <NotificationToast />
    
    <!-- AI生成模态框 -->
    <AIModal 
      v-if="showAIModal"
      v-model:show="showAIModal"
      @image-generated="handleAIImageGenerated"
    />

    <div class="main-layout">
      <!-- 左侧：控制面板 -->
      <div class="left-panel">
        <!-- 上传区域 -->
        <ImageUploader
          v-model="originalImage"
          @image-loaded="handleImageLoaded"
        />

        <!-- 参数控制 -->
        <ConversionControls
          v-if="originalImage"
          v-model:bead-count="conversionOptions.beadCount"
          v-model:selected-library="conversionOptions.selectedLibrary"
          v-model:enhance-edges="conversionOptions.enhanceEdges"
          v-model:enable-pixel-style="conversionOptions.enablePixelStyle"
          v-model:clean-background="conversionOptions.cleanBackground"
          v-model:preserve-details="conversionOptions.preserveDetails"
          v-model:generate-template="conversionOptions.generateTemplate"
          v-model:background-code="conversionOptions.backgroundCode"
          v-model:template-width="conversionOptions.templateWidth"
          v-model:template-height="conversionOptions.templateHeight"
          v-model:image-format-mode="imageFormatMode"
          v-model:image-crop-position="imageCropPosition"
          :lib-name="libName"
          :original-image-width="originalImageWidth"
          :original-image-height="originalImageHeight"
          :format-target-width="formatTargetWidth"
          :format-target-height="formatTargetHeight"
          :is-converting="isConverting"
          :progress="progress"
          :has-image="!!originalImage"
          :resolution-preset="resolutionPreset"
          @library-changed="handleLibraryChange"
          @json-imported="handleJsonImport"
          @convert="handleConvert"
          @format-changed="handleFormatChange"
        />
      </div>

      <!-- 右侧：结果展示 -->
      <div class="right-panel">
        <div v-if="!hasResult" class="empty-result">
          <div class="empty-icon">✨</div>
          <p>转换结果将显示在这里</p>
          <small>上传图片并点击转换按钮开始</small>
        </div>

        <ResultViewer
          v-else
          :has-result="hasResult"
          :original-image="originalImage"
          :statistics="statistics"
          :generate-template="conversionOptions.generateTemplate"
          :resolved-width="resolvedWidth"
          :expected-height="expectedHeight"
          :result-canvas-ref="resultCanvasRef"
          :template-canvas-ref="templateCanvasRef"
          @download="handleDownload"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useBeadConverter } from '../composables/useBeadConverter.js';
import { useImageProcessor } from '../composables/useImageProcessor.js';
import { ALL_LIBRARIES } from '../core/bead-libraries.js';
import { AIGenerator } from '../core/ai-generator.js';
import { CONFIG, STORAGE_KEYS } from '../utils/constants.js';
import { storage, notification } from '../utils/helpers.js';
import { downloadCanvasAsPng } from '../utils/helpers.js';

// 组件导入
import ImageUploader from './ImageUploader.vue';
import ConversionControls from './ConversionControls.vue';
import ResultViewer from './ResultViewer.vue';
import NotificationToast from './NotificationToast.vue';
import AIModal from './AIModal.vue';

// 使用组合式函数
const {
  isConverting,
  progress,
  hasResult,
  statistics,
  resultCanvas,
  templateCanvas,
  conversionOptions,
  initLibrary,
  updateLibrary,
  convert: convertImage,
  debouncedConvert,
} = useBeadConverter();

const {
  originalImage,
  originalImageWidth,
  originalImageHeight,
  imageFormatMode,
  imageCropPosition,
  loadImage,
  getFormattedImageData,
} = useImageProcessor();

// UI 状态
const isDark = ref(false);
const showAIModal = ref(false);
const libName = ref('72色完整色库');
const resolutionPreset = ref('auto');
const aiGenerator = new AIGenerator();

// Canvas refs
const resultCanvasRef = ref(null);
const templateCanvasRef = ref(null);

// 计算属性
const resolvedWidth = computed(() => conversionOptions.value.templateWidth || conversionOptions.value.beadCount);
const expectedHeight = computed(() => {
  if (conversionOptions.value.templateHeight) return conversionOptions.value.templateHeight;
  const aspectRatio = originalImageHeight.value / originalImageWidth.value;
  return Math.max(1, Math.round(resolvedWidth.value * aspectRatio));
});

const formatTargetWidth = computed(() => resolvedWidth.value * CONFIG.TEMPLATE.CELL_SIZE);
const formatTargetHeight = computed(() => expectedHeight.value * CONFIG.TEMPLATE.CELL_SIZE);

// 初始化
onMounted(async () => {
  // 加载主题
  const savedTheme = storage.get(STORAGE_KEYS.THEME);
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // 加载 API Key
  const savedApiKey = storage.get(STORAGE_KEYS.AI_API_KEY);
  if (savedApiKey) {
    aiGenerator.setApiKey(savedApiKey);
  }

  // 初始化色库
  await initLibrary(conversionOptions.value.selectedLibrary);
  if (ALL_LIBRARIES[conversionOptions.value.selectedLibrary]) {
    libName.value = ALL_LIBRARIES[conversionOptions.value.selectedLibrary].name;
  }
});

// 处理图片加载
const handleImageLoaded = async (imageInfo) => {
  await loadImage(imageInfo.url);
  // 自动开始转换
  handleConvert();
};

// 处理色库切换
const handleLibraryChange = async (libraryName) => {
  await initLibrary(libraryName);
  if (ALL_LIBRARIES[libraryName]) {
    libName.value = ALL_LIBRARIES[libraryName].name;
  }
  if (originalImage.value) {
    handleConvert();
  }
};

// 处理 JSON 导入
const handleJsonImport = async (data) => {
  if (data.colors) {
    await updateLibrary(data.colors);
    libName.value = data.name || '自定义色库';
    if (originalImage.value) {
      handleConvert();
    }
  }
};

// 处理格式化变更
const handleFormatChange = () => {
  if (originalImage.value) {
    handleConvert();
  }
};

// 处理转换
const handleConvert = async () => {
  if (!originalImage.value) return;

  try {
    const imageData = getFormattedImageData(resolvedWidth.value, expectedHeight.value);
    if (!imageData) {
      notification.warning('无法获取图片数据');
      return;
    }

    await convertImage(imageData, conversionOptions.value);
    
    // 更新 Canvas refs
    if (resultCanvas.value) {
      drawBitmapToCanvas(resultCanvasRef.value, resultCanvas.value);
    }
    if (templateCanvas.value) {
      drawBitmapToCanvas(templateCanvasRef.value, templateCanvas.value);
    }
  } catch (error) {
    console.error('转换失败:', error);
  }
};

// 绘制 Bitmap 到 Canvas
const drawBitmapToCanvas = (canvas, bitmap) => {
  if (!canvas || !bitmap) return;
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();
};

// 处理下载
const handleDownload = (type) => {
  const width = resolvedWidth.value;
  const height = expectedHeight.value || width;
  const timestamp = Date.now();

  switch (type) {
    case 'image':
      if (!resultCanvasRef.value) return;
      downloadCanvasAsPng(
        resultCanvasRef.value,
        `拼豆效果图_${timestamp}_${width}x${height}.png`
      );
      break;
    case 'template':
    case 'high-res':
    case 'ultra-res':
      if (!templateCanvasRef.value) return;
      const dpi = type === 'ultra-res' ? 800 : type === 'high-res' ? 600 : 96;
      downloadCanvasAsPng(
        templateCanvasRef.value,
        `拼豆模板_${timestamp}_${width}x${height}_${dpi}DPI.png`
      );
      break;
  }
};

// 处理 AI 图片生成
const handleAIImageGenerated = async (imageData) => {
  await loadImage(imageData.imageDataURL);
  showAIModal.value = false;
  handleConvert();
};

// 主题切换
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
  storage.set(STORAGE_KEYS.THEME, isDark.value ? 'dark' : 'light');
};
</script>

<style scoped>
/* 复用原有样式，这里只列出关键样式 */
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

.main-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 28px;
  align-items: start;
  padding: 24px;
  max-width: 1800px;
  margin: 0 auto;
}

.left-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.right-panel {
  min-height: 500px;
}

.empty-result {
  background: var(--bg-panel);
  border-radius: var(--border-radius);
  padding: 80px 40px;
  text-align: center;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 968px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}
</style>

