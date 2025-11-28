// 工具函数集合

/**
 * 防抖函数
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 节流函数
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * 生成唯一ID
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * 深拷贝
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
}

/**
 * 检查是否为图片文件
 */
export function isImageFile(file) {
  if (!file) return false;
  const isImageMime = file.type && file.type.startsWith('image/');
  const isIconExt = /\.(ico|cur|icns|svg)$/i.test(file.name);
  return isImageMime || isIconExt;
}

/**
 * 计算亮度（用于文字反色）
 */
export function calculateBrightness(hex) {
  const rgb = hexToRgb(hex);
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}

/**
 * Hex 转 RGB
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [255, 255, 255];
}

/**
 * RGB 转 Hex
 */
export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

/**
 * 下载文件
 */
export function downloadFile(dataUrl, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 从 Canvas 下载 PNG（带背景色）
 */
export function downloadCanvasAsPng(canvas, filename, backgroundColor = '#2d2d2d') {
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const ctx = tempCanvas.getContext('2d');
  
  // 填充背景色
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
  // 绘制原图
  ctx.drawImage(canvas, 0, 0);
  
  // 下载
  downloadFile(tempCanvas.toDataURL('image/png'), filename);
}

/**
 * 本地存储工具
 */
export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn('Storage get error:', e);
      return defaultValue;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage set error:', e);
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('Storage remove error:', e);
    }
  },
  
  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.warn('Storage clear error:', e);
    }
  }
};

/**
 * 通知系统
 */
export class NotificationManager {
  constructor() {
    this.notifications = [];
  }
  
  show(message, type = 'info', duration = 3000) {
    const id = generateId();
    const notification = { id, message, type, duration };
    this.notifications.push(notification);
    
    // 触发事件（组件监听）
    window.dispatchEvent(new CustomEvent('notification', { detail: notification }));
    
    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
    
    return id;
  }
  
  success(message, duration = 3000) {
    return this.show(message, 'success', duration);
  }
  
  error(message, duration = 5000) {
    return this.show(message, 'error', duration);
  }
  
  warning(message, duration = 4000) {
    return this.show(message, 'warning', duration);
  }
  
  info(message, duration = 3000) {
    return this.show(message, 'info', duration);
  }
  
  remove(id) {
    this.notifications = this.notifications.filter(n => n.id !== id);
    window.dispatchEvent(new CustomEvent('notification-remove', { detail: { id } }));
  }
}

// 全局通知管理器实例
export const notification = new NotificationManager();

