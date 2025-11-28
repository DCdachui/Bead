// src/core/bead.worker.js
import { BeadConverter } from './bead-core.js';
import { ImageFormatter } from './image-formatter.js';

// 实例化工具
const converter = new BeadConverter();
const formatter = new ImageFormatter();

self.onmessage = async (e) => {
  const { id, type, payload, requestId } = e.data;

  try {
    switch (type) {
      case 'INIT_LIBRARY':
        // 初始化或切换色库
        if (payload.libraryName) {
          const name = converter.switchLibrary(payload.libraryName);
          self.postMessage({ id, type: 'SUCCESS', payload: { name } });
        }
        break;
        
      case 'UPDATE_LIBRARY':
        if(payload.colors) {
          converter.updateLibrary(payload.colors);
          self.postMessage({ id, type: 'SUCCESS' });
        }
        break;

      case 'FORMAT_IMAGE':
        // 如果有图片格式化的需求也在 Worker 处理，防止卡顿
        // 这里的 imageData 需要是 ImageData 对象
        const formatted = formatter.formatImage(payload.imageData, payload.options);
        // ImageFormatter 返回的是 ImageData，可以高效传输
        self.postMessage({ 
          id, 
          type: 'SUCCESS', 
          payload: { imageData: formatted } 
        });
        break;

      case 'CONVERT':
        const { imageData, beadCount, options } = payload;
        
        // 核心转换
        const result = await converter.convert(imageData, beadCount, options);

        // 提取需要零拷贝传输的对象 (ImageBitmap)
        const transferables = [];
        if (result.canvas instanceof ImageBitmap) {
          transferables.push(result.canvas);
        }
        if (result.templateCanvas instanceof ImageBitmap) {
          transferables.push(result.templateCanvas);
        }

        self.postMessage({
          id,
          type: 'SUCCESS',
          payload: {
            statistics: result.statistics,
            displayBitmap: result.canvas, // 或者是 Canvas (如果是在主线程测试)
            templateBitmap: result.templateCanvas
          }
        }, transferables);
        break;
      
      case 'GENERATE_TEMPLATE': {
        const template = converter.generateHighResTemplate(payload || {});
        const transfers = [];
        if (template instanceof ImageBitmap) {
          transfers.push(template);
        }
        self.postMessage({
          id,
          requestId,
          type: 'TEMPLATE_READY',
          payload: {
            dpi: payload?.dpi,
            templateBitmap: template
          }
        }, transfers);
        break;
      }
        
      default:
        throw new Error(`未知指令: ${type}`);
    }
  } catch (error) {
    console.error('Worker Error:', error);
    self.postMessage({ id, type: 'ERROR', error: error.message });
  }
};