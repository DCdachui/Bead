<template>
  <div class="controls">
    <div class="panel-header">
      <span> 转换参数</span>
      <div class="library-selector">
        <select v-model="localSelectedLibrary" @change="handleLibraryChange" class="library-select">
          <option value="24色">24色（新手）</option>
          <option value="48色">48色（扩展）</option>
          <option value="72色">72色（完整）</option>
          <option value="221色">221色（专业）</option>
          <option value="Mard/Coco">Mard/Coco</option>
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
    <ImageFormatter 
      v-if="hasImage"
      v-model:mode="imageFormatMode"
      v-model:crop-position="imageCropPosition"
      :original-width="originalImageWidth"
      :original-height="originalImageHeight"
      :target-width="formatTargetWidth"
      :target-height="formatTargetHeight"
      @format-changed="handleFormatChange"
    />
    
    <!-- 珠子数量控制 -->
    <div class="slider-container">
      <div class="slider-label">
        <span>珠子数量（宽度）</span>
        <span>{{ beadCount }} 格</span>
      </div>
      <input 
        type="range" 
        v-model.number="localBeadCount" 
        :min="CONFIG.MIN_BEAD_COUNT" 
        :max="CONFIG.MAX_BEAD_COUNT" 
        @input="handleBeadSliderInput"
        class="slider"
      >
    </div>

    <!-- 常用分辨率预设 -->
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
          v-for="size in CONFIG.RESOLUTION_PRESETS" 
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

    <!-- 选项开关 -->
    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="enhance-edges"
        v-model="localEnhanceEdges" 
        @change="handleOptionChange"
      >
      <label for="enhance-edges">启用边缘增强</label>
    </div>

    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="pixel-style"
        v-model="localEnablePixelStyle" 
        @change="handleOptionChange"
      >
      <label for="pixel-style" title="平滑颜色，减少杂色">先转像素风(卡通化)</label>
    </div>

    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="clean-bg"
        v-model="localCleanBackground" 
        @change="handleOptionChange"
      >
      <label for="clean-bg">净化背景（去条纹/统一色）</label>
    </div>

    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="preserve-details"
        v-model="localPreserveDetails" 
        @change="handleOptionChange"
      >
      <label for="preserve-details">小尺寸细节增强</label>
    </div>

    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="color-clustering"
        v-model="localEnableColorClustering" 
        @change="handleOptionChange"
      >
      <label for="color-clustering" title="使用K-means算法减少颜色种类，降低制作难度">智能颜色聚类</label>
    </div>

    <div class="checkbox-container">
      <input 
        type="checkbox" 
        id="generate-template"
        v-model="localGenerateTemplate" 
        @change="handleOptionChange"
      >
      <label for="generate-template">生成模板（带行列编号和代码）</label>
    </div>

    <!-- 模板参数 -->
    <TemplateOptions 
      v-if="localGenerateTemplate"
      v-model:background-code="backgroundCode"
      v-model:template-width="templateWidth"
      v-model:template-height="templateHeight"
      @change="handleOptionChange"
    />

    <!-- 转换按钮 -->
    <button 
      v-if="!isConverting" 
      @click="handleConvert"
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
      • {{ TIPS.BEAD_COUNT }}<br>
      • {{ TIPS.EDGE_ENHANCE }}<br>
      • {{ TIPS.IMAGE_QUALITY }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { CONFIG, TIPS } from '../utils/constants.js';
import ImageFormatter from './ImageFormatter.vue';
import TemplateOptions from './TemplateOptions.vue';

const props = defineProps({
  beadCount: Number,
  selectedLibrary: String,
  libName: String,
  enhanceEdges: Boolean,
  enablePixelStyle: Boolean,
  cleanBackground: Boolean,
  preserveDetails: Boolean,
  enableColorClustering: Boolean,
  generateTemplate: Boolean,
  backgroundCode: String,
  templateWidth: Number,
  templateHeight: Number,
  imageFormatMode: String,
  imageCropPosition: String,
  originalImageWidth: Number,
  originalImageHeight: Number,
  formatTargetWidth: Number,
  formatTargetHeight: Number,
  isConverting: Boolean,
  progress: Number,
  hasImage: Boolean,
  resolutionPreset: [String, Number],
});

const emit = defineEmits([
  'update:beadCount',
  'update:selectedLibrary',
  'update:enhanceEdges',
  'update:enablePixelStyle',
  'update:cleanBackground',
  'update:preserveDetails',
  'update:enableColorClustering',
  'update:generateTemplate',
  'update:backgroundCode',
  'update:templateWidth',
  'update:templateHeight',
  'update:imageFormatMode',
  'update:imageCropPosition',
  'update:resolutionPreset',
  'library-changed',
  'json-imported',
  'convert',
  'format-changed',
]);

const jsonInputRef = ref(null);

// 本地状态（使用 v-model）
const localBeadCount = computed({
  get: () => props.beadCount,
  set: (val) => emit('update:beadCount', val)
});

const localSelectedLibrary = computed({
  get: () => props.selectedLibrary,
  set: (val) => emit('update:selectedLibrary', val)
});

const localEnhanceEdges = computed({
  get: () => props.enhanceEdges,
  set: (val) => emit('update:enhanceEdges', val)
});

const localEnablePixelStyle = computed({
  get: () => props.enablePixelStyle,
  set: (val) => emit('update:enablePixelStyle', val)
});

const localCleanBackground = computed({
  get: () => props.cleanBackground,
  set: (val) => emit('update:cleanBackground', val)
});

const localPreserveDetails = computed({
  get: () => props.preserveDetails,
  set: (val) => emit('update:preserveDetails', val)
});

const localEnableColorClustering = computed({
  get: () => props.enableColorClustering,
  set: (val) => emit('update:enableColorClustering', val)
});

const localGenerateTemplate = computed({
  get: () => props.generateTemplate,
  set: (val) => emit('update:generateTemplate', val)
});

const handleLibraryChange = () => {
  emit('library-changed', localSelectedLibrary.value);
};

const handleJsonImport = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      emit('json-imported', data);
    } catch (err) {
      console.error('JSON解析错误:', err);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
};

const handleBeadSliderInput = () => {
  emit('update:resolutionPreset', 'custom');
  // 自动计算高度：宽度变化时，高度按比例自动更新
  // 这里触发convert事件，父组件会根据新的宽度自动计算高度
  emit('convert');
};

const resetResolutionPreset = () => {
  emit('update:resolutionPreset', 'auto');
  emit('convert');
};

const applyResolutionPreset = (size) => {
  emit('update:resolutionPreset', size);
  emit('update:beadCount', size);
  emit('convert');
};

const handleOptionChange = () => {
  emit('convert');
};

const handleFormatChange = () => {
  emit('format-changed');
};

const handleConvert = () => {
  emit('convert');
};
</script>

<style scoped>
/* 复用原有样式，这里省略，实际使用时从 BeadConverter.vue 复制相关样式 */
.controls {
  background: var(--bg-panel);
  padding: 24px;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-sm);
}

.panel-header {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-container {
  margin: 20px 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-body);
  outline: none;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
}

.btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin-top: 20px;
  font-weight: 600;
}

.tips-box {
  margin-top: 20px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>

