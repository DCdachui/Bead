// 智能颜色聚类算法
// 使用 K-means 聚类算法减少颜色种类

export class ColorClustering {
  /**
   * 对颜色进行聚类，减少颜色种类
   * @param {Array} colors - 颜色数组，每个元素为 {rgb: [r, g, b], count: number}
   * @param {Number} targetCount - 目标颜色数量
   * @returns {Array} 聚类后的颜色数组
   */
  static clusterColors(colors, targetCount) {
    if (colors.length <= targetCount) {
      return colors;
    }

    // 转换为 Lab 颜色空间进行聚类（更符合人眼感知）
    const labColors = colors.map(c => ({
      lab: this.rgbToLab(c.rgb),
      rgb: c.rgb,
      count: c.count,
      original: c
    }));

    // 使用 K-means 聚类
    const clusters = this.kMeans(labColors, targetCount);
    
    // 计算每个聚类的代表颜色（加权平均）
    return clusters.map(cluster => {
      if (cluster.length === 0) return null;
      
      // 计算加权平均 RGB
      let totalCount = 0;
      let sumR = 0, sumG = 0, sumB = 0;
      
      cluster.forEach(item => {
        totalCount += item.count;
        sumR += item.rgb[0] * item.count;
        sumG += item.rgb[1] * item.count;
        sumB += item.rgb[2] * item.count;
      });
      
      const avgRgb = [
        Math.round(sumR / totalCount),
        Math.round(sumG / totalCount),
        Math.round(sumB / totalCount)
      ];
      
      // 合并计数
      const totalClusterCount = cluster.reduce((sum, item) => sum + item.count, 0);
      
      return {
        rgb: avgRgb,
        count: totalClusterCount,
        lab: this.rgbToLab(avgRgb)
      };
    }).filter(c => c !== null);
  }

  /**
   * K-means 聚类算法
   * @param {Array} points - 数据点数组
   * @param {Number} k - 聚类数量
   * @returns {Array} 聚类结果
   */
  static kMeans(points, k) {
    if (points.length <= k) {
      return points.map(p => [p]);
    }

    // 初始化：使用 K-means++ 方法选择初始中心点
    const centroids = this.kMeansPlusPlus(points, k);
    let clusters = Array(k).fill(null).map(() => []);
    let changed = true;
    let iterations = 0;
    const maxIterations = 100;

    while (changed && iterations < maxIterations) {
      // 分配每个点到最近的中心
      clusters = Array(k).fill(null).map(() => []);
      
      points.forEach(point => {
        let minDist = Infinity;
        let nearestCluster = 0;
        
        centroids.forEach((centroid, idx) => {
          const dist = this.deltaE(point.lab, centroid);
          if (dist < minDist) {
            minDist = dist;
            nearestCluster = idx;
          }
        });
        
        clusters[nearestCluster].push(point);
      });

      // 更新中心点
      changed = false;
      centroids.forEach((centroid, idx) => {
        if (clusters[idx].length === 0) return;
        
        // 计算新的中心点（加权平均）
        let totalCount = 0;
        let sumL = 0, sumA = 0, sumB = 0;
        
        clusters[idx].forEach(point => {
          totalCount += point.count;
          sumL += point.lab[0] * point.count;
          sumA += point.lab[1] * point.count;
          sumB += point.lab[2] * point.count;
        });
        
        const newCentroid = [
          sumL / totalCount,
          sumA / totalCount,
          sumB / totalCount
        ];
        
        // 检查是否改变
        const dist = this.deltaE(centroid, newCentroid);
        if (dist > 0.1) {
          changed = true;
        }
        
        centroids[idx] = newCentroid;
      });
      
      iterations++;
    }

    return clusters;
  }

  /**
   * K-means++ 初始化方法，选择更好的初始中心点
   */
  static kMeansPlusPlus(points, k) {
    const centroids = [];
    
    // 第一个中心点：随机选择或选择权重最大的点
    const firstIndex = Math.floor(Math.random() * points.length);
    centroids.push([...points[firstIndex].lab]);
    
    // 选择剩余的中心点
    for (let i = 1; i < k; i++) {
      const distances = points.map(point => {
        // 计算到最近中心的距离
        let minDist = Infinity;
        centroids.forEach(centroid => {
          const dist = this.deltaE(point.lab, centroid);
          if (dist < minDist) {
            minDist = dist;
          }
        });
        // 加权距离（考虑点的权重）
        return minDist * minDist * point.count;
      });
      
      // 根据距离概率选择下一个中心点
      const sumDistances = distances.reduce((a, b) => a + b, 0);
      let random = Math.random() * sumDistances;
      let selectedIndex = 0;
      
      for (let j = 0; j < distances.length; j++) {
        random -= distances[j];
        if (random <= 0) {
          selectedIndex = j;
          break;
        }
      }
      
      centroids.push([...points[selectedIndex].lab]);
    }
    
    return centroids;
  }

  /**
   * RGB 转 Lab 颜色空间
   */
  static rgbToLab(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;

    // 转换为线性 RGB
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    // 转换为 XYZ
    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)];
  }

  /**
   * 计算 Lab 颜色空间的距离（Delta E）
   */
  static deltaE(labA, labB) {
    const dL = labA[0] - labB[0];
    const dA = labA[1] - labB[1];
    const dB = labA[2] - labB[2];
    return Math.sqrt(dL * dL + dA * dA + dB * dB);
  }
}

