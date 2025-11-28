<template>
  <div class="ai-modal-overlay" @click.self="handleClose">
    <div class="ai-modal">
      <div class="ai-modal-header">
        <h3> AI生成拼豆图</h3>
        <button class="close-btn" @click="handleClose">×</button>
      </div>
      <div class="ai-modal-body">
        <div class="ai-input-section">
          <label>描述你想要生成的图案：</label>
          <textarea 
            v-model="aiPrompt" 
            placeholder="例如：一只可爱的小猫、像素风格的城堡、马赛克风格的彩虹..."
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
            <label>API Key (Google):</label>
            <input 
              v-model="aiApiKey" 
              type="password" 
              placeholder="输入你的Google API Key"
              class="api-key-input"
            >
          </div>
          <small class="hint-text">API Key将保存在本地，不会上传到服务器</small>
        </div>

        <div class="ai-actions">
          <button 
            @click="handleGenerate" 
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { AIGenerator } from '../core/ai-generator.js';
import { storage, notification } from '../utils/helpers.js';
import { STORAGE_KEYS, ERROR_MESSAGES } from '../utils/constants.js';

const props = defineProps({
  show: Boolean
});

const emit = defineEmits(['update:show', 'image-generated']);

const aiGenerator = new AIGenerator();
const aiPrompt = ref('');
const selectedAIStyle = ref('perlerBead');
const aiApiKey = ref('');
const isAIGenerating = ref(false);
const aiError = ref('');

const aiStyles = computed(() => aiGenerator.getAvailableStyles());

onMounted(() => {
  const savedApiKey = storage.get(STORAGE_KEYS.AI_API_KEY);
  if (savedApiKey) {
    aiApiKey.value = savedApiKey;
    aiGenerator.setApiKey(savedApiKey);
  }
});

const handleClose = () => {
  emit('update:show', false);
};

const handleGenerate = async () => {
  if (!aiApiKey.value || !aiPrompt.value) {
    aiError.value = ERROR_MESSAGES.API_KEY_REQUIRED;
    return;
  }

  isAIGenerating.value = true;
  aiError.value = '';

  try {
    storage.set(STORAGE_KEYS.AI_API_KEY, aiApiKey.value);
    aiGenerator.setApiKey(aiApiKey.value);

    const result = await aiGenerator.generatePerlerBeadImage(
      aiPrompt.value,
      selectedAIStyle.value,
      { size: '1024x1024', quality: 'standard' }
    );

    emit('image-generated', result);
    handleClose();
  } catch (err) {
    aiError.value = err.message || ERROR_MESSAGES.AI_GENERATION_FAILED;
    notification.error(aiError.value);
  } finally {
    isAIGenerating.value = false;
  }
};
</script>

<style scoped>
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
}

.ai-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
}

.ai-modal-body {
  padding: 24px;
}

.ai-input-section,
.ai-style-section,
.ai-settings-section {
  margin-bottom: 24px;
}

.ai-textarea {
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  resize: vertical;
  background: var(--bg-body);
  color: var(--text-primary);
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
  transition: all 0.2s;
}

.style-btn.active {
  background: var(--primary-color);
  color: white;
}

.api-key-input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.9rem;
  background: var(--bg-body);
  color: var(--text-primary);
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
}

.ai-generate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
</style>

