//革紐
export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string, sideColor: string): void => {
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 土手三本紐＿左上
  ctx.moveTo(490, 510) // 左上
  ctx.quadraticCurveTo(492, 510, 500, 543) // 左下
  ctx.quadraticCurveTo(510, 539, 510, 541) // 右下
  ctx.quadraticCurveTo(505, 510, 500, 507) // 右上
  ctx.quadraticCurveTo(485, 510, 490, 510) // 左上
  ctx.closePath()

  // 土手三本紐＿左下
  ctx.moveTo(500, 545) // 左上
  ctx.quadraticCurveTo(505, 553, 507, 573) //左下
  ctx.quadraticCurveTo(516, 570, 518, 570) //右下
  ctx.quadraticCurveTo(516, 553, 510, 543) //右上
  ctx.quadraticCurveTo(500, 545, 503, 545) //左上
  ctx.closePath()

  // 土手三本紐＿中央上
  ctx.moveTo(530, 487) // 左上
  ctx.quadraticCurveTo(540, 503, 542, 521) // 左下
  ctx.quadraticCurveTo(552, 518, 552, 520) // 右下
  ctx.quadraticCurveTo(548, 493, 540, 485) // 右上
  ctx.quadraticCurveTo(535, 484, 530, 487) // 左上
  ctx.closePath()

  // 土手三本紐＿中央下
  ctx.moveTo(541, 525) // 左上
  ctx.quadraticCurveTo(545, 530, 550, 555) // 左下
  ctx.quadraticCurveTo(557, 557, 560, 552) // 右下
  ctx.quadraticCurveTo(558, 538, 552, 522) // 右上
  ctx.quadraticCurveTo(545, 520, 541, 525) // 左上
  ctx.closePath()

  // 土手三本紐＿右上
  ctx.moveTo(575, 473) // 左上
  ctx.quadraticCurveTo(585, 505, 585, 510) // 左下
  ctx.quadraticCurveTo(595, 505, 595, 509) // 右下
  ctx.quadraticCurveTo(592, 485, 585, 470) // 右上
  ctx.quadraticCurveTo(580, 468, 575, 473) // 左上
  ctx.closePath()
  // 土手三本紐＿右下
  ctx.moveTo(585, 512) // 左上
  ctx.quadraticCurveTo(593, 543, 593, 543) // 左下
  ctx.quadraticCurveTo(597, 545, 603, 540) // 右下
  ctx.quadraticCurveTo(600, 523, 595, 510) // 右上
  ctx.quadraticCurveTo(590, 510, 585, 512) // 左上
  ctx.closePath()

  // 小指先端ウェブ横1
  ctx.moveTo(504, 63) //左下
  ctx.quadraticCurveTo(505, 56, 520, 71) // 右下
  ctx.quadraticCurveTo(516, 61, 518, 59) // 右上
  ctx.quadraticCurveTo(508, 50, 503, 54) // 左上
  ctx.quadraticCurveTo(500, 63, 505, 63) // 左上
  ctx.closePath()

  // 垂直
  ctx.moveTo(520, 63) // 左上
  ctx.quadraticCurveTo(512, 75, 524, 93) // 左下
  ctx.quadraticCurveTo(530, 95, 530, 90) // 右下
  ctx.quadraticCurveTo(522, 75, 526, 65) // 右上
  ctx.quadraticCurveTo(524, 61, 520, 63) // 左上
  ctx.closePath()

  // 小指先端ウェブ横2
  ctx.moveTo(508, 93) //左下
  ctx.quadraticCurveTo(509, 86, 524, 101) // 右下
  ctx.quadraticCurveTo(523, 91, 520, 89) // 右上
  ctx.quadraticCurveTo(512, 80, 504, 84) // 左上
  ctx.quadraticCurveTo(504, 93, 508, 93) // 左上
  ctx.closePath()

  // 小指先端ウェブ横3
  ctx.moveTo(516, 121) //左下
  ctx.quadraticCurveTo(527, 120, 536, 125) // 右下
  ctx.quadraticCurveTo(536, 125, 534, 118) // 右上
  ctx.quadraticCurveTo(520, 109, 515, 115) // 左上
  ctx.quadraticCurveTo(516, 121, 516, 121) // 左上
  ctx.closePath()

  // ウェブ下捕球面＿右1
  ctx.moveTo(522, 160) // 左下
  ctx.quadraticCurveTo(530, 155, 540, 150) // 右下
  ctx.quadraticCurveTo(545, 150, 545, 140) // 右上
  ctx.quadraticCurveTo(533, 142, 525, 150) // 左上
  ctx.quadraticCurveTo(517, 155, 522, 160) // 左下
  ctx.closePath()

  // ウェブ下捕球面＿右2
  ctx.moveTo(515, 190) // 左下
  ctx.quadraticCurveTo(520, 186, 530, 180) // 右下
  ctx.quadraticCurveTo(535, 175, 535, 170) // 右上
  ctx.quadraticCurveTo(527, 171, 516, 182) // 左上
  ctx.quadraticCurveTo(515, 190, 515, 190) // 左下
  ctx.closePath()

  // 小指芯先端内側_左1
  ctx.moveTo(552, 161) // 左下
  ctx.quadraticCurveTo(557, 168, 570, 169) //右下
  ctx.quadraticCurveTo(570, 164, 570, 162) //右上
  ctx.quadraticCurveTo(565, 163, 552, 153) //左上
  ctx.quadraticCurveTo(552, 158, 552, 161) //左下
  ctx.closePath()

  // 小指芯先端内側_左2
  ctx.moveTo(588, 185) // 左下
  ctx.quadraticCurveTo(597, 195, 610, 198) //右下
  ctx.quadraticCurveTo(610, 188, 607, 188) //右上
  ctx.quadraticCurveTo(600, 186, 585, 172) //左上
  ctx.quadraticCurveTo(586, 180, 588, 185) //左下
  ctx.closePath()

  // 小指芯先端内側_左3
  ctx.moveTo(627, 210) // 左下 22, 17
  ctx.quadraticCurveTo(637, 225, 647, 225) //右下
  ctx.quadraticCurveTo(647, 222, 647, 218) //右上
  ctx.quadraticCurveTo(635, 210, 627, 200) //左上
  ctx.quadraticCurveTo(622, 205, 627, 210) //左下
  ctx.closePath()

  // 小指芯先端内側垂直
  ctx.moveTo(682, 170) // 左上
  ctx.quadraticCurveTo(668, 180, 658, 200) // 左下
  ctx.quadraticCurveTo(662, 208, 665, 205) //右下
  ctx.quadraticCurveTo(690, 175, 690, 175) //右上
  ctx.quadraticCurveTo(688, 170, 682, 170) //左上
  ctx.closePath()

  // 小指芯内_土手側1
  ctx.moveTo(650, 275) // 左上
  ctx.quadraticCurveTo(644, 295, 647, 312) // 左下
  ctx.quadraticCurveTo(655, 318, 655, 318) //右下
  ctx.quadraticCurveTo(652, 295, 658, 279) //右上
  ctx.quadraticCurveTo(654, 272, 650, 275) //左上
  ctx.closePath()
  // 小指芯内_土手側2
  ctx.moveTo(635, 367) // 左上
  ctx.quadraticCurveTo(612, 385, 615, 402) // 左下
  ctx.quadraticCurveTo(615, 408, 620, 408) //右下
  ctx.quadraticCurveTo(629, 380, 640, 375) //右上
  ctx.quadraticCurveTo(640, 368, 635, 367) //左上
  ctx.closePath()

  // ウェブと捕球面の間 左
  ctx.moveTo(353, 175) // 左上
  ctx.quadraticCurveTo(352, 186, 352, 186) // 左下
  ctx.quadraticCurveTo(362, 183, 362, 183) // 右下
  ctx.quadraticCurveTo(363, 173, 363, 173) // 右上
  ctx.quadraticCurveTo(353, 178, 353, 175) // 左上
  ctx.closePath()
  ctx.moveTo(347, 178) // 左上
  ctx.quadraticCurveTo(352, 186, 352, 186) // 左下
  ctx.quadraticCurveTo(353, 178, 353, 177) // 右上
  ctx.quadraticCurveTo(347, 178, 347, 178) // 左上
  ctx.closePath()

  // ウェブと捕球面の間 中央
  ctx.moveTo(403, 162) // 左上
  ctx.quadraticCurveTo(402, 173, 402, 173) // 左下
  ctx.quadraticCurveTo(412, 170, 412, 170) // 右下
  ctx.quadraticCurveTo(413, 159, 413, 159) // 右上
  ctx.quadraticCurveTo(403, 162, 403, 162) // 左上
  ctx.closePath()
  ctx.moveTo(397, 164) // 左上
  ctx.quadraticCurveTo(402, 173, 402, 173) // 左下
  ctx.quadraticCurveTo(404, 162, 404, 162) // 右上
  ctx.quadraticCurveTo(397, 164, 397, 164) // 左上
  ctx.closePath()

  // ウェブと捕球面の間 右
  ctx.moveTo(453, 148) // 左上
  ctx.quadraticCurveTo(452, 160, 452, 160) // 左下
  ctx.quadraticCurveTo(462, 157, 462, 157) // 右下
  ctx.quadraticCurveTo(463, 145, 463, 145) // 右上
  ctx.quadraticCurveTo(453, 148, 453, 148) // 左上
  ctx.closePath()
  ctx.moveTo(447, 150) // 左上
  ctx.quadraticCurveTo(452, 160, 452, 160) // 左下
  ctx.quadraticCurveTo(453, 148, 453, 148) // 右上
  ctx.quadraticCurveTo(447, 150, 447, 150) // 左上
  ctx.closePath()

  // ウェブ横→親指芯＿上
  ctx.moveTo(256, 143) // 左下
  ctx.quadraticCurveTo(278, 137, 278, 137) // 右下
  ctx.quadraticCurveTo(275, 126, 277, 127) // 右上
  ctx.quadraticCurveTo(245, 136, 248, 137) // 左上
  ctx.quadraticCurveTo(254, 143, 254, 143) // 左下
  ctx.closePath()

  // ウェブ横→親指芯＿中央
  ctx.moveTo(267, 157) // 左上
  ctx.quadraticCurveTo(273, 165, 273, 165) //左下
  ctx.quadraticCurveTo(285, 160, 285, 160) // 右下
  ctx.quadraticCurveTo(284, 152, 284, 150) // 右上
  ctx.quadraticCurveTo(267, 157, 267, 157) // 左上
  ctx.closePath()

  // ウェブ横→親指芯＿下
  ctx.moveTo(277, 178) // 左上
  ctx.quadraticCurveTo(280, 187, 280, 187) //左下
  ctx.quadraticCurveTo(292, 182, 292, 182) // 右下
  ctx.quadraticCurveTo(291, 173, 291, 173) // 右上
  ctx.quadraticCurveTo(277, 178, 277, 178) // 左上
  ctx.closePath()

  // // ウェブと親指芯_外側
  // ctx.moveTo(190, 127)
  // ctx.quadraticCurveTo(190, 90, 239, 90)
  // // ウェブと親指芯_真ん中
  // ctx.moveTo(205, 125)
  // ctx.quadraticCurveTo(205, 95, 240, 95)
  // // ウェブと親指芯_内側
  // ctx.moveTo(220, 121)
  // ctx.quadraticCurveTo(220, 110, 240, 100)

  // // ウェブと小指芯先端_外側
  // ctx.moveTo(500, 20)
  // ctx.quadraticCurveTo(540, 5, 540, 33)
  // // ウェブと小指芯先端_中央
  // ctx.moveTo(500, 25)
  // ctx.quadraticCurveTo(525, 22, 525, 33)
  // // ウェブと小指芯先端_内側
  // ctx.moveTo(505, 25)
  // ctx.quadraticCurveTo(500, 40, 520, 35)

  // ctx.moveTo(487, 73)
  // ctx.quadraticCurveTo(505, 69, 505, 69)
  // ctx.moveTo(493, 98)
  // ctx.quadraticCurveTo(512, 95, 512, 95)
  // ctx.moveTo(498, 123)
  // ctx.quadraticCurveTo(518, 118, 518, 118)
  // ウェブ下捕球面と小指先端下捕球面
  // ctx.moveTo(502, 155)
  // ctx.quadraticCurveTo(517, 150, 526, 155)

  // // ウェブ先端(左から昇順)
  // ctx.moveTo(252, 72)
  // ctx.lineTo(262, 110)

  // ctx.moveTo(278, 65)
  // ctx.lineTo(275, 105)
  // ctx.moveTo(298, 60)
  // ctx.lineTo(295, 100)
  // ctx.moveTo(318, 55)
  // ctx.lineTo(315, 95)
  // ctx.moveTo(338, 50)
  // ctx.lineTo(335, 90)
  // ctx.moveTo(358, 44)
  // ctx.lineTo(355, 84)
  // ctx.moveTo(378, 39)
  // ctx.lineTo(375, 79)
  // ctx.moveTo(398, 33)
  // ctx.lineTo(395, 74)
  // ctx.moveTo(418, 29)
  // ctx.lineTo(415, 69)
  // ctx.moveTo(438, 23)
  // ctx.lineTo(435, 64)
  // ctx.moveTo(458, 18)
  // ctx.lineTo(455, 58)
  // ctx.moveTo(478, 12)
  // ctx.lineTo(475, 50)
  // ctx.moveTo(478, 12)
  // ctx.lineTo(485, 47)

  // ウェブ下捕球面と親指寄り捕球面
  ctx.moveTo(297, 212) // 左上
  ctx.quadraticCurveTo(303, 220, 303, 220) //左下
  ctx.quadraticCurveTo(310, 214, 310, 214) //右下
  ctx.quadraticCurveTo(305, 205, 305, 205) //右上
  ctx.quadraticCurveTo(297, 212, 297, 212) // 左上
  ctx.closePath()

  // ウェブ下捕球面と親指下捕球面
  ctx.moveTo(288, 225) // 左下
  ctx.quadraticCurveTo(295, 235, 297, 232) // 右下
  ctx.quadraticCurveTo(300, 220, 305, 222) // 右上
  ctx.quadraticCurveTo(297, 210, 295, 215) // 左上
  ctx.quadraticCurveTo(288, 220, 288, 225) // 左下
  ctx.closePath()

  // ウェブ下捕球面と親指下捕球面2
  ctx.moveTo(310, 252) // 左下
  ctx.quadraticCurveTo(315, 260, 318, 257) // 右下
  ctx.quadraticCurveTo(323, 250, 322, 240) // 右上
  ctx.quadraticCurveTo(315, 228, 310, 230) // 左上
  ctx.quadraticCurveTo(315, 235, 315, 235) // 左下
  ctx.closePath()

  // 親指芯周り上から
  ctx.moveTo(163, 157)
  ctx.quadraticCurveTo(163, 165, 163, 165)
  ctx.quadraticCurveTo(177, 158, 192, 170)
  ctx.quadraticCurveTo(197, 167, 197, 167)
  ctx.quadraticCurveTo(190, 150, 163, 157)
  ctx.closePath()
  // 側面
  ctx.moveTo(163, 165)
  ctx.quadraticCurveTo(165, 167, 165, 167)
  ctx.quadraticCurveTo(177, 158, 192, 170)
  ctx.closePath()

  ctx.moveTo(163, 195)
  ctx.quadraticCurveTo(163, 202, 164, 202)
  ctx.quadraticCurveTo(177, 196, 192, 207)
  ctx.quadraticCurveTo(198, 202, 196, 200)
  ctx.quadraticCurveTo(174, 188, 166, 195)
  ctx.closePath()
  // 側面
  ctx.moveTo(164, 202)
  ctx.quadraticCurveTo(196, 207, 192, 207)
  ctx.quadraticCurveTo(176, 202, 166, 202)
  ctx.closePath()

  ctx.moveTo(165, 235)
  ctx.quadraticCurveTo(165, 235, 165, 242)
  ctx.quadraticCurveTo(188, 238, 195, 245)
  ctx.quadraticCurveTo(197, 240, 198, 238)
  ctx.quadraticCurveTo(180, 225, 165, 235)
  ctx.closePath()
  // 側面
  ctx.moveTo(165, 242)
  ctx.quadraticCurveTo(195, 245, 195, 245)
  ctx.quadraticCurveTo(195, 245, 165, 242)
  ctx.closePath()

  ctx.moveTo(173, 271)
  ctx.quadraticCurveTo(167, 275, 171, 280)
  ctx.quadraticCurveTo(192, 277, 202, 285)
  ctx.quadraticCurveTo(205, 281, 203, 276)
  ctx.quadraticCurveTo(193, 265, 173, 271)
  ctx.closePath()
  //側面
  ctx.moveTo(173, 280)
  ctx.quadraticCurveTo(190, 285, 202, 285)
  ctx.quadraticCurveTo(192, 277, 173, 280)
  ctx.closePath()

  ctx.moveTo(176, 310)
  ctx.quadraticCurveTo(176, 315, 177, 318)
  ctx.quadraticCurveTo(203, 311, 208, 322)
  ctx.quadraticCurveTo(212, 311, 205, 312)
  ctx.quadraticCurveTo(192, 300, 176, 310)
  ctx.closePath()
  // 側面
  ctx.moveTo(177, 318)
  ctx.quadraticCurveTo(208, 320, 208, 322)
  ctx.quadraticCurveTo(190, 315, 177, 318)
  ctx.closePath()

  ctx.moveTo(185, 348)
  ctx.quadraticCurveTo(187, 355, 187, 358)
  ctx.quadraticCurveTo(207, 352, 221, 362)
  ctx.quadraticCurveTo(222, 354, 220, 352)
  ctx.quadraticCurveTo(200, 341, 185, 348)
  ctx.closePath()
  // 側面
  ctx.moveTo(187, 358)
  ctx.quadraticCurveTo(207, 352, 221, 362)
  ctx.quadraticCurveTo(187, 358, 187, 358)
  ctx.closePath()

  ctx.moveTo(200, 388)
  ctx.quadraticCurveTo(197, 390, 202, 398)
  ctx.quadraticCurveTo(216, 390, 235, 400)
  ctx.quadraticCurveTo(237, 395, 233, 390)
  ctx.quadraticCurveTo(215, 380, 200, 388)
  ctx.closePath()
  // 側面
  ctx.moveTo(202, 398)
  ctx.quadraticCurveTo(216, 390, 235, 400)
  ctx.quadraticCurveTo(212, 399, 202, 398)
  ctx.closePath()

  ctx.moveTo(220, 432)
  ctx.quadraticCurveTo(217, 430, 222, 440)
  ctx.quadraticCurveTo(245, 433, 252, 442)
  ctx.quadraticCurveTo(255, 435, 247, 432)
  ctx.quadraticCurveTo(232, 425, 220, 432)
  ctx.closePath()
  // 側面
  ctx.moveTo(222, 440)
  ctx.quadraticCurveTo(245, 433, 252, 442)
  ctx.quadraticCurveTo(238, 442, 222, 440)
  ctx.closePath()

  ctx.moveTo(241, 470)
  ctx.quadraticCurveTo(244, 475, 250, 480)
  ctx.quadraticCurveTo(265, 477, 278, 478)
  ctx.quadraticCurveTo(280, 473, 274, 468)
  ctx.quadraticCurveTo(261, 467, 241, 470)
  ctx.closePath()
  // 側面
  ctx.moveTo(250, 480)
  ctx.quadraticCurveTo(265, 477, 278, 478)
  ctx.quadraticCurveTo(263, 482, 250, 480)
  ctx.closePath()

  ctx.moveTo(275, 508)
  ctx.quadraticCurveTo(274, 513, 283, 518)
  ctx.quadraticCurveTo(300, 520, 310, 507)
  ctx.quadraticCurveTo(305, 500, 303, 502)
  ctx.quadraticCurveTo(290, 512, 275, 508)
  ctx.closePath()
  // 側面
  ctx.moveTo(275, 508)
  ctx.quadraticCurveTo(290, 512, 303, 502)
  ctx.quadraticCurveTo(290, 505, 275, 508)
  ctx.closePath()

  ctx.moveTo(312, 542)
  ctx.quadraticCurveTo(315, 545, 322, 548)
  ctx.quadraticCurveTo(337, 551, 347, 538)
  ctx.quadraticCurveTo(340, 530, 337, 532)
  ctx.quadraticCurveTo(340, 540, 312, 542)
  ctx.closePath()
  // 側面
  ctx.moveTo(312, 542)
  ctx.quadraticCurveTo(340, 540, 337, 532)
  ctx.quadraticCurveTo(340, 532, 312, 542)
  ctx.closePath()

  ctx.moveTo(347, 565)
  ctx.quadraticCurveTo(350, 567, 360, 570)
  ctx.quadraticCurveTo(382, 567, 384, 563)
  ctx.quadraticCurveTo(378, 557, 373, 557)
  ctx.quadraticCurveTo(355, 564, 347, 565)
  ctx.closePath()
  // 側面
  ctx.moveTo(347, 565)
  ctx.quadraticCurveTo(357, 560, 373, 557)
  ctx.quadraticCurveTo(357, 560, 347, 565)
  ctx.closePath()

  ctx.moveTo(390, 586)
  ctx.quadraticCurveTo(390, 588, 407, 593)
  ctx.quadraticCurveTo(425, 584, 430, 581)
  ctx.quadraticCurveTo(418, 572, 415, 577)
  ctx.quadraticCurveTo(391, 590, 388, 586)
  ctx.closePath()
  // 側面
  ctx.moveTo(390, 586)
  ctx.quadraticCurveTo(422, 570, 415, 577)
  ctx.quadraticCurveTo(422, 570, 390, 586)
  ctx.closePath()

  ctx.moveTo(435, 602)
  ctx.quadraticCurveTo(445, 607, 450, 605)
  ctx.quadraticCurveTo(470, 595, 467, 590)
  ctx.quadraticCurveTo(460, 585, 454, 587)
  ctx.quadraticCurveTo(448, 597, 435, 603)
  ctx.closePath()
  // 側面
  ctx.moveTo(435, 602)
  ctx.quadraticCurveTo(448, 597, 454, 587)
  ctx.quadraticCurveTo(440, 595, 435, 602)
  ctx.closePath()

  // 土手左1番
  ctx.moveTo(485, 610) //左下
  ctx.lineTo(500, 611) // 右下
  ctx.quadraticCurveTo(520, 605, 518, 588) //右上
  ctx.quadraticCurveTo(513, 585, 508, 588) // 左上
  ctx.quadraticCurveTo(505, 600, 485, 610) // 左下
  ctx.closePath()

  // 土手左2番
  ctx.moveTo(530, 610) //左下
  ctx.lineTo(545, 608) // 右下
  ctx.quadraticCurveTo(565, 600, 563, 580) //右上
  ctx.quadraticCurveTo(555, 577, 550, 585) // 左上
  ctx.quadraticCurveTo(550, 595, 530, 605) // 左下
  ctx.closePath()

  // 土手左3番
  ctx.moveTo(580, 599) //左下
  ctx.lineTo(598, 592) // 右下
  ctx.quadraticCurveTo(618, 578, 610, 563) //右上
  ctx.quadraticCurveTo(603, 565, 600, 567) // 左上
  ctx.quadraticCurveTo(605, 575, 580, 599) // 左下
  ctx.closePath()

  // 土手左4番
  ctx.moveTo(628, 582) //左下
  ctx.lineTo(642, 575) // 右下
  ctx.quadraticCurveTo(650, 562, 645, 552) //右上
  ctx.quadraticCurveTo(643, 550, 635, 555) // 左上
  ctx.quadraticCurveTo(635, 570, 628, 580) // 左下
  ctx.closePath()

  // 小指芯下1番
  ctx.moveTo(672, 535) //左上
  ctx.quadraticCurveTo(673, 540, 667, 560) //左下
  ctx.quadraticCurveTo(678, 555, 680, 552) //右下
  ctx.quadraticCurveTo(688, 535, 683, 524) // 右上
  ctx.quadraticCurveTo(677, 528, 672, 535) // 右上
  ctx.closePath()

  // 小指芯下2番
  ctx.moveTo(707, 495) //左上
  ctx.quadraticCurveTo(715, 505, 710, 520) //左下
  ctx.quadraticCurveTo(718, 515, 723, 510) //右下
  ctx.quadraticCurveTo(730, 500, 715, 490) // 右上
  ctx.quadraticCurveTo(710, 485, 707, 495) // 左上
  ctx.closePath()

  // 小指芯の逆巻き下から1番目
  ctx.moveTo(710, 490) //左下
  ctx.quadraticCurveTo(728, 498, 744, 483) //右下
  ctx.quadraticCurveTo(752, 473, 747, 473) //右上
  ctx.quadraticCurveTo(725, 485, 715, 483) //左上
  ctx.quadraticCurveTo(708, 484, 710, 490) //左下
  ctx.closePath()

  // 小指芯下3番
  ctx.moveTo(742, 444) // 左上
  ctx.quadraticCurveTo(755, 460, 747, 475) //左下
  ctx.quadraticCurveTo(753, 475, 760, 465) //右下
  ctx.quadraticCurveTo(763, 455, 753, 440) //右上
  ctx.quadraticCurveTo(755, 445, 742, 444) //左上
  ctx.closePath()

  // 小指芯の逆巻き下から2番目
  ctx.moveTo(743, 445) //左下
  ctx.quadraticCurveTo(755, 445, 770, 433) // 右下
  ctx.quadraticCurveTo(780, 415, 777, 415) //右上
  ctx.quadraticCurveTo(770, 425, 745, 435) //左上
  ctx.quadraticCurveTo(743, 445, 743, 445) //左下
  ctx.closePath()

  // 小指芯の逆巻き下から3番目
  ctx.moveTo(762, 403) //左下
  ctx.quadraticCurveTo(785, 395, 785, 378) // 右下
  ctx.quadraticCurveTo(789, 375, 786, 366) // 右上
  ctx.quadraticCurveTo(770, 390, 765, 390) // 左上
  ctx.quadraticCurveTo(760, 398, 762, 403) // 左下
  ctx.closePath()

  // 小指芯の逆巻き下から4番目
  ctx.moveTo(772, 348) //左下
  ctx.quadraticCurveTo(790, 343, 788, 328) // 右下
  ctx.quadraticCurveTo(790, 320, 787, 318) // 右上
  ctx.quadraticCurveTo(773, 343, 770, 338) // 左上
  ctx.quadraticCurveTo(769, 348, 772, 348) // 左下
  ctx.closePath()

  // 小指芯の逆巻き下から5番目
  ctx.moveTo(771, 310) // 左下
  ctx.quadraticCurveTo(785, 297, 785, 280) // 右下
  ctx.quadraticCurveTo(785, 275, 780, 270) // 右上
  ctx.quadraticCurveTo(770, 300, 769, 297) // 左上
  ctx.quadraticCurveTo(767, 305, 770, 310) // 左下
  ctx.closePath()

  // 小指芯の逆巻き下から6番目
  ctx.moveTo(761, 262) //左下
  ctx.quadraticCurveTo(777, 260, 773, 238) //右下
  ctx.quadraticCurveTo(773, 233, 768, 228) //右上
  ctx.quadraticCurveTo(767, 252, 759, 254) //左上
  ctx.quadraticCurveTo(761, 262, 761, 262) //左下
  ctx.closePath()

  // 小指芯の逆巻き下から7番目
  ctx.moveTo(748, 220) //左下
  ctx.quadraticCurveTo(760, 218, 758, 198) // 右下
  ctx.quadraticCurveTo(755, 190, 753, 188) // 右上
  ctx.quadraticCurveTo(746, 212, 745, 212) // 左上
  ctx.quadraticCurveTo(748, 220, 748, 220) // 左上
  ctx.closePath()

  // 小指芯の逆巻き下から8番目
  ctx.moveTo(732, 181) // 左下
  ctx.quadraticCurveTo(742, 173, 743, 165) // 右下
  ctx.quadraticCurveTo(737, 142, 732, 150) // 右上
  ctx.quadraticCurveTo(732, 170, 726, 172) // 左上
  ctx.quadraticCurveTo(734, 185, 732, 181) // 左下
  ctx.closePath()

  // 小指芯の逆巻き下から9番目
  ctx.moveTo(714, 150) // 下右
  ctx.quadraticCurveTo(717, 135, 717, 130) // 上右
  ctx.quadraticCurveTo(717, 117, 707, 113) // 上左
  ctx.quadraticCurveTo(709, 128, 705, 138) // 下左
  ctx.quadraticCurveTo(705, 147, 714, 150) // 下右
  ctx.closePath()

  // 小指芯の逆巻き下から10番目
  ctx.moveTo(685, 122) //下右
  ctx.quadraticCurveTo(695, 110, 688, 95) // 上右
  ctx.quadraticCurveTo(685, 87, 678, 90) // 上左
  ctx.quadraticCurveTo(683, 105, 675, 112) // 下左
  ctx.quadraticCurveTo(677, 120, 685, 122) // 下右
  ctx.closePath()

  // 小指芯の逆巻き下から11番目
  ctx.moveTo(652, 90) //下右
  ctx.quadraticCurveTo(658, 85, 658, 68) //上右
  ctx.quadraticCurveTo(653, 62, 648, 63) //上左
  ctx.quadraticCurveTo(650, 70, 644, 83) //下左
  ctx.quadraticCurveTo(650, 90, 652, 90) //下右
  ctx.closePath()

  // 小指芯の逆巻き下から12番目
  ctx.moveTo(620, 73) // 下右
  ctx.quadraticCurveTo(628, 60, 625, 50) // 上右
  ctx.quadraticCurveTo(622, 45, 615, 46) // 上左
  ctx.quadraticCurveTo(617, 60, 610, 67) // 下左
  ctx.quadraticCurveTo(615, 73, 620, 73) // 下右
  ctx.closePath()

  // 小指芯の逆巻き下から13番目
  ctx.moveTo(587, 60) // 下右
  ctx.quadraticCurveTo(593, 50, 588, 38) // 上右
  ctx.quadraticCurveTo(580, 35, 578, 37) // 上左
  ctx.quadraticCurveTo(583, 45, 578, 57) // 下左
  ctx.quadraticCurveTo(580, 62, 587, 60) // 下右

  // 小指芯の逆巻き下から14番目
  ctx.moveTo(550, 52) // 右下
  ctx.quadraticCurveTo(555, 41, 548, 31) // 右上
  ctx.quadraticCurveTo(543, 28, 538, 31) // 左上
  ctx.quadraticCurveTo(545, 49, 540, 49) // 左下
  ctx.quadraticCurveTo(545, 54, 550, 52) // 右下

  ctx.fill()
  ctx.stroke()
}
