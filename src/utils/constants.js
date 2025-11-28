// 配置常量
export const CONFIG = {
  // 珠子数量范围
  MIN_BEAD_COUNT: 20,
  MAX_BEAD_COUNT: 500,
  DEFAULT_BEAD_COUNT: 50,
  
  // 常用分辨率预设
  RESOLUTION_PRESETS: [50, 52, 60],
  
  // 转换相关
  CONVERSION: {
    DEBOUNCE_DELAY: 300, // 防抖延迟（毫秒）
    PROGRESS_INTERVAL: 200, // 进度更新间隔
    MAX_PROCESS_WIDTH: 1000, // 最大处理宽度
    MAX_DISPLAY_WIDTH: 800, // 最大显示宽度
  },
  
  // 模板相关
  TEMPLATE: {
    DEFAULT_BACKGROUND_CODE: 'H2',
    DEFAULT_DPI: 96,
    HIGH_RES_DPI: 600,
    CELL_SIZE: 20, // 每格像素大小（96DPI）
  },
  
  // 图片格式化
  IMAGE_FORMAT: {
    DEFAULT_MODE: 'auto',
    DEFAULT_FILL_COLOR: '#FFFFFF',
    DEFAULT_CROP_POSITION: 'center',
  },
  
  // AI 相关
  AI: {
    DEFAULT_SIZE: '1024x1024',
    DEFAULT_QUALITY: 'standard',
    DEFAULT_COLOR_COUNT: 24,
  },
  
  // UI 相关
  UI: {
    ZOOM_MIN: 0.2,
    ZOOM_MAX: 4,
    ZOOM_STEP: 0.1,
    CELL_SIZE: 20, // 显示用格子大小
  },
  
  // 存储键名
  STORAGE_KEYS: {
    THEME: 'theme',
    AI_API_KEY: 'ai_api_key',
    USER_PREFERENCES: 'user_preferences',
  },
};

// 导出存储键名（兼容性）
export const STORAGE_KEYS = CONFIG.STORAGE_KEYS;

// 错误消息
export const ERROR_MESSAGES = {
  FILE_NOT_IMAGE: '请上传图片文件！',
  IMAGE_LOAD_FAILED: '图片解析失败，请尝试其他格式',
  CONVERSION_FAILED: '转换出错',
  AI_GENERATION_FAILED: 'AI生成失败',
  API_KEY_REQUIRED: '请输入API Key和描述',
  LIBRARY_NOT_FOUND: (name) => `色库 "${name}" 不存在`,
  INVALID_LIBRARY: '无效的色号数据',
  CANVAS_NOT_SUPPORTED: '当前环境不支持 Canvas',
};

// 成功消息
export const SUCCESS_MESSAGES = {
  LIBRARY_UPDATED: '🎨 色库已更新成功！',
  IMAGE_CONVERTED: '转换完成！',
  TEMPLATE_GENERATED: '模板生成完成！',
};

// 提示信息
export const TIPS = {
  BEAD_COUNT: '珠子越多，细节越丰富，耗时越长',
  EDGE_ENHANCE: '边缘增强适合卡通图案',
  IMAGE_QUALITY: '建议使用清晰度较高的图片',
  PIXEL_STYLE: '先转像素风可减少杂色，适合卡通化处理',
  CLEAN_BG: '净化背景可去除条纹，统一背景色',
  PRESERVE_DETAILS: '小尺寸细节增强可提升小图清晰度',
};

