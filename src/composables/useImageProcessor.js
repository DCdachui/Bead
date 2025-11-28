// 图片处理组合式函数
import { ref, computed } from 'vue';
import { ImageFormatter } from '../core/image-formatter.js';
import { CONFIG } from '../utils/constants.js';

export function useImageProcessor() {
  const imageFormatter = new ImageFormatter();
  
  const originalImage = ref('');
  const rawImageBitmap = ref(null);
  const originalImageWidth = ref(0);
  const originalImageHeight = ref(0);
  const imageAspectRatio = ref(1);
  
  const imageFormatMode = ref(CONFIG.IMAGE_FORMAT.DEFAULT_MODE);
  const imageCropPosition = ref(CONFIG.IMAGE_FORMAT.DEFAULT_CROP_POSITION);
  
  /**
   * 加载图片
   */
  const loadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
      originalImage.value = imageUrl;
      
      const img = new Image();
      img.onload = () => {
        rawImageBitmap.value = img;
        originalImageWidth.value = img.width;
        originalImageHeight.value = img.height;
        imageAspectRatio.value = img.height / img.width;
        resolve({
          width: img.width,
          height: img.height,
          aspectRatio: imageAspectRatio.value
        });
      };
      img.onerror = () => {
        reject(new Error('图片加载失败'));
      };
      img.src = imageUrl;
    });
  };

  /**
   * 格式化图片
   */
  const formatImage = (imageData, targetWidth, targetHeight) => {
    const targetSize = imageFormatter.calculateTargetSize(
      targetWidth || CONFIG.DEFAULT_BEAD_COUNT,
      targetHeight || CONFIG.DEFAULT_BEAD_COUNT
    );

    return imageFormatter.formatImage(imageData, {
      mode: imageFormatMode.value,
      targetWidth: targetSize.width,
      targetHeight: targetSize.height,
      fillColor: CONFIG.IMAGE_FORMAT.DEFAULT_FILL_COLOR,
      cropPosition: imageCropPosition.value
    });
  };

  /**
   * 获取格式化后的图片数据
   */
  const getFormattedImageData = (targetWidth, targetHeight) => {
    if (!rawImageBitmap.value) return null;

    const canvas = document.createElement('canvas');
    const processWidth = Math.min(CONFIG.CONVERSION.MAX_PROCESS_WIDTH, rawImageBitmap.value.width);
    const scale = processWidth / rawImageBitmap.value.width;
    canvas.width = processWidth;
    canvas.height = rawImageBitmap.value.height * scale;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(rawImageBitmap.value, 0, 0, canvas.width, canvas.height);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // 应用格式化
    return formatImage(imageData, targetWidth, targetHeight);
  };

  /**
   * 重置状态
   */
  const reset = () => {
    originalImage.value = '';
    rawImageBitmap.value = null;
    originalImageWidth.value = 0;
    originalImageHeight.value = 0;
    imageAspectRatio.value = 1;
  };

  return {
    // 状态
    originalImage,
    rawImageBitmap,
    originalImageWidth,
    originalImageHeight,
    imageAspectRatio,
    imageFormatMode,
    imageCropPosition,
    
    // 方法
    loadImage,
    formatImage,
    getFormattedImageData,
    reset,
  };
}

