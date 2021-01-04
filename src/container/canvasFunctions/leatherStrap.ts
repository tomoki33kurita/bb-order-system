//革紐
export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string, sideColor: string): void => {
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 土手三本紐
  ctx.moveTo(485, 510)
  ctx.lineTo(510, 570)
  ctx.moveTo(533, 485)
  ctx.lineTo(555, 550)
  ctx.moveTo(580, 470)
  ctx.lineTo(600, 530)

  // 小指先端ウェブ横
  ctx.moveTo(504, 60)
  ctx.quadraticCurveTo(505, 53, 520, 68)
  ctx.moveTo(507, 90)
  ctx.quadraticCurveTo(515, 93, 530, 98)

  // 垂直
  ctx.moveTo(520, 63)
  ctx.quadraticCurveTo(515, 70, 526, 98)
  ctx.moveTo(522, 123)
  ctx.quadraticCurveTo(527, 110, 532, 125)
  // ウェブ下捕球面＿右
  ctx.moveTo(520, 160)
  ctx.quadraticCurveTo(530, 145, 540, 150)
  ctx.moveTo(515, 190)
  ctx.quadraticCurveTo(520, 178, 530, 180)

  // 小指芯先端内側
  ctx.moveTo(545, 155)
  ctx.quadraticCurveTo(552, 153, 565, 163)
  ctx.moveTo(587, 175)
  ctx.quadraticCurveTo(595, 177, 607, 190)
  ctx.moveTo(624, 203)
  ctx.quadraticCurveTo(637, 210, 643, 222)

  // 小指芯先端内側垂直
  ctx.moveTo(685, 165)
  ctx.quadraticCurveTo(664, 183, 660, 200)

  // 小指芯内_土手側
  ctx.moveTo(650, 275)
  ctx.quadraticCurveTo(644, 295, 647, 315)
  ctx.moveTo(638, 350)
  ctx.quadraticCurveTo(622, 370, 620, 390)

  // ウェブ先端(左から昇順)
  ctx.moveTo(252, 72)
  ctx.lineTo(262, 110)

  ctx.moveTo(278, 65)
  ctx.lineTo(275, 105)
  ctx.moveTo(298, 60)
  ctx.lineTo(295, 100)
  ctx.moveTo(318, 55)
  ctx.lineTo(315, 95)
  ctx.moveTo(338, 50)
  ctx.lineTo(335, 90)
  ctx.moveTo(358, 44)
  ctx.lineTo(355, 84)
  ctx.moveTo(378, 39)
  ctx.lineTo(375, 79)
  ctx.moveTo(398, 33)
  ctx.lineTo(395, 74)
  ctx.moveTo(418, 29)
  ctx.lineTo(415, 69)
  ctx.moveTo(438, 23)
  ctx.lineTo(435, 64)
  ctx.moveTo(458, 18)
  ctx.lineTo(455, 58)
  ctx.moveTo(478, 12)
  ctx.lineTo(475, 50)
  ctx.moveTo(478, 12)
  ctx.lineTo(485, 47)

  // ウェブと捕球面の間
  ctx.moveTo(350, 178)
  ctx.lineTo(353, 187)
  ctx.moveTo(400, 165)
  ctx.lineTo(403, 173)
  ctx.moveTo(450, 150)
  ctx.lineTo(453, 158)

  // ウェブと親指芯_外側
  ctx.moveTo(190, 127)
  ctx.quadraticCurveTo(190, 90, 239, 90)
  // ウェブと親指芯_真ん中
  ctx.moveTo(205, 125)
  ctx.quadraticCurveTo(205, 95, 240, 95)
  // ウェブと親指芯_内側
  ctx.moveTo(220, 121)
  ctx.quadraticCurveTo(220, 110, 240, 100)

  ctx.moveTo(278, 130)
  ctx.quadraticCurveTo(253, 140, 253, 140)
  ctx.moveTo(285, 155)
  ctx.quadraticCurveTo(270, 162, 270, 162)
  ctx.moveTo(294, 182)
  ctx.quadraticCurveTo(280, 187, 280, 187)

  // ウェブと小指芯先端_外側
  ctx.moveTo(500, 20)
  ctx.quadraticCurveTo(540, 5, 540, 33)
  // ウェブと小指芯先端_中央
  ctx.moveTo(500, 25)
  ctx.quadraticCurveTo(525, 22, 525, 33)
  // ウェブと小指芯先端_内側
  ctx.moveTo(505, 25)
  ctx.quadraticCurveTo(500, 40, 520, 35)
  ctx.moveTo(487, 73)
  ctx.quadraticCurveTo(505, 69, 505, 69)
  ctx.moveTo(493, 98)
  ctx.quadraticCurveTo(512, 95, 512, 95)
  ctx.moveTo(498, 123)
  ctx.quadraticCurveTo(518, 118, 518, 118)

  // ウェブ下捕球面と親指下捕球面
  ctx.moveTo(298, 222)
  ctx.quadraticCurveTo(303, 207, 309, 210)
  ctx.moveTo(310, 252)
  ctx.quadraticCurveTo(303, 240, 315, 235)

  // ウェブ下捕球面と小指先端下捕球面
  ctx.moveTo(502, 155)
  ctx.quadraticCurveTo(517, 150, 526, 155)

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

  // 小指芯先端周り
  ctx.moveTo(530, 30)
  ctx.lineTo(537, 55)
  ctx.moveTo(565, 36)
  ctx.lineTo(567, 67)
  ctx.moveTo(600, 45)
  ctx.lineTo(599, 75)
  ctx.moveTo(631, 61)
  ctx.lineTo(630, 90)
  ctx.moveTo(668, 83)
  ctx.lineTo(658, 108)
  ctx.moveTo(703, 108)
  ctx.lineTo(686, 130)
  ctx.moveTo(730, 138)
  ctx.lineTo(717, 157)

  // 小指芯＿土手周り
  ctx.moveTo(752, 167)
  ctx.lineTo(740, 185)
  ctx.moveTo(764, 198)
  ctx.lineTo(751, 218)
  ctx.moveTo(777, 238)
  ctx.lineTo(763, 262)
  ctx.moveTo(787, 280)
  ctx.lineTo(765, 312)
  ctx.moveTo(787, 330)
  ctx.lineTo(760, 363)
  ctx.moveTo(783, 389)
  ctx.lineTo(755, 407)
  ctx.moveTo(755, 402)
  ctx.lineTo(770, 438)
  ctx.moveTo(735, 448)
  ctx.lineTo(770, 435)
  ctx.moveTo(735, 444)
  ctx.lineTo(750, 475)
  ctx.moveTo(705, 490)
  ctx.lineTo(720, 520)
  ctx.moveTo(668, 525)
  ctx.lineTo(680, 555)
  ctx.moveTo(625, 545)
  ctx.lineTo(615, 585)
  ctx.moveTo(580, 565)
  ctx.lineTo(568, 600)
  ctx.moveTo(540, 570)
  ctx.lineTo(530, 605)
  ctx.moveTo(500, 575)
  ctx.lineTo(490, 610)

  ctx.fill()
  ctx.stroke()
}
