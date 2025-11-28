// 拼豆转换器组合式函数 - 统一管理转换逻辑
import { ref, computed, onUnmounted } from 'vue';
import { WorkerManager } from '../core/worker-manager.js';
import { CONFIG, ERROR_MESSAGES } from '../utils/constants.js';
import { notification } from '../utils/helpers.js';
import { debounce } from '../utils/helpers.js';

export function useBeadConverter() {
  const workerManager = new WorkerManager();
  
  // 状态
  const isConverting = ref(false);
  const progress = ref(0);
  const hasResult = ref(false);
  const statistics = ref(null);
  const resultCanvas = ref(null);
  const templateCanvas = ref(null);
  
  // 转换选项
  const conversionOptions = ref({
    beadCount: CONFIG.DEFAULT_BEAD_COUNT,
    selectedLibrary: '72色',
    enhanceEdges: false,
    enablePixelStyle: false,
    cleanBackground: false,
    preserveDetails: true,
    generateTemplate: true,
    backgroundCode: CONFIG.TEMPLATE.DEFAULT_BACKGROUND_CODE,
    templateWidth: null,
    templateHeight: null,
    imageFormatMode: CONFIG.IMAGE_FORMAT.DEFAULT_MODE,
    imageCropPosition: CONFIG.IMAGE_FORMAT.DEFAULT_CROP_POSITION,
  });

  /**
   * 初始化色库
   */
  const initLibrary = async (libraryName) => {
    try {
      await workerManager.initLibrary(libraryName);
      conversionOptions.value.selectedLibrary = libraryName;
    } catch (error) {
      notification.error(ERROR_MESSAGES.LIBRARY_NOT_FOUND(libraryName));
      throw error;
    }
  };

  /**
   * 更新色库
   */
  const updateLibrary = async (colors) => {
    try {
      await workerManager.updateLibrary(colors);
      notification.success('色库已更新成功！');
    } catch (error) {
      notification.error('更新色库失败');
      throw error;
    }
  };

  /**
   * 转换图片
   */
  const convert = async (imageData, options = {}) => {
    if (!imageData) {
      notification.warning('请先上传图片');
      return;
    }

    isConverting.value = true;
    progress.value = 10;
    hasResult.value = false;

    try {
      // 合并选项
      const finalOptions = {
        ...conversionOptions.value,
        ...options
      };

      // 更新进度
      const progressInterval = setInterval(() => {
        progress.value = Math.min(progress.value + 10, 90);
      }, CONFIG.CONVERSION.PROGRESS_INTERVAL);

      // 执行转换
      const result = await workerManager.convert(
        imageData,
        finalOptions.beadCount,
        {
          generateTemplate: finalOptions.generateTemplate,
          backgroundCode: finalOptions.backgroundCode,
          templateWidth: finalOptions.templateWidth,
          templateHeight: finalOptions.templateHeight,
          targetHeight: (() => {
            // 计算目标高度
            if (finalOptions.templateHeight) return finalOptions.templateHeight;
            const aspectRatio = imageData.height / imageData.width;
            return Math.round(finalOptions.beadCount * aspectRatio);
          })(),
          detailFactor: (() => {
            if (!finalOptions.preserveDetails) return 1;
            const width = finalOptions.beadCount || 50;
            if (width <= 32) return 5;
            if (width <= 56) return 5;
            if (width <= 80) return 4;
            if (width <= 120) return 3;
            return 1;
          })(),
          detailMode: (() => {
            if (!finalOptions.preserveDetails) return 'average';
            if (finalOptions.beadCount <= 45) return 'center';
            if (finalOptions.beadCount <= 70) return 'hybrid';
            return 'average';
          })(),
          pixelStyle: finalOptions.enablePixelStyle,
          preprocess: finalOptions.enhanceEdges,
        }
      );

      clearInterval(progressInterval);
      progress.value = 100;

      // 处理结果
      if (result.displayBitmap) {
        resultCanvas.value = result.displayBitmap;
      }
      if (result.templateBitmap) {
        templateCanvas.value = result.templateBitmap;
      }
      if (result.statistics) {
        statistics.value = result.statistics;
      }

      hasResult.value = true;
      notification.success('转换完成！');

    } catch (error) {
      console.error('转换错误:', error);
      notification.error(ERROR_MESSAGES.CONVERSION_FAILED + ': ' + error.message);
      throw error;
    } finally {
      isConverting.value = false;
      progress.value = 0;
    }
  };

  /**
   * 防抖转换
   */
  const debouncedConvert = debounce((imageData, options) => {
    convert(imageData, options);
  }, CONFIG.CONVERSION.DEBOUNCE_DELAY);

  /**
   * 更新选项
   */
  const updateOptions = (newOptions) => {
    Object.assign(conversionOptions.value, newOptions);
  };

  /**
   * 清理资源
   */
  const cleanup = () => {
    workerManager.terminate();
  };

  onUnmounted(() => {
    cleanup();
  });

  return {
    // 状态
    isConverting,
    progress,
    hasResult,
    statistics,
    resultCanvas,
    templateCanvas,
    
    // 选项
    conversionOptions,
    
    // 方法
    initLibrary,
    updateLibrary,
    convert,
    debouncedConvert,
    updateOptions,
    cleanup,
  };
}

