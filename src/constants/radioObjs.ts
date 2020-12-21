export const baseModelObjs = [
  { label: 'M8型', value: 'm8' },
  { label: 'M1型', value: 'm1' },
  { label: 'M2型', value: 'm2' },
  { label: 'M01型', value: 'm01' },
]

export const dominantArmObjs = [
  { label: '右投げ', value: 'rightThrow' },
  { label: '左投げ', value: 'leftThrow' },
]

export const mittSizeObjs = [
  { label: '基本モデルより10mm大きく', value: 'large_5' },
  { label: '基本モデルより5mm大きく', value: 'large_10' },
  { label: '基本モデルズバリ', value: 'default' },
  { label: '基本モデルより5mm小さく', value: 'small_5' },
  { label: '基本モデルより10mm小さく', value: 'small_10' },
]

export const mittDepthObjs = [
  { label: '基本モデルズバリ', value: 'default' },
  { label: '基本モデルより深く', value: 'deep' },
  { label: '基本モデルより浅く', value: 'shallow' },
]

export const backStyleObjs = [
  { label: 'Aバック', value: 'A_back' },
  { label: 'Bバック', value: 'B_back' },
  { label: 'axバック', value: 'ax_back' },
  { label: 'シェラームーブ', value: 'shellarmove' },
]

export const padModleObjs = [
  { label: 'Aバッド', value: 'A_pad' },
  { label: 'Bバッド', value: 'B_pad' },
]

export const hardnessObjs = [
  { label: '硬く', value: 'hard' },
  { label: '普通', value: 'normal' },
  { label: '柔らかく', value: 'soft' },
]

export const thicknessObjs = [
  { label: '厚く', value: 'thick' },
  { label: '普通', value: 'normal' },
  { label: '薄く', value: 'thin' },
]

export const hamidashiTypeObjs = [
  { label: '切りハミ(ホワイト)', value: 'kirihami_white' },
  { label: '切りハミ(ブラック)', value: 'kirihami_black' },
  { label: 'ハミダシなし', value: 'no_hamidashi' },
]

export const fingerGuardTypeObjs = [
  { label: 'スタンダード', value: 'standard_finger_guard' },
  { label: 'ロング', value: 'long_finger_guard' },
  { label: '指カバーなし', value: 'no_finger_guard' },
]

export const zabutonSpongeObjs = [
  { label: '有り', value: 'zabuton' },
  { label: '無し', value: 'no_zabuton' },
]

export const exFunctionObjs = [
  { label: '有り', value: 'ex_func' },
  { label: '無し', value: 'no_ex_func' },
]

export const pinkiePatternObjs = [
  { label: '有り', value: 'pinkie_pattern' },
  { label: '無し', value: 'no_pinkie_pattern' },
]

export const leatherStringColorObjs = [
  { label: 'エコロジーブラウン', value: 'ecology_brown', color: '#733b03' },
  { label: 'ブラウン', value: 'brown', color: '#CC6600' },
  { label: 'オレンジ', value: 'orange', color: '#ff8c00' },
  { label: 'ブラック', value: 'black', color: '#000' },
  { label: 'Jイエロー', value: 'j_yellow', color: '#ffd700' },
  { label: 'Vオレンジ', value: 'v_orange', color: '#ff4500' },
  { label: 'Jブルー', value: 'j_blue', color: '#0000DD' },
  { label: 'レッド', value: 'red', color: '#EE0000' },
  { label: 'ホワイト', value: 'white', color: '#fff' },
]

export const leatherColorObjs = [...leatherStringColorObjs, { label: 'Vブラック', value: 'v_black', color: '#525151' }]

export const liningsTypeObjs = [
  { label: '共牛革(エコロジーブラウン)', value: 'cow_ecology_brown', color: '#733b03' },
  { label: '共牛革(ブラウン)', value: 'cow_brown', color: '#CC6600' },
  { label: '共牛革(オレンジ)', value: 'cow_orange', color: '#ff8c00' },
  { label: '共牛革(ブラック)', value: 'cow_black', color: '#000' },
  { label: '共牛革(Jイエロー)', value: 'cow_j_yellow', color: '#ffd700' },
  { label: '共牛革(Vオレンジ)', value: 'cow_v_orange', color: '#ff4500' },
  { label: '共牛革(Jブルー)', value: 'cow_j_blue', color: '#0000DD' },
  { label: '共牛革(レッド)', value: 'cow_red', color: '#EE0000' },
  { label: '共牛革(ホワイト)', value: 'cow_white', color: '#fff' },
  { label: '共牛革(Vブラック)', value: 'cow_v_black', color: '#525151' },
  { label: '和牛革(ブラック)', value: 'wagyu_black', color: '#000' },
  { label: '鹿革', value: 'deer', color: '#000' },
  { label: 'ウルトラスエード(ブラック)', value: 'ultra_suede', color: '#000' },
]

export const hatakeyamaLabelObjs = [
  { label: '直刺繍C1', value: 'straight_embroidery' },
  { label: '刺繍ワッペンW1', value: 'emblem_1' },
  { label: '刺繍ワッペンW2', value: 'emblem_2' },
  { label: '刺繍ワッペンW3', value: 'emblem_3' },
  { label: '刺繍ワッペンW4', value: 'emblem_4' },
  { label: 'シリコンS1', value: 'silicon_1' },
  { label: 'シリコンS2', value: 'silicon_2' },
  { label: 'シリコンS3', value: 'silicon_3' },
  { label: 'シリコンS4', value: 'silicon_4' },
  { label: 'シリコンS5', value: 'silicon_5' },
  { label: 'シリコンS6', value: 'silicon_6' },
]

export const tbEngravedObjs = [
  { label: '有り', value: 'tb_engraved' },
  { label: '無し', value: 'no_tb_engraved' },
]

export const listLiningsMaterialObjs = [
  { label: 'ムートン(ホワイト)', value: 'mouton_white' },
  { label: 'ムートン(ブラック)', value: 'mouton_black' },
  { label: 'ウルトラスエード(パッド)', value: 'ultra_suède' },
]

export const stitchColorObjs = [
  { label: 'イエロー', value: 'j_yellow', color: '#ffd700' },
  { label: 'ブラック', value: 'black', color: '#000' },
  { label: 'ブルー', value: 'j_blue', color: '#0000DD' },
  { label: 'レッド', value: 'red', color: '#EE0000' },
  { label: 'ホワイト', value: 'white', color: '#fff' },
  { label: 'ブラウン', value: 'brown', color: '#CC6600' },
  { label: 'オレンジ', value: 'orange', color: '#ff8c00' },
]

export const embroideryTypeFaceObjs = [
  { label: '楷書体', value: 'regular' },
  { label: '行書体', value: 'semi_cursive' },
  { label: 'アルファベット活字体', value: 'alphabet_regular' },
  { label: 'アルファベット筆記体', value: 'alphabet_cursive' },
  { label: 'ハタケヤマオリジナル書体', value: 'original' },
  { label: 'オールドイングリッシュ書体', value: 'old_english' },
  { label: '刻印', value: 'engraved' },
]

export const embroideryPositionObjs = [
  { label: '親指部分', value: 'thumb_finger' },
  { label: '小指部分', value: 'child_finger' },
  { label: '甲部分(シェラームーブ)', value: 'shellarmove' },
  { label: '裏革部分(窓見部分)', value: 'leather_lining_mdd' },
  { label: '裏革部分(手口部分)', value: 'leather_lining_enter' },
  { label: 'グラブ袋', value: 'glove_bag' },
]
