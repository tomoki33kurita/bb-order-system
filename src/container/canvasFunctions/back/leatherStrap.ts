export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  // ctx.strokeStyle = '#383838'
  ctx.strokeStyle = 'red'
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

  // 捕球面とウェブの繋ぎ部分＿一番左
  ctx.moveTo(492, 140) // 左上
  ctx.quadraticCurveTo(478, 158, 485, 185) // 左下
  ctx.quadraticCurveTo(490, 185, 498, 174) // 右下
  ctx.quadraticCurveTo(494, 155, 509, 138) // 右上
  ctx.quadraticCurveTo(492, 140, 492, 140) // 左上
  // 右上の影
  ctx.moveTo(509, 138) //
  ctx.quadraticCurveTo(507, 143, 507, 143) //
  ctx.quadraticCurveTo(511, 142, 516, 145) //
  ctx.quadraticCurveTo(515, 141, 509, 138) //
  // 右斜め上の革紐
  ctx.moveTo(507, 143) // 左上
  ctx.quadraticCurveTo(500, 151, 499, 159) // 左下
  ctx.quadraticCurveTo(505, 155, 512, 159) // 右下
  ctx.quadraticCurveTo(523, 155, 524, 148) // 右上
  ctx.quadraticCurveTo(512, 143, 507, 145) // 左上
  // 左下部分
  ctx.moveTo(485, 154) // 左上
  ctx.quadraticCurveTo(481, 155, 480, 160) // 左中
  ctx.quadraticCurveTo(478, 168, 483, 172) // 下
  ctx.quadraticCurveTo(480, 164, 485, 154) // 左上

  // 捕球面とウェブの繋ぎ部分＿中央
  ctx.moveTo(558, 176) // 右上
  ctx.quadraticCurveTo(535, 170, 522, 191) // 左上
  ctx.quadraticCurveTo(520, 213, 523, 202) // 左下
  ctx.quadraticCurveTo(540, 185, 557, 189) // 右下
  ctx.quadraticCurveTo(570, 185, 558, 176) // 右上
  // 左上＿左上
  ctx.moveTo(536, 173) //
  ctx.quadraticCurveTo(533, 178, 533, 178) //
  ctx.quadraticCurveTo(543, 171, 555, 174) //
  ctx.quadraticCurveTo(551, 170, 551, 170) //
  ctx.quadraticCurveTo(542, 173, 536, 173) //
  // 右下
  ctx.moveTo(545, 191) // 右上
  ctx.quadraticCurveTo(529, 192, 523, 206) // 左上
  ctx.quadraticCurveTo(519, 214, 519, 214) // 左下
  ctx.quadraticCurveTo(527, 223, 537, 212) // 右下
  ctx.quadraticCurveTo(535, 205, 545, 191) // 左上

  // 捕球面とウェブの繋ぎ部分＿右
  ctx.moveTo(579, 205) // 左上
  ctx.quadraticCurveTo(572, 224, 575, 250) // 左下
  ctx.quadraticCurveTo(589, 237, 589, 237) // 右下
  ctx.quadraticCurveTo(588, 220, 595, 201) // 右上
  ctx.quadraticCurveTo(579, 205, 579, 205) // 左上
  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // 人差し指側ヘリ革＿捕球面繋ぐ革紐
  ctx.moveTo(435, 140) // 左左
  ctx.quadraticCurveTo(428, 142, 430, 152) // 下左
  ctx.quadraticCurveTo(448, 159, 448, 159) // 右下
  ctx.quadraticCurveTo(452, 150, 454, 148) // 右上
  ctx.quadraticCurveTo(445, 140, 435, 140) // 左上
  // 親指側ヘリ革＿捕球面(ウェブ下)繋ぐ革紐
  ctx.moveTo(617, 272) // 左上
  ctx.quadraticCurveTo(609, 283, 609, 283) // 左下
  ctx.quadraticCurveTo(620, 290, 627, 310) // 右下
  ctx.quadraticCurveTo(635, 310, 640, 304) // 右上
  ctx.quadraticCurveTo(631, 284, 617, 272) // 左上

  // 人差し指ヘリ革からウェブ本体＿左上に繋ぐ革紐
  ctx.moveTo(489, 70) // ヘリ革下
  ctx.quadraticCurveTo(504, 71, 520, 82) // ウェブ側左
  ctx.quadraticCurveTo(523, 79, 523, 76) // ウェブ側右
  ctx.quadraticCurveTo(513, 59, 490, 64) // ヘリ革側上
  ctx.quadraticCurveTo(489, 70, 489, 70) // ヘリ革下

  // 人差し指ヘリ革からウェブ本体＿左中央に繋ぐ革紐
  ctx.moveTo(478, 86) // ヘリ革下
  ctx.quadraticCurveTo(495, 95, 495, 95) // ウェブ側左
  ctx.quadraticCurveTo(504, 90, 504, 90) // ウェブ側右
  ctx.quadraticCurveTo(485, 81, 485, 81) // ヘリ革側上
  ctx.quadraticCurveTo(477, 82, 478, 86) // ヘリ革下

  // 人差し指ヘリ革からウェブ本体＿左下に繋ぐ革紐
  ctx.moveTo(455, 112) // ヘリ革下
  ctx.quadraticCurveTo(468, 113, 468, 113) // ウェブ側左
  ctx.quadraticCurveTo(478, 104, 479, 106) // ウェブ側右
  ctx.quadraticCurveTo(465, 102, 466, 102) // ヘリ革側上
  ctx.quadraticCurveTo(460, 105, 455, 112) // ヘリ革下

  // 親指ヘリ革からウェブ本体＿右下に繋ぐ革紐
  ctx.moveTo(648, 256) // ウェブ下
  ctx.quadraticCurveTo(671, 262, 675, 284) // ヘリ革側下
  ctx.quadraticCurveTo(682, 283, 687, 272) // ヘリ革側上
  ctx.quadraticCurveTo(684, 257, 660, 247) // ウェブ上
  ctx.quadraticCurveTo(652, 248, 648, 256) // ウェブ下

  // 親指ヘリ革からウェブ本体＿右中央に繋ぐ革紐
  ctx.moveTo(671, 236) // ウェブ下
  ctx.quadraticCurveTo(687, 246, 700, 263) // ヘリ革側下
  ctx.quadraticCurveTo(709, 261, 709, 261) // ヘリ革側上
  ctx.quadraticCurveTo(701, 240, 682, 228) // ウェブ上
  ctx.quadraticCurveTo(671, 236, 671, 236) // ウェブ下

  // 親指ヘリ革からウェブ本体＿右上に繋ぐ革紐
  ctx.moveTo(695, 221) // ウェブ左
  ctx.quadraticCurveTo(715, 228, 722, 257) // ヘリ革側左
  ctx.quadraticCurveTo(730, 255, 734, 254) // ヘリ革側右
  ctx.quadraticCurveTo(730, 228, 709, 215) // ウェブ右
  ctx.quadraticCurveTo(699, 215, 695, 221) // ウェブ左

  // ウェブ左先端から人差し指芯先端を結ぶ革紐
  ctx.moveTo(442, 57) // 人差し指芯
  ctx.quadraticCurveTo(449, 58, 449, 58) // 人差し指芯側左
  ctx.quadraticCurveTo(449, 46, 463, 40) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(487, 38, 487, 38) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(518, 42, 518, 45) // ウェブ左先端側＿右
  ctx.quadraticCurveTo(520, 27, 460, 34) // ウェブ左
  ctx.quadraticCurveTo(441, 40, 442, 57) // ウェブ左

  // ウェブ左先端から人差し指芯先端を結ぶ革紐
  ctx.moveTo(478, 47) // 人差し指芯左
  ctx.quadraticCurveTo(492, 48, 492, 48) // 人差し指芯右
  ctx.quadraticCurveTo(506, 45, 510, 50) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(517, 46, 517, 46) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(492, 36, 478, 47) // ウェブ左先端側＿右

  // ウェブ右先端から親指芯先端を結ぶ革紐
  ctx.moveTo(754, 232) // ウェブ側左
  ctx.quadraticCurveTo(773, 250, 773, 250) // 曲線前革紐の中間
  ctx.quadraticCurveTo(780, 257, 766, 272) // 親指接続部分＿左
  ctx.quadraticCurveTo(770, 280, 769, 290) // ウェブ左先端側＿右下
  ctx.quadraticCurveTo(785, 264, 785, 264) // ウェブ左先端側＿右
  ctx.quadraticCurveTo(789, 255, 782, 245) // 曲線後革紐の中間
  ctx.quadraticCurveTo(777, 235, 765, 224) // ウェブ側右
  ctx.quadraticCurveTo(754, 232, 754, 232) // ウェブ側右

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const knotOnWeb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  // ctx.strokeStyle = '#383838'
  ctx.strokeStyle = 'red'
  ctx.fillStyle = color
  ctx.beginPath()

  // ウェブ本体中央の結び目＿左
  ctx.moveTo(596, 127) // 左上
  ctx.quadraticCurveTo(586, 141, 598, 156) // 右下下
  ctx.quadraticCurveTo(607, 141, 605, 141) // 右下上
  ctx.quadraticCurveTo(606, 130, 606, 130) // 左上の右
  ctx.quadraticCurveTo(596, 127, 596, 127) // 左上
  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // ウェブ本体中央の結び目＿右
  ctx.moveTo(606, 136) // 左上
  ctx.quadraticCurveTo(607, 154, 590, 164) // 左下
  ctx.quadraticCurveTo(596, 170, 601, 171) // 右下
  ctx.quadraticCurveTo(617, 151, 615, 151) // 右上
  ctx.quadraticCurveTo(615, 143, 606, 136) // 左上

  // 結び目左下
  ctx.moveTo(592, 143) // 左上
  ctx.quadraticCurveTo(585, 154, 590, 163) // 左下
  ctx.quadraticCurveTo(598, 156, 598, 158) // 右上
  ctx.quadraticCurveTo(589, 144, 592, 143) // 左上

  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // 革部分との付け根
  ctx.moveTo(575, 140) // 左上
  ctx.quadraticCurveTo(583, 135, 590, 137) // 右上
  ctx.quadraticCurveTo(590, 142, 590, 142) // 右下
  ctx.quadraticCurveTo(580, 145, 580, 145) // 左下
  ctx.quadraticCurveTo(575, 140, 575, 140) // 左下

  // ウェブ本体の紐先端左
  ctx.moveTo(493, 59) // 左左
  ctx.quadraticCurveTo(554, 123, 590, 137) // 右下
  ctx.quadraticCurveTo(593, 130, 593, 130) // 右上
  ctx.quadraticCurveTo(554, 107, 499, 58) // 左右
  ctx.quadraticCurveTo(493, 59, 493, 59) // 左左

  // ウェブ本体の紐先端右
  ctx.moveTo(608, 165) // 左左
  ctx.quadraticCurveTo(682, 249, 682, 249) // 下左
  ctx.quadraticCurveTo(692, 243, 692, 243) // 下右
  ctx.quadraticCurveTo(614, 155, 614, 155) // 左右
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
