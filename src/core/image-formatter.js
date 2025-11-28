// src/core/image-formatter.js
// 图片格式化工具 - 已适配 Worker 环境

// 工具函数：自动适配环境
function createOffscreenAwareCanvas(width, height) {
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  if (typeof OffscreenCanvas !== 'undefined') {
    return new OffscreenCanvas(width, height);
  }
  throw new Error('当前环境不支持 Canvas');
}

export class ImageFormatter {
  formatImage(imageData, options = {}) {
    const {
      mode = 'auto',
      targetWidth = null,
      targetHeight = null,
      fillColor = '#FFFFFF',
      cropPosition = 'center'
    } = options;

    const { width, height } = imageData;
    const finalWidth = targetWidth || width;
    const finalHeight = targetHeight || height;

    switch (mode) {
      case 'auto':
        return this.autoFit(imageData, finalWidth, finalHeight);
      case 'crop':
        return this.cropToSize(imageData, finalWidth, finalHeight, cropPosition);
      case 'fill':
        return this.fillToSize(imageData, finalWidth, finalHeight, fillColor);
      case 'stretch':
        return this.stretchToSize(imageData, finalWidth, finalHeight);
      case 'square':
        return this.cropToSquare(imageData, cropPosition);
      default:
        return imageData;
    }
  }

  autoFit(imageData, targetWidth, targetHeight) {
    const { width, height } = imageData;
    const aspectRatio = width / height;
    const targetAspectRatio = targetWidth / targetHeight;
    let drawWidth, drawHeight, offsetX, offsetY;
    if (aspectRatio > targetAspectRatio) {
      drawWidth = targetWidth;
      drawHeight = targetWidth / aspectRatio;
      offsetX = 0;
      offsetY = (targetHeight - drawHeight) / 2;
    } else {
      drawHeight = targetHeight;
      drawWidth = targetHeight * aspectRatio;
      offsetX = (targetWidth - drawWidth) / 2;
      offsetY = 0;
    }

    return this.resizeAndPlace(imageData, targetWidth, targetHeight, drawWidth, drawHeight, offsetX, offsetY, '#FFFFFF');
  }

  cropToSize(imageData, targetWidth, targetHeight, position = 'center') {
    const { width, height } = imageData;
    const aspectRatio = width / height;
    const targetAspectRatio = targetWidth / targetHeight;

    let sourceX = 0, sourceY = 0, sourceWidth, sourceHeight;

    if (aspectRatio > targetAspectRatio) {
      sourceHeight = height;
      sourceWidth = height * targetAspectRatio;
      switch (position) {
        case 'left': sourceX = 0; break;
        case 'right': sourceX = width - sourceWidth; break;
        default: sourceX = (width - sourceWidth) / 2;
      }
      sourceY = 0;
    } else {
      sourceWidth = width;
      sourceHeight = width / targetAspectRatio;
      switch (position) {
        case 'top': sourceY = 0; break;
        case 'bottom': sourceY = height - sourceHeight; break;
        default: sourceY = (height - sourceHeight) / 2;
      }
      sourceX = 0;
    }

    // --- 修改点：使用环境感知 Canvas ---
    const tempCanvas = createOffscreenAwareCanvas(sourceWidth, sourceHeight);
    const tempCtx = tempCanvas.getContext('2d');
    
    // 需要一个临时的 Canvas 来绘制 ImageData (因为 drawImage 不支持直接画 ImageData)
    const sourceCanvas = createOffscreenAwareCanvas(width, height);
    const sourceCtx = sourceCanvas.getContext('2d');
    sourceCtx.putImageData(imageData, 0, 0);
    
    tempCtx.drawImage(sourceCanvas, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight);
    
    const resultCanvas = createOffscreenAwareCanvas(targetWidth, targetHeight);
    const resultCtx = resultCanvas.getContext('2d');
    resultCtx.imageSmoothingEnabled = false;
    resultCtx.drawImage(tempCanvas, 0, 0, targetWidth, targetHeight);
    
    return resultCtx.getImageData(0, 0, targetWidth, targetHeight);
  }

  fillToSize(imageData, targetWidth, targetHeight, fillColor = '#FFFFFF') {
    const { width, height } = imageData;
    const aspectRatio = width / height;
    const targetAspectRatio = targetWidth / targetHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (aspectRatio > targetAspectRatio) {
      drawWidth = targetWidth;
      drawHeight = targetWidth / aspectRatio;
      offsetX = 0;
      offsetY = (targetHeight - drawHeight) / 2;
    } else {
      drawHeight = targetHeight;
      drawWidth = targetHeight * aspectRatio;
      offsetX = (targetWidth - drawWidth) / 2;
      offsetY = 0;
    }

    return this.resizeAndPlace(imageData, targetWidth, targetHeight, drawWidth, drawHeight, offsetX, offsetY, fillColor);
  }

  stretchToSize(imageData, targetWidth, targetHeight) {
    const canvas = createOffscreenAwareCanvas(targetWidth, targetHeight);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    const sourceCanvas = createOffscreenAwareCanvas(imageData.width, imageData.height);
    const sourceCtx = sourceCanvas.getContext('2d');
    sourceCtx.imageSmoothingEnabled = false;
    sourceCtx.putImageData(imageData, 0, 0);
    
    ctx.drawImage(sourceCanvas, 0, 0, targetWidth, targetHeight);
    
    return ctx.getImageData(0, 0, targetWidth, targetHeight);
  }

  cropToSquare(imageData, position = 'center') {
    const { width, height } = imageData;
    const size = Math.min(width, height);
    return this.cropToSize(imageData, size, size, position);
  }

  resizeAndPlace(imageData, canvasWidth, canvasHeight, drawWidth, drawHeight, offsetX, offsetY, fillColor) {
    const canvas = createOffscreenAwareCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    const sourceCanvas = createOffscreenAwareCanvas(imageData.width, imageData.height);
    const sourceCtx = sourceCanvas.getContext('2d');
    sourceCtx.imageSmoothingEnabled = false;
    sourceCtx.putImageData(imageData, 0, 0);
    
    ctx.drawImage(sourceCanvas, offsetX, offsetY, drawWidth, drawHeight);
    
    return ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  }

  calculateTargetSize(gridWidth, gridHeight, cellSize = 20) {
    return {
      width: gridWidth * cellSize,
      height: gridHeight * cellSize
    };
  }
}