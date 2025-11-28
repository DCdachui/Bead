<template>
  <div class="template-options">
    <div class="slider-container">
      <div class="slider-label">
        <span>背景色代码</span>
        <select v-model="localBackgroundCode" @change="handleChange" class="code-select">
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
          v-model.number="localTemplateWidth" 
          min="10" 
          max="200" 
          placeholder="自动"
          @input="handleChange"
          class="number-input"
        >
      </div>
    </div>

    <div class="slider-container">
      <div class="slider-label">
        <span>模板高度（格数）</span>
        <input 
          type="number" 
          v-model.number="localTemplateHeight" 
          min="10" 
          max="200" 
          placeholder="自动"
          @input="handleChange"
          class="number-input"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  backgroundCode: String,
  templateWidth: Number,
  templateHeight: Number,
});

const emit = defineEmits(['update:backgroundCode', 'update:templateWidth', 'update:templateHeight', 'change']);

const localBackgroundCode = computed({
  get: () => props.backgroundCode,
  set: (val) => emit('update:backgroundCode', val)
});

const localTemplateWidth = computed({
  get: () => props.templateWidth,
  set: (val) => emit('update:templateWidth', val)
});

const localTemplateHeight = computed({
  get: () => props.templateHeight,
  set: (val) => emit('update:templateHeight', val)
});

const handleChange = () => {
  emit('change');
};
</script>

<style scoped>
.template-options {
  margin-top: 15px;
  padding: 15px;
  background: var(--bg-body);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.slider-container {
  margin: 10px 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.code-select, .number-input {
  background: var(--bg-panel);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85rem;
}

.number-input {
  width: 80px;
}
</style>

