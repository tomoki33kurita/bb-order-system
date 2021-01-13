export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ先端左上から右下
  ctx.moveTo(551, 43) // 左上
  ctx.quadraticCurveTo(539, 52, 539, 52) // 左下
  ctx.quadraticCurveTo(550, 61, 550, 61) // 右下
  ctx.quadraticCurveTo(561, 49, 561, 49) // 右上
  ctx.quadraticCurveTo(551, 43, 551, 43) // 左上

  // ウェブ先端左上から右下
  ctx.moveTo(559, 53) // 左上
  ctx.quadraticCurveTo(550, 61, 552, 60) // 左下
  ctx.quadraticCurveTo(558, 58, 565, 64) // 右下
  ctx.quadraticCurveTo(570, 55, 559, 53) // 左上

  // 2番目
  ctx.moveTo(569, 62) // 左上
  ctx.quadraticCurveTo(562, 64, 562, 70) // 左下
  ctx.quadraticCurveTo(563, 74, 573, 73) // 右下
  ctx.quadraticCurveTo(573, 65, 580, 63) // 右上
  ctx.quadraticCurveTo(569, 62, 569, 62) // 左上
  // 右の影
  ctx.moveTo(580, 63) // 左上
  ctx.quadraticCurveTo(570, 66, 573, 73) // 左下
  ctx.quadraticCurveTo(581, 69, 585, 75) // 右下
  ctx.quadraticCurveTo(588, 64, 580, 63) // 左上

  // 3番目
  ctx.moveTo(591, 73) // 左上
  ctx.quadraticCurveTo(581, 74, 581, 83) // 左下
  ctx.quadraticCurveTo(585, 90, 592, 87) // 右下
  ctx.quadraticCurveTo(595, 76, 605, 78) // 右上
  ctx.quadraticCurveTo(596, 73, 591, 73) // 左上
  // 右の影
  ctx.moveTo(605, 78) // 上
  ctx.quadraticCurveTo(595, 76, 592, 87) // 左下
  ctx.quadraticCurveTo(600, 80, 608, 89) // 右下
  ctx.quadraticCurveTo(607, 80, 605, 78) // 左上

  // 4番目
  ctx.moveTo(612, 87) // 左上
  ctx.quadraticCurveTo(605, 88, 601, 95) // 左下
  ctx.quadraticCurveTo(605, 105, 612, 100) // 右下
  ctx.quadraticCurveTo(615, 91, 623, 92) // 右上
  ctx.quadraticCurveTo(617, 87, 612, 87) // 左上
  // 右の影
  ctx.moveTo(623, 92) // 上
  ctx.quadraticCurveTo(615, 91, 612, 100) // 左下
  ctx.quadraticCurveTo(621, 95, 627, 102) // 右下
  ctx.quadraticCurveTo(628, 93, 623, 92) // 左上

  // 5番目
  ctx.moveTo(632, 100) // 左上
  ctx.quadraticCurveTo(625, 100, 619, 108) // 左下
  ctx.quadraticCurveTo(622, 114, 630, 115) // 右下
  ctx.quadraticCurveTo(635, 107, 642, 105) // 右上
  ctx.quadraticCurveTo(632, 100, 632, 100) // 左上
  // 右の影
  ctx.moveTo(642, 105) // 上
  ctx.quadraticCurveTo(635, 108, 630, 115) // 左下
  ctx.quadraticCurveTo(638, 108, 647, 117) // 右下
  ctx.quadraticCurveTo(648, 108, 642, 105) // 左上

  // 6番目
  ctx.moveTo(654, 116) // 左上
  ctx.quadraticCurveTo(645, 116, 640, 124) // 左下
  ctx.quadraticCurveTo(643, 131, 652, 130) // 右下
  ctx.quadraticCurveTo(664, 120, 665, 123) // 右上
  ctx.quadraticCurveTo(654, 116, 654, 116) // 左上
  // 右の影
  ctx.moveTo(663, 121) // 上
  ctx.quadraticCurveTo(645, 116, 652, 130) // 左下
  ctx.quadraticCurveTo(656, 123, 668, 132) // 右下
  ctx.quadraticCurveTo(670, 127, 663, 121) // 左上

  // 7番目
  ctx.moveTo(675, 132) // 左上
  ctx.quadraticCurveTo(665, 130, 661, 139) // 左下
  ctx.quadraticCurveTo(662, 146, 672, 145) // 右下
  ctx.quadraticCurveTo(678, 136, 685, 139) // 右上
  ctx.quadraticCurveTo(675, 132, 675, 132) // 左上
  // 右の影
  ctx.moveTo(685, 139) // 上
  ctx.quadraticCurveTo(665, 130, 672, 145) // 左下
  ctx.quadraticCurveTo(679, 139, 688, 147) // 右下
  ctx.quadraticCurveTo(689, 140, 685, 139) // 左上

  // 8番目
  ctx.moveTo(694, 144) // 左上
  ctx.quadraticCurveTo(687, 145, 680, 152) // 左下
  ctx.quadraticCurveTo(681, 158, 690, 160) // 右下
  ctx.quadraticCurveTo(697, 153, 705, 152) // 右上
  ctx.quadraticCurveTo(694, 144, 694, 144) // 左上
  // 右の影
  ctx.moveTo(705, 152) // 上
  ctx.quadraticCurveTo(695, 150, 690, 160) // 左下
  ctx.quadraticCurveTo(696, 151, 707, 161) // 右下
  ctx.quadraticCurveTo(710, 155, 705, 152) // 左上

  // 9番目
  ctx.moveTo(714, 162) // 左上
  ctx.quadraticCurveTo(706, 161, 699, 168) // 左下
  ctx.quadraticCurveTo(700, 173, 708, 175) // 右下
  ctx.quadraticCurveTo(713, 169, 722, 167) // 右上
  ctx.quadraticCurveTo(714, 162, 714, 162) // 左上
  // 右の影
  ctx.moveTo(722, 167) // 上
  ctx.quadraticCurveTo(706, 161, 708, 175) // 左下
  ctx.quadraticCurveTo(715, 171, 725, 178) // 右下
  ctx.quadraticCurveTo(730, 172, 722, 167) // 左上

  // 10番目
  ctx.moveTo(732, 177) // 左上
  ctx.quadraticCurveTo(722, 178, 717, 184) // 左下
  ctx.quadraticCurveTo(719, 191, 727, 190) // 右下
  ctx.quadraticCurveTo(729, 184, 739, 183) // 右上
  ctx.quadraticCurveTo(732, 177, 732, 177) // 左上
  // 右の影
  ctx.moveTo(739, 183) // 上
  ctx.quadraticCurveTo(729, 184, 727, 190) // 左下
  ctx.quadraticCurveTo(736, 185, 741, 194) // 右下
  ctx.quadraticCurveTo(745, 186, 739, 183) // 左上

  // 11番目
  ctx.moveTo(752, 195) // 左上
  ctx.quadraticCurveTo(742, 193, 736, 200) // 左下
  ctx.quadraticCurveTo(735, 205, 740, 208) // 右下
  ctx.quadraticCurveTo(750, 203, 758, 204) // 右上
  ctx.quadraticCurveTo(752, 195, 752, 195) // 左上
  // 右の影
  ctx.moveTo(758, 204) // 上
  ctx.quadraticCurveTo(740, 208, 740, 208) // 左下
  ctx.quadraticCurveTo(752, 205, 757, 209) // 右下
  ctx.quadraticCurveTo(761, 204, 754, 204) // 左上

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
