// 键盘快捷键支持
import { onMounted, onUnmounted } from 'vue';

export function useKeyboardShortcuts(handlers) {
  const handleKeyDown = (event) => {
    // Ctrl/Cmd + 快捷键
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 's':
          event.preventDefault();
          handlers.onSave?.();
          break;
        case 'Enter':
          event.preventDefault();
          handlers.onConvert?.();
          break;
        case 'r':
          event.preventDefault();
          handlers.onReset?.();
          break;
      }
    }
    
    // 单独按键
    switch (event.key) {
      case 'Escape':
        handlers.onEscape?.();
        break;
      case '?':
        if (!event.ctrlKey && !event.metaKey) {
          handlers.onHelp?.();
        }
        break;
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
}

