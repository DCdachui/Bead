// src/core/ai-generator.js
// AI图片生成器 - 封装AIService，提供更友好的接口

import { AIService } from './ai-service.js';

export class AIGenerator {
  constructor() {
    this.aiService = new AIService();
    this.availableStyles = [
      { key: 'perlerBead', name: '拼豆风格', icon: '🎨' },
      { key: 'pixelArt', name: '像素艺术', icon: '🖼️' },
      { key: 'mosaic', name: '马赛克', icon: '🧩' }
    ];
  }

  /**
   * 设置API密钥
   */
  setApiKey(key) {
    this.aiService.setApiKey(key);
  }

  /**
   * 获取可用风格列表
   */
  getAvailableStyles() {
    return this.availableStyles;
  }

  /**
   * 生成拼豆风格图片
   */
  async generatePerlerBeadImage(prompt, style = 'perlerBead', options = {}) {
    const {
      size = '1024x1024',
      quality = 'standard',
      colorCount = 24
    } = options;

    const [width, height] = size.split('x').map(Number);

    // 根据风格选择生成方法
    let blob;
    switch (style) {
      case 'pixelArt':
        blob = await this.aiService.generatePixelArtImage({
          subject: prompt,
          colorCount,
          width,
          height
        });
        break;
      case 'mosaic':
        blob = await this.aiService.generateMosaicImage({
          subject: prompt,
          colorCount,
          width,
          height
        });
        break;
      default: // perlerBead
        blob = await this.aiService.generatePerlerBeadImage({
          subject: prompt,
          colorCount,
          width,
          height
        });
    }

    // 将Blob转换为ImageData
    return await this.blobToImageData(blob);
  }

  /**
   * 将Blob转换为ImageData
   */
  async blobToImageData(blob) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(blob);
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const imageDataURL = canvas.toDataURL('image/png');
        
        URL.revokeObjectURL(url);
        
        resolve({
          imageData,
          imageDataURL,
          width: img.width,
          height: img.height
        });
      };
      
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('图片加载失败'));
      };
      
      img.src = url;
    });
  }
}
