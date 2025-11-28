<template>
  <div class="upload-section">
    <div class="upload-area" 
         @click="handleClick"
         @dragover.prevent="handleDragOver"
         @dragleave.prevent="handleDragLeave"
         @drop.prevent="handleDrop"
         :class="{ 'drag-over': isDragOver }"
    >
      <input 
        ref="fileInputRef"
        type="file" 
        accept="image/*" 
        @change="handleFileChange" 
        style="display: none;"
      >
      <div v-if="!imageUrl" class="upload-placeholder">
        <div class="upload-icon">📷</div>
        <div><strong>点击上传图片</strong></div>
        <div class="upload-hint">支持 JPG / PNG / WebP</div>
        <div class="upload-hint">或拖拽图片到此处</div>
      </div>
      <div v-else class="preview-container">
        <img :src="imageUrl" alt="预览图" class="preview-img">
        <div class="preview-overlay">
          <span>点击更换图片</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { isImageFile } from '../utils/helpers.js';
import { ERROR_MESSAGES } from '../utils/constants.js';
import { notification } from '../utils/helpers.js';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue', 'image-loaded']);

const fileInputRef = ref(null);
const imageUrl = ref(props.modelValue || '');
const isDragOver = ref(false);

const handleClick = () => {
  fileInputRef.value?.click();
};

const handleFileChange = (e) => {
  const file = e.target.files?.[0];
  if (file) {
    processFile(file);
  }
  e.target.value = '';
};

const handleDragOver = () => {
  isDragOver.value = true;
};

const handleDragLeave = () => {
  isDragOver.value = false;
};

const handleDrop = (e) => {
  isDragOver.value = false;
  const file = e.dataTransfer?.files?.[0];
  if (file) {
    processFile(file);
  }
};

const processFile = (file) => {
  if (!isImageFile(file)) {
    notification.error(ERROR_MESSAGES.FILE_NOT_IMAGE);
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const result = ev.target?.result;
    if (!result) return;

    imageUrl.value = result;
    emit('update:modelValue', result);
    
    // 加载图片获取尺寸信息
    const img = new Image();
    img.onload = () => {
      emit('image-loaded', {
        url: result,
        width: img.width,
        height: img.height,
        aspectRatio: img.height / img.width
      });
    };
    img.onerror = () => {
      notification.error(ERROR_MESSAGES.IMAGE_LOAD_FAILED);
    };
    img.src = result;
  };
  reader.readAsDataURL(file);
};

// 监听外部值变化
import { watch } from 'vue';
watch(() => props.modelValue, (newVal) => {
  imageUrl.value = newVal || '';
});
</script>

<style scoped>
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

.upload-area.drag-over {
  border-color: var(--primary-active);
  background: rgba(59, 130, 246, 0.1);
  transform: scale(1.02);
}

.upload-placeholder {
  text-align: center;
  padding: 40px 20px;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.upload-hint {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 8px;
}

.preview-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
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
</style>

