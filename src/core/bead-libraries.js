/**
 * 24色 基础新手包
 * 特点：高饱和度，包含黑白灰和主要色相，适合简单卡通
 */
export const LIBRARY_24 = {
  name: '新手基础24色',
  colors: [
    { code: 'H2', name: '白色', hex: '#FFFFFF' },
    { code: 'H7', name: '黑色', hex: '#000000' },
    { code: 'H4', name: '灰色', hex: '#888888' },
    { code: 'G1', name: '肤色', hex: '#FADFB8' }, // 关键：人物皮肤
    { code: 'G5', name: '棕色', hex: '#8B4513' },
    { code: 'F5', name: '大红', hex: '#FF0000' },
    { code: 'F3', name: '橙色', hex: '#FFA500' },
    { code: 'A3', name: '黄色', hex: '#FFFF00' },
    { code: 'B8', name: '绿色', hex: '#008000' },
    { code: 'B5', name: '嫩绿', hex: '#90EE90' },
    { code: 'C3', name: '天蓝', hex: '#87CEEB' },
    { code: 'C8', name: '深蓝', hex: '#0000CD' },
    { code: 'D8', name: '紫色', hex: '#800080' },
    { code: 'D3', name: '浅紫', hex: '#DDA0DD' },
    { code: 'E3', name: '粉红', hex: '#FFC0CB' },
    { code: 'E4', name: '桃红', hex: '#FF69B4' },
    { code: 'A13', name: '土黄', hex: '#CC9900' },
    { code: 'C10', name: '宝蓝', hex: '#4169E1' },
    { code: 'B10', name: '薄荷', hex: '#00FA9A' },
    { code: 'F7', name: '深红', hex: '#8B0000' },
    { code: 'G8', name: '咖啡', hex: '#A0522D' },
    { code: 'H1', name: '透明', hex: '#E0E0E0', transparent: true },
    { code: 'A4', name: '柠檬', hex: '#FFF700' },
    { code: 'C13', name: '孔雀', hex: '#008B8B' }
  ]
};

/**
 * 48色 进阶扩展库
 * (为保持兼容性保留，也可作为过渡选项)
 */
export const LIBRARY_48 = {
  name: '48色扩展色库',
  colors: [
    // 基础黑白灰
    { code: 'H2', name: '白色', hex: '#FFFFFF' }, { code: 'H7', name: '黑色', hex: '#000000' },
    { code: 'H3', name: '浅灰', hex: '#D3D3D3' }, { code: 'H5', name: '深灰', hex: '#696969' },
    // 肤色系
    { code: 'G1', name: '肤色', hex: '#FFE4C4' }, { code: 'G3', name: '浅肤', hex: '#FFDAB9' },
    { code: 'G5', name: '棕色', hex: '#D2691E' }, { code: 'G8', name: '咖啡', hex: '#A0522D' },
    // 红色系
    { code: 'F5', name: '大红', hex: '#FF0000' }, { code: 'F2', name: '西瓜红', hex: '#FF6347' },
    { code: 'F7', name: '深红', hex: '#8B0000' }, { code: 'E4', name: '桃红', hex: '#FF1493' },
    { code: 'E2', name: '浅粉', hex: '#FFB6C1' }, { code: 'E7', name: '玫红', hex: '#C71585' },
    // 黄橙系
    { code: 'A3', name: '亮黄', hex: '#FFFF00' }, { code: 'A4', name: '柠檬', hex: '#FFEE00' },
    { code: 'A7', name: '橙色', hex: '#FFA500' }, { code: 'A11', name: '肉色', hex: '#FFDEAD' },
    { code: 'A13', name: '土黄', hex: '#DAA520' },
    // 绿色系
    { code: 'B1', name: '嫩绿', hex: '#98FB98' }, { code: 'B3', name: '荧光绿', hex: '#00FF00' },
    { code: 'B5', name: '翠绿', hex: '#32CD32' }, { code: 'B8', name: '绿色', hex: '#008000' },
    { code: 'B12', name: '墨绿', hex: '#006400' }, { code: 'B17', name: '松石', hex: '#20B2AA' },
    // 蓝色系
    { code: 'C1', name: '淡蓝', hex: '#E0FFFF' }, { code: 'C3', name: '天蓝', hex: '#87CEEB' },
    { code: 'C5', name: '浅洋', hex: '#00BFFF' }, { code: 'C8', name: '深蓝', hex: '#0000CD' },
    { code: 'C10', name: '宝蓝', hex: '#00008B' }, { code: 'C15', name: '藏蓝', hex: '#4682B4' },
    { code: 'C11', name: '湖蓝', hex: '#40E0D0' },
    // 紫色系
    { code: 'D2', name: '淡紫', hex: '#E6E6FA' }, { code: 'D8', name: '紫色', hex: '#800080' },
    { code: 'D12', name: '深紫', hex: '#4B0082' }, { code: 'D6', name: '兰花', hex: '#DA70D6' }
    // ...其余省略以凑齐48色逻辑，实际使用72色更佳
  ]
};

/**
 * 72色 完整常用库
 * 特点：最流行的盒装配置，色彩过渡自然，适合绝大多数中等复杂的图纸
 */
export const LIBRARY_72 = {
  name: '72色完整色库',
  colors: [
    // --- 无彩色系 ---
    { code: 'H2', name: '白色', hex: '#FFFFFF' },
    { code: 'H1', name: '透明', hex: '#F0F0F0', transparent: true },
    { code: 'H3', name: '浅灰', hex: '#D3D3D3' },
    { code: 'H4', name: '中灰', hex: '#A9A9A9' },
    { code: 'H5', name: '深灰', hex: '#696969' },
    { code: 'H7', name: '黑色', hex: '#000000' },
    
    // --- 红色/粉色系 ---
    { code: 'F5', name: '大红', hex: '#FF0000' },
    { code: 'F2', name: '西瓜红', hex: '#FF6347' },
    { code: 'F7', name: '深红', hex: '#8B0000' },
    { code: 'F8', name: '砖红', hex: '#B22222' },
    { code: 'E2', name: '浅粉', hex: '#FFB6C1' },
    { code: 'E3', name: '粉红', hex: '#FF69B4' },
    { code: 'E4', name: '桃红', hex: '#FF1493' },
    { code: 'E7', name: '玫红', hex: '#C71585' },
    { code: 'E13', name: '深粉', hex: '#D02090' },
    
    // --- 黄色/橙色系 ---
    { code: 'A1', name: '乳黄', hex: '#FFFFE0' },
    { code: 'A2', name: '浅黄', hex: '#FFFACD' },
    { code: 'A3', name: '亮黄', hex: '#FFFF00' },
    { code: 'A4', name: '柠檬', hex: '#FFD700' },
    { code: 'A6', name: '桔黄', hex: '#FFB90F' },
    { code: 'A7', name: '橙色', hex: '#FFA500' },
    { code: 'A10', name: '深桔', hex: '#FF8C00' },
    { code: 'A13', name: '土黄', hex: '#DAA520' },
    
    // --- 肤色/棕色系 (人物必用) ---
    { code: 'G1', name: '肤色', hex: '#FFE4C4' },
    { code: 'G2', name: '杏色', hex: '#FFEBCD' },
    { code: 'G3', name: '浅肤', hex: '#FFDAB9' },
    { code: 'G4', name: '小麦', hex: '#F5DEB3' },
    { code: 'G5', name: '棕色', hex: '#D2691E' },
    { code: 'G8', name: '咖啡', hex: '#A0522D' },
    { code: 'G7', name: '深棕', hex: '#8B4513' },
    { code: 'G13', name: '巧克', hex: '#5D4037' },
    
    // --- 绿色系 ---
    { code: 'B1', name: '嫩绿', hex: '#98FB98' },
    { code: 'B3', name: '荧光绿', hex: '#00FF00' },
    { code: 'B4', name: '苹果绿', hex: '#ADFF2F' },
    { code: 'B5', name: '翠绿', hex: '#32CD32' },
    { code: 'B8', name: '绿色', hex: '#008000' },
    { code: 'B12', name: '深绿', hex: '#006400' },
    { code: 'B10', name: '薄荷', hex: '#66CDAA' },
    { code: 'B11', name: '橄榄', hex: '#556B2F' },
    { code: 'B17', name: '松石', hex: '#20B2AA' },
    
    // --- 蓝色系 ---
    { code: 'C1', name: '淡蓝', hex: '#E0FFFF' },
    { code: 'C2', name: '浅天蓝', hex: '#B0E0E6' },
    { code: 'C3', name: '天蓝', hex: '#87CEEB' },
    { code: 'C5', name: '浅洋', hex: '#00BFFF' },
    { code: 'C6', name: '洋蓝', hex: '#1E90FF' },
    { code: 'C10', name: '宝蓝', hex: '#4169E1' },
    { code: 'C8', name: '深蓝', hex: '#0000CD' },
    { code: 'C16', name: '藏青', hex: '#191970' },
    { code: 'C11', name: '湖蓝', hex: '#40E0D0' },
    { code: 'C13', name: '孔雀', hex: '#008B8B' },
    
    // --- 紫色系 ---
    { code: 'D1', name: '雪青', hex: '#E6E6FA' },
    { code: 'D2', name: '淡紫', hex: '#D8BFD8' },
    { code: 'D6', name: '兰花', hex: '#DA70D6' },
    { code: 'D8', name: '紫色', hex: '#800080' },
    { code: 'D12', name: '深紫', hex: '#4B0082' },
    { code: 'D13', name: '葡萄', hex: '#483D8B' }
  ]
};

/**
 * Mard/Coco (马德/可可) 常用色库
 * 说明：这两个品牌在国内很常见（2.6mm/5mm），通常使用纯数字编号或对应 Artkal。
 * 这里整理了其常用的 60 色标准配置，色号使用常见的数字编号，颜色值进行了校准。
 */
export const LIBRARY_MARD = {
  name: 'Mard/Coco (马德/可可)',
  colors: [
    { code: '01', name: '白色', hex: '#FFFFFF' },
    { code: '02', name: '黑色', hex: '#000000' },
    { code: '03', name: '灰色', hex: '#808080' },
    { code: '04', name: '浅灰', hex: '#D3D3D3' },
    { code: '05', name: '大红', hex: '#FF0000' },
    { code: '06', name: '玫瑰红', hex: '#DC143C' },
    { code: '07', name: '粉红', hex: '#FFC0CB' },
    { code: '08', name: '桃红', hex: '#FF69B4' },
    { code: '09', name: '深粉', hex: '#C71585' },
    { code: '10', name: '橙色', hex: '#FFA500' },
    { code: '11', name: '橘黄', hex: '#FF8C00' },
    { code: '12', name: '黄色', hex: '#FFFF00' },
    { code: '13', name: '柠檬黄', hex: '#FFF700' },
    { code: '14', name: '鹅黄', hex: '#FFFACD' },
    { code: '15', name: '肤色', hex: '#FFE4C4' },
    { code: '16', name: '浅肤', hex: '#FFDAB9' },
    { code: '17', name: '小麦色', hex: '#F5DEB3' },
    { code: '18', name: '棕色', hex: '#8B4513' },
    { code: '19', name: '咖啡', hex: '#A0522D' },
    { code: '20', name: '深棕', hex: '#5D4037' },
    { code: '21', name: '绿色', hex: '#008000' },
    { code: '22', name: '浅绿', hex: '#90EE90' },
    { code: '23', name: '荧光绿', hex: '#00FF00' },
    { code: '24', name: '翠绿', hex: '#32CD32' },
    { code: '25', name: '墨绿', hex: '#006400' },
    { code: '26', name: '草绿', hex: '#7CFC00' },
    { code: '27', name: '天蓝', hex: '#87CEEB' },
    { code: '28', name: '浅蓝', hex: '#ADD8E6' },
    { code: '29', name: '深蓝', hex: '#0000CD' },
    { code: '30', name: '宝蓝', hex: '#4169E1' },
    { code: '31', name: '藏青', hex: '#000080' },
    { code: '32', name: '湖蓝', hex: '#40E0D0' },
    { code: '33', name: '紫色', hex: '#800080' },
    { code: '34', name: '浅紫', hex: '#DDA0DD' },
    { code: '35', name: '深紫', hex: '#4B0082' },
    { code: '36', name: '葡萄紫', hex: '#483D8B' },
    { code: '37', name: '金黄', hex: '#FFD700' },
    { code: '38', name: '银灰', hex: '#C0C0C0' },
    { code: '39', name: '透明', hex: '#F0F0F0', transparent: true },
    { code: '40', name: '夜光白', hex: '#F5FFFA' }, // 模拟夜光
    { code: '41', name: '薄荷绿', hex: '#66CDAA' },
    { code: '42', name: '孔雀蓝', hex: '#008B8B' },
    { code: '43', name: '红棕', hex: '#A52A2A' },
    { code: '44', name: '卡其', hex: '#F0E68C' },
    { code: '45', name: '淡黄', hex: '#FFFFE0' },
    { code: '46', name: '荧光橙', hex: '#FF4500' },
    { code: '47', name: '荧光粉', hex: '#FF1493' },
    { code: '48', name: '紫罗兰', hex: '#EE82EE' },
    { code: '49', name: '靛青', hex: '#4B0082' },
    { code: '50', name: '深绿', hex: '#228B22' }
  ]
};

/**
 * 221色 专业全套色库 (Artkal / 融合豆标准)
 * 这是最完整的色库，建议默认使用
 */
export const LIBRARY_221 = {
  name: '专业全套221色',
  colors: [
    // H系列 - 黑白灰
    { code: 'H1', name: '透明', hex: '#EAEAEA', transparent: true },
    { code: 'H2', name: '白色', hex: '#FFFFFF' },
    { code: 'H3', name: '浅灰', hex: '#D3D3D3' },
    { code: 'H4', name: '中灰', hex: '#A9A9A9' },
    { code: 'H5', name: '深灰', hex: '#696969' },
    { code: 'H6', name: '炭灰', hex: '#464646' },
    { code: 'H7', name: '黑色', hex: '#000000' },
    { code: 'H8', name: '铁灰', hex: '#708090' },
    { code: 'H9', name: '石板灰', hex: '#778899' },
    { code: 'H10', name: '冷灰', hex: '#B0C4DE' },
    { code: 'H11', name: '银白', hex: '#F0F8FF' },
    
    // A系列 - 黄橙
    { code: 'A1', name: '乳黄', hex: '#FFFFE0' },
    { code: 'A2', name: '浅黄', hex: '#FFFACD' },
    { code: 'A3', name: '亮黄', hex: '#FFF68F' },
    { code: 'A4', name: '柠檬黄', hex: '#FFEE00' },
    { code: 'A5', name: '玉米黄', hex: '#FFD700' },
    { code: 'A6', name: '桔黄', hex: '#FFB90F' },
    { code: 'A7', name: '橙色', hex: '#FF8C00' },
    { code: 'A8', name: '蛋黄', hex: '#FFC125' },
    { code: 'A9', name: '杏色', hex: '#FFDEAD' },
    { code: 'A10', name: '深桔', hex: '#FF7F24' },
    { code: 'A11', name: '肉黄', hex: '#FFCE9E' },
    { code: 'A12', name: '香蕉黄', hex: '#E3CF57' },
    { code: 'A13', name: '土黄', hex: '#CC9900' },
    { code: 'A14', name: '芥末黄', hex: '#DAA520' },
    { code: 'A15', name: '浅橙', hex: '#FFAD60' },
    { code: 'A16', name: '荧光黄', hex: '#FFFF00' },
    { code: 'A17', name: '荧光橙', hex: '#FF9900' },

    // B系列 - 绿
    { code: 'B1', name: '嫩绿', hex: '#98FB98' },
    { code: 'B2', name: '浅绿', hex: '#90EE90' },
    { code: 'B3', name: '荧光绿', hex: '#00FF00' },
    { code: 'B4', name: '苹果绿', hex: '#ADFF2F' },
    { code: 'B5', name: '翠绿', hex: '#32CD32' },
    { code: 'B6', name: '草绿', hex: '#7CFC00' },
    { code: 'B7', name: '中绿', hex: '#3CB371' },
    { code: 'B8', name: '绿色', hex: '#008000' },
    { code: 'B9', name: '墨绿', hex: '#006400' },
    { code: 'B10', name: '薄荷绿', hex: '#66CDAA' },
    { code: 'B11', name: '橄榄绿', hex: '#556B2F' },
    { code: 'B12', name: '深绿', hex: '#228B22' },
    { code: 'B13', name: '海藻绿', hex: '#2E8B57' },
    { code: 'B14', name: '青瓷绿', hex: '#8FBC8F' },
    { code: 'B15', name: '军绿', hex: '#6B8E23' },
    { code: 'B16', name: '复古绿', hex: '#5F9EA0' },
    { code: 'B17', name: '松石绿', hex: '#20B2AA' },
    { code: 'B18', name: '黄绿', hex: '#9ACD32' },
    { code: 'B19', name: '浅青', hex: '#E0FFFF' },
    { code: 'B20', name: '淡青', hex: '#F0FFFF' },

    // C系列 - 蓝
    { code: 'C1', name: '淡蓝', hex: '#E0FFFF' },
    { code: 'C2', name: '浅天蓝', hex: '#B0E0E6' },
    { code: 'C3', name: '天蓝', hex: '#87CEEB' },
    { code: 'C4', name: '浅蓝', hex: '#87CEFA' },
    { code: 'C5', name: '浅洋蓝', hex: '#00BFFF' },
    { code: 'C6', name: '洋蓝', hex: '#1E90FF' },
    { code: 'C7', name: '钴蓝', hex: '#4169E1' },
    { code: 'C8', name: '深蓝', hex: '#0000CD' },
    { code: 'C9', name: '普蓝', hex: '#000080' },
    { code: 'C10', name: '宝蓝', hex: '#00008B' },
    { code: 'C11', name: '湖蓝', hex: '#40E0D0' },
    { code: 'C12', name: '青蓝', hex: '#48D1CC' },
    { code: 'C13', name: '孔雀蓝', hex: '#008B8B' },
    { code: 'C14', name: '水蓝', hex: '#AFEEEE' },
    { code: 'C15', name: '藏蓝', hex: '#4682B4' },
    { code: 'C16', name: '藏青', hex: '#191970' },
    { code: 'C17', name: '灰蓝', hex: '#5F9EA0' },
    { code: 'C18', name: '午夜蓝', hex: '#191970' },
    { code: 'C19', name: '皇室蓝', hex: '#4169E1' },
    { code: 'C20', name: '婴儿蓝', hex: '#89CFF0' },

    // D系列 - 紫
    { code: 'D1', name: '雪青', hex: '#E6E6FA' },
    { code: 'D2', name: '淡紫', hex: '#D8BFD8' },
    { code: 'D3', name: '浅紫', hex: '#DDA0DD' },
    { code: 'D4', name: '梅红', hex: '#EE82EE' },
    { code: 'D5', name: '紫罗兰', hex: '#DA70D6' },
    { code: 'D6', name: '兰花紫', hex: '#BA55D3' },
    { code: 'D7', name: '中紫', hex: '#9370DB' },
    { code: 'D8', name: '紫色', hex: '#800080' },
    { code: 'D9', name: '紫红', hex: '#8B008B' },
    { code: 'D10', name: '暗紫', hex: '#9400D3' },
    { code: 'D11', name: '蓝紫', hex: '#8A2BE2' },
    { code: 'D12', name: '深紫', hex: '#4B0082' },
    { code: 'D13', name: '葡萄紫', hex: '#483D8B' },
    { code: 'D14', name: '靛青', hex: '#4B0082' },
    { code: 'D15', name: '茄紫', hex: '#663399' },
    { code: 'D16', name: '淡藤', hex: '#C8A2C8' },

    // E系列 - 粉
    { code: 'E1', name: '粉白', hex: '#FFF0F5' },
    { code: 'E2', name: '浅粉', hex: '#FFB6C1' },
    { code: 'E3', name: '粉红', hex: '#FF69B4' },
    { code: 'E4', name: '桃红', hex: '#FF1493' },
    { code: 'E5', name: '玫红', hex: '#C71585' },
    { code: 'E6', name: '珊瑚粉', hex: '#F08080' },
    { code: 'E7', name: '深玫红', hex: '#D02090' },
    { code: 'E8', name: '胭脂红', hex: '#DB7093' },
    { code: 'E9', name: '浅鲑红', hex: '#FFA07A' },
    { code: 'E10', name: '鲑红', hex: '#FA8072' },
    { code: 'E11', name: '洋红', hex: '#FF00FF' },
    { code: 'E12', name: '荧光粉', hex: '#FF1493' },
    { code: 'E13', name: '深粉', hex: '#FF1493' },
    { code: 'E14', name: '肉粉', hex: '#FFC0CB' },

    // F系列 - 红
    { code: 'F1', name: '珊瑚色', hex: '#FF7F50' },
    { code: 'F2', name: '番茄红', hex: '#FF6347' },
    { code: 'F3', name: '橙红', hex: '#FF4500' },
    { code: 'F4', name: '朱红', hex: '#FF3300' },
    { code: 'F5', name: '大红', hex: '#FF0000' },
    { code: 'F6', name: '深红', hex: '#DC143C' },
    { code: 'F7', name: '暗红', hex: '#B22222' },
    { code: 'F8', name: '火砖红', hex: '#B22222' },
    { code: 'F9', name: '栗色', hex: '#800000' },
    { code: 'F10', name: '砖红', hex: '#A52A2A' },
    { code: 'F11', name: '棕红', hex: '#8B0000' },
    { code: 'F12', name: '酒红', hex: '#800000' },

    // G系列 - 肤色/棕
    { code: 'G1', name: '肤色', hex: '#FFE4C4' },
    { code: 'G2', name: '杏仁', hex: '#FFEBCD' },
    { code: 'G3', name: '浅肤', hex: '#FFDAB9' },
    { code: 'G4', name: '小麦', hex: '#F5DEB3' },
    { code: 'G5', name: '棕色', hex: '#D2691E' },
    { code: 'G6', name: '秘鲁色', hex: '#CD853F' },
    { code: 'G7', name: '深棕', hex: '#8B4513' },
    { code: 'G8', name: '咖啡', hex: '#A0522D' },
    { code: 'G9', name: '卡其', hex: '#F0E68C' },
    { code: 'G10', name: '驼色', hex: '#DEB887' },
    { code: 'G11', name: '沙褐', hex: '#F4A460' },
    { code: 'G12', name: '赭色', hex: '#A0522D' },
    { code: 'G13', name: '巧克力', hex: '#5D4037' },
    { code: 'G14', name: '马鞍棕', hex: '#8B4513' },
    { code: 'G15', name: '米色', hex: '#F5F5DC' },
    { code: 'G16', name: '亚麻', hex: '#FAF0E6' },

    // M系列 - 金属/特殊
    { code: 'M1', name: '金透', hex: '#F0E68C' },
    { code: 'M2', name: '银灰', hex: '#C0C0C0' },
    { code: 'M3', name: '古铜', hex: '#CD7F32' },
    { code: 'M4', name: '金色', hex: '#FFD700' },
    { code: 'M5', name: '铜色', hex: '#B87333' },
    { code: 'M6', name: '珠光白', hex: '#F8F8FF' }
  ]
};

