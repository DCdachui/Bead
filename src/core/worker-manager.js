// Worker 管理器 - 统一管理 Worker 通信
import BeadWorker from './bead.worker.js?worker';

export class WorkerManager {
  constructor() {
    this.worker = null;
    this.messageId = 0;
    this.pendingMessages = new Map();
    this.init();
  }

  init() {
    try {
      this.worker = new BeadWorker();
      this.worker.onmessage = this.handleMessage.bind(this);
      this.worker.onerror = this.handleError.bind(this);
    } catch (error) {
      console.error('Worker 初始化失败:', error);
      throw error;
    }
  }

  handleMessage(e) {
    const { id, type, payload, error } = e.data;
    
    if (type === 'ERROR') {
      const pending = this.pendingMessages.get(id);
      if (pending) {
        pending.reject(new Error(error || 'Worker 处理出错'));
        this.pendingMessages.delete(id);
      }
      return;
    }
    
    if (type === 'SUCCESS') {
      const pending = this.pendingMessages.get(id);
      if (pending) {
        pending.resolve(payload);
        this.pendingMessages.delete(id);
      }
    }
  }

  handleError(error) {
    console.error('Worker 错误:', error);
    // 通知所有待处理的请求
    this.pendingMessages.forEach((pending) => {
      pending.reject(new Error('Worker 运行时错误'));
    });
    this.pendingMessages.clear();
  }

  /**
   * 发送消息到 Worker（Promise 封装）
   */
  postMessage(type, payload = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.messageId;
      
      this.pendingMessages.set(id, { resolve, reject });
      
      // 设置超时（30秒）
      const timeout = setTimeout(() => {
        this.pendingMessages.delete(id);
        reject(new Error('Worker 响应超时'));
      }, 30000);
      
      // 包装 resolve 以清除超时
      const originalResolve = resolve;
      resolve = (value) => {
        clearTimeout(timeout);
        originalResolve(value);
      };
      
      this.pendingMessages.get(id).resolve = resolve;
      
      try {
        this.worker.postMessage({ id, type, payload });
      } catch (error) {
        clearTimeout(timeout);
        this.pendingMessages.delete(id);
        reject(error);
      }
    });
  }

  /**
   * 初始化色库
   */
  async initLibrary(libraryName) {
    try {
      const result = await this.postMessage('INIT_LIBRARY', { libraryName });
      return result;
    } catch (error) {
      console.error('初始化色库失败:', error);
      throw error;
    }
  }

  /**
   * 更新色库
   */
  async updateLibrary(colors) {
    try {
      await this.postMessage('UPDATE_LIBRARY', { colors });
    } catch (error) {
      console.error('更新色库失败:', error);
      throw error;
    }
  }

  /**
   * 转换图片
   */
  async convert(imageData, beadCount, options = {}) {
    try {
      const result = await this.postMessage('CONVERT', {
        imageData,
        beadCount,
        options
      });
      return result;
    } catch (error) {
      console.error('转换失败:', error);
      throw error;
    }
  }

  /**
   * 格式化图片
   */
  async formatImage(imageData, options = {}) {
    try {
      const result = await this.postMessage('FORMAT_IMAGE', {
        imageData,
        options
      });
      return result;
    } catch (error) {
      console.error('格式化失败:', error);
      throw error;
    }
  }

  /**
   * 生成模板（支持不同DPI）
   */
  async generateTemplate(beadMap, options = {}) {
    try {
      // 需要处理 TEMPLATE_GENERATED 类型的响应
      const id = ++this.messageId;
      return new Promise((resolve, reject) => {
        this.pendingMessages.set(id, { resolve, reject });
        
        const timeout = setTimeout(() => {
          this.pendingMessages.delete(id);
          reject(new Error('生成模板超时'));
        }, 30000);
        
        const originalResolve = resolve;
        resolve = (value) => {
          clearTimeout(timeout);
          originalResolve(value);
        };
        
        this.pendingMessages.get(id).resolve = resolve;
        
        // 监听 TEMPLATE_GENERATED 消息
        const handler = (e) => {
          const { id: msgId, type, payload, error } = e.data;
          if (msgId === id) {
            if (type === 'TEMPLATE_GENERATED') {
              this.worker.removeEventListener('message', handler);
              clearTimeout(timeout);
              this.pendingMessages.delete(id);
              resolve(payload);
            } else if (type === 'ERROR') {
              this.worker.removeEventListener('message', handler);
              clearTimeout(timeout);
              this.pendingMessages.delete(id);
              reject(new Error(error || '生成模板失败'));
            }
          }
        };
        
        this.worker.addEventListener('message', handler);
        
        try {
          this.worker.postMessage({ 
            id, 
            type: 'GENERATE_TEMPLATE', 
            payload: { beadMap, options } 
          });
        } catch (error) {
          clearTimeout(timeout);
          this.worker.removeEventListener('message', handler);
          this.pendingMessages.delete(id);
          reject(error);
        }
      });
    } catch (error) {
      console.error('生成模板失败:', error);
      throw error;
    }
  }

  /**
   * 终止 Worker
   */
  terminate() {
    if (this.worker) {
      // 拒绝所有待处理的请求
      this.pendingMessages.forEach((pending) => {
        pending.reject(new Error('Worker 已终止'));
      });
      this.pendingMessages.clear();
      
      this.worker.terminate();
      this.worker = null;
    }
  }

  /**
   * 重启 Worker
   */
  restart() {
    this.terminate();
    this.init();
  }
}

