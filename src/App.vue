<template>
  <BeadConverter />
</template>

<script setup>
import BeadConverter from './components/BeadConverter.vue';
</script>

<style>
:root {
  /* 亮色模式 */
  --bg-body: #f4f7f6;
  --bg-panel: #ffffff;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --primary-color: #3b82f6;
  --primary-active: #2563eb;
  --accent-color: #f59e0b;
  --border-radius: 16px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --toggle-bg: #e5e7eb;
}

[data-theme="dark"] {
  /* 暗黑模式 */
  --bg-body: #111827;
  --bg-panel: #1f2937;
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
  --primary-color: #60a5fa;
  --primary-active: #3b82f6;
  --toggle-bg: #374151;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

/* 移动端优化：防止长按选择文本（在可交互元素上） */
@media (max-width: 768px) {
  button,
  .btn,
  .action-card,
  .tab-btn,
  .style-btn,
  .resolution-pill {
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
  }
  
  /* 允许输入框选择文本 */
  input,
  textarea {
    -webkit-user-select: text;
    user-select: text;
  }
  
  /* 优化图片显示 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* 优化 canvas 显示 */
  canvas {
    max-width: 100%;
    height: auto;
  }
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-body);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
  /* 移动端优化 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  /* 防止移动端双击缩放 */
  touch-action: manipulation;
}

#app {
  min-height: 100vh;
}

/* 移动端全局优化 */
@media (max-width: 768px) {
  body {
    font-size: 16px;
    /* 防止 iOS Safari 自动调整字体大小 */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  
  /* 优化输入框在 iOS 上的显示 */
  input,
  textarea,
  select {
    font-size: 16px !important;
    /* 防止 iOS Safari 自动缩放 */
    transform: scale(1);
  }
  
  /* 优化按钮点击反馈 */
  button,
  a {
    -webkit-tap-highlight-color: rgba(59, 130, 246, 0.2);
    tap-highlight-color: rgba(59, 130, 246, 0.2);
  }
  
  /* 优化滚动性能 */
  * {
    -webkit-overflow-scrolling: touch;
  }
}
</style>