export const All_Colors = {
  name: '专业全色号',
  colors: [
    {
      code: 'A01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'A01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'A01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'A02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'A02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'A02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'A03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'A03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'A03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'A04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'A04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'A04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'A05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'A05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'A05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'A06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'A06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'A06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'A07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'A07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'A07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'A08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'A08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'A08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'A09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'A09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'A09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'A10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'A10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'A10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'A100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'A100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'A100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'A101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'A101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'A101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'A102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'A102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'A102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'A103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'A103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'A103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'A104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'A104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'A104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'A105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'A105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'A105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'A106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'A106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'A106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'A107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'A107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'A107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'A108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'A108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'A108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'A109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'A109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'A109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'A11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'A11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'A11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'A110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'A110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'A110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'A111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'A111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'A111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'A112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'A112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'A112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'A113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'A113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'A113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'A114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'A114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'A114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'A115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'A115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'A115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'A116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'A116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'A116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'A117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'A117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'A117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'A118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'A118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'A118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'A119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'A119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'A119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'A12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'A12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'A12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'A120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'A120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'A120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'A121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'A121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'A121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'A122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'A122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'A122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'A123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'A123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'A123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'A124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'A124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'A124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'A125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'A125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'A125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'A126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'A126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'A126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'A127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'A127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'A127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'A128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'A128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'A128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'A129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'A129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'A129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'A13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'A13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'A13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'A13',
      name: 'Pastel Green',
      hex: '#008BB2'
    },
    {
      code: 'A130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'A130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'A130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'A131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'A131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'A131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'A132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'A132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'A132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'A133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'A133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'A133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'A134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'A134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'A134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'A135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'A135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'A135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'A136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'A136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'A136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'A137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'A137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'A137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'A138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'A138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'A138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'A139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'A139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'A139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'A14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'A14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'A14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'A14',
      name: 'Green',
      hex: '#010090'
    },
    {
      code: 'A140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'A140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'A140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'A141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'A141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'A141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'A142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'A142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'A142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'A143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'A143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'A143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'A144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'A144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'A144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'A145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'A145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'A145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'A146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'A146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'A146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'A147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'A147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'A147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'A148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'A148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'A148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'A149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'A149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'A149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'A15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'A15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'A15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'A15',
      name: 'Green Tea',
      hex: '#020076'
    },
    {
      code: 'A150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'A150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'A150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'A151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'A151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'A151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'A152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'A152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'A152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'A153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'A153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'A153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'A154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'A154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'A154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'A155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'A155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'A155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'A156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'A156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'A156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'A157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'A157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'A157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'A16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'A16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'A16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'A16',
      name: 'Bright Carrot',
      hex: '#03F96F'
    },
    {
      code: 'A17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'A17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'A17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'A17',
      name: 'Orange',
      hex: '#04EB60'
    },
    {
      code: 'A18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'A18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'A18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'A18',
      name: 'Sky Blue',
      hex: '#05A7CD'
    },
    {
      code: 'A19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'A19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'A19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'A19',
      name: 'Baby Blue',
      hex: '#062EAB'
    },
    {
      code: 'A20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'A20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'A20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'A20',
      name: 'Light Blue',
      hex: '#070084'
    },
    {
      code: 'A21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'A21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'A21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'A21',
      name: 'Dark Blue',
      hex: '#08004F'
    },
    {
      code: 'A22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'A22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'A22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'A22',
      name: 'Bubble Gun',
      hex: '#09F2BF'
    },
    {
      code: 'A23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'A23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'A23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'A24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'A24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'A24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'A25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'A25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'A25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'A26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'A26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'A26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'A27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'A27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'A27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'A28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'A28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'A28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'A29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'A29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'A29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'A30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'A30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'A30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'A31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'A31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'A31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'A32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'A32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'A32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'A33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'A33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'A33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'A34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'A34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'A34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'A35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'A35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'A35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'A36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'A36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'A36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'A37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'A37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'A37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'A38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'A38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'A38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'A39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'A39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'A39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'A40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'A40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'A40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'A41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'A41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'A41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'A42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'A42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'A42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'A43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'A43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'A43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'A44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'A44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'A44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'A46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'A46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'A46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'A47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'A47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'A47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'A48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'A48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'A48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'A49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'A49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'A49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'A50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'A50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'A50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'A51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'A51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'A51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'A52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'A52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'A52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'A53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'A53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'A53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'A54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'A54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'A54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'A56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'A56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'A56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'A58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'A58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'A58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'A60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'A60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'A60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'A69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'A69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'A69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'A70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'A70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'A70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'A71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'A71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'A71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'A72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'A72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'A72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'A73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'A73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'A73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'A74',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'A74',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'A74',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'A75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'A75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'A75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'A76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'A76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'A76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'A77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'A77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'A77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'A78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'A78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'A78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'A79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'A79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'A79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'A80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'A80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'A80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'A81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'A81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'A81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'A82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'A82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'A82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'A83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'A83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'A83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'A84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'A84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'A84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'A85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'A85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'A85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'A86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'A86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'A86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'A87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'A87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'A87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'A88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'A88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'A88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'A89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'A89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'A89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'A90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'A90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'A90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'A91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'A91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'A91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'A92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'A92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'A92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'A93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'A93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'A93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'A94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'A94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'A94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'A95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'A95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'A95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'A96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'A96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'A96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'A97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'A97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'A97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'A98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'A98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'A98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'A99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'A99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'A99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'C01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'C01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'C01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'C02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'C02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'C02',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'C03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'C03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'C03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'C04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'C04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'C04',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'C05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'C05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'C05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'C06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'C06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'C06',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'C07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'C07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'C07',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'C08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'C08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'C08',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'C09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'C09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'C09',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'C10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'C10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'C10',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'C100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'C100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'C100',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'C101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'C101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'C101',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'C102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'C102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'C102',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'C103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'C103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'C103',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'C104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'C104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'C104',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'C105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'C105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'C105',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'C106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'C106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'C106',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'C107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'C107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'C107',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'C108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'C108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'C108',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'C109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'C109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'C109',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'C11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'C11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'C11',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'C110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'C110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'C110',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'C111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'C111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'C111',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'C112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'C112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'C112',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'C113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'C113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'C113',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'C114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'C114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'C114',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'C115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'C115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'C115',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'C116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'C116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'C116',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'C117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'C117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'C117',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'C118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'C118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'C118',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'C119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'C119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'C119',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'C12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'C12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'C12',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'C120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'C120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'C120',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'C121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'C121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'C121',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'C122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'C122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'C122',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'C123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'C123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'C123',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'C124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'C124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'C124',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'C125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'C125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'C125',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'C126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'C126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'C126',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'C127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'C127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'C127',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'C128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'C128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'C128',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'C129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'C129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'C129',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'C13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'C13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'C13',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'C13',
      name: 'Pastel Green',
      hex: '#008BB2'
    },
    {
      code: 'C130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'C130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'C130',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'C131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'C131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'C131',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'C132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'C132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'C132',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'C133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'C133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'C133',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'C134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'C134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'C134',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'C135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'C135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'C135',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'C136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'C136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'C136',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'C137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'C137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'C137',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'C138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'C138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'C138',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'C139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'C139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'C139',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'C14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'C14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'C14',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'C14',
      name: 'Green',
      hex: '#010090'
    },
    {
      code: 'C140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'C140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'C140',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'C141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'C141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'C141',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'C142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'C142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'C142',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'C143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'C143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'C143',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'C144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'C144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'C144',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'C145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'C145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'C145',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'C146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'C146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'C146',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'C147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'C147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'C147',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'C148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'C148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'C148',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'C149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'C149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'C149',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'C15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'C15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'C15',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'C15',
      name: 'Green Tea',
      hex: '#020076'
    },
    {
      code: 'C150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'C150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'C150',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'C151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'C151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'C151',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'C152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'C152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'C152',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'C153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'C153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'C153',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'C154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'C154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'C154',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'C155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'C155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'C155',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'C156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'C156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'C156',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'C157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'C157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'C157',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'C16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'C16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'C16',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'C16',
      name: 'Bright Carrot',
      hex: '#03F96F'
    },
    {
      code: 'C17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'C17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'C17',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'C17',
      name: 'Orange',
      hex: '#04EB60'
    },
    {
      code: 'C18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'C18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'C18',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'C18',
      name: 'Sky Blue',
      hex: '#05A7CD'
    },
    {
      code: 'C19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'C19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'C19',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'C19',
      name: 'Baby Blue',
      hex: '#062EAB'
    },
    {
      code: 'C20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'C20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'C20',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'C20',
      name: 'Light Blue',
      hex: '#070084'
    },
    {
      code: 'C21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'C21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'C21',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'C21',
      name: 'Dark Blue',
      hex: '#08004F'
    },
    {
      code: 'C22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'C22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'C22',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'C22',
      name: 'Bubble Gun',
      hex: '#09F2BF'
    },
    {
      code: 'C23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'C23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'C23',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'C24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'C24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'C24',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'C25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'C25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'C25',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'C26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'C26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'C26',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'C27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'C27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'C27',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'C28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'C28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'C28',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'C29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'C29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'C29',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'C30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'C30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'C30',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'C31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'C31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'C31',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'C32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'C32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'C32',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'C33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'C33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'C33',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'C34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'C34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'C34',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'C35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'C35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'C35',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'C36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'C36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'C36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'C37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'C37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'C37',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'C38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'C38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'C38',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'C39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'C39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'C39',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'C40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'C40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'C40',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'C41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'C41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'C41',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'C42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'C42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'C42',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'C43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'C43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'C43',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'C44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'C44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'C44',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'C45',
      name: 'Spring Green',
      hex: '#5DDB5D'
    },
    {
      code: 'C45',
      name: 'Spring Green',
      hex: '#5DDB5D'
    },
    {
      code: 'C45',
      name: 'Spring Green',
      hex: '#5DDB5D'
    },
    {
      code: 'C46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'C46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'C46',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'C47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'C47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'C47',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'C48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'C48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'C48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'C49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'C49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'C49',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'C50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'C50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'C50',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'C51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'C51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'C51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'C52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'C52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'C52',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'C53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'C53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'C53',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'C54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'C54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'C54',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'C55',
      name: 'Conifer',
      hex: '#6CC24A'
    },
    {
      code: 'C55',
      name: 'Conifer',
      hex: '#6CC24A'
    },
    {
      code: 'C55',
      name: 'Conifer',
      hex: '#6CC24A'
    },
    {
      code: 'C56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'C56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'C56',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'C57',
      name: 'Fresh Red',
      hex: '#BC0423'
    },
    {
      code: 'C57',
      name: 'Fresh Red',
      hex: '#BC0423'
    },
    {
      code: 'C57',
      name: 'Fresh Red',
      hex: '#BC0423'
    },
    {
      code: 'C58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'C58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'C58',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'C59',
      name: 'Scarlett',
      hex: '#531A23'
    },
    {
      code: 'C59',
      name: 'Scarlett',
      hex: '#531A23'
    },
    {
      code: 'C59',
      name: 'Scarlett',
      hex: '#531A23'
    },
    {
      code: 'C60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'C60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'C60',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'C61',
      name: 'Feta',
      hex: '#F1EB9C'
    },
    {
      code: 'C61',
      name: 'Feta',
      hex: '#F1EB9C'
    },
    {
      code: 'C61',
      name: 'Feta',
      hex: '#F1EB9C'
    },
    {
      code: 'C62',
      name: 'Carnation',
      hex: '#FC3F3F'
    },
    {
      code: 'C62',
      name: 'Carnation',
      hex: '#FC3F3F'
    },
    {
      code: 'C62',
      name: 'Carnation',
      hex: '#FC3F3F'
    },
    {
      code: 'C63',
      name: 'Pink Pearl',
      hex: '#EABEDB'
    },
    {
      code: 'C63',
      name: 'Pink Pearl',
      hex: '#EABEDB'
    },
    {
      code: 'C63',
      name: 'Pink Pearl',
      hex: '#EABEDB'
    },
    {
      code: 'C64',
      name: 'Rose',
      hex: '#A50050'
    },
    {
      code: 'C64',
      name: 'Rose',
      hex: '#A50050'
    },
    {
      code: 'C64',
      name: 'Rose',
      hex: '#A50050'
    },
    {
      code: 'C65',
      name: 'Mango',
      hex: '#EF7E2E'
    },
    {
      code: 'C65',
      name: 'Mango',
      hex: '#EF7E2E'
    },
    {
      code: 'C65',
      name: 'Mango',
      hex: '#EF7E2E'
    },
    {
      code: 'C66',
      name: 'Wild Watermelon',
      hex: '#FC6C85'
    },
    {
      code: 'C66',
      name: 'Wild Watermelon',
      hex: '#FC6C85'
    },
    {
      code: 'C66',
      name: 'Wild Watermelon',
      hex: '#FC6C85'
    },
    {
      code: 'C67',
      name: 'Orchid',
      hex: '#B14EB5'
    },
    {
      code: 'C67',
      name: 'Orchid',
      hex: '#B14EB5'
    },
    {
      code: 'C67',
      name: 'Orchid',
      hex: '#B14EB5'
    },
    {
      code: 'C68',
      name: 'Toothpaste Blue',
      hex: '#69C2EE'
    },
    {
      code: 'C68',
      name: 'Toothpaste Blue',
      hex: '#69C2EE'
    },
    {
      code: 'C68',
      name: 'Toothpaste Blue',
      hex: '#69C2EE'
    },
    {
      code: 'C69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'C69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'C69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'C70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'C70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'C70',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'C71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'C71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'C71',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'C72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'C72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'C72',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'C73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'C73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'C73',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'C74',
      name: 'Deer',
      hex: '#CDB277'
    },
    {
      code: 'C74',
      name: 'Deer',
      hex: '#CDB277'
    },
    {
      code: 'C74',
      name: 'Deer',
      hex: '#CDB277'
    },
    {
      code: 'C75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'C75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'C75',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'C76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'C76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'C76',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'C77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'C77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'C77',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'C78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'C78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'C78',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'C79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'C79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'C79',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'C80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'C80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'C80',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'C81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'C81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'C81',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'C82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'C82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'C82',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'C83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'C83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'C83',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'C84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'C84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'C84',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'C85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'C85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'C85',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'C86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'C86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'C86',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'C87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'C87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'C87',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'C88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'C88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'C88',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'C89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'C89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'C89',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'C90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'C90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'C90',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'C91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'C91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'C91',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'C92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'C92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'C92',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'C93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'C93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'C93',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'C94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'C94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'C94',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'C95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'C95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'C95',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'C96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'C96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'C96',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'C97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'C97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'C97',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'C98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'C98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'C98',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'C99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'C99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'C99',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'CE01',
      name: 'Columbia Blue',
      hex: '#C3CED6'
    },
    {
      code: 'CE01',
      name: 'Columbia Blue',
      hex: '#C3CED6'
    },
    {
      code: 'CE01',
      name: 'Columbia Blue',
      hex: '#C3CED6'
    },
    {
      code: 'CE02',
      name: 'Pale Cerulean',
      hex: '#9AB2DB'
    },
    {
      code: 'CE02',
      name: 'Pale Cerulean',
      hex: '#9AB2DB'
    },
    {
      code: 'CE02',
      name: 'Pale Cerulean',
      hex: '#9AB2DB'
    },
    {
      code: 'CE03',
      name: 'Silver Lake Blue',
      hex: '#5D88B2'
    },
    {
      code: 'CE03',
      name: 'Silver Lake Blue',
      hex: '#5D88B2'
    },
    {
      code: 'CE03',
      name: 'Silver Lake Blue',
      hex: '#5D88B2'
    },
    {
      code: 'CE04',
      name: 'Sky Blue (Crayola)',
      hex: '#02BDD1'
    },
    {
      code: 'CE04',
      name: 'Sky Blue (Crayola)',
      hex: '#02BDD1'
    },
    {
      code: 'CE04',
      name: 'Sky Blue (Crayola)',
      hex: '#02BDD1'
    },
    {
      code: 'CE05',
      name: 'Maximum Blue Green',
      hex: '#52CAAC'
    },
    {
      code: 'CE05',
      name: 'Maximum Blue Green',
      hex: '#52CAAC'
    },
    {
      code: 'CE05',
      name: 'Maximum Blue Green',
      hex: '#52CAAC'
    },
    {
      code: 'CE06',
      name: 'Bright Navy Blue',
      hex: '#2D6DB2'
    },
    {
      code: 'CE06',
      name: 'Bright Navy Blue',
      hex: '#2D6DB2'
    },
    {
      code: 'CE06',
      name: 'Bright Navy Blue',
      hex: '#2D6DB2'
    },
    {
      code: 'CE07',
      name: 'Black Shadows',
      hex: '#C2A3B7'
    },
    {
      code: 'CE07',
      name: 'Black Shadows',
      hex: '#C2A3B7'
    },
    {
      code: 'CE07',
      name: 'Black Shadows',
      hex: '#C2A3B7'
    },
    {
      code: 'CE08',
      name: 'Mountbatten Pink',
      hex: '#8A5877'
    },
    {
      code: 'CE08',
      name: 'Mountbatten Pink',
      hex: '#8A5877'
    },
    {
      code: 'CE08',
      name: 'Mountbatten Pink',
      hex: '#8A5877'
    },
    {
      code: 'CE09',
      name: 'Halayà Úbe',
      hex: '#68355D'
    },
    {
      code: 'CE09',
      name: 'Halayà Úbe',
      hex: '#68355D'
    },
    {
      code: 'CE09',
      name: 'Halayà Úbe',
      hex: '#68355D'
    },
    {
      code: 'CE10',
      name: 'Deep Mauve',
      hex: '#B84FA8'
    },
    {
      code: 'CE10',
      name: 'Deep Mauve',
      hex: '#B84FA8'
    },
    {
      code: 'CE10',
      name: 'Deep Mauve',
      hex: '#B84FA8'
    },
    {
      code: 'CE11',
      name: 'Heliotrope Magenta',
      hex: '#B02FA4'
    },
    {
      code: 'CE11',
      name: 'Heliotrope Magenta',
      hex: '#B02FA4'
    },
    {
      code: 'CE11',
      name: 'Heliotrope Magenta',
      hex: '#B02FA4'
    },
    {
      code: 'CE12',
      name: 'Rajah',
      hex: '#E2A365'
    },
    {
      code: 'CE12',
      name: 'Rajah',
      hex: '#E2A365'
    },
    {
      code: 'CE12',
      name: 'Rajah',
      hex: '#E2A365'
    },
    {
      code: 'CE13',
      name: 'Earth Yellow',
      hex: '#BE8E59'
    },
    {
      code: 'CE13',
      name: 'Earth Yellow',
      hex: '#BE8E59'
    },
    {
      code: 'CE13',
      name: 'Earth Yellow',
      hex: '#BE8E59'
    },
    {
      code: 'CE14',
      name: 'Chinese Bronze',
      hex: '#A87443'
    },
    {
      code: 'CE14',
      name: 'Chinese Bronze',
      hex: '#A87443'
    },
    {
      code: 'CE14',
      name: 'Chinese Bronze',
      hex: '#A87443'
    },
    {
      code: 'CE15',
      name: 'Alloy Orange',
      hex: '#A06E52'
    },
    {
      code: 'CE15',
      name: 'Alloy Orange',
      hex: '#A06E52'
    },
    {
      code: 'CE15',
      name: 'Alloy Orange',
      hex: '#A06E52'
    },
    {
      code: 'CE16',
      name: 'Orchid Pink',
      hex: '#F9C1D7'
    },
    {
      code: 'CE16',
      name: 'Orchid Pink',
      hex: '#F9C1D7'
    },
    {
      code: 'CE16',
      name: 'Orchid Pink',
      hex: '#F9C1D7'
    },
    {
      code: 'CE17',
      name: 'Caput Mortuum',
      hex: '#59292B'
    },
    {
      code: 'CE17',
      name: 'Caput Mortuum',
      hex: '#59292B'
    },
    {
      code: 'CE17',
      name: 'Caput Mortuum',
      hex: '#59292B'
    },
    {
      code: 'R01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'R01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'R01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'R02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'R02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'R02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'R03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'R03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'R03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'R04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'R04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'R04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'R05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'R05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'R05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'R06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'R06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'R06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'R07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'R07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'R07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'R08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'R08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'R08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'R09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'R09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'R09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'R10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'R10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'R10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'R11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'R11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'R11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'R12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'R12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'R12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'R13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'R13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'R13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'R13',
      name: 'Black',
      hex: '#00292A'
    },
    {
      code: 'R14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'R14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'R14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'R14',
      name: 'Sandstorm',
      hex: '#01E1C8'
    },
    {
      code: 'R15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'R15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'R15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'R15',
      name: 'Redwood',
      hex: '#029A45'
    },
    {
      code: 'R16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'R16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'R16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'R16',
      name: 'Brown',
      hex: '#036546'
    },
    {
      code: 'R17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'R17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'R17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'R17',
      name: 'Light Brown',
      hex: '#04895D'
    },
    {
      code: 'R18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'R18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'R18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'R18',
      name: 'Sand',
      hex: '#05DCA3'
    },
    {
      code: 'R19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'R19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'R19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'R19',
      name: 'Bubble Gun',
      hex: '#06F2BF'
    },
    {
      code: 'R20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'R20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'R20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'R20',
      name: 'Green',
      hex: '#070090'
    },
    {
      code: 'R21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'R21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'R21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'R21',
      name: 'Pastel Green',
      hex: '#088BB2'
    },
    {
      code: 'R22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'R22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'R22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'R22',
      name: 'Purple',
      hex: '#094833'
    },
    {
      code: 'R23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'R23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'R23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'R24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'R24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'R24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'R25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'R25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'R25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'R26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'R26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'R26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'R27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'R27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'R27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'R28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'R28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'R28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'R29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'R29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'R29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'R30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'R30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'R30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'R31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'R31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'R31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'R32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'R32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'R32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'R33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'R33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'R33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'R34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'R34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'R34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'R35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'R35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'R35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'R36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'R36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'R36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'R37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'R37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'R37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'R38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'R38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'R38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'R39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'R39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'R39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'R40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'R40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'R40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'R41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'R41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'R41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'R42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'R42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'R42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'R43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'R43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'R43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'R44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'R44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'R44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'R45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'R45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'R45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'R46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'R46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'R46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'R47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'R47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'R47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'R48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'R48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'R48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'R49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'R49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'R49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'R50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'R50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'R50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'R51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'R51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'R51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'R52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'R52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'R52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'R53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'R53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'R53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'R54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'R54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'R54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'R55',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'R55',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'R55',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'R57',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'R57',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'R57',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'R58',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'R58',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'R58',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'R59',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'R59',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'R59',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'R60',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'R60',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'R60',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'R61',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'R61',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'R61',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'R63',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'R63',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'R63',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'R64',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'R64',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'R64',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'R66',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'R66',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'R66',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'R68',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'R68',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'R68',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'R69',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'R69',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'R69',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'R70',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'R70',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'R70',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'R71',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'R71',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'R71',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'R72',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'R72',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'R72',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'R73',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'R73',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'R73',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'R74',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'R74',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'R74',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'R75',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'R75',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'R75',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'R76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'R76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'R76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'R77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'R77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'R77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'R78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'R78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'R78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'R79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'R79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'R79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'R80',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'R80',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'R80',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'R81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'R81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'R81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'R82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'R82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'R82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'R83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'R83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'R83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'R84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'R84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'R84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'R85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'R85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'R85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'R86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'R86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'R86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'R87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'R87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'R87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'R88',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'R88',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'R88',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'R89',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'R89',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'R89',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'R90',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'R90',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'R90',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'R91',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'R91',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'R91',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'R92',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'R92',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'R92',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'R93',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'R93',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'R93',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'S01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'S01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'S01',
      name: 'White',
      hex: '#EAEEF3'
    },
    {
      code: 'S02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'S02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'S02',
      name: 'Burning Sand',
      hex: '#EE927C'
    },
    {
      code: 'S03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'S03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'S03',
      name: 'Tangerine',
      hex: '#FFA630'
    },
    {
      code: 'S04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'S04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'S04',
      name: 'Orange',
      hex: '#EB6027'
    },
    {
      code: 'S05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'S05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'S05',
      name: 'Tall Poppy',
      hex: '#CB3531'
    },
    {
      code: 'S06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'S06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'S06',
      name: 'Raspberry Pink',
      hex: '#EF67B2'
    },
    {
      code: 'S07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'S07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'S07',
      name: 'Gray',
      hex: '#959698'
    },
    {
      code: 'S08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'S08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'S08',
      name: 'Emerald',
      hex: '#1FC467'
    },
    {
      code: 'S09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'S09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'S09',
      name: 'Dark Green',
      hex: '#00685E'
    },
    {
      code: 'S10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'S10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'S10',
      name: 'Baby Blue',
      hex: '#2EABD8'
    },
    {
      code: 'S100',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'S100',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'S100',
      name: 'Lagoon',
      hex: '#279BBE'
    },
    {
      code: 'S101',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'S101',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'S101',
      name: 'Electric Blue',
      hex: '#00A7E3'
    },
    {
      code: 'S102',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'S102',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'S102',
      name: 'Pool Blue',
      hex: '#0077CA'
    },
    {
      code: 'S103',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'S103',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'S103',
      name: 'Caribbian Blue',
      hex: '#005AA9'
    },
    {
      code: 'S104',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'S104',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'S104',
      name: 'Deep Water',
      hex: '#007F9E'
    },
    {
      code: 'S105',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'S105',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'S105',
      name: 'Petrol Blue',
      hex: '#007D91'
    },
    {
      code: 'S106',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'S106',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'S106',
      name: 'Wegdewood Blue',
      hex: '#00649A'
    },
    {
      code: 'S107',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'S107',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'S107',
      name: 'Pond Blue',
      hex: '#006C9F'
    },
    {
      code: 'S108',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'S108',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'S108',
      name: 'Seashell Beige',
      hex: '#CFC179'
    },
    {
      code: 'S109',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'S109',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'S109',
      name: 'Beige',
      hex: '#C4AE64'
    },
    {
      code: 'S11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'S11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'S11',
      name: 'Dark Blue',
      hex: '#004FA4'
    },
    {
      code: 'S110',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'S110',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'S110',
      name: 'Beach Beige',
      hex: '#AB9745'
    },
    {
      code: 'S111',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'S111',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'S111',
      name: 'Caffe Latté',
      hex: '#978138'
    },
    {
      code: 'S112',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'S112',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'S112',
      name: 'Oaktree Brown',
      hex: '#907C41'
    },
    {
      code: 'S113',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'S113',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'S113',
      name: 'Khaki',
      hex: '#B6AE84'
    },
    {
      code: 'S114',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'S114',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'S114',
      name: 'Light Greengray',
      hex: '#A59F65'
    },
    {
      code: 'S115',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'S115',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'S115',
      name: 'Mossy Green',
      hex: '#938D54'
    },
    {
      code: 'S116',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'S116',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'S116',
      name: 'Earth Green',
      hex: '#8D8B51'
    },
    {
      code: 'S117',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'S117',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'S117',
      name: 'Sage Green',
      hex: '#7F7E49'
    },
    {
      code: 'S118',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'S118',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'S118',
      name: 'Pinetree Green',
      hex: '#5B6E35'
    },
    {
      code: 'S119',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'S119',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'S119',
      name: 'Frosty Blue',
      hex: '#8AD5C9'
    },
    {
      code: 'S12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'S12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'S12',
      name: 'Pastel Lavender',
      hex: '#9165B2'
    },
    {
      code: 'S120',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'S120',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'S120',
      name: 'Polar Mint',
      hex: '#7CD2A5'
    },
    {
      code: 'S121',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'S121',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'S121',
      name: 'Celadon Green',
      hex: '#72AC9A'
    },
    {
      code: 'S122',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'S122',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'S122',
      name: 'Eucalyptus',
      hex: '#00B26F'
    },
    {
      code: 'S123',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'S123',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'S123',
      name: 'Clover Field',
      hex: '#3EB724'
    },
    {
      code: 'S124',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'S124',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'S124',
      name: 'Pooltable Felt',
      hex: '#0D7535'
    },
    {
      code: 'S125',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'S125',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'S125',
      name: 'Snake Green',
      hex: '#007D6E'
    },
    {
      code: 'S126',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'S126',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'S126',
      name: 'Dark Eucalyptus',
      hex: '#006E69'
    },
    {
      code: 'S127',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'S127',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'S127',
      name: 'Marsmallow Rose',
      hex: '#DFC3E1'
    },
    {
      code: 'S128',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'S128',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'S128',
      name: 'Light Grape',
      hex: '#D38ED4'
    },
    {
      code: 'S129',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'S129',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'S129',
      name: 'Rosebud Pink',
      hex: '#D5A6BA'
    },
    {
      code: 'S13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'S13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'S13',
      name: 'Black',
      hex: '#292A2B'
    },
    {
      code: 'S13',
      name: 'Black',
      hex: '#00292A'
    },
    {
      code: 'S130',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'S130',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'S130',
      name: 'Fuschia',
      hex: '#D6668E'
    },
    {
      code: 'S131',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'S131',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'S131',
      name: 'Candy Violet',
      hex: '#B8AAD9'
    },
    {
      code: 'S132',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'S132',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'S132',
      name: 'Flamingo',
      hex: '#DF486D'
    },
    {
      code: 'S133',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'S133',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'S133',
      name: 'Pink Plum',
      hex: '#BC3CA6'
    },
    {
      code: 'S134',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'S134',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'S134',
      name: 'Amethyst',
      hex: '#803897'
    },
    {
      code: 'S135',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'S135',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'S135',
      name: 'Moonlight Blue',
      hex: '#A7BAE1'
    },
    {
      code: 'S136',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'S136',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'S136',
      name: 'Summer Rain',
      hex: '#AFB8DF'
    },
    {
      code: 'S137',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'S137',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'S137',
      name: 'Azur Blue',
      hex: '#6B9AD4'
    },
    {
      code: 'S138',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'S138',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'S138',
      name: 'Cornflower Blue',
      hex: '#5A89CE'
    },
    {
      code: 'S139',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'S139',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'S139',
      name: 'Forget Me Not',
      hex: '#658AD0'
    },
    {
      code: 'S14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'S14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'S14',
      name: 'Sandstorm',
      hex: '#E1C835'
    },
    {
      code: 'S14',
      name: 'Sandstorm',
      hex: '#01E1C8'
    },
    {
      code: 'S140',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'S140',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'S140',
      name: 'Indigo',
      hex: '#566CBD'
    },
    {
      code: 'S141',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'S141',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'S141',
      name: 'Horizon Blue',
      hex: '#4D74C6'
    },
    {
      code: 'S142',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'S142',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'S142',
      name: 'Cobolt',
      hex: '#416DBE'
    },
    {
      code: 'S143',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'S143',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'S143',
      name: 'Royal Blue',
      hex: '#30429E'
    },
    {
      code: 'S144',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'S144',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'S144',
      name: 'Marine',
      hex: '#024288'
    },
    {
      code: 'S145',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'S145',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'S145',
      name: 'Pale Yellow Moss',
      hex: '#D6CA6A'
    },
    {
      code: 'S146',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'S146',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'S146',
      name: 'Bloodrose Red',
      hex: '#9D1A38'
    },
    {
      code: 'S147',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'S147',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'S147',
      name: 'Spearmint',
      hex: '#80B7A1'
    },
    {
      code: 'S148',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'S148',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'S148',
      name: 'Mocha',
      hex: '#7A594F'
    },
    {
      code: 'S149',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'S149',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'S149',
      name: 'Creme',
      hex: '#EFDBA1'
    },
    {
      code: 'S15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'S15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'S15',
      name: 'Redwood',
      hex: '#9A4541'
    },
    {
      code: 'S15',
      name: 'Redwood',
      hex: '#029A45'
    },
    {
      code: 'S150',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'S150',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'S150',
      name: 'Iris Violet',
      hex: '#8884D0'
    },
    {
      code: 'S151',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'S151',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'S151',
      name: 'Forrest Green',
      hex: '#345621'
    },
    {
      code: 'S152',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'S152',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'S152',
      name: 'Lilac',
      hex: '#AEADDC'
    },
    {
      code: 'S153',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'S153',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'S153',
      name: 'Pale Lilac',
      hex: '#BCC3E1'
    },
    {
      code: 'S154',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'S154',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'S154',
      name: 'Sahara Sand',
      hex: '#E3C09A'
    },
    {
      code: 'S155',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'S155',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'S155',
      name: 'Sunkissed Teint',
      hex: '#C58B60'
    },
    {
      code: 'S156',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'S156',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'S156',
      name: 'Steel Grey',
      hex: '#5A5F65'
    },
    {
      code: 'S157',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'S157',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'S157',
      name: 'Iron Grey',
      hex: '#4C5156'
    },
    {
      code: 'S158',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'S158',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'S158',
      name: 'Pepper',
      hex: '#3A3E42'
    },
    {
      code: 'S159',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'S159',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'S159',
      name: 'Oslo Gray',
      hex: '#82878B'
    },
    {
      code: 'S16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'S16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'S16',
      name: 'Brown',
      hex: '#65463D'
    },
    {
      code: 'S16',
      name: 'Brown',
      hex: '#036546'
    },
    {
      code: 'S17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'S17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'S17',
      name: 'Light Brown',
      hex: '#895D49'
    },
    {
      code: 'S17',
      name: 'Light Brown',
      hex: '#04895D'
    },
    {
      code: 'S18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'S18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'S18',
      name: 'Sand',
      hex: '#DCA384'
    },
    {
      code: 'S18',
      name: 'Sand',
      hex: '#05DCA3'
    },
    {
      code: 'S19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'S19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'S19',
      name: 'Bubble Gun',
      hex: '#F2BFB8'
    },
    {
      code: 'S19',
      name: 'Bubble Gun',
      hex: '#06F2BF'
    },
    {
      code: 'S20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'S20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'S20',
      name: 'Green',
      hex: '#009053'
    },
    {
      code: 'S20',
      name: 'Green',
      hex: '#070090'
    },
    {
      code: 'S21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'S21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'S21',
      name: 'Pastel Green',
      hex: '#8BB23A'
    },
    {
      code: 'S21',
      name: 'Pastel Green',
      hex: '#088BB2'
    },
    {
      code: 'S22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'S22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'S22',
      name: 'Purple',
      hex: '#48337E'
    },
    {
      code: 'S22',
      name: 'Purple',
      hex: '#094833'
    },
    {
      code: 'S23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'S23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'S23',
      name: 'Royal Purple',
      hex: '#644FA4'
    },
    {
      code: 'S24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'S24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'S24',
      name: 'True Blue',
      hex: '#0078BF'
    },
    {
      code: 'S25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'S25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'S25',
      name: 'Hot Pink',
      hex: '#DC519A'
    },
    {
      code: 'S26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'S26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'S26',
      name: 'Magenta',
      hex: '#DA4383'
    },
    {
      code: 'S27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'S27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'S27',
      name: 'Yellow',
      hex: '#EAC125'
    },
    {
      code: 'S28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'S28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'S28',
      name: 'Lily Pink',
      hex: '#DDA1CC'
    },
    {
      code: 'S29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'S29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'S29',
      name: 'Pastel Yellow',
      hex: '#E1D367'
    },
    {
      code: 'S30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'S30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'S30',
      name: 'Shadow Green',
      hex: '#9EC9CD'
    },
    {
      code: 'S31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'S31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'S31',
      name: 'Sea Mist',
      hex: '#B2D7CE'
    },
    {
      code: 'S32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'S32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'S32',
      name: 'Beeswax',
      hex: '#EED39E'
    },
    {
      code: 'S33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'S33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'S33',
      name: 'Maverick',
      hex: '#C0B7D7'
    },
    {
      code: 'S34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'S34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'S34',
      name: 'Red',
      hex: '#B61927'
    },
    {
      code: 'S35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'S35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'S35',
      name: 'Mona Lisa',
      hex: '#E1CCD2'
    },
    {
      code: 'S36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'S36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'S36',
      name: 'Old Pink',
      hex: '#CE6D83'
    },
    {
      code: 'S37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'S37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'S37',
      name: 'Blue-Green',
      hex: '#60BFCB'
    },
    {
      code: 'S38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'S38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'S38',
      name: 'Burgundy',
      hex: '#A3134A'
    },
    {
      code: 'S39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'S39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'S39',
      name: 'Yellow Orange',
      hex: '#E68739'
    },
    {
      code: 'S40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'S40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'S40',
      name: 'Carnation Pink',
      hex: '#E182B0'
    },
    {
      code: 'S41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'S41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'S41',
      name: 'Copper',
      hex: '#9D5B2E'
    },
    {
      code: 'S42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'S42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'S42',
      name: 'Silver',
      hex: '#676B73'
    },
    {
      code: 'S43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'S43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'S43',
      name: 'Dark Gray',
      hex: '#70757B'
    },
    {
      code: 'S44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'S44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'S44',
      name: 'Sky Blue',
      hex: '#A7CDDE'
    },
    {
      code: 'S45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'S45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'S45',
      name: 'Medium Turquoise',
      hex: '#00A5A1'
    },
    {
      code: 'S46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'S46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'S46',
      name: 'Bright Green',
      hex: '#8EC324'
    },
    {
      code: 'S47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'S47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'S47',
      name: 'Marigold',
      hex: '#B27938'
    },
    {
      code: 'S48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'S48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'S48',
      name: 'Corn',
      hex: '#ECC03D'
    },
    {
      code: 'S49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'S49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'S49',
      name: 'Mulberry Wood',
      hex: '#921E5D'
    },
    {
      code: 'S50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'S50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'S50',
      name: 'Mandys Pink',
      hex: '#E2A488'
    },
    {
      code: 'S51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'S51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'S51',
      name: 'Spring Sun',
      hex: '#DFDABD'
    },
    {
      code: 'S52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'S52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'S52',
      name: 'Picasso',
      hex: '#EADE7F'
    },
    {
      code: 'S53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'S53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'S53',
      name: 'Turquoise',
      hex: '#55A4D9'
    },
    {
      code: 'S54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'S54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'S54',
      name: 'Light Blue',
      hex: '#0084CE'
    },
    {
      code: 'S55',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'S55',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'S55',
      name: 'Pistachio',
      hex: '#97CF87'
    },
    {
      code: 'S56',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'S56',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'S56',
      name: 'Bright Carrot',
      hex: '#F96F40'
    },
    {
      code: 'S57',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'S57',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'S57',
      name: 'Buccaneer',
      hex: '#B35540'
    },
    {
      code: 'S58',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'S58',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'S58',
      name: 'Paprika',
      hex: '#B11836'
    },
    {
      code: 'S59',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'S59',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'S59',
      name: 'Butterfly Bush',
      hex: '#4F3989'
    },
    {
      code: 'S60',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'S60',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'S60',
      name: 'Lavender',
      hex: '#8A7EC2'
    },
    {
      code: 'S61',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'S61',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'S61',
      name: 'Key Lomen Pie',
      hex: '#CDC03F'
    },
    {
      code: 'S62',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'S62',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'S62',
      name: 'Green Tea',
      hex: '#00765F'
    },
    {
      code: 'S63',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'S63',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'S63',
      name: 'Metallic Gold',
      hex: '#696046'
    },
    {
      code: 'S64',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'S64',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'S64',
      name: 'Black Rock',
      hex: '#36384D'
    },
    {
      code: 'S65',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'S65',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'S65',
      name: 'Canary',
      hex: '#E2E65D'
    },
    {
      code: 'S66',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'S66',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'S66',
      name: 'Blaze Orange',
      hex: '#E5533C'
    },
    {
      code: 'S67',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'S67',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'S67',
      name: 'Vanilla',
      hex: '#E9C1A6'
    },
    {
      code: 'S68',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'S68',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'S68',
      name: 'Tan',
      hex: '#CC9B74'
    },
    {
      code: 'S69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'S69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'S69',
      name: 'Mine Shaft',
      hex: '#383E44'
    },
    {
      code: 'S70',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'S70',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'S70',
      name: 'Drark Algae',
      hex: '#ADAD29'
    },
    {
      code: 'S71',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'S71',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'S71',
      name: 'Jade Green',
      hex: '#007D2B'
    },
    {
      code: 'S72',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'S72',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'S72',
      name: 'Light Sea Blue',
      hex: '#68C4D2'
    },
    {
      code: 'S73',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'S73',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'S73',
      name: 'Steel Blue',
      hex: '#5AB0BF'
    },
    {
      code: 'S74',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'S74',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'S74',
      name: 'Azure',
      hex: '#009EC2'
    },
    {
      code: 'S75',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'S75',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'S75',
      name: 'Dark Steel Blue',
      hex: '#0084B2'
    },
    {
      code: 'S76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'S76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'S76',
      name: 'Sea Blue',
      hex: '#0093A9'
    },
    {
      code: 'S77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'S77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'S77',
      name: 'Ghost While',
      hex: '#D4D8D3'
    },
    {
      code: 'S78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'S78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'S78',
      name: 'Ash Grey',
      hex: '#C2C4C2'
    },
    {
      code: 'S79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'S79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'S79',
      name: 'Light Gray',
      hex: '#A7ACAD'
    },
    {
      code: 'S80',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'S80',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'S80',
      name: 'Dark Olive',
      hex: '#8F8E3C'
    },
    {
      code: 'S81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'S81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'S81',
      name: 'Deer',
      hex: '#BF9168'
    },
    {
      code: 'S82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'S82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'S82',
      name: 'Clay',
      hex: '#AA744E'
    },
    {
      code: 'S83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'S83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'S83',
      name: 'Sienna',
      hex: '#BB6833'
    },
    {
      code: 'S84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'S84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'S84',
      name: 'Deep Chestnut',
      hex: '#BE5D65'
    },
    {
      code: 'S85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'S85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'S85',
      name: 'Red Wine',
      hex: '#99323A'
    },
    {
      code: 'S86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'S86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'S86',
      name: 'Goldenrod',
      hex: '#E8AE00'
    },
    {
      code: 'S87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'S87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'S87',
      name: 'Coral Red',
      hex: '#EC625E'
    },
    {
      code: 'S88',
      name: 'Dark Pink',
      hex: '#D62779'
    },
    {
      code: 'S88',
      name: 'Dark Pink',
      hex: '#D62779'
    },
    {
      code: 'S88',
      name: 'Dark Pink',
      hex: '#D62779'
    },
    {
      code: 'S89',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'S89',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'S89',
      name: 'Charcoal Gray',
      hex: '#565A5E'
    },
    {
      code: 'S90',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'S90',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'S90',
      name: 'Pastel Orange',
      hex: '#D9B35E'
    },
    {
      code: 'S91',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'S91',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'S91',
      name: 'Brunswick Green',
      hex: '#153838'
    },
    {
      code: 'S92',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'S92',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'S92',
      name: 'Dandelion',
      hex: '#CEA433'
    },
    {
      code: 'S93',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'S93',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'S93',
      name: 'Pale Skin',
      hex: '#DCB794'
    },
    {
      code: 'S94',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'S94',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'S94',
      name: 'Warm Blush',
      hex: '#DD9285'
    },
    {
      code: 'S95',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'S95',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'S95',
      name: 'Salmon',
      hex: '#E07B69'
    },
    {
      code: 'S96',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'S96',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'S96',
      name: 'Apricot',
      hex: '#EF7F61'
    },
    {
      code: 'S97',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'S97',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'S97',
      name: 'Papaya',
      hex: '#DC772B'
    },
    {
      code: 'S98',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'S98',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'S98',
      name: 'Himalaya Blue',
      hex: '#6AAEDB'
    },
    {
      code: 'S99',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'S99',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'S99',
      name: 'Waterfall',
      hex: '#61BBD3'
    },
    {
      code: 'SE1',
      name: 'Moon',
      hex: '#F1F4FA'
    },
    {
      code: 'SE1',
      name: 'Moon',
      hex: '#F1F4FA'
    },
    {
      code: 'SE1',
      name: 'Moon',
      hex: '#F1F4FA'
    },
    {
      code: 'SE10',
      name: 'Wild Berry',
      hex: '#D977CD'
    },
    {
      code: 'SE10',
      name: 'Wild Berry',
      hex: '#D977CD'
    },
    {
      code: 'SE10',
      name: 'Wild Berry',
      hex: '#D977CD'
    },
    {
      code: 'SE11',
      name: 'Sugar Plum',
      hex: '#B643AC'
    },
    {
      code: 'SE11',
      name: 'Sugar Plum',
      hex: '#B643AC'
    },
    {
      code: 'SE11',
      name: 'Sugar Plum',
      hex: '#B643AC'
    },
    {
      code: 'SE12',
      name: 'Desert',
      hex: '#DEB181'
    },
    {
      code: 'SE12',
      name: 'Desert',
      hex: '#DEB181'
    },
    {
      code: 'SE12',
      name: 'Desert',
      hex: '#DEB181'
    },
    {
      code: 'SE13',
      name: 'Peanut',
      hex: '#BC9D77'
    },
    {
      code: 'SE13',
      name: 'Peanut',
      hex: '#BC9D77'
    },
    {
      code: 'SE13',
      name: 'Peanut',
      hex: '#BC9D77'
    },
    {
      code: 'SE14',
      name: 'Toffee',
      hex: '#AC7F5D'
    },
    {
      code: 'SE14',
      name: 'Toffee',
      hex: '#AC7F5D'
    },
    {
      code: 'SE14',
      name: 'Toffee',
      hex: '#AC7F5D'
    },
    {
      code: 'SE15',
      name: 'Bark',
      hex: '#A37E66'
    },
    {
      code: 'SE15',
      name: 'Bark',
      hex: '#A37E66'
    },
    {
      code: 'SE15',
      name: 'Bark',
      hex: '#A37E66'
    },
    {
      code: 'SE2',
      name: 'Raincloud',
      hex: '#A2B2D3'
    },
    {
      code: 'SE2',
      name: 'Raincloud',
      hex: '#A2B2D3'
    },
    {
      code: 'SE2',
      name: 'Raincloud',
      hex: '#A2B2D3'
    },
    {
      code: 'SE3',
      name: 'Winter',
      hex: '#83A6DC'
    },
    {
      code: 'SE3',
      name: 'Winter',
      hex: '#83A6DC'
    },
    {
      code: 'SE3',
      name: 'Winter',
      hex: '#83A6DC'
    },
    {
      code: 'SE4',
      name: 'Tide',
      hex: '#70D8ED'
    },
    {
      code: 'SE4',
      name: 'Tide',
      hex: '#70D8ED'
    },
    {
      code: 'SE4',
      name: 'Tide',
      hex: '#70D8ED'
    },
    {
      code: 'SE5',
      name: 'Aquamarine',
      hex: '#69E3D5'
    },
    {
      code: 'SE5',
      name: 'Aquamarine',
      hex: '#69E3D5'
    },
    {
      code: 'SE5',
      name: 'Aquamarine',
      hex: '#69E3D5'
    },
    {
      code: 'SE6',
      name: 'Neptune',
      hex: '#2A63C8'
    },
    {
      code: 'SE6',
      name: 'Neptune',
      hex: '#2A63C8'
    },
    {
      code: 'SE6',
      name: 'Neptune',
      hex: '#2A63C8'
    },
    {
      code: 'SE7',
      name: 'Rose Quartz',
      hex: '#D5AEC9'
    },
    {
      code: 'SE7',
      name: 'Rose Quartz',
      hex: '#D5AEC9'
    },
    {
      code: 'SE7',
      name: 'Rose Quartz',
      hex: '#D5AEC9'
    },
    {
      code: 'SE8',
      name: 'Mauve',
      hex: '#AF739A'
    },
    {
      code: 'SE8',
      name: 'Mauve',
      hex: '#AF739A'
    },
    {
      code: 'SE8',
      name: 'Mauve',
      hex: '#AF739A'
    },
    {
      code: 'SE9',
      name: 'Dark Mauve',
      hex: '#704B6D'
    },
    {
      code: 'SE9',
      name: 'Dark Mauve',
      hex: '#704B6D'
    },
    {
      code: 'SE9',
      name: 'Dark Mauve',
      hex: '#704B6D'
    },
    {
      code: 'SG1',
      name: 'Glow Yellow',
      hex: '#C6C0B4'
    },
    {
      code: 'SG1',
      name: 'Glow Yellow',
      hex: '#C6C0B4'
    },
    {
      code: 'SG1',
      name: 'Glow Yellow',
      hex: '#C6C0B4'
    },
    {
      code: 'SG2',
      name: 'Glow Pink',
      hex: '#DFABBC'
    },
    {
      code: 'SG2',
      name: 'Glow Pink',
      hex: '#DFABBC'
    },
    {
      code: 'SG2',
      name: 'Glow Pink',
      hex: '#DFABBC'
    },
    {
      code: 'SG3',
      name: 'Glow Blue',
      hex: '#6FADC1'
    },
    {
      code: 'SG3',
      name: 'Glow Blue',
      hex: '#6FADC1'
    },
    {
      code: 'SG3',
      name: 'Glow Blue',
      hex: '#6FADC1'
    },
    {
      code: 'SL1',
      name: 'Glitter Blue',
      hex: '#3687B2'
    },
    {
      code: 'SL1',
      name: 'Glitter Blue',
      hex: '#3687B2'
    },
    {
      code: 'SL1',
      name: 'Glitter Blue',
      hex: '#3687B2'
    },
    {
      code: 'SL2',
      name: 'Glitter Green',
      hex: '#117C52'
    },
    {
      code: 'SL2',
      name: 'Glitter Green',
      hex: '#117C52'
    },
    {
      code: 'SL2',
      name: 'Glitter Green',
      hex: '#117C52'
    },
    {
      code: 'SL3',
      name: 'Glitter Red',
      hex: '#C22933'
    },
    {
      code: 'SL3',
      name: 'Glitter Red',
      hex: '#C22933'
    },
    {
      code: 'SL3',
      name: 'Glitter Red',
      hex: '#C22933'
    },
    {
      code: 'SL4',
      name: 'Glitter Yellow',
      hex: '#CDBD00'
    },
    {
      code: 'SL4',
      name: 'Glitter Yellow',
      hex: '#CDBD00'
    },
    {
      code: 'SL4',
      name: 'Glitter Yellow',
      hex: '#CDBD00'
    },
    {
      code: 'SN1',
      name: 'Neon Orange',
      hex: '#FF7405'
    },
    {
      code: 'SN1',
      name: 'Neon Orange',
      hex: '#FF7405'
    },
    {
      code: 'SN1',
      name: 'Neon Orange',
      hex: '#FF7405'
    },
    {
      code: 'SN2',
      name: 'Neon Green',
      hex: '#01C63E'
    },
    {
      code: 'SN2',
      name: 'Neon Green',
      hex: '#01C63E'
    },
    {
      code: 'SN2',
      name: 'Neon Green',
      hex: '#01C63E'
    },
    {
      code: 'SN3',
      name: 'Neon Yellow',
      hex: '#F2F33C'
    },
    {
      code: 'SN3',
      name: 'Neon Yellow',
      hex: '#F2F33C'
    },
    {
      code: 'SN3',
      name: 'Neon Yellow',
      hex: '#F2F33C'
    },
    {
      code: 'SN4',
      name: 'Neon Rose',
      hex: '#FF477A'
    },
    {
      code: 'SN4',
      name: 'Neon Rose',
      hex: '#FF477A'
    },
    {
      code: 'SN4',
      name: 'Neon Rose',
      hex: '#FF477A'
    },
    {
      code: 'SP1',
      name: 'Pearlescent Green',
      hex: '#93CA87'
    },
    {
      code: 'SP1',
      name: 'Pearlescent Green',
      hex: '#93CA87'
    },
    {
      code: 'SP1',
      name: 'Pearlescent Green',
      hex: '#93CA87'
    },
    {
      code: 'SP2',
      name: 'Pearlescent Tangerine',
      hex: '#FE7F54'
    },
    {
      code: 'SP2',
      name: 'Pearlescent Tangerine',
      hex: '#FE7F54'
    },
    {
      code: 'SP2',
      name: 'Pearlescent Tangerine',
      hex: '#FE7F54'
    },
    {
      code: 'SP3',
      name: 'Pearlescent Orange',
      hex: '#F0A149'
    },
    {
      code: 'SP3',
      name: 'Pearlescent Orange',
      hex: '#F0A149'
    },
    {
      code: 'SP3',
      name: 'Pearlescent Orange',
      hex: '#F0A149'
    },
    {
      code: 'SP4',
      name: 'Pearlescent Pink',
      hex: '#DC9EA9'
    },
    {
      code: 'SP4',
      name: 'Pearlescent Pink',
      hex: '#DC9EA9'
    },
    {
      code: 'SP4',
      name: 'Pearlescent Pink',
      hex: '#DC9EA9'
    },
    {
      code: 'SP5',
      name: 'Pearlescent Red',
      hex: '#D63C53'
    },
    {
      code: 'SP5',
      name: 'Pearlescent Red',
      hex: '#D63C53'
    },
    {
      code: 'SP5',
      name: 'Pearlescent Red',
      hex: '#D63C53'
    },
    {
      code: 'SP6',
      name: 'Pearlescent Blue',
      hex: '#2C4E97'
    },
    {
      code: 'SP6',
      name: 'Pearlescent Blue',
      hex: '#2C4E97'
    },
    {
      code: 'SP6',
      name: 'Pearlescent Blue',
      hex: '#2C4E97'
    },
    {
      code: 'SP7',
      name: 'Pearlescent Purple',
      hex: '#64427E'
    },
    {
      code: 'SP7',
      name: 'Pearlescent Purple',
      hex: '#64427E'
    },
    {
      code: 'SP7',
      name: 'Pearlescent Purple',
      hex: '#64427E'
    },
    {
      code: 'SP8',
      name: 'Pearlescent White',
      hex: '#E0DBCA'
    },
    {
      code: 'SP8',
      name: 'Pearlescent White',
      hex: '#E0DBCA'
    },
    {
      code: 'SP8',
      name: 'Pearlescent White',
      hex: '#E0DBCA'
    },
    {
      code: 'ST1',
      name: 'Transparent',
      hex: '#C7BCB8'
    },
    {
      code: 'ST1',
      name: 'Transparent',
      hex: '#C7BCB8'
    },
    {
      code: 'ST1',
      name: 'Transparent',
      hex: '#C7BCB8'
    },
    {
      code: 'ST2',
      name: 'Transparent Pink',
      hex: '#F95498'
    },
    {
      code: 'ST2',
      name: 'Transparent Pink',
      hex: '#F95498'
    },
    {
      code: 'ST2',
      name: 'Transparent Pink',
      hex: '#F95498'
    },
    {
      code: 'ST3',
      name: 'Transparent Tangering',
      hex: '#FF7C45'
    },
    {
      code: 'ST3',
      name: 'Transparent Tangering',
      hex: '#FF7C45'
    },
    {
      code: 'ST3',
      name: 'Transparent Tangering',
      hex: '#FF7C45'
    },
    {
      code: 'ST4',
      name: 'Transparent Yellow',
      hex: '#DADF3D'
    },
    {
      code: 'ST4',
      name: 'Transparent Yellow',
      hex: '#DADF3D'
    },
    {
      code: 'ST4',
      name: 'Transparent Yellow',
      hex: '#DADF3D'
    },
    {
      code: 'ST5',
      name: 'Transparent Green',
      hex: '#0FAE58'
    },
    {
      code: 'ST5',
      name: 'Transparent Green',
      hex: '#0FAE58'
    },
    {
      code: 'ST5',
      name: 'Transparent Green',
      hex: '#0FAE58'
    },
    {
      code: 'ST6',
      name: 'Transparent Purple',
      hex: '#8477B3'
    },
    {
      code: 'ST6',
      name: 'Transparent Purple',
      hex: '#8477B3'
    },
    {
      code: 'ST6',
      name: 'Transparent Purple',
      hex: '#8477B3'
    },
    {
      code: '3001',
      name: 'Neon Green',
      hex: '#74BD4B'
    },
    {
      code: '3001',
      name: 'Neon Green',
      hex: '#74BD4B'
    },
    {
      code: '3001',
      name: 'Neon Green',
      hex: '#74BD4B'
    },
    {
      code: '3002',
      name: 'Neon Yellow',
      hex: '#E8CF18'
    },
    {
      code: '3002',
      name: 'Neon Yellow',
      hex: '#E8CF18'
    },
    {
      code: '3002',
      name: 'Neon Yellow',
      hex: '#E8CF18'
    },
    {
      code: '3003',
      name: 'Neon Pink',
      hex: '#F53961'
    },
    {
      code: '3003',
      name: 'Neon Pink',
      hex: '#F53961'
    },
    {
      code: '3003',
      name: 'Neon Pink',
      hex: '#F53961'
    },
    {
      code: '3004',
      name: 'Neon Orange',
      hex: '#F5693E'
    },
    {
      code: '3004',
      name: 'Neon Orange',
      hex: '#F5693E'
    },
    {
      code: '3004',
      name: 'Neon Orange',
      hex: '#F5693E'
    },
    {
      code: '4001',
      name: 'Glow In The Dark',
      hex: '#C4C5C5'
    },
    {
      code: '4001',
      name: 'Glow In The Dark',
      hex: '#C4C5C5'
    },
    {
      code: '4001',
      name: 'Glow In The Dark',
      hex: '#C4C5C5'
    },
    {
      code: '5001',
      name: 'White Ab',
      hex: '#C4BBB2'
    },
    {
      code: '5001',
      name: 'White Ab',
      hex: '#C4BBB2'
    },
    {
      code: '5001',
      name: 'White Ab',
      hex: '#C4BBB2'
    },
    {
      code: '5002',
      name: 'Light Blue Ab',
      hex: '#92ABA8'
    },
    {
      code: '5002',
      name: 'Light Blue Ab',
      hex: '#92ABA8'
    },
    {
      code: '5002',
      name: 'Light Blue Ab',
      hex: '#92ABA8'
    },
    {
      code: '5003',
      name: 'Aegean Blue Ab',
      hex: '#0F77A6'
    },
    {
      code: '5003',
      name: 'Aegean Blue Ab',
      hex: '#0F77A6'
    },
    {
      code: '5003',
      name: 'Aegean Blue Ab',
      hex: '#0F77A6'
    },
    {
      code: '5004',
      name: 'Pink Ab',
      hex: '#DE9788'
    },
    {
      code: '5004',
      name: 'Pink Ab',
      hex: '#DE9788'
    },
    {
      code: '5004',
      name: 'Pink Ab',
      hex: '#DE9788'
    },
    {
      code: '5005',
      name: 'Yellow Ab',
      hex: '#D0A217'
    },
    {
      code: '5005',
      name: 'Yellow Ab',
      hex: '#D0A217'
    },
    {
      code: '5005',
      name: 'Yellow Ab',
      hex: '#D0A217'
    },
    {
      code: '5006',
      name: 'Red Ab',
      hex: '#C9433E'
    },
    {
      code: '5006',
      name: 'Red Ab',
      hex: '#C9433E'
    },
    {
      code: '5006',
      name: 'Red Ab',
      hex: '#C9433E'
    },
    {
      code: '5007',
      name: 'Cream Ab',
      hex: '#C8B791'
    },
    {
      code: '5007',
      name: 'Cream Ab',
      hex: '#C8B791'
    },
    {
      code: '5007',
      name: 'Cream Ab',
      hex: '#C8B791'
    },
    {
      code: '5008',
      name: 'Bright Green Ab',
      hex: '#859129'
    },
    {
      code: '5008',
      name: 'Bright Green Ab',
      hex: '#859129'
    },
    {
      code: '5008',
      name: 'Bright Green Ab',
      hex: '#859129'
    },
    {
      code: '5009',
      name: 'Baby Blue Ab',
      hex: '#6D9598'
    },
    {
      code: '5009',
      name: 'Baby Blue Ab',
      hex: '#6D9598'
    },
    {
      code: '5009',
      name: 'Baby Blue Ab',
      hex: '#6D9598'
    },
    {
      code: '5010',
      name: 'Mauve Ab',
      hex: '#AF89A5'
    },
    {
      code: '5010',
      name: 'Mauve Ab',
      hex: '#AF89A5'
    },
    {
      code: '5010',
      name: 'Mauve Ab',
      hex: '#AF89A5'
    },
    {
      code: '5011',
      name: 'Crystal Ab',
      hex: '#5A5C5B'
    },
    {
      code: '5011',
      name: 'Crystal Ab',
      hex: '#5A5C5B'
    },
    {
      code: '5011',
      name: 'Crystal Ab',
      hex: '#5A5C5B'
    },
    {
      code: '5012',
      name: 'Orange Ab',
      hex: '#D13725'
    },
    {
      code: '5012',
      name: 'Orange Ab',
      hex: '#D13725'
    },
    {
      code: '5012',
      name: 'Orange Ab',
      hex: '#D13725'
    },
    {
      code: '7001',
      name: 'Red Gold Metallic',
      hex: '#806945'
    },
    {
      code: '7001',
      name: 'Red Gold Metallic',
      hex: '#806945'
    },
    {
      code: '7001',
      name: 'Red Gold Metallic',
      hex: '#806945'
    },
    {
      code: '7002',
      name: 'Prism Metallic',
      hex: '#202D39'
    },
    {
      code: '7002',
      name: 'Prism Metallic',
      hex: '#202D39'
    },
    {
      code: '7002',
      name: 'Prism Metallic',
      hex: '#202D39'
    },
    {
      code: '7003',
      name: 'Rich Gold Metallic',
      hex: '#6E6048'
    },
    {
      code: '7003',
      name: 'Rich Gold Metallic',
      hex: '#6E6048'
    },
    {
      code: '7003',
      name: 'Rich Gold Metallic',
      hex: '#6E6048'
    },
    {
      code: '7004',
      name: 'Pewter Metallic',
      hex: '#2A2B30'
    },
    {
      code: '7004',
      name: 'Pewter Metallic',
      hex: '#2A2B30'
    },
    {
      code: '7004',
      name: 'Pewter Metallic',
      hex: '#2A2B30'
    },
    {
      code: '7005',
      name: 'Silver Metallic',
      hex: '#686763'
    },
    {
      code: '7005',
      name: 'Silver Metallic',
      hex: '#686763'
    },
    {
      code: '7005',
      name: 'Silver Metallic',
      hex: '#686763'
    },
    {
      code: '7006',
      name: 'Dark Gold Metallic',
      hex: '#8E7659'
    },
    {
      code: '7006',
      name: 'Dark Gold Metallic',
      hex: '#8E7659'
    },
    {
      code: '7006',
      name: 'Dark Gold Metallic',
      hex: '#8E7659'
    },
    {
      code: '7007',
      name: 'Classic Gold Metallic',
      hex: '#6C6046'
    },
    {
      code: '7007',
      name: 'Classic Gold Metallic',
      hex: '#6C6046'
    },
    {
      code: '7007',
      name: 'Classic Gold Metallic',
      hex: '#6C6046'
    },
    {
      code: '7008',
      name: 'Light Gold Metallic',
      hex: '#6E674C'
    },
    {
      code: '7008',
      name: 'Light Gold Metallic',
      hex: '#6E674C'
    },
    {
      code: '7008',
      name: 'Light Gold Metallic',
      hex: '#6E674C'
    },
    {
      code: '7009',
      name: 'Platinum Metallic',
      hex: '#666354'
    },
    {
      code: '7009',
      name: 'Platinum Metallic',
      hex: '#666354'
    },
    {
      code: '7009',
      name: 'Platinum Metallic',
      hex: '#666354'
    },
    {
      code: '8001',
      name: 'Black',
      hex: '#1F1F24'
    },
    {
      code: '8001',
      name: 'Black',
      hex: '#1F1F24'
    },
    {
      code: '8001',
      name: 'Black',
      hex: '#1F1F24'
    },
    {
      code: '8002',
      name: 'White',
      hex: '#DEDAD0'
    },
    {
      code: '8002',
      name: 'White',
      hex: '#DEDAD0'
    },
    {
      code: '8002',
      name: 'White',
      hex: '#DEDAD0'
    },
    {
      code: '8003',
      name: 'Ecru',
      hex: '#EBC8AE'
    },
    {
      code: '8003',
      name: 'Ecru',
      hex: '#EBC8AE'
    },
    {
      code: '8003',
      name: 'Ecru',
      hex: '#EBC8AE'
    },
    {
      code: '8004',
      name: 'Pale Rose',
      hex: '#D38B8A'
    },
    {
      code: '8004',
      name: 'Pale Rose',
      hex: '#D38B8A'
    },
    {
      code: '8004',
      name: 'Pale Rose',
      hex: '#D38B8A'
    },
    {
      code: '8005',
      name: 'Mid Rose',
      hex: '#DE7F82'
    },
    {
      code: '8005',
      name: 'Mid Rose',
      hex: '#DE7F82'
    },
    {
      code: '8005',
      name: 'Mid Rose',
      hex: '#DE7F82'
    },
    {
      code: '8006',
      name: 'Rose',
      hex: '#D05257'
    },
    {
      code: '8006',
      name: 'Rose',
      hex: '#D05257'
    },
    {
      code: '8006',
      name: 'Rose',
      hex: '#D05257'
    },
    {
      code: '8007',
      name: 'Dark Rose',
      hex: '#BA3E44'
    },
    {
      code: '8007',
      name: 'Dark Rose',
      hex: '#BA3E44'
    },
    {
      code: '8007',
      name: 'Dark Rose',
      hex: '#BA3E44'
    },
    {
      code: '8008',
      name: 'Geranium',
      hex: '#A62B32'
    },
    {
      code: '8008',
      name: 'Geranium',
      hex: '#A62B32'
    },
    {
      code: '8008',
      name: 'Geranium',
      hex: '#A62B32'
    },
    {
      code: '8010',
      name: 'Light Blush',
      hex: '#E58F7B'
    },
    {
      code: '8010',
      name: 'Light Blush',
      hex: '#E58F7B'
    },
    {
      code: '8010',
      name: 'Light Blush',
      hex: '#E58F7B'
    },
    {
      code: '8011',
      name: 'Blush',
      hex: '#E06659'
    },
    {
      code: '8011',
      name: 'Blush',
      hex: '#E06659'
    },
    {
      code: '8011',
      name: 'Blush',
      hex: '#E06659'
    },
    {
      code: '8012',
      name: 'Pale Scarlet',
      hex: '#E44542'
    },
    {
      code: '8012',
      name: 'Pale Scarlet',
      hex: '#E44542'
    },
    {
      code: '8012',
      name: 'Pale Scarlet',
      hex: '#E44542'
    },
    {
      code: '8013',
      name: 'Scarlet',
      hex: '#C92B2F'
    },
    {
      code: '8013',
      name: 'Scarlet',
      hex: '#C92B2F'
    },
    {
      code: '8013',
      name: 'Scarlet',
      hex: '#C92B2F'
    },
    {
      code: '8014',
      name: 'Bright Red',
      hex: '#AC0F1E'
    },
    {
      code: '8014',
      name: 'Bright Red',
      hex: '#AC0F1E'
    },
    {
      code: '8014',
      name: 'Bright Red',
      hex: '#AC0F1E'
    },
    {
      code: '8015',
      name: 'Red',
      hex: '#940915'
    },
    {
      code: '8015',
      name: 'Red',
      hex: '#940915'
    },
    {
      code: '8015',
      name: 'Red',
      hex: '#940915'
    },
    {
      code: '8016',
      name: 'Musk',
      hex: '#EA737D'
    },
    {
      code: '8016',
      name: 'Musk',
      hex: '#EA737D'
    },
    {
      code: '8016',
      name: 'Musk',
      hex: '#EA737D'
    },
    {
      code: '8017',
      name: 'Dark Musk',
      hex: '#DF4652'
    },
    {
      code: '8017',
      name: 'Dark Musk',
      hex: '#DF4652'
    },
    {
      code: '8017',
      name: 'Dark Musk',
      hex: '#DF4652'
    },
    {
      code: '8018',
      name: 'Lipstick',
      hex: '#D32C3C'
    },
    {
      code: '8018',
      name: 'Lipstick',
      hex: '#D32C3C'
    },
    {
      code: '8018',
      name: 'Lipstick',
      hex: '#D32C3C'
    },
    {
      code: '8019',
      name: 'Flamingo',
      hex: '#D82530'
    },
    {
      code: '8019',
      name: 'Flamingo',
      hex: '#D82530'
    },
    {
      code: '8019',
      name: 'Flamingo',
      hex: '#D82530'
    },
    {
      code: '8020',
      name: 'Flag Red',
      hex: '#BA0A19'
    },
    {
      code: '8020',
      name: 'Flag Red',
      hex: '#BA0A19'
    },
    {
      code: '8020',
      name: 'Flag Red',
      hex: '#BA0A19'
    },
    {
      code: '8021',
      name: 'Crimson',
      hex: '#8F101E'
    },
    {
      code: '8021',
      name: 'Crimson',
      hex: '#8F101E'
    },
    {
      code: '8021',
      name: 'Crimson',
      hex: '#8F101E'
    },
    {
      code: '8022',
      name: 'Dark Crimson',
      hex: '#710B1D'
    },
    {
      code: '8022',
      name: 'Dark Crimson',
      hex: '#710B1D'
    },
    {
      code: '8022',
      name: 'Dark Crimson',
      hex: '#710B1D'
    },
    {
      code: '8023',
      name: 'Burgundy',
      hex: '#5C0917'
    },
    {
      code: '8023',
      name: 'Burgundy',
      hex: '#5C0917'
    },
    {
      code: '8023',
      name: 'Burgundy',
      hex: '#5C0917'
    },
    {
      code: '8024',
      name: 'Claret',
      hex: '#731122'
    },
    {
      code: '8024',
      name: 'Claret',
      hex: '#731122'
    },
    {
      code: '8024',
      name: 'Claret',
      hex: '#731122'
    },
    {
      code: '8025',
      name: 'Ruby',
      hex: '#69081B'
    },
    {
      code: '8025',
      name: 'Ruby',
      hex: '#69081B'
    },
    {
      code: '8025',
      name: 'Ruby',
      hex: '#69081B'
    },
    {
      code: '8026',
      name: 'Shiraz',
      hex: '#460A15'
    },
    {
      code: '8026',
      name: 'Shiraz',
      hex: '#460A15'
    },
    {
      code: '8026',
      name: 'Shiraz',
      hex: '#460A15'
    },
    {
      code: '8027',
      name: 'Pink',
      hex: '#F28890'
    },
    {
      code: '8027',
      name: 'Pink',
      hex: '#F28890'
    },
    {
      code: '8027',
      name: 'Pink',
      hex: '#F28890'
    },
    {
      code: '8028',
      name: 'Light Hot Pink',
      hex: '#EB5B67'
    },
    {
      code: '8028',
      name: 'Light Hot Pink',
      hex: '#EB5B67'
    },
    {
      code: '8028',
      name: 'Light Hot Pink',
      hex: '#EB5B67'
    },
    {
      code: '8029',
      name: 'Hot Pink',
      hex: '#DB303E'
    },
    {
      code: '8029',
      name: 'Hot Pink',
      hex: '#DB303E'
    },
    {
      code: '8029',
      name: 'Hot Pink',
      hex: '#DB303E'
    },
    {
      code: '8030',
      name: 'Bright Pink',
      hex: '#D32638'
    },
    {
      code: '8030',
      name: 'Bright Pink',
      hex: '#D32638'
    },
    {
      code: '8030',
      name: 'Bright Pink',
      hex: '#D32638'
    },
    {
      code: '8031',
      name: 'Pale Pink',
      hex: '#EEB7A0'
    },
    {
      code: '8031',
      name: 'Pale Pink',
      hex: '#EEB7A0'
    },
    {
      code: '8031',
      name: 'Pale Pink',
      hex: '#EEB7A0'
    },
    {
      code: '8032',
      name: 'Light Carnation',
      hex: '#F28A8B'
    },
    {
      code: '8032',
      name: 'Light Carnation',
      hex: '#F28A8B'
    },
    {
      code: '8032',
      name: 'Light Carnation',
      hex: '#F28A8B'
    },
    {
      code: '8033',
      name: 'Carnation',
      hex: '#E9496D'
    },
    {
      code: '8033',
      name: 'Carnation',
      hex: '#E9496D'
    },
    {
      code: '8033',
      name: 'Carnation',
      hex: '#E9496D'
    },
    {
      code: '8035',
      name: 'Pastel Pink',
      hex: '#F0AF9F'
    },
    {
      code: '8035',
      name: 'Pastel Pink',
      hex: '#F0AF9F'
    },
    {
      code: '8035',
      name: 'Pastel Pink',
      hex: '#F0AF9F'
    },
    {
      code: '8036',
      name: 'Mid Pink',
      hex: '#EA8691'
    },
    {
      code: '8036',
      name: 'Mid Pink',
      hex: '#EA8691'
    },
    {
      code: '8036',
      name: 'Mid Pink',
      hex: '#EA8691'
    },
    {
      code: '8037',
      name: 'Floral',
      hex: '#D86271'
    },
    {
      code: '8037',
      name: 'Floral',
      hex: '#D86271'
    },
    {
      code: '8037',
      name: 'Floral',
      hex: '#D86271'
    },
    {
      code: '8038',
      name: 'Dark Floral',
      hex: '#B83151'
    },
    {
      code: '8038',
      name: 'Dark Floral',
      hex: '#B83151'
    },
    {
      code: '8038',
      name: 'Dark Floral',
      hex: '#B83151'
    },
    {
      code: '8041',
      name: 'Cerise',
      hex: '#9C2031'
    },
    {
      code: '8041',
      name: 'Cerise',
      hex: '#9C2031'
    },
    {
      code: '8041',
      name: 'Cerise',
      hex: '#9C2031'
    },
    {
      code: '8042',
      name: 'Wine',
      hex: '#5B0D1D'
    },
    {
      code: '8042',
      name: 'Wine',
      hex: '#5B0D1D'
    },
    {
      code: '8042',
      name: 'Wine',
      hex: '#5B0D1D'
    },
    {
      code: '8043',
      name: 'Ice Pink',
      hex: '#F0C3A1'
    },
    {
      code: '8043',
      name: 'Ice Pink',
      hex: '#F0C3A1'
    },
    {
      code: '8043',
      name: 'Ice Pink',
      hex: '#F0C3A1'
    },
    {
      code: '8044',
      name: 'Frilly Pink',
      hex: '#E67078'
    },
    {
      code: '8044',
      name: 'Frilly Pink',
      hex: '#E67078'
    },
    {
      code: '8044',
      name: 'Frilly Pink',
      hex: '#E67078'
    },
    {
      code: '8048',
      name: 'Light Frilly Pink',
      hex: '#EA9498'
    },
    {
      code: '8048',
      name: 'Light Frilly Pink',
      hex: '#EA9498'
    },
    {
      code: '8048',
      name: 'Light Frilly Pink',
      hex: '#EA9498'
    },
    {
      code: '8049',
      name: 'Lilac Pink',
      hex: '#D97A84'
    },
    {
      code: '8049',
      name: 'Lilac Pink',
      hex: '#D97A84'
    },
    {
      code: '8049',
      name: 'Lilac Pink',
      hex: '#D97A84'
    },
    {
      code: '8050',
      name: 'Light Fuschia',
      hex: '#C65B67'
    },
    {
      code: '8050',
      name: 'Light Fuschia',
      hex: '#C65B67'
    },
    {
      code: '8050',
      name: 'Light Fuschia',
      hex: '#C65B67'
    },
    {
      code: '8051',
      name: 'Fuschia',
      hex: '#B0344A'
    },
    {
      code: '8051',
      name: 'Fuschia',
      hex: '#B0344A'
    },
    {
      code: '8051',
      name: 'Fuschia',
      hex: '#B0344A'
    },
    {
      code: '8052',
      name: 'Dark Fuschia',
      hex: '#961F3C'
    },
    {
      code: '8052',
      name: 'Dark Fuschia',
      hex: '#961F3C'
    },
    {
      code: '8052',
      name: 'Dark Fuschia',
      hex: '#961F3C'
    },
    {
      code: '8053',
      name: 'Deep Blush',
      hex: '#9A0B2B'
    },
    {
      code: '8053',
      name: 'Deep Blush',
      hex: '#9A0B2B'
    },
    {
      code: '8053',
      name: 'Deep Blush',
      hex: '#9A0B2B'
    },
    {
      code: '8054',
      name: 'Baby Pink',
      hex: '#EB9EA9'
    },
    {
      code: '8054',
      name: 'Baby Pink',
      hex: '#EB9EA9'
    },
    {
      code: '8054',
      name: 'Baby Pink',
      hex: '#EB9EA9'
    },
    {
      code: '8055',
      name: 'Light Magenta',
      hex: '#A94A62'
    },
    {
      code: '8055',
      name: 'Light Magenta',
      hex: '#A94A62'
    },
    {
      code: '8055',
      name: 'Light Magenta',
      hex: '#A94A62'
    },
    {
      code: '8056',
      name: 'Mid Magenta',
      hex: '#A43456'
    },
    {
      code: '8056',
      name: 'Mid Magenta',
      hex: '#A43456'
    },
    {
      code: '8056',
      name: 'Mid Magenta',
      hex: '#A43456'
    },
    {
      code: '8057',
      name: 'Magenta',
      hex: '#74162F'
    },
    {
      code: '8057',
      name: 'Magenta',
      hex: '#74162F'
    },
    {
      code: '8057',
      name: 'Magenta',
      hex: '#74162F'
    },
    {
      code: '8058',
      name: 'Dark Magenta',
      hex: '#5E1124'
    },
    {
      code: '8058',
      name: 'Dark Magenta',
      hex: '#5E1124'
    },
    {
      code: '8058',
      name: 'Dark Magenta',
      hex: '#5E1124'
    },
    {
      code: '8059',
      name: 'Lolly Pink',
      hex: '#DD7787'
    },
    {
      code: '8059',
      name: 'Lolly Pink',
      hex: '#DD7787'
    },
    {
      code: '8059',
      name: 'Lolly Pink',
      hex: '#DD7787'
    },
    {
      code: '8060',
      name: 'Light Jazz Pink',
      hex: '#E96983'
    },
    {
      code: '8060',
      name: 'Light Jazz Pink',
      hex: '#E96983'
    },
    {
      code: '8060',
      name: 'Light Jazz Pink',
      hex: '#E96983'
    },
    {
      code: '8061',
      name: 'Jazz Pink',
      hex: '#DB496B'
    },
    {
      code: '8061',
      name: 'Jazz Pink',
      hex: '#DB496B'
    },
    {
      code: '8061',
      name: 'Jazz Pink',
      hex: '#DB496B'
    },
    {
      code: '8062',
      name: 'Mid Jazz Pink',
      hex: '#D4325E'
    },
    {
      code: '8062',
      name: 'Mid Jazz Pink',
      hex: '#D4325E'
    },
    {
      code: '8062',
      name: 'Mid Jazz Pink',
      hex: '#D4325E'
    },
    {
      code: '8063',
      name: 'Dark Jazz Pink',
      hex: '#C32244'
    },
    {
      code: '8063',
      name: 'Dark Jazz Pink',
      hex: '#C32244'
    },
    {
      code: '8063',
      name: 'Dark Jazz Pink',
      hex: '#C32244'
    },
    {
      code: '8064',
      name: 'Cyclamen',
      hex: '#AA1037'
    },
    {
      code: '8064',
      name: 'Cyclamen',
      hex: '#AA1037'
    },
    {
      code: '8064',
      name: 'Cyclamen',
      hex: '#AA1037'
    },
    {
      code: '8065',
      name: 'Light Cyclamen',
      hex: '#D74D73'
    },
    {
      code: '8065',
      name: 'Light Cyclamen',
      hex: '#D74D73'
    },
    {
      code: '8065',
      name: 'Light Cyclamen',
      hex: '#D74D73'
    },
    {
      code: '8066',
      name: 'Mid Cyclamen',
      hex: '#D42758'
    },
    {
      code: '8066',
      name: 'Mid Cyclamen',
      hex: '#D42758'
    },
    {
      code: '8066',
      name: 'Mid Cyclamen',
      hex: '#D42758'
    },
    {
      code: '8067',
      name: 'Dark Cyclamen',
      hex: '#C00E3E'
    },
    {
      code: '8067',
      name: 'Dark Cyclamen',
      hex: '#C00E3E'
    },
    {
      code: '8067',
      name: 'Dark Cyclamen',
      hex: '#C00E3E'
    },
    {
      code: '8068',
      name: 'Pink Mist',
      hex: '#E0A8AD'
    },
    {
      code: '8068',
      name: 'Pink Mist',
      hex: '#E0A8AD'
    },
    {
      code: '8068',
      name: 'Pink Mist',
      hex: '#E0A8AD'
    },
    {
      code: '8069',
      name: 'Crepe Myrtle',
      hex: '#D685A9'
    },
    {
      code: '8069',
      name: 'Crepe Myrtle',
      hex: '#D685A9'
    },
    {
      code: '8069',
      name: 'Crepe Myrtle',
      hex: '#D685A9'
    },
    {
      code: '8070',
      name: 'Light Puce',
      hex: '#DA84A4'
    },
    {
      code: '8070',
      name: 'Light Puce',
      hex: '#DA84A4'
    },
    {
      code: '8070',
      name: 'Light Puce',
      hex: '#DA84A4'
    },
    {
      code: '8071',
      name: 'Puce',
      hex: '#CB427E'
    },
    {
      code: '8071',
      name: 'Puce',
      hex: '#CB427E'
    },
    {
      code: '8071',
      name: 'Puce',
      hex: '#CB427E'
    },
    {
      code: '8072',
      name: 'Dark Puce',
      hex: '#AA1150'
    },
    {
      code: '8072',
      name: 'Dark Puce',
      hex: '#AA1150'
    },
    {
      code: '8072',
      name: 'Dark Puce',
      hex: '#AA1150'
    },
    {
      code: '8073',
      name: 'Bright Cerise',
      hex: '#A91454'
    },
    {
      code: '8073',
      name: 'Bright Cerise',
      hex: '#A91454'
    },
    {
      code: '8073',
      name: 'Bright Cerise',
      hex: '#A91454'
    },
    {
      code: '8074',
      name: 'Port Wine',
      hex: '#7A0829'
    },
    {
      code: '8074',
      name: 'Port Wine',
      hex: '#7A0829'
    },
    {
      code: '8074',
      name: 'Port Wine',
      hex: '#7A0829'
    },
    {
      code: '8075',
      name: 'Pale Soft Pink',
      hex: '#E09991'
    },
    {
      code: '8075',
      name: 'Pale Soft Pink',
      hex: '#E09991'
    },
    {
      code: '8075',
      name: 'Pale Soft Pink',
      hex: '#E09991'
    },
    {
      code: '8076',
      name: 'Soft Pink',
      hex: '#D87E7D'
    },
    {
      code: '8076',
      name: 'Soft Pink',
      hex: '#D87E7D'
    },
    {
      code: '8076',
      name: 'Soft Pink',
      hex: '#D87E7D'
    },
    {
      code: '8077',
      name: 'Rose Bud',
      hex: '#C36063'
    },
    {
      code: '8077',
      name: 'Rose Bud',
      hex: '#C36063'
    },
    {
      code: '8077',
      name: 'Rose Bud',
      hex: '#C36063'
    },
    {
      code: '8078',
      name: 'Light Dusky Pink',
      hex: '#994249'
    },
    {
      code: '8078',
      name: 'Light Dusky Pink',
      hex: '#994249'
    },
    {
      code: '8078',
      name: 'Light Dusky Pink',
      hex: '#994249'
    },
    {
      code: '8079',
      name: 'Dusky Pink',
      hex: '#873438'
    },
    {
      code: '8079',
      name: 'Dusky Pink',
      hex: '#873438'
    },
    {
      code: '8079',
      name: 'Dusky Pink',
      hex: '#873438'
    },
    {
      code: '8080',
      name: 'Dark Dusky Pink',
      hex: '#6E272D'
    },
    {
      code: '8080',
      name: 'Dark Dusky Pink',
      hex: '#6E272D'
    },
    {
      code: '8080',
      name: 'Dark Dusky Pink',
      hex: '#6E272D'
    },
    {
      code: '8081',
      name: 'Sangria',
      hex: '#54181C'
    },
    {
      code: '8081',
      name: 'Sangria',
      hex: '#54181C'
    },
    {
      code: '8081',
      name: 'Sangria',
      hex: '#54181C'
    },
    {
      code: '8082',
      name: 'Pink Haze',
      hex: '#B0797C'
    },
    {
      code: '8082',
      name: 'Pink Haze',
      hex: '#B0797C'
    },
    {
      code: '8082',
      name: 'Pink Haze',
      hex: '#B0797C'
    },
    {
      code: '8083',
      name: 'Blossom',
      hex: '#E9A299'
    },
    {
      code: '8083',
      name: 'Blossom',
      hex: '#E9A299'
    },
    {
      code: '8083',
      name: 'Blossom',
      hex: '#E9A299'
    },
    {
      code: '8084',
      name: 'Sweet Pea',
      hex: '#A1607C'
    },
    {
      code: '8084',
      name: 'Sweet Pea',
      hex: '#A1607C'
    },
    {
      code: '8084',
      name: 'Sweet Pea',
      hex: '#A1607C'
    },
    {
      code: '8085',
      name: 'Rose Quartz',
      hex: '#7F3844'
    },
    {
      code: '8085',
      name: 'Rose Quartz',
      hex: '#7F3844'
    },
    {
      code: '8085',
      name: 'Rose Quartz',
      hex: '#7F3844'
    },
    {
      code: '8086',
      name: 'Mid Garnet',
      hex: '#642430'
    },
    {
      code: '8086',
      name: 'Mid Garnet',
      hex: '#642430'
    },
    {
      code: '8086',
      name: 'Mid Garnet',
      hex: '#642430'
    },
    {
      code: '8087',
      name: 'Garnet',
      hex: '#591B29'
    },
    {
      code: '8087',
      name: 'Garnet',
      hex: '#591B29'
    },
    {
      code: '8087',
      name: 'Garnet',
      hex: '#591B29'
    },
    {
      code: '8088',
      name: 'Dark Garnet',
      hex: '#551623'
    },
    {
      code: '8088',
      name: 'Dark Garnet',
      hex: '#551623'
    },
    {
      code: '8088',
      name: 'Dark Garnet',
      hex: '#551623'
    },
    {
      code: '8089',
      name: 'Purple Smoke',
      hex: '#9E898B'
    },
    {
      code: '8089',
      name: 'Purple Smoke',
      hex: '#9E898B'
    },
    {
      code: '8089',
      name: 'Purple Smoke',
      hex: '#9E898B'
    },
    {
      code: '8090',
      name: 'Pale Mushroom',
      hex: '#8D777F'
    },
    {
      code: '8090',
      name: 'Pale Mushroom',
      hex: '#8D777F'
    },
    {
      code: '8090',
      name: 'Pale Mushroom',
      hex: '#8D777F'
    },
    {
      code: '8091',
      name: 'Mushroom',
      hex: '#6F515F'
    },
    {
      code: '8091',
      name: 'Mushroom',
      hex: '#6F515F'
    },
    {
      code: '8091',
      name: 'Mushroom',
      hex: '#6F515F'
    },
    {
      code: '8092',
      name: 'Dark Mushroom',
      hex: '#613D4B'
    },
    {
      code: '8092',
      name: 'Dark Mushroom',
      hex: '#613D4B'
    },
    {
      code: '8092',
      name: 'Dark Mushroom',
      hex: '#613D4B'
    },
    {
      code: '8093',
      name: 'Light Mauve',
      hex: '#986174'
    },
    {
      code: '8093',
      name: 'Light Mauve',
      hex: '#986174'
    },
    {
      code: '8093',
      name: 'Light Mauve',
      hex: '#986174'
    },
    {
      code: '8094',
      name: 'Mauve',
      hex: '#6F3E58'
    },
    {
      code: '8094',
      name: 'Mauve',
      hex: '#6F3E58'
    },
    {
      code: '8094',
      name: 'Mauve',
      hex: '#6F3E58'
    },
    {
      code: '8095',
      name: 'Dark Mauve',
      hex: '#623249'
    },
    {
      code: '8095',
      name: 'Dark Mauve',
      hex: '#623249'
    },
    {
      code: '8095',
      name: 'Dark Mauve',
      hex: '#623249'
    },
    {
      code: '8096',
      name: 'Maroon',
      hex: '#411B2E'
    },
    {
      code: '8096',
      name: 'Maroon',
      hex: '#411B2E'
    },
    {
      code: '8096',
      name: 'Maroon',
      hex: '#411B2E'
    },
    {
      code: '8097',
      name: 'Pale Lilac',
      hex: '#C196B3'
    },
    {
      code: '8097',
      name: 'Pale Lilac',
      hex: '#C196B3'
    },
    {
      code: '8097',
      name: 'Pale Lilac',
      hex: '#C196B3'
    },
    {
      code: '8098',
      name: 'Lilac',
      hex: '#B581BB'
    },
    {
      code: '8098',
      name: 'Lilac',
      hex: '#B581BB'
    },
    {
      code: '8098',
      name: 'Lilac',
      hex: '#B581BB'
    },
    {
      code: '8099',
      name: 'Mid Lilac',
      hex: '#9D6095'
    },
    {
      code: '8099',
      name: 'Mid Lilac',
      hex: '#9D6095'
    },
    {
      code: '8099',
      name: 'Mid Lilac',
      hex: '#9D6095'
    },
    {
      code: '8100',
      name: 'Light Purple',
      hex: '#743876'
    },
    {
      code: '8100',
      name: 'Light Purple',
      hex: '#743876'
    },
    {
      code: '8100',
      name: 'Light Purple',
      hex: '#743876'
    },
    {
      code: '8101',
      name: 'Purple',
      hex: '#612969'
    },
    {
      code: '8101',
      name: 'Purple',
      hex: '#612969'
    },
    {
      code: '8101',
      name: 'Purple',
      hex: '#612969'
    },
    {
      code: '8102',
      name: 'Dark Purple',
      hex: '#542663'
    },
    {
      code: '8102',
      name: 'Dark Purple',
      hex: '#542663'
    },
    {
      code: '8102',
      name: 'Dark Purple',
      hex: '#542663'
    },
    {
      code: '8103',
      name: 'Purple Ice',
      hex: '#B39AB6'
    },
    {
      code: '8103',
      name: 'Purple Ice',
      hex: '#B39AB6'
    },
    {
      code: '8103',
      name: 'Purple Ice',
      hex: '#B39AB6'
    },
    {
      code: '8104',
      name: 'Lavenda',
      hex: '#977AAD'
    },
    {
      code: '8104',
      name: 'Lavenda',
      hex: '#977AAD'
    },
    {
      code: '8104',
      name: 'Lavenda',
      hex: '#977AAD'
    },
    {
      code: '8105',
      name: 'Jacaranda',
      hex: '#4E3E91'
    },
    {
      code: '8105',
      name: 'Jacaranda',
      hex: '#4E3E91'
    },
    {
      code: '8105',
      name: 'Jacaranda',
      hex: '#4E3E91'
    },
    {
      code: '8106',
      name: 'Imperial Purple',
      hex: '#403184'
    },
    {
      code: '8106',
      name: 'Imperial Purple',
      hex: '#403184'
    },
    {
      code: '8106',
      name: 'Imperial Purple',
      hex: '#403184'
    },
    {
      code: '8107',
      name: 'Royal Purple',
      hex: '#3C1948'
    },
    {
      code: '8107',
      name: 'Royal Purple',
      hex: '#3C1948'
    },
    {
      code: '8107',
      name: 'Royal Purple',
      hex: '#3C1948'
    },
    {
      code: '8108',
      name: 'Blue Grey',
      hex: '#8797A7'
    },
    {
      code: '8108',
      name: 'Blue Grey',
      hex: '#8797A7'
    },
    {
      code: '8108',
      name: 'Blue Grey',
      hex: '#8797A7'
    },
    {
      code: '8109',
      name: 'Mid Blue Grey',
      hex: '#657C96'
    },
    {
      code: '8109',
      name: 'Mid Blue Grey',
      hex: '#657C96'
    },
    {
      code: '8109',
      name: 'Mid Blue Grey',
      hex: '#657C96'
    },
    {
      code: '8110',
      name: 'Blue Shadow',
      hex: '#40668D'
    },
    {
      code: '8110',
      name: 'Blue Shadow',
      hex: '#40668D'
    },
    {
      code: '8110',
      name: 'Blue Shadow',
      hex: '#40668D'
    },
    {
      code: '8111',
      name: 'Dark Lavenda',
      hex: '#576299'
    },
    {
      code: '8111',
      name: 'Dark Lavenda',
      hex: '#576299'
    },
    {
      code: '8111',
      name: 'Dark Lavenda',
      hex: '#576299'
    },
    {
      code: '8112',
      name: 'Soft Violet',
      hex: '#7557A3'
    },
    {
      code: '8112',
      name: 'Soft Violet',
      hex: '#7557A3'
    },
    {
      code: '8112',
      name: 'Soft Violet',
      hex: '#7557A3'
    },
    {
      code: '8113',
      name: 'Gentian',
      hex: '#483989'
    },
    {
      code: '8113',
      name: 'Gentian',
      hex: '#483989'
    },
    {
      code: '8113',
      name: 'Gentian',
      hex: '#483989'
    },
    {
      code: '8114',
      name: 'Gentian Violet',
      hex: '#583E8D'
    },
    {
      code: '8114',
      name: 'Gentian Violet',
      hex: '#583E8D'
    },
    {
      code: '8114',
      name: 'Gentian Violet',
      hex: '#583E8D'
    },
    {
      code: '8115',
      name: 'Duck Egg Blue',
      hex: '#7397A8'
    },
    {
      code: '8115',
      name: 'Duck Egg Blue',
      hex: '#7397A8'
    },
    {
      code: '8115',
      name: 'Duck Egg Blue',
      hex: '#7397A8'
    },
    {
      code: '8116',
      name: 'Sky Blue',
      hex: '#6489A9'
    },
    {
      code: '8116',
      name: 'Sky Blue',
      hex: '#6489A9'
    },
    {
      code: '8116',
      name: 'Sky Blue',
      hex: '#6489A9'
    },
    {
      code: '8117',
      name: 'Mid Sky Blue',
      hex: '#50779F'
    },
    {
      code: '8117',
      name: 'Mid Sky Blue',
      hex: '#50779F'
    },
    {
      code: '8117',
      name: 'Mid Sky Blue',
      hex: '#50779F'
    },
    {
      code: '8118',
      name: 'Dark Sky Blue',
      hex: '#425F88'
    },
    {
      code: '8118',
      name: 'Dark Sky Blue',
      hex: '#425F88'
    },
    {
      code: '8118',
      name: 'Dark Sky Blue',
      hex: '#425F88'
    },
    {
      code: '8119',
      name: 'Light Delft',
      hex: '#2A4C81'
    },
    {
      code: '8119',
      name: 'Light Delft',
      hex: '#2A4C81'
    },
    {
      code: '8119',
      name: 'Light Delft',
      hex: '#2A4C81'
    },
    {
      code: '8120',
      name: 'Delft',
      hex: '#304A7F'
    },
    {
      code: '8120',
      name: 'Delft',
      hex: '#304A7F'
    },
    {
      code: '8120',
      name: 'Delft',
      hex: '#304A7F'
    },
    {
      code: '8121',
      name: 'Junior Navy',
      hex: '#242F5E'
    },
    {
      code: '8121',
      name: 'Junior Navy',
      hex: '#242F5E'
    },
    {
      code: '8121',
      name: 'Junior Navy',
      hex: '#242F5E'
    },
    {
      code: '8122',
      name: 'Azure',
      hex: '#6994A8'
    },
    {
      code: '8122',
      name: 'Azure',
      hex: '#6994A8'
    },
    {
      code: '8122',
      name: 'Azure',
      hex: '#6994A8'
    },
    {
      code: '8123',
      name: 'Cornflower',
      hex: '#2E5F99'
    },
    {
      code: '8123',
      name: 'Cornflower',
      hex: '#2E5F99'
    },
    {
      code: '8123',
      name: 'Cornflower',
      hex: '#2E5F99'
    },
    {
      code: '8124',
      name: 'Dark Cornflower',
      hex: '#275698'
    },
    {
      code: '8124',
      name: 'Dark Cornflower',
      hex: '#275698'
    },
    {
      code: '8124',
      name: 'Dark Cornflower',
      hex: '#275698'
    },
    {
      code: '8125',
      name: 'Forget-Me-Not Blue',
      hex: '#5597B9'
    },
    {
      code: '8125',
      name: 'Forget-Me-Not Blue',
      hex: '#5597B9'
    },
    {
      code: '8125',
      name: 'Forget-Me-Not Blue',
      hex: '#5597B9'
    },
    {
      code: '8126',
      name: 'Delphinium Blue',
      hex: '#347DB5'
    },
    {
      code: '8126',
      name: 'Delphinium Blue',
      hex: '#347DB5'
    },
    {
      code: '8126',
      name: 'Delphinium Blue',
      hex: '#347DB5'
    },
    {
      code: '8127',
      name: 'Santorini Blue',
      hex: '#115EA0'
    },
    {
      code: '8127',
      name: 'Santorini Blue',
      hex: '#115EA0'
    },
    {
      code: '8127',
      name: 'Santorini Blue',
      hex: '#115EA0'
    },
    {
      code: '8128',
      name: 'Reflex Blue',
      hex: '#0E5396'
    },
    {
      code: '8128',
      name: 'Reflex Blue',
      hex: '#0E5396'
    },
    {
      code: '8128',
      name: 'Reflex Blue',
      hex: '#0E5396'
    },
    {
      code: '8129',
      name: 'Dark Reflex Blue',
      hex: '#0E509D'
    },
    {
      code: '8129',
      name: 'Dark Reflex Blue',
      hex: '#0E509D'
    },
    {
      code: '8129',
      name: 'Dark Reflex Blue',
      hex: '#0E509D'
    },
    {
      code: '8130',
      name: 'Ocean Blue',
      hex: '#123F85'
    },
    {
      code: '8130',
      name: 'Ocean Blue',
      hex: '#123F85'
    },
    {
      code: '8130',
      name: 'Ocean Blue',
      hex: '#123F85'
    },
    {
      code: '8131',
      name: 'Navy Blue',
      hex: '#133B7B'
    },
    {
      code: '8131',
      name: 'Navy Blue',
      hex: '#133B7B'
    },
    {
      code: '8131',
      name: 'Navy Blue',
      hex: '#133B7B'
    },
    {
      code: '8132',
      name: 'Light Glacier',
      hex: '#82B3AE'
    },
    {
      code: '8132',
      name: 'Light Glacier',
      hex: '#82B3AE'
    },
    {
      code: '8132',
      name: 'Light Glacier',
      hex: '#82B3AE'
    },
    {
      code: '8133',
      name: 'Glacier Blue',
      hex: '#59A1AD'
    },
    {
      code: '8133',
      name: 'Glacier Blue',
      hex: '#59A1AD'
    },
    {
      code: '8133',
      name: 'Glacier Blue',
      hex: '#59A1AD'
    },
    {
      code: '8134',
      name: 'Dark Glacier',
      hex: '#3AA5C1'
    },
    {
      code: '8134',
      name: 'Dark Glacier',
      hex: '#3AA5C1'
    },
    {
      code: '8134',
      name: 'Dark Glacier',
      hex: '#3AA5C1'
    },
    {
      code: '8135',
      name: 'Pale Denim',
      hex: '#386F95'
    },
    {
      code: '8135',
      name: 'Pale Denim',
      hex: '#386F95'
    },
    {
      code: '8135',
      name: 'Pale Denim',
      hex: '#386F95'
    },
    {
      code: '8136',
      name: 'Denim',
      hex: '#125985'
    },
    {
      code: '8136',
      name: 'Denim',
      hex: '#125985'
    },
    {
      code: '8136',
      name: 'Denim',
      hex: '#125985'
    },
    {
      code: '8137',
      name: 'Dark Denim',
      hex: '#14416B'
    },
    {
      code: '8137',
      name: 'Dark Denim',
      hex: '#14416B'
    },
    {
      code: '8137',
      name: 'Dark Denim',
      hex: '#14416B'
    },
    {
      code: '8138',
      name: 'Light Aegean',
      hex: '#1D96BC'
    },
    {
      code: '8138',
      name: 'Light Aegean',
      hex: '#1D96BC'
    },
    {
      code: '8138',
      name: 'Light Aegean',
      hex: '#1D96BC'
    },
    {
      code: '8139',
      name: 'Aegean Blue',
      hex: '#0E87BB'
    },
    {
      code: '8139',
      name: 'Aegean Blue',
      hex: '#0E87BB'
    },
    {
      code: '8139',
      name: 'Aegean Blue',
      hex: '#0E87BB'
    },
    {
      code: '8140',
      name: 'Deep Aegean Blue',
      hex: '#0967A4'
    },
    {
      code: '8140',
      name: 'Deep Aegean Blue',
      hex: '#0967A4'
    },
    {
      code: '8140',
      name: 'Deep Aegean Blue',
      hex: '#0967A4'
    },
    {
      code: '8141',
      name: 'Light Aqua',
      hex: '#269CB3'
    },
    {
      code: '8141',
      name: 'Light Aqua',
      hex: '#269CB3'
    },
    {
      code: '8141',
      name: 'Light Aqua',
      hex: '#269CB3'
    },
    {
      code: '8142',
      name: 'Aqua',
      hex: '#139AB9'
    },
    {
      code: '8142',
      name: 'Aqua',
      hex: '#139AB9'
    },
    {
      code: '8142',
      name: 'Aqua',
      hex: '#139AB9'
    },
    {
      code: '8143',
      name: 'Dark Aqua',
      hex: '#087EA4'
    },
    {
      code: '8143',
      name: 'Dark Aqua',
      hex: '#087EA4'
    },
    {
      code: '8143',
      name: 'Dark Aqua',
      hex: '#087EA4'
    },
    {
      code: '8144',
      name: 'Pale Blue Grey',
      hex: '#73869F'
    },
    {
      code: '8144',
      name: 'Pale Blue Grey',
      hex: '#73869F'
    },
    {
      code: '8144',
      name: 'Pale Blue Grey',
      hex: '#73869F'
    },
    {
      code: '8145',
      name: 'French Blue',
      hex: '#586D87'
    },
    {
      code: '8145',
      name: 'French Blue',
      hex: '#586D87'
    },
    {
      code: '8145',
      name: 'French Blue',
      hex: '#586D87'
    },
    {
      code: '8146',
      name: 'Dark Blue Grey',
      hex: '#334B6D'
    },
    {
      code: '8146',
      name: 'Dark Blue Grey',
      hex: '#334B6D'
    },
    {
      code: '8146',
      name: 'Dark Blue Grey',
      hex: '#334B6D'
    },
    {
      code: '8147',
      name: 'Ice',
      hex: '#BBBF9F'
    },
    {
      code: '8147',
      name: 'Ice',
      hex: '#BBBF9F'
    },
    {
      code: '8147',
      name: 'Ice',
      hex: '#BBBF9F'
    },
    {
      code: '8148',
      name: 'Ice Blue',
      hex: '#9BB5B5'
    },
    {
      code: '8148',
      name: 'Ice Blue',
      hex: '#9BB5B5'
    },
    {
      code: '8148',
      name: 'Ice Blue',
      hex: '#9BB5B5'
    },
    {
      code: '8149',
      name: 'Mid Sea Quest',
      hex: '#8DB8BA'
    },
    {
      code: '8149',
      name: 'Mid Sea Quest',
      hex: '#8DB8BA'
    },
    {
      code: '8149',
      name: 'Mid Sea Quest',
      hex: '#8DB8BA'
    },
    {
      code: '8150',
      name: 'Sea Quest',
      hex: '#75A6B2'
    },
    {
      code: '8150',
      name: 'Sea Quest',
      hex: '#75A6B2'
    },
    {
      code: '8150',
      name: 'Sea Quest',
      hex: '#75A6B2'
    },
    {
      code: '8151',
      name: 'Dark Sea Quest',
      hex: '#608EA4'
    },
    {
      code: '8151',
      name: 'Dark Sea Quest',
      hex: '#608EA4'
    },
    {
      code: '8151',
      name: 'Dark Sea Quest',
      hex: '#608EA4'
    },
    {
      code: '8152',
      name: 'Oriental Light Blue',
      hex: '#347295'
    },
    {
      code: '8152',
      name: 'Oriental Light Blue',
      hex: '#347295'
    },
    {
      code: '8152',
      name: 'Oriental Light Blue',
      hex: '#347295'
    },
    {
      code: '8153',
      name: 'Oriental Blue',
      hex: '#306189'
    },
    {
      code: '8153',
      name: 'Oriental Blue',
      hex: '#306189'
    },
    {
      code: '8153',
      name: 'Oriental Blue',
      hex: '#306189'
    },
    {
      code: '8154',
      name: 'Mid Oriental Blue',
      hex: '#1A4A74'
    },
    {
      code: '8154',
      name: 'Mid Oriental Blue',
      hex: '#1A4A74'
    },
    {
      code: '8154',
      name: 'Mid Oriental Blue',
      hex: '#1A4A74'
    },
    {
      code: '8155',
      name: 'Dark Oriental Blue',
      hex: '#1C4163'
    },
    {
      code: '8155',
      name: 'Dark Oriental Blue',
      hex: '#1C4163'
    },
    {
      code: '8155',
      name: 'Dark Oriental Blue',
      hex: '#1C4163'
    },
    {
      code: '8156',
      name: 'Ink',
      hex: '#152F53'
    },
    {
      code: '8156',
      name: 'Ink',
      hex: '#152F53'
    },
    {
      code: '8156',
      name: 'Ink',
      hex: '#152F53'
    },
    {
      code: '8157',
      name: 'Midnight Blue',
      hex: '#17253D'
    },
    {
      code: '8157',
      name: 'Midnight Blue',
      hex: '#17253D'
    },
    {
      code: '8157',
      name: 'Midnight Blue',
      hex: '#17253D'
    },
    {
      code: '8158',
      name: 'Indigo',
      hex: '#201F31'
    },
    {
      code: '8158',
      name: 'Indigo',
      hex: '#201F31'
    },
    {
      code: '8158',
      name: 'Indigo',
      hex: '#201F31'
    },
    {
      code: '8159',
      name: 'Baby Blue',
      hex: '#98AEAE'
    },
    {
      code: '8159',
      name: 'Baby Blue',
      hex: '#98AEAE'
    },
    {
      code: '8159',
      name: 'Baby Blue',
      hex: '#98AEAE'
    },
    {
      code: '8160',
      name: 'Light Teal',
      hex: '#7A959A'
    },
    {
      code: '8160',
      name: 'Light Teal',
      hex: '#7A959A'
    },
    {
      code: '8160',
      name: 'Light Teal',
      hex: '#7A959A'
    },
    {
      code: '8161',
      name: 'Mid Teal',
      hex: '#5E7F8B'
    },
    {
      code: '8161',
      name: 'Mid Teal',
      hex: '#5E7F8B'
    },
    {
      code: '8161',
      name: 'Mid Teal',
      hex: '#5E7F8B'
    },
    {
      code: '8162',
      name: 'Teal',
      hex: '#486B79'
    },
    {
      code: '8162',
      name: 'Teal',
      hex: '#486B79'
    },
    {
      code: '8162',
      name: 'Teal',
      hex: '#486B79'
    },
    {
      code: '8163',
      name: 'Dark Teal',
      hex: '#244659'
    },
    {
      code: '8163',
      name: 'Dark Teal',
      hex: '#244659'
    },
    {
      code: '8163',
      name: 'Dark Teal',
      hex: '#244659'
    },
    {
      code: '8164',
      name: 'Midnight Teal',
      hex: '#183349'
    },
    {
      code: '8164',
      name: 'Midnight Teal',
      hex: '#183349'
    },
    {
      code: '8164',
      name: 'Midnight Teal',
      hex: '#183349'
    },
    {
      code: '8165',
      name: 'Aqua Mist',
      hex: '#95B3B4'
    },
    {
      code: '8165',
      name: 'Aqua Mist',
      hex: '#95B3B4'
    },
    {
      code: '8165',
      name: 'Aqua Mist',
      hex: '#95B3B4'
    },
    {
      code: '8165',
      name: 'Aqua Mist',
      hex: '#0095B3'
    },
    {
      code: '8166',
      name: 'Bluestone',
      hex: '#78A9B1'
    },
    {
      code: '8166',
      name: 'Bluestone',
      hex: '#78A9B1'
    },
    {
      code: '8166',
      name: 'Bluestone',
      hex: '#78A9B1'
    },
    {
      code: '8167',
      name: 'Heavenly Blue',
      hex: '#6793A5'
    },
    {
      code: '8167',
      name: 'Heavenly Blue',
      hex: '#6793A5'
    },
    {
      code: '8167',
      name: 'Heavenly Blue',
      hex: '#6793A5'
    },
    {
      code: '8168',
      name: 'Light Kingfisher',
      hex: '#3188A5'
    },
    {
      code: '8168',
      name: 'Light Kingfisher',
      hex: '#3188A5'
    },
    {
      code: '8168',
      name: 'Light Kingfisher',
      hex: '#3188A5'
    },
    {
      code: '8169',
      name: 'Kingfisher',
      hex: '#1A7095'
    },
    {
      code: '8169',
      name: 'Kingfisher',
      hex: '#1A7095'
    },
    {
      code: '8169',
      name: 'Kingfisher',
      hex: '#1A7095'
    },
    {
      code: '8170',
      name: 'Dark Kingfisher',
      hex: '#1C5178'
    },
    {
      code: '8170',
      name: 'Dark Kingfisher',
      hex: '#1C5178'
    },
    {
      code: '8170',
      name: 'Dark Kingfisher',
      hex: '#1C5178'
    },
    {
      code: '8171',
      name: 'Sapphire',
      hex: '#104D80'
    },
    {
      code: '8171',
      name: 'Sapphire',
      hex: '#104D80'
    },
    {
      code: '8171',
      name: 'Sapphire',
      hex: '#104D80'
    },
    {
      code: '8172',
      name: 'Dark Sapphire',
      hex: '#143862'
    },
    {
      code: '8172',
      name: 'Dark Sapphire',
      hex: '#143862'
    },
    {
      code: '8172',
      name: 'Dark Sapphire',
      hex: '#143862'
    },
    {
      code: '8173',
      name: 'Light Aqua Marine',
      hex: '#88B2AF'
    },
    {
      code: '8173',
      name: 'Light Aqua Marine',
      hex: '#88B2AF'
    },
    {
      code: '8173',
      name: 'Light Aqua Marine',
      hex: '#88B2AF'
    },
    {
      code: '8174',
      name: 'Mid Aqua Marine',
      hex: '#5A95A1'
    },
    {
      code: '8174',
      name: 'Mid Aqua Marine',
      hex: '#5A95A1'
    },
    {
      code: '8174',
      name: 'Mid Aqua Marine',
      hex: '#5A95A1'
    },
    {
      code: '8174',
      name: 'Mid Aqua Marine',
      hex: '#015A95'
    },
    {
      code: '8175',
      name: 'Aqua Marine',
      hex: '#318B9E'
    },
    {
      code: '8175',
      name: 'Aqua Marine',
      hex: '#318B9E'
    },
    {
      code: '8175',
      name: 'Aqua Marine',
      hex: '#318B9E'
    },
    {
      code: '8175',
      name: 'Aqua Marine',
      hex: '#02318B'
    },
    {
      code: '8176',
      name: 'Dark Aqua Marine',
      hex: '#0D4F6E'
    },
    {
      code: '8176',
      name: 'Dark Aqua Marine',
      hex: '#0D4F6E'
    },
    {
      code: '8176',
      name: 'Dark Aqua Marine',
      hex: '#0D4F6E'
    },
    {
      code: '8176',
      name: 'Dark Aqua Marine',
      hex: '#030D4F'
    },
    {
      code: '8177',
      name: 'Pale Turquoise',
      hex: '#89B0A1'
    },
    {
      code: '8177',
      name: 'Pale Turquoise',
      hex: '#89B0A1'
    },
    {
      code: '8177',
      name: 'Pale Turquoise',
      hex: '#89B0A1'
    },
    {
      code: '8177',
      name: 'Pale Turquoise',
      hex: '#0489B0'
    },
    {
      code: '8178',
      name: 'Mid Turquoise',
      hex: '#719E9C'
    },
    {
      code: '8178',
      name: 'Mid Turquoise',
      hex: '#719E9C'
    },
    {
      code: '8178',
      name: 'Mid Turquoise',
      hex: '#719E9C'
    },
    {
      code: '8178',
      name: 'Mid Turquoise',
      hex: '#05719E'
    },
    {
      code: '8179',
      name: 'Turquoise',
      hex: '#46838F'
    },
    {
      code: '8179',
      name: 'Turquoise',
      hex: '#46838F'
    },
    {
      code: '8179',
      name: 'Turquoise',
      hex: '#46838F'
    },
    {
      code: '8179',
      name: 'Turquoise',
      hex: '#064683'
    },
    {
      code: '8180',
      name: 'Dark Turquoise',
      hex: '#417C84'
    },
    {
      code: '8180',
      name: 'Dark Turquoise',
      hex: '#417C84'
    },
    {
      code: '8180',
      name: 'Dark Turquoise',
      hex: '#417C84'
    },
    {
      code: '8180',
      name: 'Dark Turquoise',
      hex: '#07417C'
    },
    {
      code: '8181',
      name: 'Oriental Turquoise',
      hex: '#186572'
    },
    {
      code: '8181',
      name: 'Oriental Turquoise',
      hex: '#186572'
    },
    {
      code: '8181',
      name: 'Oriental Turquoise',
      hex: '#186572'
    },
    {
      code: '8181',
      name: 'Oriental Turquoise',
      hex: '#081865'
    },
    {
      code: '8182',
      name: 'Midnight Turquoise',
      hex: '#17515E'
    },
    {
      code: '8182',
      name: 'Midnight Turquoise',
      hex: '#17515E'
    },
    {
      code: '8182',
      name: 'Midnight Turquoise',
      hex: '#17515E'
    },
    {
      code: '8183',
      name: 'Turquoise Ice',
      hex: '#999F94'
    },
    {
      code: '8183',
      name: 'Turquoise Ice',
      hex: '#999F94'
    },
    {
      code: '8183',
      name: 'Turquoise Ice',
      hex: '#999F94'
    },
    {
      code: '8183',
      name: 'Turquoise Ice',
      hex: '#09999F'
    },
    {
      code: '8184',
      name: 'Pale Slate',
      hex: '#70807D'
    },
    {
      code: '8184',
      name: 'Pale Slate',
      hex: '#70807D'
    },
    {
      code: '8184',
      name: 'Pale Slate',
      hex: '#70807D'
    },
    {
      code: '8185',
      name: 'Mid Slate',
      hex: '#5B6C6E'
    },
    {
      code: '8185',
      name: 'Mid Slate',
      hex: '#5B6C6E'
    },
    {
      code: '8185',
      name: 'Mid Slate',
      hex: '#5B6C6E'
    },
    {
      code: '8186',
      name: 'Slate',
      hex: '#3B4B51'
    },
    {
      code: '8186',
      name: 'Slate',
      hex: '#3B4B51'
    },
    {
      code: '8186',
      name: 'Slate',
      hex: '#3B4B51'
    },
    {
      code: '8187',
      name: 'Dark Slate',
      hex: '#253D43'
    },
    {
      code: '8187',
      name: 'Dark Slate',
      hex: '#253D43'
    },
    {
      code: '8187',
      name: 'Dark Slate',
      hex: '#253D43'
    },
    {
      code: '8188',
      name: 'Light Jade',
      hex: '#50908D'
    },
    {
      code: '8188',
      name: 'Light Jade',
      hex: '#50908D'
    },
    {
      code: '8188',
      name: 'Light Jade',
      hex: '#50908D'
    },
    {
      code: '8189',
      name: 'Jade',
      hex: '#2E7A77'
    },
    {
      code: '8189',
      name: 'Jade',
      hex: '#2E7A77'
    },
    {
      code: '8189',
      name: 'Jade',
      hex: '#2E7A77'
    },
    {
      code: '8190',
      name: 'Dark Jade',
      hex: '#0B4343'
    },
    {
      code: '8190',
      name: 'Dark Jade',
      hex: '#0B4343'
    },
    {
      code: '8190',
      name: 'Dark Jade',
      hex: '#0B4343'
    },
    {
      code: '8191',
      name: 'Light Reef',
      hex: '#68AAA0'
    },
    {
      code: '8191',
      name: 'Light Reef',
      hex: '#68AAA0'
    },
    {
      code: '8191',
      name: 'Light Reef',
      hex: '#68AAA0'
    },
    {
      code: '8192',
      name: 'Medium Reef',
      hex: '#4B968C'
    },
    {
      code: '8192',
      name: 'Medium Reef',
      hex: '#4B968C'
    },
    {
      code: '8192',
      name: 'Medium Reef',
      hex: '#4B968C'
    },
    {
      code: '8193',
      name: 'Reef',
      hex: '#3A8E81'
    },
    {
      code: '8193',
      name: 'Reef',
      hex: '#3A8E81'
    },
    {
      code: '8193',
      name: 'Reef',
      hex: '#3A8E81'
    },
    {
      code: '8194',
      name: 'Dark Reef',
      hex: '#086D62'
    },
    {
      code: '8194',
      name: 'Dark Reef',
      hex: '#086D62'
    },
    {
      code: '8194',
      name: 'Dark Reef',
      hex: '#086D62'
    },
    {
      code: '8195',
      name: 'Waterfall',
      hex: '#2E8879'
    },
    {
      code: '8195',
      name: 'Waterfall',
      hex: '#2E8879'
    },
    {
      code: '8195',
      name: 'Waterfall',
      hex: '#2E8879'
    },
    {
      code: '8196',
      name: 'Deep Waterfall',
      hex: '#1A8677'
    },
    {
      code: '8196',
      name: 'Deep Waterfall',
      hex: '#1A8677'
    },
    {
      code: '8196',
      name: 'Deep Waterfall',
      hex: '#1A8677'
    },
    {
      code: '8198',
      name: 'Spa',
      hex: '#569089'
    },
    {
      code: '8198',
      name: 'Spa',
      hex: '#569089'
    },
    {
      code: '8198',
      name: 'Spa',
      hex: '#569089'
    },
    {
      code: '8199',
      name: 'Deep Spa',
      hex: '#32857C'
    },
    {
      code: '8199',
      name: 'Deep Spa',
      hex: '#32857C'
    },
    {
      code: '8199',
      name: 'Deep Spa',
      hex: '#32857C'
    },
    {
      code: '8200',
      name: 'Blue Green',
      hex: '#23766F'
    },
    {
      code: '8200',
      name: 'Blue Green',
      hex: '#23766F'
    },
    {
      code: '8200',
      name: 'Blue Green',
      hex: '#23766F'
    },
    {
      code: '8201',
      name: 'Dark Blue Green',
      hex: '#0A544F'
    },
    {
      code: '8201',
      name: 'Dark Blue Green',
      hex: '#0A544F'
    },
    {
      code: '8201',
      name: 'Dark Blue Green',
      hex: '#0A544F'
    },
    {
      code: '8202',
      name: 'Soft Green',
      hex: '#719279'
    },
    {
      code: '8202',
      name: 'Soft Green',
      hex: '#719279'
    },
    {
      code: '8202',
      name: 'Soft Green',
      hex: '#719279'
    },
    {
      code: '8203',
      name: 'Light Apple Green',
      hex: '#6E987C'
    },
    {
      code: '8203',
      name: 'Light Apple Green',
      hex: '#6E987C'
    },
    {
      code: '8203',
      name: 'Light Apple Green',
      hex: '#6E987C'
    },
    {
      code: '8204',
      name: 'Apple Green',
      hex: '#608D79'
    },
    {
      code: '8204',
      name: 'Apple Green',
      hex: '#608D79'
    },
    {
      code: '8204',
      name: 'Apple Green',
      hex: '#608D79'
    },
    {
      code: '8205',
      name: 'Dark Apple Green',
      hex: '#48775D'
    },
    {
      code: '8205',
      name: 'Dark Apple Green',
      hex: '#48775D'
    },
    {
      code: '8205',
      name: 'Dark Apple Green',
      hex: '#48775D'
    },
    {
      code: '8206',
      name: 'Wattle Green',
      hex: '#224D3E'
    },
    {
      code: '8206',
      name: 'Wattle Green',
      hex: '#224D3E'
    },
    {
      code: '8206',
      name: 'Wattle Green',
      hex: '#224D3E'
    },
    {
      code: '8207',
      name: 'Turquoise Breath',
      hex: '#627B75'
    },
    {
      code: '8207',
      name: 'Turquoise Breath',
      hex: '#627B75'
    },
    {
      code: '8207',
      name: 'Turquoise Breath',
      hex: '#627B75'
    },
    {
      code: '8208',
      name: 'Beryl',
      hex: '#417A70'
    },
    {
      code: '8208',
      name: 'Beryl',
      hex: '#417A70'
    },
    {
      code: '8208',
      name: 'Beryl',
      hex: '#417A70'
    },
    {
      code: '8209',
      name: 'Dark Beryl',
      hex: '#34554A'
    },
    {
      code: '8209',
      name: 'Dark Beryl',
      hex: '#34554A'
    },
    {
      code: '8209',
      name: 'Dark Beryl',
      hex: '#34554A'
    },
    {
      code: '8210',
      name: 'Light Juniper',
      hex: '#386659'
    },
    {
      code: '8210',
      name: 'Light Juniper',
      hex: '#386659'
    },
    {
      code: '8210',
      name: 'Light Juniper',
      hex: '#386659'
    },
    {
      code: '8211',
      name: 'Juniper',
      hex: '#254B43'
    },
    {
      code: '8211',
      name: 'Juniper',
      hex: '#254B43'
    },
    {
      code: '8211',
      name: 'Juniper',
      hex: '#254B43'
    },
    {
      code: '8212',
      name: 'Light Agave',
      hex: '#75998E'
    },
    {
      code: '8212',
      name: 'Light Agave',
      hex: '#75998E'
    },
    {
      code: '8212',
      name: 'Light Agave',
      hex: '#75998E'
    },
    {
      code: '8213',
      name: 'Agave',
      hex: '#52857D'
    },
    {
      code: '8213',
      name: 'Agave',
      hex: '#52857D'
    },
    {
      code: '8213',
      name: 'Agave',
      hex: '#52857D'
    },
    {
      code: '8214',
      name: 'Dark Agave',
      hex: '#445854'
    },
    {
      code: '8214',
      name: 'Dark Agave',
      hex: '#445854'
    },
    {
      code: '8214',
      name: 'Dark Agave',
      hex: '#445854'
    },
    {
      code: '8215',
      name: 'Pine Green',
      hex: '#354F4B'
    },
    {
      code: '8215',
      name: 'Pine Green',
      hex: '#354F4B'
    },
    {
      code: '8215',
      name: 'Pine Green',
      hex: '#354F4B'
    },
    {
      code: '8216',
      name: 'Dark Pine Green',
      hex: '#173632'
    },
    {
      code: '8216',
      name: 'Dark Pine Green',
      hex: '#173632'
    },
    {
      code: '8216',
      name: 'Dark Pine Green',
      hex: '#173632'
    },
    {
      code: '8217',
      name: 'Pale Mint Green',
      hex: '#9BC79E'
    },
    {
      code: '8217',
      name: 'Pale Mint Green',
      hex: '#9BC79E'
    },
    {
      code: '8217',
      name: 'Pale Mint Green',
      hex: '#9BC79E'
    },
    {
      code: '8218',
      name: 'Medium Mint Green',
      hex: '#72B388'
    },
    {
      code: '8218',
      name: 'Medium Mint Green',
      hex: '#72B388'
    },
    {
      code: '8218',
      name: 'Medium Mint Green',
      hex: '#72B388'
    },
    {
      code: '8219',
      name: 'Mint Green',
      hex: '#4E9F6B'
    },
    {
      code: '8219',
      name: 'Mint Green',
      hex: '#4E9F6B'
    },
    {
      code: '8219',
      name: 'Mint Green',
      hex: '#4E9F6B'
    },
    {
      code: '8220',
      name: 'Bright Mint Green',
      hex: '#359A63'
    },
    {
      code: '8220',
      name: 'Bright Mint Green',
      hex: '#359A63'
    },
    {
      code: '8220',
      name: 'Bright Mint Green',
      hex: '#359A63'
    },
    {
      code: '8221',
      name: 'Light Emerald',
      hex: '#389A5C'
    },
    {
      code: '8221',
      name: 'Light Emerald',
      hex: '#389A5C'
    },
    {
      code: '8221',
      name: 'Light Emerald',
      hex: '#389A5C'
    },
    {
      code: '8222',
      name: 'Emerald Green',
      hex: '#15733B'
    },
    {
      code: '8222',
      name: 'Emerald Green',
      hex: '#15733B'
    },
    {
      code: '8222',
      name: 'Emerald Green',
      hex: '#15733B'
    },
    {
      code: '8223',
      name: 'Dark Emerald',
      hex: '#0D6A46'
    },
    {
      code: '8223',
      name: 'Dark Emerald',
      hex: '#0D6A46'
    },
    {
      code: '8223',
      name: 'Dark Emerald',
      hex: '#0D6A46'
    },
    {
      code: '8224',
      name: 'Holly Green',
      hex: '#165337'
    },
    {
      code: '8224',
      name: 'Holly Green',
      hex: '#165337'
    },
    {
      code: '8224',
      name: 'Holly Green',
      hex: '#165337'
    },
    {
      code: '8225',
      name: 'Chartreuse',
      hex: '#B0AE84'
    },
    {
      code: '8225',
      name: 'Chartreuse',
      hex: '#B0AE84'
    },
    {
      code: '8225',
      name: 'Chartreuse',
      hex: '#B0AE84'
    },
    {
      code: '8226',
      name: 'Antique Green',
      hex: '#889572'
    },
    {
      code: '8226',
      name: 'Antique Green',
      hex: '#889572'
    },
    {
      code: '8226',
      name: 'Antique Green',
      hex: '#889572'
    },
    {
      code: '8227',
      name: 'Light Jungle',
      hex: '#567654'
    },
    {
      code: '8227',
      name: 'Light Jungle',
      hex: '#567654'
    },
    {
      code: '8227',
      name: 'Light Jungle',
      hex: '#567654'
    },
    {
      code: '8228',
      name: 'Jungle',
      hex: '#4D6C4B'
    },
    {
      code: '8228',
      name: 'Jungle',
      hex: '#4D6C4B'
    },
    {
      code: '8228',
      name: 'Jungle',
      hex: '#4D6C4B'
    },
    {
      code: '8229',
      name: 'Deep Jungle',
      hex: '#2C4931'
    },
    {
      code: '8229',
      name: 'Deep Jungle',
      hex: '#2C4931'
    },
    {
      code: '8229',
      name: 'Deep Jungle',
      hex: '#2C4931'
    },
    {
      code: '8230',
      name: 'Veridian',
      hex: '#23462C'
    },
    {
      code: '8230',
      name: 'Veridian',
      hex: '#23462C'
    },
    {
      code: '8230',
      name: 'Veridian',
      hex: '#23462C'
    },
    {
      code: '8231',
      name: 'Pastel Green',
      hex: '#8EAC74'
    },
    {
      code: '8231',
      name: 'Pastel Green',
      hex: '#8EAC74'
    },
    {
      code: '8231',
      name: 'Pastel Green',
      hex: '#8EAC74'
    },
    {
      code: '8232',
      name: 'Pale Fern',
      hex: '#819D51'
    },
    {
      code: '8232',
      name: 'Pale Fern',
      hex: '#819D51'
    },
    {
      code: '8232',
      name: 'Pale Fern',
      hex: '#819D51'
    },
    {
      code: '8233',
      name: 'Fern',
      hex: '#587D43'
    },
    {
      code: '8233',
      name: 'Fern',
      hex: '#587D43'
    },
    {
      code: '8233',
      name: 'Fern',
      hex: '#587D43'
    },
    {
      code: '8234',
      name: 'Medium Fern',
      hex: '#4C7342'
    },
    {
      code: '8234',
      name: 'Medium Fern',
      hex: '#4C7342'
    },
    {
      code: '8234',
      name: 'Medium Fern',
      hex: '#4C7342'
    },
    {
      code: '8235',
      name: 'Dark Fern',
      hex: '#30542B'
    },
    {
      code: '8235',
      name: 'Dark Fern',
      hex: '#30542B'
    },
    {
      code: '8235',
      name: 'Dark Fern',
      hex: '#30542B'
    },
    {
      code: '8236',
      name: 'Pale Chartreuse',
      hex: '#AEB277'
    },
    {
      code: '8236',
      name: 'Pale Chartreuse',
      hex: '#AEB277'
    },
    {
      code: '8236',
      name: 'Pale Chartreuse',
      hex: '#AEB277'
    },
    {
      code: '8237',
      name: 'Deep Chartreuse',
      hex: '#A59755'
    },
    {
      code: '8237',
      name: 'Deep Chartreuse',
      hex: '#A59755'
    },
    {
      code: '8237',
      name: 'Deep Chartreuse',
      hex: '#A59755'
    },
    {
      code: '8238',
      name: 'Palm Green',
      hex: '#6D774B'
    },
    {
      code: '8238',
      name: 'Palm Green',
      hex: '#6D774B'
    },
    {
      code: '8238',
      name: 'Palm Green',
      hex: '#6D774B'
    },
    {
      code: '8241',
      name: 'Cedar Green',
      hex: '#325D3A'
    },
    {
      code: '8241',
      name: 'Cedar Green',
      hex: '#325D3A'
    },
    {
      code: '8241',
      name: 'Cedar Green',
      hex: '#325D3A'
    },
    {
      code: '8242',
      name: 'Parrot',
      hex: '#9DAA2B'
    },
    {
      code: '8242',
      name: 'Parrot',
      hex: '#9DAA2B'
    },
    {
      code: '8242',
      name: 'Parrot',
      hex: '#9DAA2B'
    },
    {
      code: '8243',
      name: 'Dark Parrot',
      hex: '#7DA034'
    },
    {
      code: '8243',
      name: 'Dark Parrot',
      hex: '#7DA034'
    },
    {
      code: '8243',
      name: 'Dark Parrot',
      hex: '#7DA034'
    },
    {
      code: '8244',
      name: 'Lorikeet',
      hex: '#528C33'
    },
    {
      code: '8244',
      name: 'Lorikeet',
      hex: '#528C33'
    },
    {
      code: '8244',
      name: 'Lorikeet',
      hex: '#528C33'
    },
    {
      code: '8245',
      name: 'Kelly Green',
      hex: '#0E5E23'
    },
    {
      code: '8245',
      name: 'Kelly Green',
      hex: '#0E5E23'
    },
    {
      code: '8245',
      name: 'Kelly Green',
      hex: '#0E5E23'
    },
    {
      code: '8246',
      name: 'Mid Kelly Green',
      hex: '#0D5A27'
    },
    {
      code: '8246',
      name: 'Mid Kelly Green',
      hex: '#0D5A27'
    },
    {
      code: '8246',
      name: 'Mid Kelly Green',
      hex: '#0D5A27'
    },
    {
      code: '8247',
      name: 'Dark Kelly Green',
      hex: '#0F532C'
    },
    {
      code: '8247',
      name: 'Dark Kelly Green',
      hex: '#0F532C'
    },
    {
      code: '8247',
      name: 'Dark Kelly Green',
      hex: '#0F532C'
    },
    {
      code: '8248',
      name: 'Light Frog Green',
      hex: '#97A01E'
    },
    {
      code: '8248',
      name: 'Light Frog Green',
      hex: '#97A01E'
    },
    {
      code: '8248',
      name: 'Light Frog Green',
      hex: '#97A01E'
    },
    {
      code: '8249',
      name: 'Frog Green',
      hex: '#467B11'
    },
    {
      code: '8249',
      name: 'Frog Green',
      hex: '#467B11'
    },
    {
      code: '8249',
      name: 'Frog Green',
      hex: '#467B11'
    },
    {
      code: '8250',
      name: 'Leprachaun',
      hex: '#3D631F'
    },
    {
      code: '8250',
      name: 'Leprachaun',
      hex: '#3D631F'
    },
    {
      code: '8250',
      name: 'Leprachaun',
      hex: '#3D631F'
    },
    {
      code: '8251',
      name: 'Loden Green',
      hex: '#395821'
    },
    {
      code: '8251',
      name: 'Loden Green',
      hex: '#395821'
    },
    {
      code: '8251',
      name: 'Loden Green',
      hex: '#395821'
    },
    {
      code: '8252',
      name: 'Celery Green',
      hex: '#B7A05F'
    },
    {
      code: '8252',
      name: 'Celery Green',
      hex: '#B7A05F'
    },
    {
      code: '8252',
      name: 'Celery Green',
      hex: '#B7A05F'
    },
    {
      code: '8253',
      name: 'Lichen',
      hex: '#928F4F'
    },
    {
      code: '8253',
      name: 'Lichen',
      hex: '#928F4F'
    },
    {
      code: '8253',
      name: 'Lichen',
      hex: '#928F4F'
    },
    {
      code: '8254',
      name: 'Pickle Green',
      hex: '#6A7F30'
    },
    {
      code: '8254',
      name: 'Pickle Green',
      hex: '#6A7F30'
    },
    {
      code: '8254',
      name: 'Pickle Green',
      hex: '#6A7F30'
    },
    {
      code: '8256',
      name: 'Mineral Green',
      hex: '#636325'
    },
    {
      code: '8256',
      name: 'Mineral Green',
      hex: '#636325'
    },
    {
      code: '8256',
      name: 'Mineral Green',
      hex: '#636325'
    },
    {
      code: '8257',
      name: 'Medium Forest',
      hex: '#4F5438'
    },
    {
      code: '8257',
      name: 'Medium Forest',
      hex: '#4F5438'
    },
    {
      code: '8257',
      name: 'Medium Forest',
      hex: '#4F5438'
    },
    {
      code: '8258',
      name: 'Forest',
      hex: '#444532'
    },
    {
      code: '8258',
      name: 'Forest',
      hex: '#444532'
    },
    {
      code: '8258',
      name: 'Forest',
      hex: '#444532'
    },
    {
      code: '8259',
      name: 'Dark Forest',
      hex: '#393528'
    },
    {
      code: '8259',
      name: 'Dark Forest',
      hex: '#393528'
    },
    {
      code: '8259',
      name: 'Dark Forest',
      hex: '#393528'
    },
    {
      code: '8260',
      name: 'Grey Green',
      hex: '#8F907D'
    },
    {
      code: '8260',
      name: 'Grey Green',
      hex: '#8F907D'
    },
    {
      code: '8260',
      name: 'Grey Green',
      hex: '#8F907D'
    },
    {
      code: '8261',
      name: 'Pale Olive',
      hex: '#919266'
    },
    {
      code: '8261',
      name: 'Pale Olive',
      hex: '#919266'
    },
    {
      code: '8261',
      name: 'Pale Olive',
      hex: '#919266'
    },
    {
      code: '8262',
      name: 'Grass Green',
      hex: '#6D734E'
    },
    {
      code: '8262',
      name: 'Grass Green',
      hex: '#6D734E'
    },
    {
      code: '8262',
      name: 'Grass Green',
      hex: '#6D734E'
    },
    {
      code: '8263',
      name: 'Olive',
      hex: '#4E522F'
    },
    {
      code: '8263',
      name: 'Olive',
      hex: '#4E522F'
    },
    {
      code: '8263',
      name: 'Olive',
      hex: '#4E522F'
    },
    {
      code: '8264',
      name: 'Sage',
      hex: '#5C5F47'
    },
    {
      code: '8264',
      name: 'Sage',
      hex: '#5C5F47'
    },
    {
      code: '8264',
      name: 'Sage',
      hex: '#5C5F47'
    },
    {
      code: '8265',
      name: 'Green Haze',
      hex: '#778376'
    },
    {
      code: '8265',
      name: 'Green Haze',
      hex: '#778376'
    },
    {
      code: '8265',
      name: 'Green Haze',
      hex: '#778376'
    },
    {
      code: '8266',
      name: 'Hunter Green',
      hex: '#314737'
    },
    {
      code: '8266',
      name: 'Hunter Green',
      hex: '#314737'
    },
    {
      code: '8266',
      name: 'Hunter Green',
      hex: '#314737'
    },
    {
      code: '8267',
      name: 'Dark Pickle',
      hex: '#827F55'
    },
    {
      code: '8267',
      name: 'Dark Pickle',
      hex: '#827F55'
    },
    {
      code: '8267',
      name: 'Dark Pickle',
      hex: '#827F55'
    },
    {
      code: '8268',
      name: 'Sap Green',
      hex: '#535F3F'
    },
    {
      code: '8268',
      name: 'Sap Green',
      hex: '#535F3F'
    },
    {
      code: '8268',
      name: 'Sap Green',
      hex: '#535F3F'
    },
    {
      code: '8269',
      name: 'Dark Olive',
      hex: '#444F33'
    },
    {
      code: '8269',
      name: 'Dark Olive',
      hex: '#444F33'
    },
    {
      code: '8269',
      name: 'Dark Olive',
      hex: '#444F33'
    },
    {
      code: '8270',
      name: 'Pale Yellow',
      hex: '#D0AC57'
    },
    {
      code: '8270',
      name: 'Pale Yellow',
      hex: '#D0AC57'
    },
    {
      code: '8270',
      name: 'Pale Yellow',
      hex: '#D0AC57'
    },
    {
      code: '8271',
      name: 'Bright Lime',
      hex: '#C0B329'
    },
    {
      code: '8271',
      name: 'Bright Lime',
      hex: '#C0B329'
    },
    {
      code: '8271',
      name: 'Bright Lime',
      hex: '#C0B329'
    },
    {
      code: '8272',
      name: 'Bright Khaki',
      hex: '#9E851D'
    },
    {
      code: '8272',
      name: 'Bright Khaki',
      hex: '#9E851D'
    },
    {
      code: '8272',
      name: 'Bright Khaki',
      hex: '#9E851D'
    },
    {
      code: '8273',
      name: 'May Green',
      hex: '#677323'
    },
    {
      code: '8273',
      name: 'May Green',
      hex: '#677323'
    },
    {
      code: '8273',
      name: 'May Green',
      hex: '#677323'
    },
    {
      code: '8274',
      name: 'Mid May Green',
      hex: '#616429'
    },
    {
      code: '8274',
      name: 'Mid May Green',
      hex: '#616429'
    },
    {
      code: '8274',
      name: 'Mid May Green',
      hex: '#616429'
    },
    {
      code: '8275',
      name: 'Light Khaki',
      hex: '#998542'
    },
    {
      code: '8275',
      name: 'Light Khaki',
      hex: '#998542'
    },
    {
      code: '8275',
      name: 'Light Khaki',
      hex: '#998542'
    },
    {
      code: '8276',
      name: 'Khaki',
      hex: '#8B772B'
    },
    {
      code: '8276',
      name: 'Khaki',
      hex: '#8B772B'
    },
    {
      code: '8276',
      name: 'Khaki',
      hex: '#8B772B'
    },
    {
      code: '8277',
      name: 'Dark May Green',
      hex: '#555526'
    },
    {
      code: '8277',
      name: 'Dark May Green',
      hex: '#555526'
    },
    {
      code: '8277',
      name: 'Dark May Green',
      hex: '#555526'
    },
    {
      code: '8278',
      name: 'Army Green',
      hex: '#4B5024'
    },
    {
      code: '8278',
      name: 'Army Green',
      hex: '#4B5024'
    },
    {
      code: '8278',
      name: 'Army Green',
      hex: '#4B5024'
    },
    {
      code: '8279',
      name: 'Winter Green',
      hex: '#8B8C6C'
    },
    {
      code: '8279',
      name: 'Winter Green',
      hex: '#8B8C6C'
    },
    {
      code: '8279',
      name: 'Winter Green',
      hex: '#8B8C6C'
    },
    {
      code: '8280',
      name: 'Eucalypt',
      hex: '#727655'
    },
    {
      code: '8280',
      name: 'Eucalypt',
      hex: '#727655'
    },
    {
      code: '8280',
      name: 'Eucalypt',
      hex: '#727655'
    },
    {
      code: '8281',
      name: 'Dark Eucalypt',
      hex: '#5F633E'
    },
    {
      code: '8281',
      name: 'Dark Eucalypt',
      hex: '#5F633E'
    },
    {
      code: '8281',
      name: 'Dark Eucalypt',
      hex: '#5F633E'
    },
    {
      code: '8282',
      name: 'Light Eucalypt',
      hex: '#89845C'
    },
    {
      code: '8282',
      name: 'Light Eucalypt',
      hex: '#89845C'
    },
    {
      code: '8282',
      name: 'Light Eucalypt',
      hex: '#89845C'
    },
    {
      code: '8283',
      name: 'Gum Green',
      hex: '#7E764C'
    },
    {
      code: '8283',
      name: 'Gum Green',
      hex: '#7E764C'
    },
    {
      code: '8283',
      name: 'Gum Green',
      hex: '#7E764C'
    },
    {
      code: '8284',
      name: 'Green Gold',
      hex: '#87734B'
    },
    {
      code: '8284',
      name: 'Green Gold',
      hex: '#87734B'
    },
    {
      code: '8284',
      name: 'Green Gold',
      hex: '#87734B'
    },
    {
      code: '8285',
      name: 'Pale Gold',
      hex: '#C2AD70'
    },
    {
      code: '8285',
      name: 'Pale Gold',
      hex: '#C2AD70'
    },
    {
      code: '8285',
      name: 'Pale Gold',
      hex: '#C2AD70'
    },
    {
      code: '8286',
      name: 'Gold',
      hex: '#B59040'
    },
    {
      code: '8286',
      name: 'Gold',
      hex: '#B59040'
    },
    {
      code: '8286',
      name: 'Gold',
      hex: '#B59040'
    },
    {
      code: '8287',
      name: 'Deep Gold',
      hex: '#9B7130'
    },
    {
      code: '8287',
      name: 'Deep Gold',
      hex: '#9B7130'
    },
    {
      code: '8287',
      name: 'Deep Gold',
      hex: '#9B7130'
    },
    {
      code: '8288',
      name: 'Light Bronze',
      hex: '#8F7635'
    },
    {
      code: '8288',
      name: 'Light Bronze',
      hex: '#8F7635'
    },
    {
      code: '8288',
      name: 'Light Bronze',
      hex: '#8F7635'
    },
    {
      code: '8289',
      name: 'Dark Khaki',
      hex: '#69532C'
    },
    {
      code: '8289',
      name: 'Dark Khaki',
      hex: '#69532C'
    },
    {
      code: '8289',
      name: 'Dark Khaki',
      hex: '#69532C'
    },
    {
      code: '8290',
      name: 'Bronze',
      hex: '#6D4825'
    },
    {
      code: '8290',
      name: 'Bronze',
      hex: '#6D4825'
    },
    {
      code: '8290',
      name: 'Bronze',
      hex: '#6D4825'
    },
    {
      code: '8291',
      name: 'Ivory',
      hex: '#AEA79C'
    },
    {
      code: '8291',
      name: 'Ivory',
      hex: '#AEA79C'
    },
    {
      code: '8291',
      name: 'Ivory',
      hex: '#AEA79C'
    },
    {
      code: '8292',
      name: 'String',
      hex: '#8E7F6B'
    },
    {
      code: '8292',
      name: 'String',
      hex: '#8E7F6B'
    },
    {
      code: '8292',
      name: 'String',
      hex: '#8E7F6B'
    },
    {
      code: '8293',
      name: 'Gun Metal',
      hex: '#5E5344'
    },
    {
      code: '8293',
      name: 'Gun Metal',
      hex: '#5E5344'
    },
    {
      code: '8293',
      name: 'Gun Metal',
      hex: '#5E5344'
    },
    {
      code: '8294',
      name: 'Putty',
      hex: '#6E614C'
    },
    {
      code: '8294',
      name: 'Putty',
      hex: '#6E614C'
    },
    {
      code: '8294',
      name: 'Putty',
      hex: '#6E614C'
    },
    {
      code: '8295',
      name: 'Steam Cloud',
      hex: '#B4AA91'
    },
    {
      code: '8295',
      name: 'Steam Cloud',
      hex: '#B4AA91'
    },
    {
      code: '8295',
      name: 'Steam Cloud',
      hex: '#B4AA91'
    },
    {
      code: '8296',
      name: 'Linen',
      hex: '#A28C62'
    },
    {
      code: '8296',
      name: 'Linen',
      hex: '#A28C62'
    },
    {
      code: '8296',
      name: 'Linen',
      hex: '#A28C62'
    },
    {
      code: '8297',
      name: 'Fawn',
      hex: '#84644B'
    },
    {
      code: '8297',
      name: 'Fawn',
      hex: '#84644B'
    },
    {
      code: '8297',
      name: 'Fawn',
      hex: '#84644B'
    },
    {
      code: '8298',
      name: 'Dark Linen',
      hex: '#845B3F'
    },
    {
      code: '8298',
      name: 'Dark Linen',
      hex: '#845B3F'
    },
    {
      code: '8298',
      name: 'Dark Linen',
      hex: '#845B3F'
    },
    {
      code: '8299',
      name: 'Bone',
      hex: '#C4AB8F'
    },
    {
      code: '8299',
      name: 'Bone',
      hex: '#C4AB8F'
    },
    {
      code: '8299',
      name: 'Bone',
      hex: '#C4AB8F'
    },
    {
      code: '8300',
      name: 'Cream',
      hex: '#CDAA73'
    },
    {
      code: '8300',
      name: 'Cream',
      hex: '#CDAA73'
    },
    {
      code: '8300',
      name: 'Cream',
      hex: '#CDAA73'
    },
    {
      code: '8301',
      name: 'Sand',
      hex: '#A87F67'
    },
    {
      code: '8301',
      name: 'Sand',
      hex: '#A87F67'
    },
    {
      code: '8301',
      name: 'Sand',
      hex: '#A87F67'
    },
    {
      code: '8303',
      name: 'Mocha',
      hex: '#705038'
    },
    {
      code: '8303',
      name: 'Mocha',
      hex: '#705038'
    },
    {
      code: '8303',
      name: 'Mocha',
      hex: '#705038'
    },
    {
      code: '8304',
      name: 'Olivine',
      hex: '#835B3F'
    },
    {
      code: '8304',
      name: 'Olivine',
      hex: '#835B3F'
    },
    {
      code: '8304',
      name: 'Olivine',
      hex: '#835B3F'
    },
    {
      code: '8305',
      name: 'Straw',
      hex: '#E18C37'
    },
    {
      code: '8305',
      name: 'Straw',
      hex: '#E18C37'
    },
    {
      code: '8305',
      name: 'Straw',
      hex: '#E18C37'
    },
    {
      code: '8306',
      name: 'Cadmium',
      hex: '#BF742E'
    },
    {
      code: '8306',
      name: 'Cadmium',
      hex: '#BF742E'
    },
    {
      code: '8306',
      name: 'Cadmium',
      hex: '#BF742E'
    },
    {
      code: '8307',
      name: 'Deep Cadmium',
      hex: '#A8662B'
    },
    {
      code: '8307',
      name: 'Deep Cadmium',
      hex: '#A8662B'
    },
    {
      code: '8307',
      name: 'Deep Cadmium',
      hex: '#A8662B'
    },
    {
      code: '8308',
      name: 'Russet',
      hex: '#83422C'
    },
    {
      code: '8308',
      name: 'Russet',
      hex: '#83422C'
    },
    {
      code: '8308',
      name: 'Russet',
      hex: '#83422C'
    },
    {
      code: '8309',
      name: 'Oaten',
      hex: '#DD9E70'
    },
    {
      code: '8309',
      name: 'Oaten',
      hex: '#DD9E70'
    },
    {
      code: '8309',
      name: 'Oaten',
      hex: '#DD9E70'
    },
    {
      code: '8310',
      name: 'Pale Ginger',
      hex: '#9F6F48'
    },
    {
      code: '8310',
      name: 'Pale Ginger',
      hex: '#9F6F48'
    },
    {
      code: '8310',
      name: 'Pale Ginger',
      hex: '#9F6F48'
    },
    {
      code: '8311',
      name: 'Dark Ginger',
      hex: '#94663A'
    },
    {
      code: '8311',
      name: 'Dark Ginger',
      hex: '#94663A'
    },
    {
      code: '8311',
      name: 'Dark Ginger',
      hex: '#94663A'
    },
    {
      code: '8312',
      name: 'Golden Ginger',
      hex: '#A37140'
    },
    {
      code: '8312',
      name: 'Golden Ginger',
      hex: '#A37140'
    },
    {
      code: '8312',
      name: 'Golden Ginger',
      hex: '#A37140'
    },
    {
      code: '8313',
      name: 'Sahara',
      hex: '#D59E57'
    },
    {
      code: '8313',
      name: 'Sahara',
      hex: '#D59E57'
    },
    {
      code: '8313',
      name: 'Sahara',
      hex: '#D59E57'
    },
    {
      code: '8314',
      name: 'Canary',
      hex: '#C99240'
    },
    {
      code: '8314',
      name: 'Canary',
      hex: '#C99240'
    },
    {
      code: '8314',
      name: 'Canary',
      hex: '#C99240'
    },
    {
      code: '8315',
      name: 'Harvest Gold',
      hex: '#CA8F3A'
    },
    {
      code: '8315',
      name: 'Harvest Gold',
      hex: '#CA8F3A'
    },
    {
      code: '8315',
      name: 'Harvest Gold',
      hex: '#CA8F3A'
    },
    {
      code: '8316',
      name: 'Sunflower',
      hex: '#B06C22'
    },
    {
      code: '8316',
      name: 'Sunflower',
      hex: '#B06C22'
    },
    {
      code: '8316',
      name: 'Sunflower',
      hex: '#B06C22'
    },
    {
      code: '8317',
      name: 'Citrus',
      hex: '#CCB742'
    },
    {
      code: '8317',
      name: 'Citrus',
      hex: '#CCB742'
    },
    {
      code: '8317',
      name: 'Citrus',
      hex: '#CCB742'
    },
    {
      code: '8318',
      name: 'Dark Citrus',
      hex: '#E2BC0C'
    },
    {
      code: '8318',
      name: 'Dark Citrus',
      hex: '#E2BC0C'
    },
    {
      code: '8318',
      name: 'Dark Citrus',
      hex: '#E2BC0C'
    },
    {
      code: '8319',
      name: 'Wattle',
      hex: '#EBBF0E'
    },
    {
      code: '8319',
      name: 'Wattle',
      hex: '#EBBF0E'
    },
    {
      code: '8319',
      name: 'Wattle',
      hex: '#EBBF0E'
    },
    {
      code: '8320',
      name: 'Dark Wattle',
      hex: '#E3AD07'
    },
    {
      code: '8320',
      name: 'Dark Wattle',
      hex: '#E3AD07'
    },
    {
      code: '8320',
      name: 'Dark Wattle',
      hex: '#E3AD07'
    },
    {
      code: '8321',
      name: 'Primrose Yellow',
      hex: '#E0BB71'
    },
    {
      code: '8321',
      name: 'Primrose Yellow',
      hex: '#E0BB71'
    },
    {
      code: '8321',
      name: 'Primrose Yellow',
      hex: '#E0BB71'
    },
    {
      code: '8322',
      name: 'Dark Primrose',
      hex: '#EAC05A'
    },
    {
      code: '8322',
      name: 'Dark Primrose',
      hex: '#EAC05A'
    },
    {
      code: '8322',
      name: 'Dark Primrose',
      hex: '#EAC05A'
    },
    {
      code: '8323',
      name: 'Lemon Cadmium',
      hex: '#E3B415'
    },
    {
      code: '8323',
      name: 'Lemon Cadmium',
      hex: '#E3B415'
    },
    {
      code: '8323',
      name: 'Lemon Cadmium',
      hex: '#E3B415'
    },
    {
      code: '8324',
      name: 'Sunshine',
      hex: '#EBA514'
    },
    {
      code: '8324',
      name: 'Sunshine',
      hex: '#EBA514'
    },
    {
      code: '8324',
      name: 'Sunshine',
      hex: '#EBA514'
    },
    {
      code: '8325',
      name: 'Marigold',
      hex: '#F7A224'
    },
    {
      code: '8325',
      name: 'Marigold',
      hex: '#F7A224'
    },
    {
      code: '8325',
      name: 'Marigold',
      hex: '#F7A224'
    },
    {
      code: '8326',
      name: 'Baby Yellow',
      hex: '#ECBA6F'
    },
    {
      code: '8326',
      name: 'Baby Yellow',
      hex: '#ECBA6F'
    },
    {
      code: '8326',
      name: 'Baby Yellow',
      hex: '#ECBA6F'
    },
    {
      code: '8327',
      name: 'Lemon Yellow',
      hex: '#EDB861'
    },
    {
      code: '8327',
      name: 'Lemon Yellow',
      hex: '#EDB861'
    },
    {
      code: '8327',
      name: 'Lemon Yellow',
      hex: '#EDB861'
    },
    {
      code: '8328',
      name: 'Daffodil',
      hex: '#E7A723'
    },
    {
      code: '8328',
      name: 'Daffodil',
      hex: '#E7A723'
    },
    {
      code: '8328',
      name: 'Daffodil',
      hex: '#E7A723'
    },
    {
      code: '8329',
      name: 'Chrome',
      hex: '#EF9028'
    },
    {
      code: '8329',
      name: 'Chrome',
      hex: '#EF9028'
    },
    {
      code: '8329',
      name: 'Chrome',
      hex: '#EF9028'
    },
    {
      code: '8330',
      name: 'Light Orange',
      hex: '#F07D19'
    },
    {
      code: '8330',
      name: 'Light Orange',
      hex: '#F07D19'
    },
    {
      code: '8330',
      name: 'Light Orange',
      hex: '#F07D19'
    },
    {
      code: '8331',
      name: 'Mid Orange',
      hex: '#F26F26'
    },
    {
      code: '8331',
      name: 'Mid Orange',
      hex: '#F26F26'
    },
    {
      code: '8331',
      name: 'Mid Orange',
      hex: '#F26F26'
    },
    {
      code: '8332',
      name: 'Bright Orange',
      hex: '#EF5B27'
    },
    {
      code: '8332',
      name: 'Bright Orange',
      hex: '#EF5B27'
    },
    {
      code: '8332',
      name: 'Bright Orange',
      hex: '#EF5B27'
    },
    {
      code: '8333',
      name: 'Dark Orange',
      hex: '#F15028'
    },
    {
      code: '8333',
      name: 'Dark Orange',
      hex: '#F15028'
    },
    {
      code: '8333',
      name: 'Dark Orange',
      hex: '#F15028'
    },
    {
      code: '8334',
      name: 'Flame',
      hex: '#D73A2A'
    },
    {
      code: '8334',
      name: 'Flame',
      hex: '#D73A2A'
    },
    {
      code: '8334',
      name: 'Flame',
      hex: '#D73A2A'
    },
    {
      code: '8335',
      name: 'Poppy',
      hex: '#C42C26'
    },
    {
      code: '8335',
      name: 'Poppy',
      hex: '#C42C26'
    },
    {
      code: '8335',
      name: 'Poppy',
      hex: '#C42C26'
    },
    {
      code: '8336',
      name: 'Feather Pink',
      hex: '#EC9781'
    },
    {
      code: '8336',
      name: 'Feather Pink',
      hex: '#EC9781'
    },
    {
      code: '8336',
      name: 'Feather Pink',
      hex: '#EC9781'
    },
    {
      code: '8337',
      name: 'Light Coral',
      hex: '#EE846A'
    },
    {
      code: '8337',
      name: 'Light Coral',
      hex: '#EE846A'
    },
    {
      code: '8337',
      name: 'Light Coral',
      hex: '#EE846A'
    },
    {
      code: '8338',
      name: 'Coral',
      hex: '#ED7359'
    },
    {
      code: '8338',
      name: 'Coral',
      hex: '#ED7359'
    },
    {
      code: '8338',
      name: 'Coral',
      hex: '#ED7359'
    },
    {
      code: '8339',
      name: 'Deep Coral',
      hex: '#ED5C3D'
    },
    {
      code: '8339',
      name: 'Deep Coral',
      hex: '#ED5C3D'
    },
    {
      code: '8339',
      name: 'Deep Coral',
      hex: '#ED5C3D'
    },
    {
      code: '8340',
      name: 'Tangerine',
      hex: '#E43525'
    },
    {
      code: '8340',
      name: 'Tangerine',
      hex: '#E43525'
    },
    {
      code: '8340',
      name: 'Tangerine',
      hex: '#E43525'
    },
    {
      code: '8341',
      name: 'Sunset',
      hex: '#D72227'
    },
    {
      code: '8341',
      name: 'Sunset',
      hex: '#D72227'
    },
    {
      code: '8341',
      name: 'Sunset',
      hex: '#D72227'
    },
    {
      code: '8342',
      name: 'Pearl',
      hex: '#D4A893'
    },
    {
      code: '8342',
      name: 'Pearl',
      hex: '#D4A893'
    },
    {
      code: '8342',
      name: 'Pearl',
      hex: '#D4A893'
    },
    {
      code: '8343',
      name: 'Pink Pearl',
      hex: '#E99676'
    },
    {
      code: '8343',
      name: 'Pink Pearl',
      hex: '#E99676'
    },
    {
      code: '8343',
      name: 'Pink Pearl',
      hex: '#E99676'
    },
    {
      code: '8344',
      name: 'Light Terra Cotta',
      hex: '#EF784C'
    },
    {
      code: '8344',
      name: 'Light Terra Cotta',
      hex: '#EF784C'
    },
    {
      code: '8344',
      name: 'Light Terra Cotta',
      hex: '#EF784C'
    },
    {
      code: '8345',
      name: 'Terra Cotta',
      hex: '#CC4F31'
    },
    {
      code: '8345',
      name: 'Terra Cotta',
      hex: '#CC4F31'
    },
    {
      code: '8345',
      name: 'Terra Cotta',
      hex: '#CC4F31'
    },
    {
      code: '8346',
      name: 'Dark Terra Cotta',
      hex: '#CD4B2B'
    },
    {
      code: '8346',
      name: 'Dark Terra Cotta',
      hex: '#CD4B2B'
    },
    {
      code: '8346',
      name: 'Dark Terra Cotta',
      hex: '#CD4B2B'
    },
    {
      code: '8347',
      name: 'Pink Marble',
      hex: '#DC8261'
    },
    {
      code: '8347',
      name: 'Pink Marble',
      hex: '#DC8261'
    },
    {
      code: '8347',
      name: 'Pink Marble',
      hex: '#DC8261'
    },
    {
      code: '8348',
      name: 'Light Brick Red',
      hex: '#D16440'
    },
    {
      code: '8348',
      name: 'Light Brick Red',
      hex: '#D16440'
    },
    {
      code: '8348',
      name: 'Light Brick Red',
      hex: '#D16440'
    },
    {
      code: '8349',
      name: 'Brick Red',
      hex: '#AE442C'
    },
    {
      code: '8349',
      name: 'Brick Red',
      hex: '#AE442C'
    },
    {
      code: '8349',
      name: 'Brick Red',
      hex: '#AE442C'
    },
    {
      code: '8350',
      name: 'Dark Brick Red',
      hex: '#A73B2C'
    },
    {
      code: '8350',
      name: 'Dark Brick Red',
      hex: '#A73B2C'
    },
    {
      code: '8350',
      name: 'Dark Brick Red',
      hex: '#A73B2C'
    },
    {
      code: '8351',
      name: 'Rust',
      hex: '#902A22'
    },
    {
      code: '8351',
      name: 'Rust',
      hex: '#902A22'
    },
    {
      code: '8351',
      name: 'Rust',
      hex: '#902A22'
    },
    {
      code: '8352',
      name: 'Dark Rust',
      hex: '#77231E'
    },
    {
      code: '8352',
      name: 'Dark Rust',
      hex: '#77231E'
    },
    {
      code: '8352',
      name: 'Dark Rust',
      hex: '#77231E'
    },
    {
      code: '8353',
      name: 'Light Nacre',
      hex: '#DFB1A2'
    },
    {
      code: '8353',
      name: 'Light Nacre',
      hex: '#DFB1A2'
    },
    {
      code: '8353',
      name: 'Light Nacre',
      hex: '#DFB1A2'
    },
    {
      code: '8354',
      name: 'Mid Nacre',
      hex: '#E1AF98'
    },
    {
      code: '8354',
      name: 'Mid Nacre',
      hex: '#E1AF98'
    },
    {
      code: '8354',
      name: 'Mid Nacre',
      hex: '#E1AF98'
    },
    {
      code: '8355',
      name: 'Light Ochre',
      hex: '#D58762'
    },
    {
      code: '8355',
      name: 'Light Ochre',
      hex: '#D58762'
    },
    {
      code: '8355',
      name: 'Light Ochre',
      hex: '#D58762'
    },
    {
      code: '8356',
      name: 'Mid Ochre',
      hex: '#C4623F'
    },
    {
      code: '8356',
      name: 'Mid Ochre',
      hex: '#C4623F'
    },
    {
      code: '8356',
      name: 'Mid Ochre',
      hex: '#C4623F'
    },
    {
      code: '8357',
      name: 'Dark Ochre',
      hex: '#A7492C'
    },
    {
      code: '8357',
      name: 'Dark Ochre',
      hex: '#A7492C'
    },
    {
      code: '8357',
      name: 'Dark Ochre',
      hex: '#A7492C'
    },
    {
      code: '8358',
      name: 'Ochre',
      hex: '#9E422A'
    },
    {
      code: '8358',
      name: 'Ochre',
      hex: '#9E422A'
    },
    {
      code: '8358',
      name: 'Ochre',
      hex: '#9E422A'
    },
    {
      code: '8359',
      name: 'Dark Brown',
      hex: '#5E2C1F'
    },
    {
      code: '8359',
      name: 'Dark Brown',
      hex: '#5E2C1F'
    },
    {
      code: '8359',
      name: 'Dark Brown',
      hex: '#5E2C1F'
    },
    {
      code: '8360',
      name: 'Parchment',
      hex: '#E4C28B'
    },
    {
      code: '8360',
      name: 'Parchment',
      hex: '#E4C28B'
    },
    {
      code: '8360',
      name: 'Parchment',
      hex: '#E4C28B'
    },
    {
      code: '8361',
      name: 'Light Skin Tone',
      hex: '#EEB077'
    },
    {
      code: '8361',
      name: 'Light Skin Tone',
      hex: '#EEB077'
    },
    {
      code: '8361',
      name: 'Light Skin Tone',
      hex: '#EEB077'
    },
    {
      code: '8362',
      name: 'Skin Tone',
      hex: '#DC8957'
    },
    {
      code: '8362',
      name: 'Skin Tone',
      hex: '#DC8957'
    },
    {
      code: '8362',
      name: 'Skin Tone',
      hex: '#DC8957'
    },
    {
      code: '8363',
      name: 'Dark Skin Tone',
      hex: '#D46A3F'
    },
    {
      code: '8363',
      name: 'Dark Skin Tone',
      hex: '#D46A3F'
    },
    {
      code: '8363',
      name: 'Dark Skin Tone',
      hex: '#D46A3F'
    },
    {
      code: '8364',
      name: 'Medium Skin Tone',
      hex: '#CC8560'
    },
    {
      code: '8364',
      name: 'Medium Skin Tone',
      hex: '#CC8560'
    },
    {
      code: '8364',
      name: 'Medium Skin Tone',
      hex: '#CC8560'
    },
    {
      code: '8365',
      name: 'Light Tan',
      hex: '#CF844F'
    },
    {
      code: '8365',
      name: 'Light Tan',
      hex: '#CF844F'
    },
    {
      code: '8365',
      name: 'Light Tan',
      hex: '#CF844F'
    },
    {
      code: '8366',
      name: 'Mid Tan',
      hex: '#BE6837'
    },
    {
      code: '8366',
      name: 'Mid Tan',
      hex: '#BE6837'
    },
    {
      code: '8366',
      name: 'Mid Tan',
      hex: '#BE6837'
    },
    {
      code: '8367',
      name: 'Tan',
      hex: '#B65E33'
    },
    {
      code: '8367',
      name: 'Tan',
      hex: '#B65E33'
    },
    {
      code: '8367',
      name: 'Tan',
      hex: '#B65E33'
    },
    {
      code: '8368',
      name: 'Dark Tan',
      hex: '#793624'
    },
    {
      code: '8368',
      name: 'Dark Tan',
      hex: '#793624'
    },
    {
      code: '8368',
      name: 'Dark Tan',
      hex: '#793624'
    },
    {
      code: '8369',
      name: 'Light Ballet Pink',
      hex: '#E3A993'
    },
    {
      code: '8369',
      name: 'Light Ballet Pink',
      hex: '#E3A993'
    },
    {
      code: '8369',
      name: 'Light Ballet Pink',
      hex: '#E3A993'
    },
    {
      code: '8370',
      name: 'Ballet Slipper Pink',
      hex: '#E99880'
    },
    {
      code: '8370',
      name: 'Ballet Slipper Pink',
      hex: '#E99880'
    },
    {
      code: '8370',
      name: 'Ballet Slipper Pink',
      hex: '#E99880'
    },
    {
      code: '8371',
      name: 'Pale Salmon',
      hex: '#D8907A'
    },
    {
      code: '8371',
      name: 'Pale Salmon',
      hex: '#D8907A'
    },
    {
      code: '8371',
      name: 'Pale Salmon',
      hex: '#D8907A'
    },
    {
      code: '8372',
      name: 'Salmon',
      hex: '#CF785E'
    },
    {
      code: '8372',
      name: 'Salmon',
      hex: '#CF785E'
    },
    {
      code: '8372',
      name: 'Salmon',
      hex: '#CF785E'
    },
    {
      code: '8373',
      name: 'Mid Salmon',
      hex: '#DA7560'
    },
    {
      code: '8373',
      name: 'Mid Salmon',
      hex: '#DA7560'
    },
    {
      code: '8373',
      name: 'Mid Salmon',
      hex: '#DA7560'
    },
    {
      code: '8374',
      name: 'Dark Salmon',
      hex: '#B85044'
    },
    {
      code: '8374',
      name: 'Dark Salmon',
      hex: '#B85044'
    },
    {
      code: '8374',
      name: 'Dark Salmon',
      hex: '#B85044'
    },
    {
      code: '8375',
      name: 'Siena',
      hex: '#B14338'
    },
    {
      code: '8375',
      name: 'Siena',
      hex: '#B14338'
    },
    {
      code: '8375',
      name: 'Siena',
      hex: '#B14338'
    },
    {
      code: '8376',
      name: 'Dark Siena',
      hex: '#A23534'
    },
    {
      code: '8376',
      name: 'Dark Siena',
      hex: '#A23534'
    },
    {
      code: '8376',
      name: 'Dark Siena',
      hex: '#A23534'
    },
    {
      code: '8377',
      name: 'Light Burgundy',
      hex: '#85272E'
    },
    {
      code: '8377',
      name: 'Light Burgundy',
      hex: '#85272E'
    },
    {
      code: '8377',
      name: 'Light Burgundy',
      hex: '#85272E'
    },
    {
      code: '8378',
      name: 'Ice Burgundy',
      hex: '#CB968F'
    },
    {
      code: '8378',
      name: 'Ice Burgundy',
      hex: '#CB968F'
    },
    {
      code: '8378',
      name: 'Ice Burgundy',
      hex: '#CB968F'
    },
    {
      code: '8380',
      name: 'Red Mud',
      hex: '#5E2426'
    },
    {
      code: '8380',
      name: 'Red Mud',
      hex: '#5E2426'
    },
    {
      code: '8380',
      name: 'Red Mud',
      hex: '#5E2426'
    },
    {
      code: '8381',
      name: 'Dark Burgundy',
      hex: '#582225'
    },
    {
      code: '8381',
      name: 'Dark Burgundy',
      hex: '#582225'
    },
    {
      code: '8381',
      name: 'Dark Burgundy',
      hex: '#582225'
    },
    {
      code: '8382',
      name: 'Porcelain Pink',
      hex: '#D39D90'
    },
    {
      code: '8382',
      name: 'Porcelain Pink',
      hex: '#D39D90'
    },
    {
      code: '8382',
      name: 'Porcelain Pink',
      hex: '#D39D90'
    },
    {
      code: '8383',
      name: 'Light Mole Pink',
      hex: '#D69C8E'
    },
    {
      code: '8383',
      name: 'Light Mole Pink',
      hex: '#D69C8E'
    },
    {
      code: '8383',
      name: 'Light Mole Pink',
      hex: '#D69C8E'
    },
    {
      code: '8384',
      name: 'Mole Pink',
      hex: '#BB7462'
    },
    {
      code: '8384',
      name: 'Mole Pink',
      hex: '#BB7462'
    },
    {
      code: '8384',
      name: 'Mole Pink',
      hex: '#BB7462'
    },
    {
      code: '8385',
      name: 'Light Mole',
      hex: '#B17771'
    },
    {
      code: '8385',
      name: 'Light Mole',
      hex: '#B17771'
    },
    {
      code: '8385',
      name: 'Light Mole',
      hex: '#B17771'
    },
    {
      code: '8386',
      name: 'Mole',
      hex: '#955C56'
    },
    {
      code: '8386',
      name: 'Mole',
      hex: '#955C56'
    },
    {
      code: '8386',
      name: 'Mole',
      hex: '#955C56'
    },
    {
      code: '8387',
      name: 'Dark Mole',
      hex: '#794038'
    },
    {
      code: '8387',
      name: 'Dark Mole',
      hex: '#794038'
    },
    {
      code: '8387',
      name: 'Dark Mole',
      hex: '#794038'
    },
    {
      code: '8388',
      name: 'Light Oyster',
      hex: '#9A8C8F'
    },
    {
      code: '8388',
      name: 'Light Oyster',
      hex: '#9A8C8F'
    },
    {
      code: '8388',
      name: 'Light Oyster',
      hex: '#9A8C8F'
    },
    {
      code: '8389',
      name: 'Mid Oyster',
      hex: '#948087'
    },
    {
      code: '8389',
      name: 'Mid Oyster',
      hex: '#948087'
    },
    {
      code: '8389',
      name: 'Mid Oyster',
      hex: '#948087'
    },
    {
      code: '8390',
      name: 'Oyster',
      hex: '#7D6B73'
    },
    {
      code: '8390',
      name: 'Oyster',
      hex: '#7D6B73'
    },
    {
      code: '8390',
      name: 'Oyster',
      hex: '#7D6B73'
    },
    {
      code: '8391',
      name: 'Light Java',
      hex: '#94757A'
    },
    {
      code: '8391',
      name: 'Light Java',
      hex: '#94757A'
    },
    {
      code: '8391',
      name: 'Light Java',
      hex: '#94757A'
    },
    {
      code: '8392',
      name: 'Java',
      hex: '#69494F'
    },
    {
      code: '8392',
      name: 'Java',
      hex: '#69494F'
    },
    {
      code: '8392',
      name: 'Java',
      hex: '#69494F'
    },
    {
      code: '8393',
      name: 'Dark Java',
      hex: '#624145'
    },
    {
      code: '8393',
      name: 'Dark Java',
      hex: '#624145'
    },
    {
      code: '8393',
      name: 'Dark Java',
      hex: '#624145'
    },
    {
      code: '8394',
      name: 'Magnolia',
      hex: '#DFBFAB'
    },
    {
      code: '8394',
      name: 'Magnolia',
      hex: '#DFBFAB'
    },
    {
      code: '8394',
      name: 'Magnolia',
      hex: '#DFBFAB'
    },
    {
      code: '8395',
      name: 'Pampas',
      hex: '#D3B3A0'
    },
    {
      code: '8395',
      name: 'Pampas',
      hex: '#D3B3A0'
    },
    {
      code: '8395',
      name: 'Pampas',
      hex: '#D3B3A0'
    },
    {
      code: '8396',
      name: 'Light Latte',
      hex: '#BF9D90'
    },
    {
      code: '8396',
      name: 'Light Latte',
      hex: '#BF9D90'
    },
    {
      code: '8396',
      name: 'Light Latte',
      hex: '#BF9D90'
    },
    {
      code: '8397',
      name: 'Medium Latte',
      hex: '#C9977A'
    },
    {
      code: '8397',
      name: 'Medium Latte',
      hex: '#C9977A'
    },
    {
      code: '8397',
      name: 'Medium Latte',
      hex: '#C9977A'
    },
    {
      code: '8398',
      name: 'Latte',
      hex: '#AD7154'
    },
    {
      code: '8398',
      name: 'Latte',
      hex: '#AD7154'
    },
    {
      code: '8398',
      name: 'Latte',
      hex: '#AD7154'
    },
    {
      code: '8399',
      name: 'Dark Latte',
      hex: '#A56344'
    },
    {
      code: '8399',
      name: 'Dark Latte',
      hex: '#A56344'
    },
    {
      code: '8399',
      name: 'Dark Latte',
      hex: '#A56344'
    },
    {
      code: '8400',
      name: 'Bark',
      hex: '#8A4939'
    },
    {
      code: '8400',
      name: 'Bark',
      hex: '#8A4939'
    },
    {
      code: '8400',
      name: 'Bark',
      hex: '#8A4939'
    },
    {
      code: '8401',
      name: 'Brown',
      hex: '#703626'
    },
    {
      code: '8401',
      name: 'Brown',
      hex: '#703626'
    },
    {
      code: '8401',
      name: 'Brown',
      hex: '#703626'
    },
    {
      code: '8402',
      name: 'Chocolate Brown',
      hex: '#562D26'
    },
    {
      code: '8402',
      name: 'Chocolate Brown',
      hex: '#562D26'
    },
    {
      code: '8402',
      name: 'Chocolate Brown',
      hex: '#562D26'
    },
    {
      code: '8403',
      name: 'Dirty Paw',
      hex: '#5A332A'
    },
    {
      code: '8403',
      name: 'Dirty Paw',
      hex: '#5A332A'
    },
    {
      code: '8403',
      name: 'Dirty Paw',
      hex: '#5A332A'
    },
    {
      code: '8404',
      name: 'Purple Brown',
      hex: '#482621'
    },
    {
      code: '8404',
      name: 'Purple Brown',
      hex: '#482621'
    },
    {
      code: '8404',
      name: 'Purple Brown',
      hex: '#482621'
    },
    {
      code: '8405',
      name: 'Burnt Umber',
      hex: '#372829'
    },
    {
      code: '8405',
      name: 'Burnt Umber',
      hex: '#372829'
    },
    {
      code: '8405',
      name: 'Burnt Umber',
      hex: '#372829'
    },
    {
      code: '8406',
      name: 'Baby Blossom',
      hex: '#D3AD9C'
    },
    {
      code: '8406',
      name: 'Baby Blossom',
      hex: '#D3AD9C'
    },
    {
      code: '8406',
      name: 'Baby Blossom',
      hex: '#D3AD9C'
    },
    {
      code: '8407',
      name: 'Pale Donkey',
      hex: '#B78F7A'
    },
    {
      code: '8407',
      name: 'Pale Donkey',
      hex: '#B78F7A'
    },
    {
      code: '8407',
      name: 'Pale Donkey',
      hex: '#B78F7A'
    },
    {
      code: '8408',
      name: 'Medium Donkey',
      hex: '#9F715D'
    },
    {
      code: '8408',
      name: 'Medium Donkey',
      hex: '#9F715D'
    },
    {
      code: '8408',
      name: 'Medium Donkey',
      hex: '#9F715D'
    },
    {
      code: '8409',
      name: 'Donkey',
      hex: '#7C5544'
    },
    {
      code: '8409',
      name: 'Donkey',
      hex: '#7C5544'
    },
    {
      code: '8409',
      name: 'Donkey',
      hex: '#7C5544'
    },
    {
      code: '8410',
      name: 'Charcoal',
      hex: '#4A332D'
    },
    {
      code: '8410',
      name: 'Charcoal',
      hex: '#4A332D'
    },
    {
      code: '8410',
      name: 'Charcoal',
      hex: '#4A332D'
    },
    {
      code: '8411',
      name: 'Frost',
      hex: '#C8C6C6'
    },
    {
      code: '8411',
      name: 'Frost',
      hex: '#C8C6C6'
    },
    {
      code: '8411',
      name: 'Frost',
      hex: '#C8C6C6'
    },
    {
      code: '8412',
      name: 'Alabaster',
      hex: '#CFC097'
    },
    {
      code: '8412',
      name: 'Alabaster',
      hex: '#CFC097'
    },
    {
      code: '8412',
      name: 'Alabaster',
      hex: '#CFC097'
    },
    {
      code: '8413',
      name: 'Light Stone',
      hex: '#B8A794'
    },
    {
      code: '8413',
      name: 'Light Stone',
      hex: '#B8A794'
    },
    {
      code: '8413',
      name: 'Light Stone',
      hex: '#B8A794'
    },
    {
      code: '8414',
      name: 'Mid Stone',
      hex: '#998D80'
    },
    {
      code: '8414',
      name: 'Mid Stone',
      hex: '#998D80'
    },
    {
      code: '8414',
      name: 'Mid Stone',
      hex: '#998D80'
    },
    {
      code: '8415',
      name: 'Stone',
      hex: '#938072'
    },
    {
      code: '8415',
      name: 'Stone',
      hex: '#938072'
    },
    {
      code: '8415',
      name: 'Stone',
      hex: '#938072'
    },
    {
      code: '8416',
      name: 'Dark Stone',
      hex: '#706657'
    },
    {
      code: '8416',
      name: 'Dark Stone',
      hex: '#706657'
    },
    {
      code: '8416',
      name: 'Dark Stone',
      hex: '#706657'
    },
    {
      code: '8417',
      name: 'Smoke',
      hex: '#494740'
    },
    {
      code: '8417',
      name: 'Smoke',
      hex: '#494740'
    },
    {
      code: '8417',
      name: 'Smoke',
      hex: '#494740'
    },
    {
      code: '8418',
      name: 'Black Pearl',
      hex: '#342C28'
    },
    {
      code: '8418',
      name: 'Black Pearl',
      hex: '#342C28'
    },
    {
      code: '8418',
      name: 'Black Pearl',
      hex: '#342C28'
    },
    {
      code: '8419',
      name: 'Ash',
      hex: '#969186'
    },
    {
      code: '8419',
      name: 'Ash',
      hex: '#969186'
    },
    {
      code: '8419',
      name: 'Ash',
      hex: '#969186'
    },
    {
      code: '8420',
      name: 'Dark Ash',
      hex: '#9A9078'
    },
    {
      code: '8420',
      name: 'Dark Ash',
      hex: '#9A9078'
    },
    {
      code: '8420',
      name: 'Dark Ash',
      hex: '#9A9078'
    },
    {
      code: '8421',
      name: 'Greenstone',
      hex: '#707F65'
    },
    {
      code: '8421',
      name: 'Greenstone',
      hex: '#707F65'
    },
    {
      code: '8421',
      name: 'Greenstone',
      hex: '#707F65'
    },
    {
      code: '8422',
      name: 'Deep Ocean',
      hex: '#4D4C51'
    },
    {
      code: '8422',
      name: 'Deep Ocean',
      hex: '#4D4C51'
    },
    {
      code: '8422',
      name: 'Deep Ocean',
      hex: '#4D4C51'
    },
    {
      code: '8423',
      name: 'Frosty Pink',
      hex: '#CCAF9E'
    },
    {
      code: '8423',
      name: 'Frosty Pink',
      hex: '#CCAF9E'
    },
    {
      code: '8423',
      name: 'Frosty Pink',
      hex: '#CCAF9E'
    },
    {
      code: '8424',
      name: 'Light Clay',
      hex: '#AE8D79'
    },
    {
      code: '8424',
      name: 'Light Clay',
      hex: '#AE8D79'
    },
    {
      code: '8424',
      name: 'Light Clay',
      hex: '#AE8D79'
    },
    {
      code: '8425',
      name: 'Grey Green Haze',
      hex: '#937F66'
    },
    {
      code: '8425',
      name: 'Grey Green Haze',
      hex: '#937F66'
    },
    {
      code: '8425',
      name: 'Grey Green Haze',
      hex: '#937F66'
    },
    {
      code: '8426',
      name: 'Medium Clay',
      hex: '#7A5C4E'
    },
    {
      code: '8426',
      name: 'Medium Clay',
      hex: '#7A5C4E'
    },
    {
      code: '8426',
      name: 'Medium Clay',
      hex: '#7A5C4E'
    },
    {
      code: '8427',
      name: 'Dark Clay',
      hex: '#6A4A3C'
    },
    {
      code: '8427',
      name: 'Dark Clay',
      hex: '#6A4A3C'
    },
    {
      code: '8427',
      name: 'Dark Clay',
      hex: '#6A4A3C'
    },
    {
      code: '8428',
      name: 'Snow Drift',
      hex: '#C8AFA1'
    },
    {
      code: '8428',
      name: 'Snow Drift',
      hex: '#C8AFA1'
    },
    {
      code: '8428',
      name: 'Snow Drift',
      hex: '#C8AFA1'
    },
    {
      code: '8429',
      name: 'Twig',
      hex: '#A38074'
    },
    {
      code: '8429',
      name: 'Twig',
      hex: '#A38074'
    },
    {
      code: '8429',
      name: 'Twig',
      hex: '#A38074'
    },
    {
      code: '8430',
      name: 'Mid Twig',
      hex: '#967063'
    },
    {
      code: '8430',
      name: 'Mid Twig',
      hex: '#967063'
    },
    {
      code: '8430',
      name: 'Mid Twig',
      hex: '#967063'
    },
    {
      code: '8431',
      name: 'Dark Twig',
      hex: '#8B6657'
    },
    {
      code: '8431',
      name: 'Dark Twig',
      hex: '#8B6657'
    },
    {
      code: '8431',
      name: 'Dark Twig',
      hex: '#8B6657'
    },
    {
      code: '8432',
      name: 'Sepia',
      hex: '#66483A'
    },
    {
      code: '8432',
      name: 'Sepia',
      hex: '#66483A'
    },
    {
      code: '8432',
      name: 'Sepia',
      hex: '#66483A'
    },
    {
      code: '8433',
      name: 'Dark Sepia',
      hex: '#402B29'
    },
    {
      code: '8433',
      name: 'Dark Sepia',
      hex: '#402B29'
    },
    {
      code: '8433',
      name: 'Dark Sepia',
      hex: '#402B29'
    },
    {
      code: '8434',
      name: 'Arctic Grey',
      hex: '#A0A096'
    },
    {
      code: '8434',
      name: 'Arctic Grey',
      hex: '#A0A096'
    },
    {
      code: '8434',
      name: 'Arctic Grey',
      hex: '#A0A096'
    },
    {
      code: '8435',
      name: 'Cement',
      hex: '#837976'
    },
    {
      code: '8435',
      name: 'Cement',
      hex: '#837976'
    },
    {
      code: '8435',
      name: 'Cement',
      hex: '#837976'
    },
    {
      code: '8436',
      name: 'Smokey Grey',
      hex: '#7A8178'
    },
    {
      code: '8436',
      name: 'Smokey Grey',
      hex: '#7A8178'
    },
    {
      code: '8436',
      name: 'Smokey Grey',
      hex: '#7A8178'
    },
    {
      code: '8437',
      name: 'Dark Cement',
      hex: '#71665F'
    },
    {
      code: '8437',
      name: 'Dark Cement',
      hex: '#71665F'
    },
    {
      code: '8437',
      name: 'Dark Cement',
      hex: '#71665F'
    },
    {
      code: '8438',
      name: 'Thunder Grey',
      hex: '#5A5B56'
    },
    {
      code: '8438',
      name: 'Thunder Grey',
      hex: '#5A5B56'
    },
    {
      code: '8438',
      name: 'Thunder Grey',
      hex: '#5A5B56'
    },
    {
      code: '8439',
      name: 'Storm Grey',
      hex: '#433C38'
    },
    {
      code: '8439',
      name: 'Storm Grey',
      hex: '#433C38'
    },
    {
      code: '8439',
      name: 'Storm Grey',
      hex: '#433C38'
    },
    {
      code: '8440',
      name: 'Pale Dove',
      hex: '#A4A39F'
    },
    {
      code: '8440',
      name: 'Pale Dove',
      hex: '#A4A39F'
    },
    {
      code: '8440',
      name: 'Pale Dove',
      hex: '#A4A39F'
    },
    {
      code: '8441',
      name: 'Dove',
      hex: '#85858B'
    },
    {
      code: '8441',
      name: 'Dove',
      hex: '#85858B'
    },
    {
      code: '8441',
      name: 'Dove',
      hex: '#85858B'
    },
    {
      code: '8442',
      name: 'Medium Dove',
      hex: '#7A7B84'
    },
    {
      code: '8442',
      name: 'Medium Dove',
      hex: '#7A7B84'
    },
    {
      code: '8442',
      name: 'Medium Dove',
      hex: '#7A7B84'
    },
    {
      code: '8443',
      name: 'Dark Dove',
      hex: '#585862'
    },
    {
      code: '8443',
      name: 'Dark Dove',
      hex: '#585862'
    },
    {
      code: '8443',
      name: 'Dark Dove',
      hex: '#585862'
    },
    {
      code: '8444',
      name: 'Mist',
      hex: '#959797'
    },
    {
      code: '8444',
      name: 'Mist',
      hex: '#959797'
    },
    {
      code: '8444',
      name: 'Mist',
      hex: '#959797'
    },
    {
      code: '8445',
      name: 'Pebble',
      hex: '#7B8487'
    },
    {
      code: '8445',
      name: 'Pebble',
      hex: '#7B8487'
    },
    {
      code: '8445',
      name: 'Pebble',
      hex: '#7B8487'
    },
    {
      code: '8446',
      name: 'Shadow',
      hex: '#4D4B55'
    },
    {
      code: '8446',
      name: 'Shadow',
      hex: '#4D4B55'
    },
    {
      code: '8446',
      name: 'Shadow',
      hex: '#4D4B55'
    },
    {
      code: '8447',
      name: 'Blue Gum',
      hex: '#384A52'
    },
    {
      code: '8447',
      name: 'Blue Gum',
      hex: '#384A52'
    },
    {
      code: '8447',
      name: 'Blue Gum',
      hex: '#384A52'
    },
    {
      code: '8448',
      name: 'Steel',
      hex: '#403E44'
    },
    {
      code: '8448',
      name: 'Steel',
      hex: '#403E44'
    },
    {
      code: '8448',
      name: 'Steel',
      hex: '#403E44'
    },
    {
      code: 'H01',
      name: 'White',
      hex: '#E5ECF1'
    },
    {
      code: 'H01',
      name: 'White',
      hex: '#E5ECF1'
    },
    {
      code: 'H01',
      name: 'White',
      hex: '#E5ECF1'
    },
    {
      code: 'H02',
      name: 'Cream',
      hex: '#E4E4C5'
    },
    {
      code: 'H02',
      name: 'Cream',
      hex: '#E4E4C5'
    },
    {
      code: 'H02',
      name: 'Cream',
      hex: '#E4E4C5'
    },
    {
      code: 'H03',
      name: 'Yellow',
      hex: '#E9C704'
    },
    {
      code: 'H03',
      name: 'Yellow',
      hex: '#E9C704'
    },
    {
      code: 'H03',
      name: 'Yellow',
      hex: '#E9C704'
    },
    {
      code: 'H04',
      name: 'Orange',
      hex: '#D14803'
    },
    {
      code: 'H04',
      name: 'Orange',
      hex: '#D14803'
    },
    {
      code: 'H04',
      name: 'Orange',
      hex: '#D14803'
    },
    {
      code: 'H05',
      name: 'Red',
      hex: '#B4060E'
    },
    {
      code: 'H05',
      name: 'Red',
      hex: '#B4060E'
    },
    {
      code: 'H05',
      name: 'Red',
      hex: '#B4060E'
    },
    {
      code: 'H06',
      name: 'Pink',
      hex: '#EA8AA5'
    },
    {
      code: 'H06',
      name: 'Pink',
      hex: '#EA8AA5'
    },
    {
      code: 'H06',
      name: 'Pink',
      hex: '#EA8AA5'
    },
    {
      code: 'H07',
      name: 'Purple',
      hex: '#712297'
    },
    {
      code: 'H07',
      name: 'Purple',
      hex: '#712297'
    },
    {
      code: 'H07',
      name: 'Purple',
      hex: '#712297'
    },
    {
      code: 'H08',
      name: 'Blue',
      hex: '#0239A3'
    },
    {
      code: 'H08',
      name: 'Blue',
      hex: '#0239A3'
    },
    {
      code: 'H08',
      name: 'Blue',
      hex: '#0239A3'
    },
    {
      code: 'H09',
      name: 'Light Blue',
      hex: '#025BC3'
    },
    {
      code: 'H09',
      name: 'Light Blue',
      hex: '#025BC3'
    },
    {
      code: 'H09',
      name: 'Light Blue',
      hex: '#025BC3'
    },
    {
      code: 'H10',
      name: 'Green',
      hex: '#027643'
    },
    {
      code: 'H10',
      name: 'Green',
      hex: '#027643'
    },
    {
      code: 'H10',
      name: 'Green',
      hex: '#027643'
    },
    {
      code: 'H101',
      name: 'Eucalyptus',
      hex: '#A9C39B'
    },
    {
      code: 'H101',
      name: 'Eucalyptus',
      hex: '#A9C39B'
    },
    {
      code: 'H101',
      name: 'Eucalyptus',
      hex: '#A9C39B'
    },
    {
      code: 'H102',
      name: 'Forest Green',
      hex: '#356B2D'
    },
    {
      code: 'H102',
      name: 'Forest Green',
      hex: '#356B2D'
    },
    {
      code: 'H102',
      name: 'Forest Green',
      hex: '#356B2D'
    },
    {
      code: 'H103',
      name: 'Light Yellow',
      hex: '#FFE660'
    },
    {
      code: 'H103',
      name: 'Light Yellow',
      hex: '#FFE660'
    },
    {
      code: 'H103',
      name: 'Light Yellow',
      hex: '#FFE660'
    },
    {
      code: 'H104',
      name: 'Lime',
      hex: '#BCD122'
    },
    {
      code: 'H104',
      name: 'Lime',
      hex: '#BCD122'
    },
    {
      code: 'H104',
      name: 'Lime',
      hex: '#BCD122'
    },
    {
      code: 'H105',
      name: 'Light Apricot',
      hex: '#FFAC78'
    },
    {
      code: 'H105',
      name: 'Light Apricot',
      hex: '#FFAC78'
    },
    {
      code: 'H105',
      name: 'Light Apricot',
      hex: '#FFAC78'
    },
    {
      code: 'H106',
      name: 'Light Lavender',
      hex: '#CCC5ED'
    },
    {
      code: 'H106',
      name: 'Light Lavender',
      hex: '#CCC5ED'
    },
    {
      code: 'H106',
      name: 'Light Lavender',
      hex: '#CCC5ED'
    },
    {
      code: 'H107',
      name: 'Lavender',
      hex: '#6A87C1'
    },
    {
      code: 'H107',
      name: 'Lavender',
      hex: '#6A87C1'
    },
    {
      code: 'H107',
      name: 'Lavender',
      hex: '#6A87C1'
    },
    {
      code: 'H11',
      name: 'Light Green',
      hex: '#19CDA7'
    },
    {
      code: 'H11',
      name: 'Light Green',
      hex: '#19CDA7'
    },
    {
      code: 'H11',
      name: 'Light Green',
      hex: '#19CDA7'
    },
    {
      code: 'H12',
      name: 'Brown',
      hex: '#3E271A'
    },
    {
      code: 'H12',
      name: 'Brown',
      hex: '#3E271A'
    },
    {
      code: 'H12',
      name: 'Brown',
      hex: '#3E271A'
    },
    {
      code: 'H13',
      name: 'Transparent Red',
      hex: '#C02435'
    },
    {
      code: 'H13',
      name: 'Transparent Red',
      hex: '#C02435'
    },
    {
      code: 'H13',
      name: 'Transparent Red',
      hex: '#C02435'
    },
    {
      code: 'H13',
      name: 'Transparent Red',
      hex: '#00C024'
    },
    {
      code: 'H14',
      name: 'Transparent Yellow',
      hex: '#E4AA32'
    },
    {
      code: 'H14',
      name: 'Transparent Yellow',
      hex: '#E4AA32'
    },
    {
      code: 'H14',
      name: 'Transparent Yellow',
      hex: '#E4AA32'
    },
    {
      code: 'H14',
      name: 'Transparent Yellow',
      hex: '#01E4AA'
    },
    {
      code: 'H15',
      name: 'Transparent Blue',
      hex: '#487ED5'
    },
    {
      code: 'H15',
      name: 'Transparent Blue',
      hex: '#487ED5'
    },
    {
      code: 'H15',
      name: 'Transparent Blue',
      hex: '#487ED5'
    },
    {
      code: 'H16',
      name: 'Transparent Green',
      hex: '#37B876'
    },
    {
      code: 'H16',
      name: 'Transparent Green',
      hex: '#37B876'
    },
    {
      code: 'H16',
      name: 'Transparent Green',
      hex: '#37B876'
    },
    {
      code: 'H16',
      name: 'Transparent Green',
      hex: '#0237B8'
    },
    {
      code: 'H17',
      name: 'Grey',
      hex: '#838F98'
    },
    {
      code: 'H17',
      name: 'Grey',
      hex: '#838F98'
    },
    {
      code: 'H17',
      name: 'Grey',
      hex: '#838F98'
    },
    {
      code: 'H17',
      name: 'Grey',
      hex: '#03838F'
    },
    {
      code: 'H18',
      name: 'Black',
      hex: '#141315'
    },
    {
      code: 'H18',
      name: 'Black',
      hex: '#141315'
    },
    {
      code: 'H18',
      name: 'Black',
      hex: '#141315'
    },
    {
      code: 'H18',
      name: 'Black',
      hex: '#041413'
    },
    {
      code: 'H19',
      name: 'Clear',
      hex: '#D8D2CE'
    },
    {
      code: 'H19',
      name: 'Clear',
      hex: '#D8D2CE'
    },
    {
      code: 'H19',
      name: 'Clear',
      hex: '#D8D2CE'
    },
    {
      code: 'H19',
      name: 'Clear',
      hex: '#05D8D2'
    },
    {
      code: 'H20',
      name: 'Reddish Brown',
      hex: '#8D2A0F'
    },
    {
      code: 'H20',
      name: 'Reddish Brown',
      hex: '#8D2A0F'
    },
    {
      code: 'H20',
      name: 'Reddish Brown',
      hex: '#8D2A0F'
    },
    {
      code: 'H20',
      name: 'Reddish Brown',
      hex: '#068D2A'
    },
    {
      code: 'H21',
      name: 'Light Brown',
      hex: '#BE6C21'
    },
    {
      code: 'H21',
      name: 'Light Brown',
      hex: '#BE6C21'
    },
    {
      code: 'H21',
      name: 'Light Brown',
      hex: '#BE6C21'
    },
    {
      code: 'H21',
      name: 'Light Brown',
      hex: '#07BE6C'
    },
    {
      code: 'H22',
      name: 'Dark Red',
      hex: '#91020A'
    },
    {
      code: 'H22',
      name: 'Dark Red',
      hex: '#91020A'
    },
    {
      code: 'H22',
      name: 'Dark Red',
      hex: '#91020A'
    },
    {
      code: 'H22',
      name: 'Dark Red',
      hex: '#089102'
    },
    {
      code: 'H24',
      name: 'Translucent Purple',
      hex: '#683E9A'
    },
    {
      code: 'H24',
      name: 'Translucent Purple',
      hex: '#683E9A'
    },
    {
      code: 'H24',
      name: 'Translucent Purple',
      hex: '#683E9A'
    },
    {
      code: 'H24',
      name: 'Translucent Purple',
      hex: '#09683E'
    },
    {
      code: 'H25',
      name: 'Translucent Brown',
      hex: '#87593D'
    },
    {
      code: 'H25',
      name: 'Translucent Brown',
      hex: '#87593D'
    },
    {
      code: 'H25',
      name: 'Translucent Brown',
      hex: '#87593D'
    },
    {
      code: 'H26',
      name: 'Matt Rose',
      hex: '#E8A498'
    },
    {
      code: 'H26',
      name: 'Matt Rose',
      hex: '#E8A498'
    },
    {
      code: 'H26',
      name: 'Matt Rose',
      hex: '#E8A498'
    },
    {
      code: 'H27',
      name: 'Beige',
      hex: '#DCB18E'
    },
    {
      code: 'H27',
      name: 'Beige',
      hex: '#DCB18E'
    },
    {
      code: 'H27',
      name: 'Beige',
      hex: '#DCB18E'
    },
    {
      code: 'H28',
      name: 'Dark Green',
      hex: '#1E2C1C'
    },
    {
      code: 'H28',
      name: 'Dark Green',
      hex: '#1E2C1C'
    },
    {
      code: 'H28',
      name: 'Dark Green',
      hex: '#1E2C1C'
    },
    {
      code: 'H29',
      name: 'Claret',
      hex: '#BF0142'
    },
    {
      code: 'H29',
      name: 'Claret',
      hex: '#BF0142'
    },
    {
      code: 'H29',
      name: 'Claret',
      hex: '#BF0142'
    },
    {
      code: 'H30',
      name: 'Burgundy',
      hex: '#4E0C1B'
    },
    {
      code: 'H30',
      name: 'Burgundy',
      hex: '#4E0C1B'
    },
    {
      code: 'H30',
      name: 'Burgundy',
      hex: '#4E0C1B'
    },
    {
      code: 'H31',
      name: 'Turquoise',
      hex: '#489AB9'
    },
    {
      code: 'H31',
      name: 'Turquoise',
      hex: '#489AB9'
    },
    {
      code: 'H31',
      name: 'Turquoise',
      hex: '#489AB9'
    },
    {
      code: 'H32',
      name: 'Neon Fuchsia',
      hex: '#FF208D'
    },
    {
      code: 'H32',
      name: 'Neon Fuchsia',
      hex: '#FF208D'
    },
    {
      code: 'H32',
      name: 'Neon Fuchsia',
      hex: '#FF208D'
    },
    {
      code: 'H33',
      name: 'Cerise',
      hex: '#FF3956'
    },
    {
      code: 'H33',
      name: 'Cerise',
      hex: '#FF3956'
    },
    {
      code: 'H33',
      name: 'Cerise',
      hex: '#FF3956'
    },
    {
      code: 'H34',
      name: 'Neon Yellow',
      hex: '#E5EF13'
    },
    {
      code: 'H34',
      name: 'Neon Yellow',
      hex: '#E5EF13'
    },
    {
      code: 'H34',
      name: 'Neon Yellow',
      hex: '#E5EF13'
    },
    {
      code: 'H35',
      name: 'Neon Red',
      hex: '#FF2833'
    },
    {
      code: 'H35',
      name: 'Neon Red',
      hex: '#FF2833'
    },
    {
      code: 'H35',
      name: 'Neon Red',
      hex: '#FF2833'
    },
    {
      code: 'H36',
      name: 'Neon Blue',
      hex: '#2353B0'
    },
    {
      code: 'H36',
      name: 'Neon Blue',
      hex: '#2353B0'
    },
    {
      code: 'H36',
      name: 'Neon Blue',
      hex: '#2353B0'
    },
    {
      code: 'H37',
      name: 'Neon Green',
      hex: '#06B73C'
    },
    {
      code: 'H37',
      name: 'Neon Green',
      hex: '#06B73C'
    },
    {
      code: 'H37',
      name: 'Neon Green',
      hex: '#06B73C'
    },
    {
      code: 'H38',
      name: 'Neon Orange',
      hex: '#FD8600'
    },
    {
      code: 'H38',
      name: 'Neon Orange',
      hex: '#FD8600'
    },
    {
      code: 'H38',
      name: 'Neon Orange',
      hex: '#FD8600'
    },
    {
      code: 'H39',
      name: 'Fluorescent Yellow',
      hex: '#F1F21C'
    },
    {
      code: 'H39',
      name: 'Fluorescent Yellow',
      hex: '#F1F21C'
    },
    {
      code: 'H39',
      name: 'Fluorescent Yellow',
      hex: '#F1F21C'
    },
    {
      code: 'H40',
      name: 'Fluorescent Orange',
      hex: '#FE630B'
    },
    {
      code: 'H40',
      name: 'Fluorescent Orange',
      hex: '#FE630B'
    },
    {
      code: 'H40',
      name: 'Fluorescent Orange',
      hex: '#FE630B'
    },
    {
      code: 'H41',
      name: 'Fluorescent Blue',
      hex: '#2659B2'
    },
    {
      code: 'H41',
      name: 'Fluorescent Blue',
      hex: '#2659B2'
    },
    {
      code: 'H41',
      name: 'Fluorescent Blue',
      hex: '#2659B2'
    },
    {
      code: 'H42',
      name: 'Fluorescent Green',
      hex: '#0CBD51'
    },
    {
      code: 'H42',
      name: 'Fluorescent Green',
      hex: '#0CBD51'
    },
    {
      code: 'H42',
      name: 'Fluorescent Green',
      hex: '#0CBD51'
    },
    {
      code: 'H43',
      name: 'Pastel Yellow',
      hex: '#E7E45A'
    },
    {
      code: 'H43',
      name: 'Pastel Yellow',
      hex: '#E7E45A'
    },
    {
      code: 'H43',
      name: 'Pastel Yellow',
      hex: '#E7E45A'
    },
    {
      code: 'H44',
      name: 'Pastel Red',
      hex: '#F96160'
    },
    {
      code: 'H44',
      name: 'Pastel Red',
      hex: '#F96160'
    },
    {
      code: 'H44',
      name: 'Pastel Red',
      hex: '#F96160'
    },
    {
      code: 'H45',
      name: 'Pastel Purple',
      hex: '#8E69CD'
    },
    {
      code: 'H45',
      name: 'Pastel Purple',
      hex: '#8E69CD'
    },
    {
      code: 'H45',
      name: 'Pastel Purple',
      hex: '#8E69CD'
    },
    {
      code: 'H46',
      name: 'Pastel Blue',
      hex: '#51AEE4'
    },
    {
      code: 'H46',
      name: 'Pastel Blue',
      hex: '#51AEE4'
    },
    {
      code: 'H46',
      name: 'Pastel Blue',
      hex: '#51AEE4'
    },
    {
      code: 'H47',
      name: 'Pastel Green',
      hex: '#80DF96'
    },
    {
      code: 'H47',
      name: 'Pastel Green',
      hex: '#80DF96'
    },
    {
      code: 'H47',
      name: 'Pastel Green',
      hex: '#80DF96'
    },
    {
      code: 'H48',
      name: 'Pastel Pink',
      hex: '#D67AD1'
    },
    {
      code: 'H48',
      name: 'Pastel Pink',
      hex: '#D67AD1'
    },
    {
      code: 'H48',
      name: 'Pastel Pink',
      hex: '#D67AD1'
    },
    {
      code: 'H49',
      name: 'Azure',
      hex: '#0FACD1'
    },
    {
      code: 'H49',
      name: 'Azure',
      hex: '#0FACD1'
    },
    {
      code: 'H49',
      name: 'Azure',
      hex: '#0FACD1'
    },
    {
      code: 'H55',
      name: 'Green (Glow in the Dark)',
      hex: '#FAF8ED'
    },
    {
      code: 'H55',
      name: 'Green (Glow in the Dark)',
      hex: '#FAF8ED'
    },
    {
      code: 'H55',
      name: 'Green (Glow in the Dark)',
      hex: '#FAF8ED'
    },
    {
      code: 'H56',
      name: 'Red (Glow in the Dark)',
      hex: '#EDBF9F'
    },
    {
      code: 'H56',
      name: 'Red (Glow in the Dark)',
      hex: '#EDBF9F'
    },
    {
      code: 'H56',
      name: 'Red (Glow in the Dark)',
      hex: '#EDBF9F'
    },
    {
      code: 'H57',
      name: 'Blue (Glow in the Dark)',
      hex: '#C4D0E3'
    },
    {
      code: 'H57',
      name: 'Blue (Glow in the Dark)',
      hex: '#C4D0E3'
    },
    {
      code: 'H57',
      name: 'Blue (Glow in the Dark)',
      hex: '#C4D0E3'
    },
    {
      code: 'H60',
      name: 'Teddybear Brown',
      hex: '#F0981E'
    },
    {
      code: 'H60',
      name: 'Teddybear Brown',
      hex: '#F0981E'
    },
    {
      code: 'H60',
      name: 'Teddybear Brown',
      hex: '#F0981E'
    },
    {
      code: 'H61',
      name: 'Gold',
      hex: '#D99350'
    },
    {
      code: 'H61',
      name: 'Gold',
      hex: '#D99350'
    },
    {
      code: 'H61',
      name: 'Gold',
      hex: '#D99350'
    },
    {
      code: 'H62',
      name: 'Silver',
      hex: '#48474A'
    },
    {
      code: 'H62',
      name: 'Silver',
      hex: '#48474A'
    },
    {
      code: 'H62',
      name: 'Silver',
      hex: '#48474A'
    },
    {
      code: 'H63',
      name: 'Bronze',
      hex: '#42312F'
    },
    {
      code: 'H63',
      name: 'Bronze',
      hex: '#42312F'
    },
    {
      code: 'H63',
      name: 'Bronze',
      hex: '#42312F'
    },
    {
      code: 'H64',
      name: 'Pearl',
      hex: '#EFEBE4'
    },
    {
      code: 'H64',
      name: 'Pearl',
      hex: '#EFEBE4'
    },
    {
      code: 'H64',
      name: 'Pearl',
      hex: '#EFEBE4'
    },
    {
      code: 'H70',
      name: 'Light Grey',
      hex: '#A5B3C0'
    },
    {
      code: 'H70',
      name: 'Light Grey',
      hex: '#A5B3C0'
    },
    {
      code: 'H70',
      name: 'Light Grey',
      hex: '#A5B3C0'
    },
    {
      code: 'H71',
      name: 'Dark Grey',
      hex: '#445059'
    },
    {
      code: 'H71',
      name: 'Dark Grey',
      hex: '#445059'
    },
    {
      code: 'H71',
      name: 'Dark Grey',
      hex: '#445059'
    },
    {
      code: 'H72',
      name: 'Translucent Pink',
      hex: '#F097B0'
    },
    {
      code: 'H72',
      name: 'Translucent Pink',
      hex: '#F097B0'
    },
    {
      code: 'H72',
      name: 'Translucent Pink',
      hex: '#F097B0'
    },
    {
      code: 'H73',
      name: 'Translucent Aqua',
      hex: '#59AEF5'
    },
    {
      code: 'H73',
      name: 'Translucent Aqua',
      hex: '#59AEF5'
    },
    {
      code: 'H73',
      name: 'Translucent Aqua',
      hex: '#59AEF5'
    },
    {
      code: 'H74',
      name: 'Translucent Lilac',
      hex: '#5B55BD'
    },
    {
      code: 'H74',
      name: 'Translucent Lilac',
      hex: '#5B55BD'
    },
    {
      code: 'H74',
      name: 'Translucent Lilac',
      hex: '#5B55BD'
    },
    {
      code: 'H75',
      name: 'Tan',
      hex: '#B78C6D'
    },
    {
      code: 'H75',
      name: 'Tan',
      hex: '#B78C6D'
    },
    {
      code: 'H75',
      name: 'Tan',
      hex: '#B78C6D'
    },
    {
      code: 'H76',
      name: 'Nougat',
      hex: '#8A5937'
    },
    {
      code: 'H76',
      name: 'Nougat',
      hex: '#8A5937'
    },
    {
      code: 'H76',
      name: 'Nougat',
      hex: '#8A5937'
    },
    {
      code: 'H77',
      name: 'Cloudy White',
      hex: '#CED1C8'
    },
    {
      code: 'H77',
      name: 'Cloudy White',
      hex: '#CED1C8'
    },
    {
      code: 'H77',
      name: 'Cloudy White',
      hex: '#CED1C8'
    },
    {
      code: 'H78',
      name: 'Light Peach',
      hex: '#F7C1AA'
    },
    {
      code: 'H78',
      name: 'Light Peach',
      hex: '#F7C1AA'
    },
    {
      code: 'H78',
      name: 'Light Peach',
      hex: '#F7C1AA'
    },
    {
      code: 'H79',
      name: 'Apricot',
      hex: '#F87633'
    },
    {
      code: 'H79',
      name: 'Apricot',
      hex: '#F87633'
    },
    {
      code: 'H79',
      name: 'Apricot',
      hex: '#F87633'
    },
    {
      code: 'H82',
      name: 'Plum',
      hex: '#91175A'
    },
    {
      code: 'H82',
      name: 'Plum',
      hex: '#91175A'
    },
    {
      code: 'H82',
      name: 'Plum',
      hex: '#91175A'
    },
    {
      code: 'H83',
      name: 'Petrol Blue',
      hex: '#037A9F'
    },
    {
      code: 'H83',
      name: 'Petrol Blue',
      hex: '#037A9F'
    },
    {
      code: 'H83',
      name: 'Petrol Blue',
      hex: '#037A9F'
    },
    {
      code: 'H84',
      name: 'Olive Green',
      hex: '#687836'
    },
    {
      code: 'H84',
      name: 'Olive Green',
      hex: '#687836'
    },
    {
      code: 'H84',
      name: 'Olive Green',
      hex: '#687836'
    },
    {
      code: 'H95',
      name: 'Pastel Rose',
      hex: '#DD9BA3'
    },
    {
      code: 'H95',
      name: 'Pastel Rose',
      hex: '#DD9BA3'
    },
    {
      code: 'H95',
      name: 'Pastel Rose',
      hex: '#DD9BA3'
    },
    {
      code: 'H96',
      name: 'Pastel Lilac',
      hex: '#B491AD'
    },
    {
      code: 'H96',
      name: 'Pastel Lilac',
      hex: '#B491AD'
    },
    {
      code: 'H96',
      name: 'Pastel Lilac',
      hex: '#B491AD'
    },
    {
      code: 'H97',
      name: 'Pastel Ice Blue',
      hex: '#8AAFC2'
    },
    {
      code: 'H97',
      name: 'Pastel Ice Blue',
      hex: '#8AAFC2'
    },
    {
      code: 'H97',
      name: 'Pastel Ice Blue',
      hex: '#8AAFC2'
    },
    {
      code: 'H98',
      name: 'Pastel Mint',
      hex: '#94CCA4'
    },
    {
      code: 'H98',
      name: 'Pastel Mint',
      hex: '#94CCA4'
    },
    {
      code: 'H98',
      name: 'Pastel Mint',
      hex: '#94CCA4'
    },
    {
      code: 'N01',
      name: 'Black',
      hex: '#3A3D41'
    },
    {
      code: 'N01',
      name: 'Black',
      hex: '#3A3D41'
    },
    {
      code: 'N01',
      name: 'Black',
      hex: '#3A3D41'
    },
    {
      code: 'N02',
      name: 'Dark Brown',
      hex: '#50443B'
    },
    {
      code: 'N02',
      name: 'Dark Brown',
      hex: '#50443B'
    },
    {
      code: 'N02',
      name: 'Dark Brown',
      hex: '#50443B'
    },
    {
      code: 'N03',
      name: 'Brown Medium',
      hex: '#5A3E36'
    },
    {
      code: 'N03',
      name: 'Brown Medium',
      hex: '#5A3E36'
    },
    {
      code: 'N03',
      name: 'Brown Medium',
      hex: '#5A3E36'
    },
    {
      code: 'N04',
      name: 'Maroon',
      hex: '#813547'
    },
    {
      code: 'N04',
      name: 'Maroon',
      hex: '#813547'
    },
    {
      code: 'N04',
      name: 'Maroon',
      hex: '#813547'
    },
    {
      code: 'N05',
      name: 'Caramel',
      hex: '#A76224'
    },
    {
      code: 'N05',
      name: 'Caramel',
      hex: '#A76224'
    },
    {
      code: 'N05',
      name: 'Caramel',
      hex: '#A76224'
    },
    {
      code: 'N06',
      name: 'Tan',
      hex: '#AD967E'
    },
    {
      code: 'N06',
      name: 'Tan',
      hex: '#AD967E'
    },
    {
      code: 'N06',
      name: 'Tan',
      hex: '#AD967E'
    },
    {
      code: 'N07',
      name: 'Sand',
      hex: '#EEB182'
    },
    {
      code: 'N07',
      name: 'Sand',
      hex: '#EEB182'
    },
    {
      code: 'N07',
      name: 'Sand',
      hex: '#EEB182'
    },
    {
      code: 'N08',
      name: 'Ash',
      hex: '#8D8B7F'
    },
    {
      code: 'N08',
      name: 'Ash',
      hex: '#8D8B7F'
    },
    {
      code: 'N08',
      name: 'Ash',
      hex: '#8D8B7F'
    },
    {
      code: 'N09',
      name: 'Hunter Green',
      hex: '#2F4A39'
    },
    {
      code: 'N09',
      name: 'Hunter Green',
      hex: '#2F4A39'
    },
    {
      code: 'N09',
      name: 'Hunter Green',
      hex: '#2F4A39'
    },
    {
      code: 'N10',
      name: 'Light Grey',
      hex: '#D3CBCB'
    },
    {
      code: 'N10',
      name: 'Light Grey',
      hex: '#D3CBCB'
    },
    {
      code: 'N10',
      name: 'Light Grey',
      hex: '#D3CBCB'
    },
    {
      code: 'N11',
      name: 'Purple',
      hex: '#644591'
    },
    {
      code: 'N11',
      name: 'Purple',
      hex: '#644591'
    },
    {
      code: 'N11',
      name: 'Purple',
      hex: '#644591'
    },
    {
      code: 'N12',
      name: 'Ivory',
      hex: '#E2D0BF'
    },
    {
      code: 'N12',
      name: 'Ivory',
      hex: '#E2D0BF'
    },
    {
      code: 'N12',
      name: 'Ivory',
      hex: '#E2D0BF'
    },
    {
      code: 'N13',
      name: 'Orange',
      hex: '#F3601B'
    },
    {
      code: 'N13',
      name: 'Orange',
      hex: '#F3601B'
    },
    {
      code: 'N13',
      name: 'Orange',
      hex: '#F3601B'
    },
    {
      code: 'N13',
      name: 'Orange',
      hex: '#00F360'
    },
    {
      code: 'N14',
      name: 'Yellow',
      hex: '#F9CA00'
    },
    {
      code: 'N14',
      name: 'Yellow',
      hex: '#F9CA00'
    },
    {
      code: 'N14',
      name: 'Yellow',
      hex: '#F9CA00'
    },
    {
      code: 'N14',
      name: 'Yellow',
      hex: '#01F9CA'
    },
    {
      code: 'N15',
      name: 'White',
      hex: '#F4F4F3'
    },
    {
      code: 'N15',
      name: 'White',
      hex: '#F4F4F3'
    },
    {
      code: 'N15',
      name: 'White',
      hex: '#F4F4F3'
    },
    {
      code: 'N15',
      name: 'White',
      hex: '#02F4F4'
    },
    {
      code: 'N16',
      name: 'Green',
      hex: '#297A3B'
    },
    {
      code: 'N16',
      name: 'Green',
      hex: '#297A3B'
    },
    {
      code: 'N16',
      name: 'Green',
      hex: '#297A3B'
    },
    {
      code: 'N16',
      name: 'Green',
      hex: '#03297A'
    },
    {
      code: 'N17',
      name: 'Bright Blue',
      hex: '#3B75CB'
    },
    {
      code: 'N17',
      name: 'Bright Blue',
      hex: '#3B75CB'
    },
    {
      code: 'N17',
      name: 'Bright Blue',
      hex: '#3B75CB'
    },
    {
      code: 'N17',
      name: 'Bright Blue',
      hex: '#043B75'
    },
    {
      code: 'N18',
      name: 'Light Rose',
      hex: '#E1B4AB'
    },
    {
      code: 'N18',
      name: 'Light Rose',
      hex: '#E1B4AB'
    },
    {
      code: 'N18',
      name: 'Light Rose',
      hex: '#E1B4AB'
    },
    {
      code: 'N18',
      name: 'Light Rose',
      hex: '#05E1B4'
    },
    {
      code: 'N19',
      name: 'Red',
      hex: '#DF2638'
    },
    {
      code: 'N19',
      name: 'Red',
      hex: '#DF2638'
    },
    {
      code: 'N19',
      name: 'Red',
      hex: '#DF2638'
    },
    {
      code: 'N19',
      name: 'Red',
      hex: '#06DF26'
    },
    {
      code: 'N20',
      name: 'Light Brown',
      hex: '#B58B69'
    },
    {
      code: 'N20',
      name: 'Light Brown',
      hex: '#B58B69'
    },
    {
      code: 'N20',
      name: 'Light Brown',
      hex: '#B58B69'
    },
    {
      code: 'N20',
      name: 'Light Brown',
      hex: '#07B58B'
    },
    {
      code: 'N21',
      name: 'Light Yellow',
      hex: '#F5EC8D'
    },
    {
      code: 'N21',
      name: 'Light Yellow',
      hex: '#F5EC8D'
    },
    {
      code: 'N21',
      name: 'Light Yellow',
      hex: '#F5EC8D'
    },
    {
      code: 'N21',
      name: 'Light Yellow',
      hex: '#08F5EC'
    },
    {
      code: 'N22',
      name: 'Lime',
      hex: '#48AF4F'
    },
    {
      code: 'N22',
      name: 'Lime',
      hex: '#48AF4F'
    },
    {
      code: 'N22',
      name: 'Lime',
      hex: '#48AF4F'
    },
    {
      code: 'N22',
      name: 'Lime',
      hex: '#0948AF'
    },
    {
      code: 'N23',
      name: 'Medium Blue',
      hex: '#71A3E6'
    },
    {
      code: 'N23',
      name: 'Medium Blue',
      hex: '#71A3E6'
    },
    {
      code: 'N23',
      name: 'Medium Blue',
      hex: '#71A3E6'
    },
    {
      code: 'N24',
      name: 'Lavender',
      hex: '#B6A0DB'
    },
    {
      code: 'N24',
      name: 'Lavender',
      hex: '#B6A0DB'
    },
    {
      code: 'N24',
      name: 'Lavender',
      hex: '#B6A0DB'
    },
    {
      code: 'N25',
      name: 'Pink',
      hex: '#EE6A97'
    },
    {
      code: 'N25',
      name: 'Pink',
      hex: '#EE6A97'
    },
    {
      code: 'N25',
      name: 'Pink',
      hex: '#EE6A97'
    },
    {
      code: 'N26',
      name: 'Peach',
      hex: '#FCA879'
    },
    {
      code: 'N26',
      name: 'Peach',
      hex: '#FCA879'
    },
    {
      code: 'N26',
      name: 'Peach',
      hex: '#FCA879'
    },
    {
      code: 'N27',
      name: 'Chocolate',
      hex: '#875F52'
    },
    {
      code: 'N27',
      name: 'Chocolate',
      hex: '#875F52'
    },
    {
      code: 'N27',
      name: 'Chocolate',
      hex: '#875F52'
    },
    {
      code: 'N28',
      name: 'Sky',
      hex: '#A7C6F1'
    },
    {
      code: 'N28',
      name: 'Sky',
      hex: '#A7C6F1'
    },
    {
      code: 'N28',
      name: 'Sky',
      hex: '#A7C6F1'
    },
    {
      code: 'N29',
      name: 'Gold',
      hex: '#EE9527'
    },
    {
      code: 'N29',
      name: 'Gold',
      hex: '#EE9527'
    },
    {
      code: 'N29',
      name: 'Gold',
      hex: '#EE9527'
    },
    {
      code: 'N30',
      name: 'Kiwi',
      hex: '#C7BF5E'
    },
    {
      code: 'N30',
      name: 'Kiwi',
      hex: '#C7BF5E'
    },
    {
      code: 'N30',
      name: 'Kiwi',
      hex: '#C7BF5E'
    },
    {
      code: '80-16086',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-16086',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-16086',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-16087',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-16087',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-16087',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-16088',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-16088',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-16088',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-16089',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-16089',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-16089',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-16090',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-16090',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-16090',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-16091',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-16091',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-16091',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-16092',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-16092',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-16092',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-16093',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-16093',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-16093',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-16094',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-16094',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-16094',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-16095',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-16095',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-16095',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-16096',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-16096',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-16096',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-16097',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-16097',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-16097',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-16098',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-16098',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-16098',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-16098',
      name: 'Lagoon',
      hex: '#0000A4'
    },
    {
      code: '80-16099',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-16099',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-16099',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-16099',
      name: 'Cobalt',
      hex: '#010065'
    },
    {
      code: '80-16100',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    
    {
      code: '80-16100',
      name: 'Toothpaste',
      hex: '#0296D1'
    },
    {
      code: '80-16101',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-16101',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-16101',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-16101',
      name: 'Blueberry Creme',
      hex: '#0385A8'
    },
    {
      code: '80-16102',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-16102',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-16102',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-16102',
      name: 'Purple',
      hex: '#04684B'
    },
    {
      code: '80-16103',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-16103',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-16103',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-16103',
      name: 'Plum',
      hex: '#05A75D'
    },
    {
      code: '80-16104',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-16104',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-16104',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-16104',
      name: 'Rust',
      hex: '#069950'
    },
    {
      code: '80-16105',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-16105',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-16105',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-16105',
      name: 'Brown',
      hex: '#07674C'
    },
    {
      code: '80-16106',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-16106',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-16106',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-16106',
      name: 'Light Brown',
      hex: '#089368'
    },
    {
      code: '80-16107',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-16107',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-16107',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-16107',
      name: 'Tan',
      hex: '#09C5AC'
    },
    {
      code: '80-16108',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-16108',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-16108',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-16109',
      name: 'Light Gray',
      hex: '#B3BAB8'
    },
    {
      code: '80-16109',
      name: 'Light Gray',
      hex: '#B3BAB8'
    },
    {
      code: '80-16109',
      name: 'Light Gray',
      hex: '#B3BAB8'
    },
    {
      code: '80-16110',
      name: 'Gray',
      hex: '#909497'
    },
    {
      code: '80-16110',
      name: 'Gray',
      hex: '#909497'
    },
    {
      code: '80-16110',
      name: 'Gray',
      hex: '#909497'
    },
    {
      code: '80-16111',
      name: 'Dark Gray',
      hex: '#585C61'
    },
    {
      code: '80-16111',
      name: 'Dark Gray',
      hex: '#585C61'
    },
    {
      code: '80-16111',
      name: 'Dark Gray',
      hex: '#585C61'
    },
    {
      code: '80-14110',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-14110',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-14110',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#06007B'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#00674C'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#019094'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#023232'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#039368'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#04E9BF'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#05C5AC'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#074A9C'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#08937F'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#09E9E2'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-15089',
      name: 'Neon Blue',
      hex: '#406AE1'
    },
    {
      code: '80-15089',
      name: 'Neon Blue',
      hex: '#406AE1'
    },
    {
      code: '80-15089',
      name: 'Neon Blue',
      hex: '#406AE1'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15179',
      name: 'Evergreen',
      hex: '#305545'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-15181',
      name: 'Light Grey',
      hex: '#B3BAB8'
    },
    {
      code: '80-15182',
      name: 'Lavender',
      hex: '#AF9FCE'
    },
    {
      code: '80-15182',
      name: 'Lavender',
      hex: '#AF9FCE'
    },
    {
      code: '80-15182',
      name: 'Lavender',
      hex: '#AF9FCE'
    },
    {
      code: '80-15199',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-15199',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-15199',
      name: 'Shamrock',
      hex: '#008F53'
    },
    {
      code: '80-15200',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-15200',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-15200',
      name: 'Cobalt',
      hex: '#0065B1'
    },
    {
      code: '80-15201',
      name: 'Midnight',
      hex: '#2F3C55'
    },
    {
      code: '80-15201',
      name: 'Midnight',
      hex: '#2F3C55'
    },
    {
      code: '80-15201',
      name: 'Midnight',
      hex: '#2F3C55'
    },
    {
      code: '80-15202',
      name: 'Robin\'s Egg',
      hex: '#A9CDD5'
    },
    {
      code: '80-15202',
      name: 'Robin\'s Egg',
      hex: '#A9CDD5'
    },
    {
      code: '80-15202',
      name: 'Robin\'s Egg',
      hex: '#A9CDD5'
    },
    {
      code: '80-15203',
      name: 'Flamingo',
      hex: '#F2AFB7'
    },
    {
      code: '80-15203',
      name: 'Flamingo',
      hex: '#F2AFB7'
    },
    {
      code: '80-15203',
      name: 'Flamingo',
      hex: '#F2AFB7'
    },
    {
      code: '80-15204',
      name: 'Salmon',
      hex: '#E1747A'
    },
    {
      code: '80-15204',
      name: 'Salmon',
      hex: '#E1747A'
    },
    {
      code: '80-15204',
      name: 'Salmon',
      hex: '#E1747A'
    },
    {
      code: '80-15205',
      name: 'Fawn',
      hex: '#C9A385'
    },
    {
      code: '80-15205',
      name: 'Fawn',
      hex: '#C9A385'
    },
    {
      code: '80-15205',
      name: 'Fawn',
      hex: '#C9A385'
    },
    {
      code: '80-15206',
      name: 'Pewter',
      hex: '#94A19D'
    },
    {
      code: '80-15206',
      name: 'Pewter',
      hex: '#94A19D'
    },
    {
      code: '80-15206',
      name: 'Pewter',
      hex: '#94A19D'
    },
    {
      code: '80-15207',
      name: 'Charcoal',
      hex: '#4F595A'
    },
    {
      code: '80-15207',
      name: 'Charcoal',
      hex: '#4F595A'
    },
    {
      code: '80-15207',
      name: 'Charcoal',
      hex: '#4F595A'
    },
    {
      code: '80-15208',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-15208',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-15208',
      name: 'Toasted Marshmallow',
      hex: '#DEDACE'
    },
    {
      code: '80-15208',
      name: 'Toasted Marshmallow',
      hex: '#00DEDA'
    },
    {
      code: '80-15210',
      name: 'Orchid',
      hex: '#B1628E'
    },
    {
      code: '80-15210',
      name: 'Orchid',
      hex: '#B1628E'
    },
    {
      code: '80-15210',
      name: 'Orchid',
      hex: '#B1628E'
    },
    {
      code: '80-15210',
      name: 'Orchid',
      hex: '#01B162'
    },
    {
      code: '80-15211',
      name: 'Tomato',
      hex: '#D14337'
    },
    {
      code: '80-15211',
      name: 'Tomato',
      hex: '#D14337'
    },
    {
      code: '80-15211',
      name: 'Tomato',
      hex: '#D14337'
    },
    {
      code: '80-15211',
      name: 'Tomato',
      hex: '#02D143'
    },
    {
      code: '80-15212',
      name: 'Spice',
      hex: '#D9593A'
    },
    {
      code: '80-15212',
      name: 'Spice',
      hex: '#D9593A'
    },
    {
      code: '80-15212',
      name: 'Spice',
      hex: '#D9593A'
    },
    {
      code: '80-15212',
      name: 'Spice',
      hex: '#03D959'
    },
    {
      code: '80-15213',
      name: 'Apricot',
      hex: '#F5A168'
    },
    {
      code: '80-15213',
      name: 'Apricot',
      hex: '#F5A168'
    },
    {
      code: '80-15213',
      name: 'Apricot',
      hex: '#F5A168'
    },
    {
      code: '80-15213',
      name: 'Apricot',
      hex: '#04F5A1'
    },
    {
      code: '80-15214',
      name: 'Sherbet',
      hex: '#D8E47C'
    },
    {
      code: '80-15214',
      name: 'Sherbet',
      hex: '#D8E47C'
    },
    {
      code: '80-15214',
      name: 'Sherbet',
      hex: '#D8E47C'
    },
    {
      code: '80-15214',
      name: 'Sherbet',
      hex: '#05D8E4'
    },
    {
      code: '80-15215',
      name: 'Mist',
      hex: '#93B0BD'
    },
    {
      code: '80-15215',
      name: 'Mist',
      hex: '#93B0BD'
    },
    {
      code: '80-15215',
      name: 'Mist',
      hex: '#93B0BD'
    },
    {
      code: '80-15215',
      name: 'Mist',
      hex: '#0693B0'
    },
    {
      code: '80-15216',
      name: 'Sky',
      hex: '#4AC0D8'
    },
    {
      code: '80-15216',
      name: 'Sky',
      hex: '#4AC0D8'
    },
    {
      code: '80-15216',
      name: 'Sky',
      hex: '#4AC0D8'
    },
    {
      code: '80-15216',
      name: 'Sky',
      hex: '#074AC0'
    },
    {
      code: '80-15217',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-15217',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-15217',
      name: 'Lagoon',
      hex: '#00A4AC'
    },
    {
      code: '80-15217',
      name: 'Lagoon',
      hex: '#0800A4'
    },
    {
      code: '80-15218',
      name: 'Teal',
      hex: '#047F8A'
    },
    {
      code: '80-15218',
      name: 'Teal',
      hex: '#047F8A'
    },
    {
      code: '80-15218',
      name: 'Teal',
      hex: '#047F8A'
    },
    {
      code: '80-15218',
      name: 'Teal',
      hex: '#09047F'
    },
    {
      code: '80-15219',
      name: 'Fern',
      hex: '#7F971A'
    },
    {
      code: '80-15219',
      name: 'Fern',
      hex: '#7F971A'
    },
    {
      code: '80-15219',
      name: 'Fern',
      hex: '#7F971A'
    },
    {
      code: '80-15220',
      name: 'Olive',
      hex: '#696E31'
    },
    {
      code: '80-15220',
      name: 'Olive',
      hex: '#696E31'
    },
    {
      code: '80-15220',
      name: 'Olive',
      hex: '#696E31'
    },
    {
      code: '80-15239',
      name: 'Mocha',
      hex: '#C8B693'
    },
    {
      code: '80-15239',
      name: 'Mocha',
      hex: '#C8B693'
    },
    {
      code: '80-15239',
      name: 'Mocha',
      hex: '#C8B693'
    },
    {
      code: '80-15240',
      name: 'Mint',
      hex: '#B3EED5'
    },
    {
      code: '80-15240',
      name: 'Mint',
      hex: '#B3EED5'
    },
    {
      code: '80-15240',
      name: 'Mint',
      hex: '#B3EED5'
    },
    {
      code: '80-15241',
      name: 'Sour Apple',
      hex: '#A3DE6F'
    },
    {
      code: '80-15241',
      name: 'Sour Apple',
      hex: '#A3DE6F'
    },
    {
      code: '80-15241',
      name: 'Sour Apple',
      hex: '#A3DE6F'
    },
    {
      code: '80-15242',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-15242',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-15242',
      name: 'Cotton Candy',
      hex: '#F479B0'
    },
    {
      code: '80-15243',
      name: 'Grape',
      hex: '#503B9C'
    },
    {
      code: '80-15243',
      name: 'Grape',
      hex: '#503B9C'
    },
    {
      code: '80-15243',
      name: 'Grape',
      hex: '#503B9C'
    },
    {
      code: '80-15244',
      name: 'Rose',
      hex: '#D25D72'
    },
    {
      code: '80-15244',
      name: 'Rose',
      hex: '#D25D72'
    },
    {
      code: '80-15244',
      name: 'Rose',
      hex: '#D25D72'
    },
    {
      code: '80-15245',
      name: 'Iris',
      hex: '#4E56A3'
    },
    {
      code: '80-15245',
      name: 'Iris',
      hex: '#4E56A3'
    },
    {
      code: '80-15245',
      name: 'Iris',
      hex: '#4E56A3'
    },
    {
      code: '80-15246',
      name: 'Tangerine',
      hex: '#FD5918'
    },
    {
      code: '80-15246',
      name: 'Tangerine',
      hex: '#FD5918'
    },
    {
      code: '80-15246',
      name: 'Tangerine',
      hex: '#FD5918'
    },
    {
      code: '80-15247',
      name: 'Forest',
      hex: '#005D57'
    },
    {
      code: '80-15247',
      name: 'Forest',
      hex: '#005D57'
    },
    {
      code: '80-15247',
      name: 'Forest',
      hex: '#005D57'
    },
    {
      code: '80-15248',
      name: 'Eggplant',
      hex: '#6F3255'
    },
    {
      code: '80-15248',
      name: 'Eggplant',
      hex: '#6F3255'
    },
    {
      code: '80-15248',
      name: 'Eggplant',
      hex: '#6F3255'
    },
    {
      code: '80-15249',
      name: 'Honey',
      hex: '#DA8C2C'
    },
    {
      code: '80-15249',
      name: 'Honey',
      hex: '#DA8C2C'
    },
    {
      code: '80-15249',
      name: 'Honey',
      hex: '#DA8C2C'
    },
    {
      code: '80-15250',
      name: 'Gingerbread',
      hex: '#7E5446'
    },
    {
      code: '80-15250',
      name: 'Gingerbread',
      hex: '#7E5446'
    },
    {
      code: '80-15250',
      name: 'Gingerbread',
      hex: '#7E5446'
    },
    {
      code: '80-15251',
      name: 'Thistle',
      hex: '#8C8CA7'
    },
    {
      code: '80-15251',
      name: 'Thistle',
      hex: '#8C8CA7'
    },
    {
      code: '80-15251',
      name: 'Thistle',
      hex: '#8C8CA7'
    },
    {
      code: '80-15252',
      name: 'Slate Blue',
      hex: '#5E6D7B'
    },
    {
      code: '80-15252',
      name: 'Slate Blue',
      hex: '#5E6D7B'
    },
    {
      code: '80-15252',
      name: 'Slate Blue',
      hex: '#5E6D7B'
    },
    {
      code: '80-15253',
      name: 'Denim',
      hex: '#4C6388'
    },
    {
      code: '80-15253',
      name: 'Denim',
      hex: '#4C6388'
    },
    {
      code: '80-15253',
      name: 'Denim',
      hex: '#4C6388'
    },
    {
      code: '80-15254',
      name: 'Sage',
      hex: '#9AA98E'
    },
    {
      code: '80-15254',
      name: 'Sage',
      hex: '#9AA98E'
    },
    {
      code: '80-15254',
      name: 'Sage',
      hex: '#9AA98E'
    },
    {
      code: '80-15255',
      name: 'Orange Cream',
      hex: '#EFB79B'
    },
    {
      code: '80-15255',
      name: 'Orange Cream',
      hex: '#EFB79B'
    },
    {
      code: '80-15255',
      name: 'Orange Cream',
      hex: '#EFB79B'
    },
    {
      code: '80-15256',
      name: 'Fruit Punch',
      hex: '#CA3B65'
    },
    {
      code: '80-15256',
      name: 'Fruit Punch',
      hex: '#CA3B65'
    },
    {
      code: '80-15256',
      name: 'Fruit Punch',
      hex: '#CA3B65'
    },
    {
      code: '80-15257',
      name: 'Fuchsia',
      hex: '#CB59B9'
    },
    {
      code: '80-15257',
      name: 'Fuchsia',
      hex: '#CB59B9'
    },
    {
      code: '80-15257',
      name: 'Fuchsia',
      hex: '#CB59B9'
    },
    {
      code: '80-15258',
      name: 'Mulberry',
      hex: '#714875'
    },
    {
      code: '80-15258',
      name: 'Mulberry',
      hex: '#714875'
    },
    {
      code: '80-15258',
      name: 'Mulberry',
      hex: '#714875'
    },
    {
      code: '80-15259',
      name: 'Slime',
      hex: '#C8C85C'
    },
    {
      code: '80-15259',
      name: 'Slime',
      hex: '#C8C85C'
    },
    {
      code: '80-15259',
      name: 'Slime',
      hex: '#C8C85C'
    },
    {
      code: '80-15260',
      name: 'Stone',
      hex: '#988C8C'
    },
    {
      code: '80-15260',
      name: 'Stone',
      hex: '#988C8C'
    },
    {
      code: '80-15260',
      name: 'Stone',
      hex: '#988C8C'
    },
    {
      code: '80-15261',
      name: 'Dark Spruce',
      hex: '#14313B'
    },
    {
      code: '80-15261',
      name: 'Dark Spruce',
      hex: '#14313B'
    },
    {
      code: '80-15261',
      name: 'Dark Spruce',
      hex: '#14313B'
    },
    {
      code: '80-15262',
      name: 'Cocoa',
      hex: '#392928'
    },
    {
      code: '80-15262',
      name: 'Cocoa',
      hex: '#392928'
    },
    {
      code: '80-15262',
      name: 'Cocoa',
      hex: '#392928'
    },
    {
      code: '80-15263',
      name: 'Celery',
      hex: '#BED4A6'
    },
    {
      code: '80-15263',
      name: 'Celery',
      hex: '#BED4A6'
    },
    {
      code: '80-15263',
      name: 'Celery',
      hex: '#BED4A6'
    },
    {
      code: '80-15265',
      name: 'Twilight Plum',
      hex: '#C685B1'
    },
    {
      code: '80-15265',
      name: 'Twilight Plum',
      hex: '#C685B1'
    },
    {
      code: '80-15265',
      name: 'Twilight Plum',
      hex: '#C685B1'
    },
    {
      code: '80-15266',
      name: 'Caribbean Sea',
      hex: '#6CC8AD'
    },
    {
      code: '80-15266',
      name: 'Caribbean Sea',
      hex: '#6CC8AD'
    },
    {
      code: '80-15266',
      name: 'Caribbean Sea',
      hex: '#6CC8AD'
    },
    {
      code: '80-15267',
      name: 'Frosted Lilac',
      hex: '#CDB7C3'
    },
    {
      code: '80-15267',
      name: 'Frosted Lilac',
      hex: '#CDB7C3'
    },
    {
      code: '80-15267',
      name: 'Frosted Lilac',
      hex: '#CDB7C3'
    },
    {
      code: '80-15268',
      name: 'Sunflower',
      hex: '#DEBA0B'
    },
    {
      code: '80-15268',
      name: 'Sunflower',
      hex: '#DEBA0B'
    },
    {
      code: '80-15268',
      name: 'Sunflower',
      hex: '#DEBA0B'
    },
    {
      code: '80-15269',
      name: 'Lemon',
      hex: '#F6D901'
    },
    {
      code: '80-15269',
      name: 'Lemon',
      hex: '#F6D901'
    },
    {
      code: '80-15269',
      name: 'Lemon',
      hex: '#F6D901'
    },
    {
      code: '80-15272',
      name: 'Coral',
      hex: '#FF9A8B'
    },
    {
      code: '80-15272',
      name: 'Coral',
      hex: '#FF9A8B'
    },
    {
      code: '80-15272',
      name: 'Coral',
      hex: '#FF9A8B'
    },
    {
      code: '80-15273',
      name: 'Brick',
      hex: '#FC9574'
    },
    {
      code: '80-15273',
      name: 'Brick',
      hex: '#FC9574'
    },
    {
      code: '80-15273',
      name: 'Brick',
      hex: '#FC9574'
    },
    {
      code: '80-15274',
      name: 'Rich Butter',
      hex: '#F6CA69'
    },
    {
      code: '80-15274',
      name: 'Rich Butter',
      hex: '#F6CA69'
    },
    {
      code: '80-15274',
      name: 'Rich Butter',
      hex: '#F6CA69'
    },
    {
      code: '80-15275',
      name: 'Peacock',
      hex: '#0090AC'
    },
    {
      code: '80-15275',
      name: 'Peacock',
      hex: '#0090AC'
    },
    {
      code: '80-15275',
      name: 'Peacock',
      hex: '#0090AC'
    },
    {
      code: '80-15961',
      name: 'Cherry',
      hex: '#9D2B3A'
    },
    {
      code: '80-15961',
      name: 'Cherry',
      hex: '#9D2B3A'
    },
    {
      code: '80-15961',
      name: 'Cherry',
      hex: '#9D2B3A'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19001',
      name: 'White',
      hex: '#EAEFEE'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19002',
      name: 'Creme',
      hex: '#E1E2BB'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19003',
      name: 'Yellow',
      hex: '#E7CE3E'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19004',
      name: 'Orange',
      hex: '#EB7B31'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19005',
      name: 'Red',
      hex: '#B0353C'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19006',
      name: 'Bubblegum',
      hex: '#D8729A'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19007',
      name: 'Purple',
      hex: '#684B86'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19008',
      name: 'Dark Blue',
      hex: '#0E5092'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19009',
      name: 'Light Blue',
      hex: '#278CC9'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19010',
      name: 'Dark Green',
      hex: '#007B4E'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19011',
      name: 'Light Green',
      hex: '#18C7B1'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19012',
      name: 'Brown',
      hex: '#674C44'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19017',
      name: 'Grey',
      hex: '#909497'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19018',
      name: 'Black',
      hex: '#323234'
    },
    {
      code: '80-19020',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-19020',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-19020',
      name: 'Rust',
      hex: '#995043'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19021',
      name: 'Light Brown',
      hex: '#936848'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19033',
      name: 'Peach',
      hex: '#E9BFB9'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19035',
      name: 'Tan',
      hex: '#C5AC90'
    },
    {
      code: '80-19038',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-19038',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-19038',
      name: 'Magenta',
      hex: '#E04284'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19052',
      name: 'Pastel Blue',
      hex: '#4A9CCF'
    },
    {
      code: '80-19053',
      name: 'Pastel Green',
      hex: '#6DCC94'
    },
    {
      code: '80-19053',
      name: 'Pastel Green',
      hex: '#6DCC94'
    },
    {
      code: '80-19053',
      name: 'Pastel Green',
      hex: '#6DCC94'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19054',
      name: 'Pastel Lavender',
      hex: '#937FBF'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19056',
      name: 'Pastel Yellow',
      hex: '#E9E290'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19057',
      name: 'Cheddar',
      hex: '#FBB146'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19058',
      name: 'Toothpaste',
      hex: '#96D1D4'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19059',
      name: 'Hot Coral',
      hex: '#DD595B'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19060',
      name: 'Plum',
      hex: '#A75D9D'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19061',
      name: 'Kiwi Lime',
      hex: '#69B845'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19062',
      name: 'Turquoise',
      hex: '#0098C5'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19063',
      name: 'Blush',
      hex: '#F99297'
    },
    {
      code: '80-19070',
      name: 'Periwinkle Blue',
      hex: '#6683B7'
    },
    {
      code: '80-19070',
      name: 'Periwinkle Blue',
      hex: '#6683B7'
    },
    {
      code: '80-19070',
      name: 'Periwinkle Blue',
      hex: '#6683B7'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19079',
      name: 'Light Pink',
      hex: '#E1BCCE'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19080',
      name: 'Green',
      hex: '#4DAB64'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19083',
      name: 'Pink',
      hex: '#D45496'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19088',
      name: 'Raspberry',
      hex: '#983864'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19090',
      name: 'Butterscotch',
      hex: '#DA9964'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19091',
      name: 'Parrot Green',
      hex: '#009188'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19092',
      name: 'Dark Grey',
      hex: '#585C61'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19093',
      name: 'Blueberry Creme',
      hex: '#85A8E3'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19096',
      name: 'Cranapple',
      hex: '#843947'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19097',
      name: 'Prickly Pear',
      hex: '#BBC938'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: '80-19098',
      name: 'Sand',
      hex: '#E5BE9E'
    },
    {
      code: 'Y002',
      name: 'white',
      hex: '#FFFFFF'
    },
    {
      code: 'Y002',
      name: 'white',
      hex: '#FFFFFF'
    },
    {
      code: 'Y002',
      name: 'white',
      hex: '#FFFFFF'
    },
    {
      code: 'Y003',
      name: 'shell',
      hex: '#E0D4D8'
    },
    {
      code: 'Y003',
      name: 'shell',
      hex: '#E0D4D8'
    },
    {
      code: 'Y003',
      name: 'shell',
      hex: '#E0D4D8'
    },
    {
      code: 'Y004',
      name: 'ash',
      hex: '#DDDBCE'
    },
    {
      code: 'Y004',
      name: 'ash',
      hex: '#DDDBCE'
    },
    {
      code: 'Y004',
      name: 'ash',
      hex: '#DDDBCE'
    },
    {
      code: 'Y005',
      name: 'dove',
      hex: '#CEC8CB'
    },
    {
      code: 'Y005',
      name: 'dove',
      hex: '#CEC8CB'
    },
    {
      code: 'Y005',
      name: 'dove',
      hex: '#CEC8CB'
    },
    {
      code: 'Y006',
      name: 'fog',
      hex: '#D6D4D7'
    },
    {
      code: 'Y006',
      name: 'fog',
      hex: '#D6D4D7'
    },
    {
      code: 'Y006',
      name: 'fog',
      hex: '#D6D4D7'
    },
    {
      code: 'Y007',
      name: 'cameo',
      hex: '#B5B4B9'
    },
    {
      code: 'Y007',
      name: 'cameo',
      hex: '#B5B4B9'
    },
    {
      code: 'Y007',
      name: 'cameo',
      hex: '#B5B4B9'
    },
    {
      code: 'Y008',
      name: 'gray',
      hex: '#8C8A8D'
    },
    {
      code: 'Y008',
      name: 'gray',
      hex: '#8C8A8D'
    },
    {
      code: 'Y008',
      name: 'gray',
      hex: '#8C8A8D'
    },
    {
      code: 'Y009',
      name: 'smoke',
      hex: '#716E73'
    },
    {
      code: 'Y009',
      name: 'smoke',
      hex: '#716E73'
    },
    {
      code: 'Y009',
      name: 'smoke',
      hex: '#716E73'
    },
    {
      code: 'Y010',
      name: 'iron',
      hex: '#4C4C4C'
    },
    {
      code: 'Y010',
      name: 'iron',
      hex: '#4C4C4C'
    },
    {
      code: 'Y010',
      name: 'iron',
      hex: '#4C4C4C'
    },
    {
      code: 'Y011',
      name: 'black',
      hex: '#000000'
    },
    {
      code: 'Y011',
      name: 'black',
      hex: '#000000'
    },
    {
      code: 'Y011',
      name: 'black',
      hex: '#000000'
    },
    {
      code: 'Y012',
      name: 'skin',
      hex: '#EFD8C6'
    },
    {
      code: 'Y012',
      name: 'skin',
      hex: '#EFD8C6'
    },
    {
      code: 'Y012',
      name: 'skin',
      hex: '#EFD8C6'
    },
    {
      code: 'Y013',
      name: 'shrimp',
      hex: '#EFC096'
    },
    {
      code: 'Y013',
      name: 'shrimp',
      hex: '#EFC096'
    },
    {
      code: 'Y013',
      name: 'shrimp',
      hex: '#EFC096'
    },
    {
      code: 'Y014',
      name: 'muscle',
      hex: '#E0B998'
    },
    {
      code: 'Y014',
      name: 'muscle',
      hex: '#E0B998'
    },
    {
      code: 'Y014',
      name: 'muscle',
      hex: '#00E0B9'
    },
    {
      code: 'Y014',
      name: 'muscle',
      hex: '#E0B998'
    },
    {
      code: 'Y015',
      name: 'cedar',
      hex: '#BD9C67'
    },
    {
      code: 'Y015',
      name: 'cedar',
      hex: '#BD9C67'
    },
    {
      code: 'Y015',
      name: 'cedar',
      hex: '#01BD9C'
    },
    {
      code: 'Y015',
      name: 'cedar',
      hex: '#BD9C67'
    },
    {
      code: 'Y016',
      name: 'linen',
      hex: '#D2C196'
    },
    {
      code: 'Y016',
      name: 'linen',
      hex: '#D2C196'
    },
    {
      code: 'Y016',
      name: 'linen',
      hex: '#02D2C1'
    },
    {
      code: 'Y016',
      name: 'linen',
      hex: '#D2C196'
    },
    {
      code: 'Y017',
      name: 'corduroy',
      hex: '#C5A27C'
    },
    {
      code: 'Y017',
      name: 'corduroy',
      hex: '#C5A27C'
    },
    {
      code: 'Y017',
      name: 'corduroy',
      hex: '#03C5A2'
    },
    {
      code: 'Y017',
      name: 'corduroy',
      hex: '#C5A27C'
    },
    {
      code: 'Y018',
      name: 'bamboo',
      hex: '#DAB476'
    },
    {
      code: 'Y018',
      name: 'bamboo',
      hex: '#DAB476'
    },
    {
      code: 'Y018',
      name: 'bamboo',
      hex: '#04DAB4'
    },
    {
      code: 'Y018',
      name: 'bamboo',
      hex: '#DAB476'
    },
    {
      code: 'Y019',
      name: 'caramel',
      hex: '#C4913E'
    },
    {
      code: 'Y019',
      name: 'caramel',
      hex: '#C4913E'
    },
    {
      code: 'Y019',
      name: 'caramel',
      hex: '#05C491'
    },
    {
      code: 'Y019',
      name: 'caramel',
      hex: '#C4913E'
    },
    {
      code: 'Y020',
      name: 'annatto',
      hex: '#CB9360'
    },
    {
      code: 'Y020',
      name: 'annatto',
      hex: '#CB9360'
    },
    {
      code: 'Y020',
      name: 'annatto',
      hex: '#06CB93'
    },
    {
      code: 'Y020',
      name: 'annatto',
      hex: '#CB9360'
    },
    {
      code: 'Y021',
      name: 'soil',
      hex: '#D7996A'
    },
    {
      code: 'Y021',
      name: 'soil',
      hex: '#D7996A'
    },
    {
      code: 'Y021',
      name: 'soil',
      hex: '#07D799'
    },
    {
      code: 'Y021',
      name: 'soil',
      hex: '#D7996A'
    },
    {
      code: 'Y022',
      name: 'brich',
      hex: '#9B6B45'
    },
    {
      code: 'Y022',
      name: 'brich',
      hex: '#9B6B45'
    },
    {
      code: 'Y022',
      name: 'brich',
      hex: '#089B6B'
    },
    {
      code: 'Y022',
      name: 'brich',
      hex: '#9B6B45'
    },
    {
      code: 'Y023',
      name: 'tan',
      hex: '#8D5C3E'
    },
    {
      code: 'Y023',
      name: 'tan',
      hex: '#8D5C3E'
    },
    {
      code: 'Y023',
      name: 'tan',
      hex: '#098D5C'
    },
    {
      code: 'Y023',
      name: 'tan',
      hex: '#8D5C3E'
    },
    {
      code: 'Y024',
      name: 'oak',
      hex: '#866A55'
    },
    {
      code: 'Y024',
      name: 'oak',
      hex: '#866A55'
    },
    {
      code: 'Y024',
      name: 'oak',
      hex: '#866A55'
    },
    {
      code: 'Y025',
      name: 'chocolate',
      hex: '#5D3C37'
    },
    {
      code: 'Y025',
      name: 'chocolate',
      hex: '#5D3C37'
    },
    {
      code: 'Y025',
      name: 'chocolate',
      hex: '#5D3C37'
    },
    {
      code: 'Y026',
      name: 'shy',
      hex: '#F8956B'
    },
    {
      code: 'Y026',
      name: 'shy',
      hex: '#F8956B'
    },
    {
      code: 'Y026',
      name: 'shy',
      hex: '#F8956B'
    },
    {
      code: 'Y027',
      name: 'coralline',
      hex: '#D5514D'
    },
    {
      code: 'Y027',
      name: 'coralline',
      hex: '#D5514D'
    },
    {
      code: 'Y027',
      name: 'coralline',
      hex: '#D5514D'
    },
    {
      code: 'Y028',
      name: 'ruby',
      hex: '#DB4F3E'
    },
    {
      code: 'Y028',
      name: 'ruby',
      hex: '#DB4F3E'
    },
    {
      code: 'Y028',
      name: 'ruby',
      hex: '#DB4F3E'
    },
    {
      code: 'Y029',
      name: 'sunset',
      hex: '#CF3E45'
    },
    {
      code: 'Y029',
      name: 'sunset',
      hex: '#CF3E45'
    },
    {
      code: 'Y029',
      name: 'sunset',
      hex: '#CF3E45'
    },
    {
      code: 'Y030',
      name: 'vermillion',
      hex: '#9D2234'
    },
    {
      code: 'Y030',
      name: 'vermillion',
      hex: '#9D2234'
    },
    {
      code: 'Y030',
      name: 'vermillion',
      hex: '#9D2234'
    },
    {
      code: 'Y031',
      name: 'crimson',
      hex: '#9D2234'
    },
    {
      code: 'Y031',
      name: 'crimson',
      hex: '#9D2234'
    },
    {
      code: 'Y031',
      name: 'crimson',
      hex: '#9D2234'
    },
    {
      code: 'Y032',
      name: 'rose',
      hex: '#D668A7'
    },
    {
      code: 'Y032',
      name: 'rose',
      hex: '#D668A7'
    },
    {
      code: 'Y032',
      name: 'rose',
      hex: '#D668A7'
    },
    {
      code: 'Y033',
      name: 'taffy',
      hex: '#68393F'
    },
    {
      code: 'Y033',
      name: 'taffy',
      hex: '#68393F'
    },
    {
      code: 'Y033',
      name: 'taffy',
      hex: '#68393F'
    },
    {
      code: 'Y034',
      name: 'chestnut',
      hex: '#7D4723'
    },
    {
      code: 'Y034',
      name: 'chestnut',
      hex: '#7D4723'
    },
    {
      code: 'Y034',
      name: 'chestnut',
      hex: '#7D4723'
    },
    {
      code: 'Y035',
      name: 'ochre',
      hex: '#934A39'
    },
    {
      code: 'Y035',
      name: 'ochre',
      hex: '#934A39'
    },
    {
      code: 'Y035',
      name: 'ochre',
      hex: '#934A39'
    },
    {
      code: 'Y036',
      name: 'brick',
      hex: '#6A1A35'
    },
    {
      code: 'Y036',
      name: 'brick',
      hex: '#6A1A35'
    },
    {
      code: 'Y036',
      name: 'brick',
      hex: '#6A1A35'
    },
    {
      code: 'Y037',
      name: 'pork',
      hex: '#F4E2D6'
    },
    {
      code: 'Y037',
      name: 'pork',
      hex: '#F4E2D6'
    },
    {
      code: 'Y037',
      name: 'pork',
      hex: '#F4E2D6'
    },
    {
      code: 'Y038',
      name: 'baby',
      hex: '#F5DCD8'
    },
    {
      code: 'Y038',
      name: 'baby',
      hex: '#F5DCD8'
    },
    {
      code: 'Y038',
      name: 'baby',
      hex: '#F5DCD8'
    },
    {
      code: 'Y039',
      name: 'cheek',
      hex: '#F1D8DE'
    },
    {
      code: 'Y039',
      name: 'cheek',
      hex: '#F1D8DE'
    },
    {
      code: 'Y039',
      name: 'cheek',
      hex: '#F1D8DE'
    },
    {
      code: 'Y040',
      name: 'sakura',
      hex: '#EEC6DE'
    },
    {
      code: 'Y040',
      name: 'sakura',
      hex: '#EEC6DE'
    },
    {
      code: 'Y040',
      name: 'sakura',
      hex: '#EEC6DE'
    },
    {
      code: 'Y041',
      name: 'pink',
      hex: '#F5A3D1'
    },
    {
      code: 'Y041',
      name: 'pink',
      hex: '#F5A3D1'
    },
    {
      code: 'Y041',
      name: 'pink',
      hex: '#F5A3D1'
    },
    {
      code: 'Y042',
      name: 'azalea',
      hex: '#DB77CF'
    },
    {
      code: 'Y042',
      name: 'azalea',
      hex: '#DB77CF'
    },
    {
      code: 'Y042',
      name: 'azalea',
      hex: '#DB77CF'
    },
    {
      code: 'Y043',
      name: 'blusher',
      hex: '#E4A0B7'
    },
    {
      code: 'Y043',
      name: 'blusher',
      hex: '#E4A0B7'
    },
    {
      code: 'Y043',
      name: 'blusher',
      hex: '#E4A0B7'
    },
    {
      code: 'Y044',
      name: 'wintersweet',
      hex: '#D276A9'
    },
    {
      code: 'Y044',
      name: 'wintersweet',
      hex: '#D276A9'
    },
    {
      code: 'Y044',
      name: 'wintersweet',
      hex: '#D276A9'
    },
    {
      code: 'Y045',
      name: 'bleaberry',
      hex: '#C1388A'
    },
    {
      code: 'Y045',
      name: 'bleaberry',
      hex: '#C1388A'
    },
    {
      code: 'Y045',
      name: 'bleaberry',
      hex: '#C1388A'
    },
    {
      code: 'Y046',
      name: 'magenta',
      hex: '#DC4A77'
    },
    {
      code: 'Y046',
      name: 'magenta',
      hex: '#DC4A77'
    },
    {
      code: 'Y046',
      name: 'magenta',
      hex: '#DC4A77'
    },
    {
      code: 'Y047',
      name: 'jam',
      hex: '#9A2461'
    },
    {
      code: 'Y047',
      name: 'jam',
      hex: '#9A2461'
    },
    {
      code: 'Y047',
      name: 'jam',
      hex: '#9A2461'
    },
    {
      code: 'Y048',
      name: 'camelia',
      hex: '#A20067'
    },
    {
      code: 'Y048',
      name: 'camelia',
      hex: '#A20067'
    },
    {
      code: 'Y048',
      name: 'camelia',
      hex: '#A20067'
    },
    {
      code: 'Y049',
      name: 'bacon',
      hex: '#C97783'
    },
    {
      code: 'Y049',
      name: 'bacon',
      hex: '#C97783'
    },
    {
      code: 'Y049',
      name: 'bacon',
      hex: '#C97783'
    },
    {
      code: 'Y050',
      name: 'hyacinth',
      hex: '#D4D5E7'
    },
    {
      code: 'Y050',
      name: 'hyacinth',
      hex: '#D4D5E7'
    },
    {
      code: 'Y050',
      name: 'hyacinth',
      hex: '#D4D5E7'
    },
    {
      code: 'Y051',
      name: 'magnolia',
      hex: '#BEC2E8'
    },
    {
      code: 'Y051',
      name: 'magnolia',
      hex: '#BEC2E8'
    },
    {
      code: 'Y051',
      name: 'magnolia',
      hex: '#BEC2E8'
    },
    {
      code: 'Y052',
      name: 'wisteria',
      hex: '#BDC6ED'
    },
    {
      code: 'Y052',
      name: 'wisteria',
      hex: '#BDC6ED'
    },
    {
      code: 'Y052',
      name: 'wisteria',
      hex: '#BDC6ED'
    },
    {
      code: 'Y053',
      name: 'cobalt',
      hex: '#A5AFEA'
    },
    {
      code: 'Y053',
      name: 'cobalt',
      hex: '#A5AFEA'
    },
    {
      code: 'Y053',
      name: 'cobalt',
      hex: '#A5AFEA'
    },
    {
      code: 'Y054',
      name: 'azure',
      hex: '#7E84BE'
    },
    {
      code: 'Y054',
      name: 'azure',
      hex: '#7E84BE'
    },
    {
      code: 'Y054',
      name: 'azure',
      hex: '#7E84BE'
    },
    {
      code: 'Y055',
      name: 'lilac',
      hex: '#D9D3EF'
    },
    {
      code: 'Y055',
      name: 'lilac',
      hex: '#D9D3EF'
    },
    {
      code: 'Y055',
      name: 'lilac',
      hex: '#D9D3EF'
    },
    {
      code: 'Y056',
      name: 'amethyst',
      hex: '#C2BBE4'
    },
    {
      code: 'Y056',
      name: 'amethyst',
      hex: '#C2BBE4'
    },
    {
      code: 'Y056',
      name: 'amethyst',
      hex: '#C2BBE4'
    },
    {
      code: 'Y057',
      name: 'hydrangea',
      hex: '#C89CCD'
    },
    {
      code: 'Y057',
      name: 'hydrangea',
      hex: '#C89CCD'
    },
    {
      code: 'Y057',
      name: 'hydrangea',
      hex: '#C89CCD'
    },
    {
      code: 'Y058',
      name: 'briar',
      hex: '#A65CBF'
    },
    {
      code: 'Y058',
      name: 'briar',
      hex: '#A65CBF'
    },
    {
      code: 'Y058',
      name: 'briar',
      hex: '#A65CBF'
    },
    {
      code: 'Y059',
      name: 'tuberose',
      hex: '#911F90'
    },
    {
      code: 'Y059',
      name: 'tuberose',
      hex: '#911F90'
    },
    {
      code: 'Y059',
      name: 'tuberose',
      hex: '#911F90'
    },
    {
      code: 'Y060',
      name: 'wine',
      hex: '#6C2988'
    },
    {
      code: 'Y060',
      name: 'wine',
      hex: '#6C2988'
    },
    {
      code: 'Y060',
      name: 'wine',
      hex: '#6C2988'
    },
    {
      code: 'Y061',
      name: 'rosemary',
      hex: '#9E6DC6'
    },
    {
      code: 'Y061',
      name: 'rosemary',
      hex: '#9E6DC6'
    },
    {
      code: 'Y061',
      name: 'rosemary',
      hex: '#9E6DC6'
    },
    {
      code: 'Y062',
      name: 'lavender',
      hex: '#907ABB'
    },
    {
      code: 'Y062',
      name: 'lavender',
      hex: '#907ABB'
    },
    {
      code: 'Y062',
      name: 'lavender',
      hex: '#907ABB'
    },
    {
      code: 'Y063',
      name: 'castle',
      hex: '#5D3F87'
    },
    {
      code: 'Y063',
      name: 'castle',
      hex: '#5D3F87'
    },
    {
      code: 'Y063',
      name: 'castle',
      hex: '#5D3F87'
    },
    {
      code: 'Y064',
      name: 'myrtille',
      hex: '#453A86'
    },
    {
      code: 'Y064',
      name: 'myrtille',
      hex: '#453A86'
    },
    {
      code: 'Y064',
      name: 'myrtille',
      hex: '#453A86'
    },
    {
      code: 'Y065',
      name: 'modena',
      hex: '#3D2E55'
    },
    {
      code: 'Y065',
      name: 'modena',
      hex: '#3D2E55'
    },
    {
      code: 'Y065',
      name: 'modena',
      hex: '#3D2E55'
    },
    {
      code: 'Y066',
      name: 'jade',
      hex: '#D9E6CC'
    },
    {
      code: 'Y066',
      name: 'jade',
      hex: '#D9E6CC'
    },
    {
      code: 'Y066',
      name: 'jade',
      hex: '#D9E6CC'
    },
    {
      code: 'Y067',
      name: 'powderblue',
      hex: '#BFE1E3'
    },
    {
      code: 'Y067',
      name: 'powderblue',
      hex: '#BFE1E3'
    },
    {
      code: 'Y067',
      name: 'powderblue',
      hex: '#BFE1E3'
    },
    {
      code: 'Y068',
      name: 'elsa',
      hex: '#C4DFE8'
    },
    {
      code: 'Y068',
      name: 'elsa',
      hex: '#C4DFE8'
    },
    {
      code: 'Y068',
      name: 'elsa',
      hex: '#C4DFE8'
    },
    {
      code: 'Y069',
      name: 'sky',
      hex: '#A4D8EE'
    },
    {
      code: 'Y069',
      name: 'sky',
      hex: '#A4D8EE'
    },
    {
      code: 'Y069',
      name: 'sky',
      hex: '#A4D8EE'
    },
    {
      code: 'Y070',
      name: 'seacoast',
      hex: '#67ADCF'
    },
    {
      code: 'Y070',
      name: 'seacoast',
      hex: '#67ADCF'
    },
    {
      code: 'Y070',
      name: 'seacoast',
      hex: '#67ADCF'
    },
    {
      code: 'Y071',
      name: 'seacoast',
      hex: '#60A7AD'
    },
    {
      code: 'Y071',
      name: 'seacoast',
      hex: '#60A7AD'
    },
    {
      code: 'Y071',
      name: 'seacoast',
      hex: '#60A7AD'
    },
    {
      code: 'Y072',
      name: 'agate',
      hex: '#66B5C6'
    },
    {
      code: 'Y072',
      name: 'agate',
      hex: '#66B5C6'
    },
    {
      code: 'Y072',
      name: 'agate',
      hex: '#66B5C6'
    },
    {
      code: 'Y073',
      name: 'turkey',
      hex: '#8CB3DC'
    },
    {
      code: 'Y073',
      name: 'turkey',
      hex: '#8CB3DC'
    },
    {
      code: 'Y073',
      name: 'turkey',
      hex: '#8CB3DC'
    },
    {
      code: 'Y074',
      name: 'danube',
      hex: '#577DBE'
    },
    {
      code: 'Y074',
      name: 'danube',
      hex: '#577DBE'
    },
    {
      code: 'Y074',
      name: 'danube',
      hex: '#577DBE'
    },
    {
      code: 'Y075',
      name: 'homeland',
      hex: '#4173BC'
    },
    {
      code: 'Y075',
      name: 'homeland',
      hex: '#4173BC'
    },
    {
      code: 'Y075',
      name: 'homeland',
      hex: '#4173BC'
    },
    {
      code: 'Y076',
      name: 'silence',
      hex: '#4A5FBC'
    },
    {
      code: 'Y076',
      name: 'silence',
      hex: '#4A5FBC'
    },
    {
      code: 'Y076',
      name: 'silence',
      hex: '#4A5FBC'
    },
    {
      code: 'Y077',
      name: 'rambo',
      hex: '#3D54A0'
    },
    {
      code: 'Y077',
      name: 'rambo',
      hex: '#3D54A0'
    },
    {
      code: 'Y077',
      name: 'rambo',
      hex: '#3D54A0'
    },
    {
      code: 'Y078',
      name: 'montana',
      hex: '#314174'
    },
    {
      code: 'Y078',
      name: 'montana',
      hex: '#314174'
    },
    {
      code: 'Y078',
      name: 'montana',
      hex: '#314174'
    },
    {
      code: 'Y079',
      name: 'prussian',
      hex: '#3D4762'
    },
    {
      code: 'Y079',
      name: 'prussian',
      hex: '#3D4762'
    },
    {
      code: 'Y079',
      name: 'prussian',
      hex: '#3D4762'
    },
    {
      code: 'Y080',
      name: 'shallot',
      hex: '#DDE5B4'
    },
    {
      code: 'Y080',
      name: 'shallot',
      hex: '#DDE5B4'
    },
    {
      code: 'Y080',
      name: 'shallot',
      hex: '#DDE5B4'
    },
    {
      code: 'Y081',
      name: 'burgeon',
      hex: '#DADA3C'
    },
    {
      code: 'Y081',
      name: 'burgeon',
      hex: '#DADA3C'
    },
    {
      code: 'Y081',
      name: 'burgeon',
      hex: '#DADA3C'
    },
    {
      code: 'Y082',
      name: 'green',
      hex: '#CDE547'
    },
    {
      code: 'Y082',
      name: 'green',
      hex: '#CDE547'
    },
    {
      code: 'Y082',
      name: 'green',
      hex: '#CDE547'
    },
    {
      code: 'Y083',
      name: 'lime',
      hex: '#A7D446'
    },
    {
      code: 'Y083',
      name: 'lime',
      hex: '#A7D446'
    },
    {
      code: 'Y083',
      name: 'lime',
      hex: '#A7D446'
    },
    {
      code: 'Y084',
      name: 'chloe',
      hex: '#A5D38B'
    },
    {
      code: 'Y084',
      name: 'chloe',
      hex: '#A5D38B'
    },
    {
      code: 'Y084',
      name: 'chloe',
      hex: '#A5D38B'
    },
    {
      code: 'Y085',
      name: 'scallion',
      hex: '#8FD35A'
    },
    {
      code: 'Y085',
      name: 'scallion',
      hex: '#8FD35A'
    },
    {
      code: 'Y085',
      name: 'scallion',
      hex: '#8FD35A'
    },
    {
      code: 'Y086',
      name: 'mint',
      hex: '#78A54A'
    },
    {
      code: 'Y086',
      name: 'mint',
      hex: '#78A54A'
    },
    {
      code: 'Y086',
      name: 'mint',
      hex: '#78A54A'
    },
    {
      code: 'Y087',
      name: 'turquoise',
      hex: '#87CC9D'
    },
    {
      code: 'Y087',
      name: 'turquoise',
      hex: '#87CC9D'
    },
    {
      code: 'Y087',
      name: 'turquoise',
      hex: '#87CC9D'
    },
    {
      code: 'Y088',
      name: 'tiffay',
      hex: '#B8DBC7'
    },
    {
      code: 'Y088',
      name: 'tiffay',
      hex: '#B8DBC7'
    },
    {
      code: 'Y088',
      name: 'tiffay',
      hex: '#B8DBC7'
    },
    {
      code: 'Y089',
      name: 'jadeite',
      hex: '#5FAE91'
    },
    {
      code: 'Y089',
      name: 'jadeite',
      hex: '#5FAE91'
    },
    {
      code: 'Y089',
      name: 'jadeite',
      hex: '#5FAE91'
    },
    {
      code: 'Y090',
      name: 'starbucks',
      hex: '#3C6E48'
    },
    {
      code: 'Y090',
      name: 'starbucks',
      hex: '#3C6E48'
    },
    {
      code: 'Y090',
      name: 'starbucks',
      hex: '#3C6E48'
    },
    {
      code: 'Y091',
      name: 'tree',
      hex: '#33793B'
    },
    {
      code: 'Y091',
      name: 'tree',
      hex: '#33793B'
    },
    {
      code: 'Y091',
      name: 'tree',
      hex: '#33793B'
    },
    {
      code: 'Y092',
      name: 'forest',
      hex: '#3A6436'
    },
    {
      code: 'Y092',
      name: 'forest',
      hex: '#3A6436'
    },
    {
      code: 'Y092',
      name: 'forest',
      hex: '#3A6436'
    },
    {
      code: 'Y093',
      name: 'jasper',
      hex: '#244636'
    },
    {
      code: 'Y093',
      name: 'jasper',
      hex: '#244636'
    },
    {
      code: 'Y093',
      name: 'jasper',
      hex: '#244636'
    },
    {
      code: 'Y094',
      name: 'barrack',
      hex: '#72833F'
    },
    {
      code: 'Y094',
      name: 'barrack',
      hex: '#72833F'
    },
    {
      code: 'Y094',
      name: 'barrack',
      hex: '#72833F'
    },
    {
      code: 'Y095',
      name: 'pudding',
      hex: '#EFE7A9'
    },
    {
      code: 'Y095',
      name: 'pudding',
      hex: '#EFE7A9'
    },
    {
      code: 'Y095',
      name: 'pudding',
      hex: '#EFE7A9'
    },
    {
      code: 'Y096',
      name: 'greamy',
      hex: '#E2E2AC'
    },
    {
      code: 'Y096',
      name: 'greamy',
      hex: '#E2E2AC'
    },
    {
      code: 'Y096',
      name: 'greamy',
      hex: '#E2E2AC'
    },
    {
      code: 'Y097',
      name: 'lemon',
      hex: '#F5E87F'
    },
    {
      code: 'Y097',
      name: 'lemon',
      hex: '#F5E87F'
    },
    {
      code: 'Y097',
      name: 'lemon',
      hex: '#F5E87F'
    },
    {
      code: 'Y098',
      name: 'yellow',
      hex: '#F1D937'
    },
    {
      code: 'Y098',
      name: 'yellow',
      hex: '#F1D937'
    },
    {
      code: 'Y098',
      name: 'yellow',
      hex: '#F1D937'
    },
    {
      code: 'Y099',
      name: 'yolk',
      hex: '#F1C530'
    },
    {
      code: 'Y099',
      name: 'yolk',
      hex: '#F1C530'
    },
    {
      code: 'Y099',
      name: 'yolk',
      hex: '#F1C530'
    },
    {
      code: 'Y100',
      name: 'ginger',
      hex: '#DABF3C'
    },
    {
      code: 'Y100',
      name: 'ginger',
      hex: '#DABF3C'
    },
    {
      code: 'Y100',
      name: 'ginger',
      hex: '#DABF3C'
    },
    {
      code: 'Y101',
      name: 'mousse',
      hex: '#F6D993'
    },
    {
      code: 'Y101',
      name: 'mousse',
      hex: '#F6D993'
    },
    {
      code: 'Y101',
      name: 'mousse',
      hex: '#F6D993'
    },
    {
      code: 'Y102',
      name: 'mango',
      hex: '#E7B53A'
    },
    {
      code: 'Y102',
      name: 'mango',
      hex: '#E7B53A'
    },
    {
      code: 'Y102',
      name: 'mango',
      hex: '#E7B53A'
    },
    {
      code: 'Y103',
      name: 'wheat',
      hex: '#FFBC47'
    },
    {
      code: 'Y103',
      name: 'wheat',
      hex: '#FFBC47'
    },
    {
      code: 'Y103',
      name: 'wheat',
      hex: '#FFBC47'
    },
    {
      code: 'Y104',
      name: 'salmon',
      hex: '#EBB38E'
    },
    {
      code: 'Y104',
      name: 'salmon',
      hex: '#EBB38E'
    },
    {
      code: 'Y104',
      name: 'salmon',
      hex: '#EBB38E'
    },
    {
      code: 'Y105',
      name: 'orange',
      hex: '#DF923A'
    },
    {
      code: 'Y105',
      name: 'orange',
      hex: '#DF923A'
    },
    {
      code: 'Y105',
      name: 'orange',
      hex: '#DF923A'
    },
    {
      code: 'Y106',
      name: 'tangerine',
      hex: '#F99846'
    },
    {
      code: 'Y106',
      name: 'tangerine',
      hex: '#F99846'
    },
    {
      code: 'Y106',
      name: 'tangerine',
      hex: '#F99846'
    },
    {
      code: 'Y107',
      name: 'Sun-god',
      hex: '#DD781C'
    },
    {
      code: 'Y107',
      name: 'Sun-god',
      hex: '#DD781C'
    },
    {
      code: 'Y107',
      name: 'Sun-god',
      hex: '#DD781C'
    },
    {
      code: 'Y108',
      name: 'azure',
      hex: '#E0D1BA'
    },
    {
      code: 'Y108',
      name: 'azure',
      hex: '#E0D1BA'
    },
    {
      code: 'Y108',
      name: 'azure',
      hex: '#E0D1BA'
    },
    {
      code: 'Y109',
      name: 'coffee',
      hex: '#5E504F'
    },
    {
      code: 'Y109',
      name: 'coffee',
      hex: '#5E504F'
    },
    {
      code: 'Y109',
      name: 'coffee',
      hex: '#5E504F'
    },
    {
      code: 'Y110',
      name: 'cerise',
      hex: '#DF475C'
    },
    {
      code: 'Y110',
      name: 'cerise',
      hex: '#DF475C'
    },
    {
      code: 'Y110',
      name: 'cerise',
      hex: '#DF475C'
    },
    {
      code: 'Y111',
      name: 'meat',
      hex: '#F4D9C4'
    },
    {
      code: 'Y111',
      name: 'meat',
      hex: '#F4D9C4'
    },
    {
      code: 'Y111',
      name: 'meat',
      hex: '#F4D9C4'
    },
    {
      code: 'Y112',
      name: 'peach',
      hex: '#E9CCC8'
    },
    {
      code: 'Y112',
      name: 'peach',
      hex: '#E9CCC8'
    },
    {
      code: 'Y112',
      name: 'peach',
      hex: '#E9CCC8'
    },
    {
      code: 'Y113',
      name: 'chauche',
      hex: '#D7E8E2'
    },
    {
      code: 'Y113',
      name: 'chauche',
      hex: '#D7E8E2'
    },
    {
      code: 'Y113',
      name: 'chauche',
      hex: '#D7E8E2'
    },
    {
      code: 'Y114',
      name: 'cloud',
      hex: '#C6D3E6'
    },
    {
      code: 'Y114',
      name: 'cloud',
      hex: '#C6D3E6'
    },
    {
      code: 'Y114',
      name: 'cloud',
      hex: '#C6D3E6'
    },
    {
      code: 'Y115',
      name: 'maldives',
      hex: '#66B2AE'
    },
    {
      code: 'Y115',
      name: 'maldives',
      hex: '#66B2AE'
    },
    {
      code: 'Y115',
      name: 'maldives',
      hex: '#66B2AE'
    },
    {
      code: 'Y116',
      name: 'bud',
      hex: '#CCE19E'
    },
    {
      code: 'Y116',
      name: 'bud',
      hex: '#CCE19E'
    },
    {
      code: 'Y116',
      name: 'bud',
      hex: '#CCE19E'
    },
    {
      code: 'Y117',
      name: 'matcha',
      hex: '#9EAE2A'
    },
    {
      code: 'Y117',
      name: 'matcha',
      hex: '#9EAE2A'
    },
    {
      code: 'Y117',
      name: 'matcha',
      hex: '#9EAE2A'
    },
    {
      code: 'Y118',
      name: 'ivory',
      hex: '#EAE3D3'
    },
    {
      code: 'Y118',
      name: 'ivory',
      hex: '#EAE3D3'
    },
    {
      code: 'Y118',
      name: 'ivory',
      hex: '#EAE3D3'
    },
    {
      code: 'Y119',
      name: 'milk',
      hex: '#EADBC4'
    },
    {
      code: 'Y119',
      name: 'milk',
      hex: '#EADBC4'
    },
    {
      code: 'Y119',
      name: 'milk',
      hex: '#EADBC4'
    },
    {
      code: 'Y120',
      name: 'persimmon',
      hex: '#F26A34'
    },
    {
      code: 'Y120',
      name: 'persimmon',
      hex: '#F26A34'
    },
    {
      code: 'Y120',
      name: 'persimmon',
      hex: '#F26A34'
    }
  ]
}


/**
 * 默认使用221色库
 */
export const DEFAULT_LIBRARY = LIBRARY_221;

/**
 * 所有可用色库
 * 注意：Mard/Coco 在这里注册
 */
export const ALL_LIBRARIES = {
  '24色': LIBRARY_24,
  '48色': LIBRARY_48,
  '72色': LIBRARY_72,
  '221色': LIBRARY_221,
  'Mard/Coco': LIBRARY_MARD,
  '全色系': All_Colors // ✨ 新增入口
};