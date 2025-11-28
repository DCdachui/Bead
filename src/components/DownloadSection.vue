<template>
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
      <button 
        @click="handleOneClickDownload" 
        class="action-card hero-btn" 
        :disabled="isDownloading"
      >
        <span class="action-main">📥 一键下载 (效果图 + 打印图纸)</span>
        <small>{{ isDownloading ? '正在生成高清图纸...' : '自动重命名并打包' }}</small>
      </button>
    </div>
    
    <div class="download-grid">
      <button @click="handleDownload('image')" class="action-card primary">
        <span class="action-main">📥 下载效果图</span>
        <small>96 DPI · 展示/预览</small>
      </button>

      <button 
        v-if="generateTemplate" 
        @click="handleDownload('template')" 
        class="action-card secondary"
      >
        <span class="action-main">📥 下载模板（96DPI）</span>
        <small>含行列编号与色号</small>
      </button>

      <button 
        v-if="generateTemplate" 
        @click="handleDownload('high-res')" 
        class="action-card accent"
      >
        <span class="action-main">📥 下载打印模板（600DPI）</span>
        <small>适合高清打印</small>
      </button>

    </div>

    <div class="download-footer">
      <button class="action-card muted" disabled>
        📄 生成PDF打印版（即将推出）
      </button>
      <small class="coming-soon-tip">支持更多排版与批注功能，敬请期待</small>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  statistics: Object,
  generateTemplate: Boolean,
  resultCanvasRef: Object,
  templateCanvasRef: Object,
  resolvedWidth: Number,
  expectedHeight: Number,
});

const emit = defineEmits(['download']);

const isDownloading = ref(false);

const handleDownload = (type) => {
  emit('download', type);
};

const handleOneClickDownload = () => {
  isDownloading.value = true;
  handleDownload('image');
  setTimeout(() => {
    handleDownload('high-res');
    isDownloading.value = false;
  }, 800);
};
</script>

<style scoped>
.download-actions {
  margin-top: 24px;
  padding: 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(59, 130, 246, 0.12));
  border: 1px solid rgba(16, 185, 129, 0.3);
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

.download-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
}

.action-card {
  border: none;
  border-radius: 14px;
  padding: 16px;
  text-align: left;
  background: rgba(255,255,255,0.9);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
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

.action-card.ultra {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: #fff;
}

.action-card.muted {
  background: rgba(255,255,255,0.6);
  cursor: not-allowed;
}

.action-card:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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

.coming-soon-tip {
  color: var(--text-secondary);
  font-size: 0.85rem;
}
</style>

