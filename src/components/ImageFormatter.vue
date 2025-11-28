<template>
  <div class="format-section">
    <div class="slider-label" style="margin-bottom: 10px;">
      <span>📐 图片格式化</span>
      <button 
        class="format-toggle-btn" 
        @click="showOptions = !showOptions"
        :class="{ active: showOptions }"
      >
        {{ showOptions ? '收起' : '展开' }}
      </button>
    </div>
    
    <div v-if="showOptions" class="format-options">
      <div class="format-info">
        <small>原始尺寸: {{ originalWidth }} × {{ originalHeight }} 像素</small><br>
        <small>目标尺寸: {{ targetWidth }} × {{ targetHeight }} 像素</small>
      </div>

      <div class="slider-container">
        <div class="slider-label">
          <span>格式化模式</span>
        </div>
        <select v-model="localMode" @change="handleChange" class="format-select">
          <option value="auto">自动适配（保持比例，居中）</option>
          <option value="crop">裁剪（保持比例，裁剪多余）</option>
          <option value="fill">填充（保持比例，添加背景）</option>
          <option value="stretch">拉伸（强制匹配尺寸）</option>
          <option value="square">裁剪为正方形</option>
        </select>
      </div>

      <div v-if="localMode === 'crop' || localMode === 'square'" class="slider-container">
        <div class="slider-label">
          <span>裁剪位置</span>
        </div>
        <select v-model="localCropPosition" @change="handleChange" class="format-select">
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
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  mode: String,
  cropPosition: String,
  originalWidth: Number,
  originalHeight: Number,
  targetWidth: Number,
  targetHeight: Number,
});

const emit = defineEmits(['update:mode', 'update:cropPosition', 'change']);

const showOptions = ref(true);

const localMode = computed({
  get: () => props.mode,
  set: (val) => emit('update:mode', val)
});

const localCropPosition = computed({
  get: () => props.cropPosition,
  set: (val) => emit('update:cropPosition', val)
});

const handleChange = () => {
  emit('change');
};
</script>

<style scoped>
.format-section {
  margin-top: 15px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.format-toggle-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
}

.format-options {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.format-info {
  margin-bottom: 15px;
  padding: 8px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  font-size: 0.85rem;
}

.format-select {
  width: 100%;
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 0.85rem;
  margin-top: 5px;
}

.format-tips {
  margin-top: 15px;
  padding: 10px;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 4px;
  font-size: 0.8rem;
  line-height: 1.6;
}
</style>

