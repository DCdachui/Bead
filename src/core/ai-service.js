// src/core/ai-service.js
// AI图片生成服务 - 对接Banana.dev (Nano Banana pro)
// 注意：实际使用时需要根据Banana.dev的API文档调整

export class AIService {
  constructor() {
    // Banana.dev API配置
    this.apiKey = null; // 从环境变量或用户输入获取
    this.apiUrl = 'https://api.banana.dev/v1'; // Banana.dev API地址
    this.modelId = 'nano-banana-pro'; // 模型ID
    
    // 提示词模板库
    this.promptTemplates = {
      pixelArt: {
        base: 'Create a pixel art style image of {subject}. Use {colors} colors. Style: retro pixel art, 8-bit game style, clean edges, bold colors, no gradients.',
        colors: 'limited color palette, vibrant colors',
        detail: 'high detail pixel art, sharp edges'
      },
      mosaic: {
        base: 'Create a mosaic art style image of {subject}. Use {colors} colors. Style: mosaic tiles, geometric patterns, clear boundaries between colors, flat colors, no shading.',
        colors: 'distinct color blocks',
        detail: 'clear color separation, tile-like appearance'
      },
      perlerBead: {
        base: 'Create a perler bead art style image of {subject}. Use {colors} colors. Style: circular beads arranged in a grid, bright solid colors, no gradients, clear bead boundaries, suitable for perler bead crafting.',
        colors: 'vibrant solid colors',
        detail: 'grid-based circular beads, clear separation'
      }
    };
  }

  /**
   * 设置API密钥
   */
  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * 生成提示词
   * @param {Object} options - 提示词选项
   * @param {string} options.subject - 主题描述
   * @param {string} options.style - 风格: 'pixelArt' | 'mosaic' | 'perlerBead'
   * @param {number} options.colorCount - 颜色数量（24/48/72）
   * @param {string} options.additionalPrompt - 额外提示词
   * @returns {string} 完整的提示词
   */
  generatePrompt(options = {}) {
    const {
      subject = 'a cute character',
      style = 'perlerBead',
      colorCount = 24,
      additionalPrompt = ''
    } = options;

    const template = this.promptTemplates[style] || this.promptTemplates.perlerBead;
    
    // 构建颜色描述
    let colorDesc = template.colors;
    if (colorCount <= 24) {
      colorDesc = `limited palette of ${colorCount} colors, vibrant solid colors`;
    } else if (colorCount <= 48) {
      colorDesc = `moderate palette of ${colorCount} colors, distinct color blocks`;
    } else {
      colorDesc = `rich palette of ${colorCount} colors, clear color separation`;
    }

    // 生成基础提示词
    let prompt = template.base
      .replace('{subject}', subject)
      .replace('{colors}', colorDesc);

    // 添加额外提示
    if (additionalPrompt) {
      prompt += `. ${additionalPrompt}`;
    }

    // 添加拼豆专用优化
    prompt += ' The image should be suitable for conversion to perler bead patterns: clear shapes, distinct colors, minimal details, bold outlines.';

    return prompt;
  }

  /**
   * 调用Banana.dev API生成图片
   * 注意：Banana.dev使用Google的Gemini API，需要根据实际API格式调整
   * @param {string} prompt - 提示词
   * @param {Object} options - 生成选项
   * @returns {Promise<Blob>} 生成的图片Blob
   */
  async generateImage(prompt, options = {}) {
    if (!this.apiKey) {
      throw new Error('API密钥未设置，请先配置Google API密钥');
    }

    const {
      width = 512,
      height = 512,
      steps = 20,
      guidance = 7.5
    } = options;

    try {
      // 方案1: 如果Banana.dev提供直接API
      // 方案2: 使用Google Gemini API (通过Banana.dev代理)
      // 这里使用Google Gemini API的格式
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generateImages?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prompt,
          number_of_images: 1,
          aspect_ratio: width === height ? '1:1' : width > height ? '16:9' : '9:16'
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'AI生成失败');
      }

      const data = await response.json();
      
      // 从响应中提取图片URL或base64
      let imageUrl = null;
      if (data.generatedImages && data.generatedImages[0]) {
        imageUrl = data.generatedImages[0].imageUrl || data.generatedImages[0].base64Image;
      }

      if (!imageUrl) {
        throw new Error('未获取到生成的图片');
      }

      // 如果是base64，转换为Blob
      if (imageUrl.startsWith('data:')) {
        const response = await fetch(imageUrl);
        return await response.blob();
      }

      // 如果是URL，直接获取
      const imageResponse = await fetch(imageUrl);
      return await imageResponse.blob();
    } catch (error) {
      console.error('AI生成错误:', error);
      throw new Error(`AI生成失败: ${error.message}`);
    }
  }

  /**
   * 快速生成拼豆风格图片
   * @param {Object} options - 生成选项
   * @returns {Promise<Blob>} 生成的图片
   */
  async generatePerlerBeadImage(options = {}) {
    const {
      subject = 'a cute character',
      colorCount = 24,
      width = 512,
      height = 512,
      additionalPrompt = ''
    } = options;

    // 生成提示词
    const prompt = this.generatePrompt({
      subject,
      style: 'perlerBead',
      colorCount,
      additionalPrompt
    });

    // 调用API生成
    return await this.generateImage(prompt, {
      width,
      height,
      steps: 25, // 拼豆图需要更清晰的边缘
      guidance: 8.0 // 更高的引导值，确保遵循提示词
    });
  }

  /**
   * 生成像素艺术风格图片
   */
  async generatePixelArtImage(options = {}) {
    const {
      subject = 'a cute character',
      colorCount = 24,
      width = 512,
      height = 512,
      additionalPrompt = ''
    } = options;

    const prompt = this.generatePrompt({
      subject,
      style: 'pixelArt',
      colorCount,
      additionalPrompt
    });

    return await this.generateImage(prompt, {
      width,
      height,
      steps: 20,
      guidance: 7.5
    });
  }

  /**
   * 生成马赛克风格图片
   */
  async generateMosaicImage(options = {}) {
    const {
      subject = 'a cute character',
      colorCount = 24,
      width = 512,
      height = 512,
      additionalPrompt = ''
    } = options;

    const prompt = this.generatePrompt({
      subject,
      style: 'mosaic',
      colorCount,
      additionalPrompt
    });

    return await this.generateImage(prompt, {
      width,
      height,
      steps: 20,
      guidance: 7.5
    });
  }
}

