<template>
  <div class="results">
    <!-- 效果预览 -->
    <div class="result-section">
      <div class="panel-header"> 效果预览</div>
      
      <!-- 视图切换 -->
      <div class="view-toggle" v-if="hasResult">
        <span 
          :class="{ active: showOriginal }" 
          @click="showOriginal = true"
        >
          原图
        </span>
        <span 
          :class="{ active: !showOriginal && !showTemplate }" 
          @click="showOriginal = false; showTemplate = false"
        >
          效果
        </span>
        <span 
          v-if="generateTemplate" 
          :class="{ active: showTemplate }" 
          @click="showOriginal = false; showTemplate = true"
        >
          模板
        </span>
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

      <!-- 下载区域 -->
      <DownloadSection 
        :statistics="statistics"
        :generate-template="generateTemplate"
        :result-canvas-ref="resultCanvasRef"
        :template-canvas-ref="templateCanvasRef"
        :resolved-width="resolvedWidth"
        :expected-height="expectedHeight"
        @download="handleDownload"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import DownloadSection from './DownloadSection.vue';

const props = defineProps({
  hasResult: Boolean,
  originalImage: String,
  statistics: Object,
  generateTemplate: Boolean,
  resolvedWidth: Number,
  expectedHeight: Number,
  resultCanvasRef: Object,
  templateCanvasRef: Object,
});

const emit = defineEmits(['download']);

const previewContainerRef = ref(null);
const resultCanvasRef = ref(null);
const templateCanvasRef = ref(null);
const showOriginal = ref(false);
const showTemplate = ref(false);
const zoomScale = ref(1);
const isPanning = ref(false);
const panState = ref({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

const handleWheelZoom = (e) => {
  if (!props.hasResult) return;
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
  panState.value = { 
    x: event.clientX, 
    y: event.clientY, 
    scrollLeft: container.scrollLeft, 
    scrollTop: container.scrollTop 
  };
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (event) => {
  if (!isPanning.value) return;
  if (event.buttons === 0) { 
    handleMouseUp(); 
    return; 
  }
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

const handleDownload = (type, ...args) => {
  emit('download', type, ...args);
};

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
});
</script>

<style scoped>
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
  box-shadow: var(--shadow-sm);
}

.panel-header {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.view-toggle {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 4px;
  display: inline-flex;
  gap: 4px;
  margin-bottom: 15px;
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
  overflow: auto;
  padding: 12px;
  cursor: grab;
}

.image-preview-large.panning {
  cursor: grabbing;
  user-select: none;
}

.display-img {
  width: 600px;
  height: 600px;
  object-fit: contain;
  border-radius: 4px;
}

.stats-info {
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.stat-card {
  background: var(--bg-body);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-block {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  flex-shrink: 0;
}

.stat-name {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.stat-detail {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
</style>

