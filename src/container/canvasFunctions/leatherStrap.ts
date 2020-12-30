//革紐
export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.beginPath()
  ctx.lineWidth = 10
  ctx.strokeStyle = color
  // 土手三本紐
  ctx.moveTo(485, 510)
  ctx.lineTo(510, 570)
  ctx.moveTo(533, 485)
  ctx.lineTo(555, 550)
  ctx.moveTo(580, 470)
  ctx.lineTo(600, 530)

  // 小指芯先端内側
  ctx.moveTo(545, 155)
  ctx.quadraticCurveTo(552, 153, 565, 163)
  ctx.moveTo(587, 175)
  ctx.quadraticCurveTo(595, 177, 607, 190)
  ctx.moveTo(624, 203)
  ctx.quadraticCurveTo(637, 210, 643, 222)

  // 小指芯先端垂直
  ctx.moveTo(685, 165)
  ctx.quadraticCurveTo(664, 183, 660, 200)

  // 小指芯内_土手側
  ctx.moveTo(650, 275)
  ctx.quadraticCurveTo(644, 295, 647, 315)
  ctx.moveTo(638, 350)
  ctx.quadraticCurveTo(622, 370, 620, 390)

  // ウェブ先端(左から昇順)
  ctx.moveTo(265, 70)
  ctx.lineTo(275, 105)
  ctx.moveTo(278, 65)
  ctx.lineTo(275, 105)
  ctx.moveTo(298, 60)
  ctx.lineTo(295, 100)
  ctx.moveTo(318, 55)
  ctx.lineTo(315, 95)
  ctx.moveTo(338, 50)
  ctx.lineTo(335, 90)
  ctx.moveTo(358, 45)
  ctx.lineTo(355, 85)
  ctx.moveTo(378, 40)
  ctx.lineTo(375, 80)
  ctx.moveTo(398, 35)
  ctx.lineTo(395, 75)
  ctx.moveTo(418, 30)
  ctx.lineTo(415, 70)
  ctx.moveTo(438, 25)
  ctx.lineTo(435, 65)
  ctx.moveTo(458, 20)
  ctx.lineTo(455, 60)
  ctx.moveTo(478, 15)
  ctx.lineTo(475, 53)
  ctx.moveTo(478, 15)
  ctx.lineTo(485, 50)

  // ウェブと捕球面の間
  ctx.moveTo(346, 176)
  ctx.lineTo(347, 187)
  ctx.moveTo(397, 162)
  ctx.lineTo(398, 173)
  ctx.moveTo(448, 148)
  ctx.lineTo(450, 160)

  // ウェブと親指芯
  ctx.moveTo(205, 125)
  ctx.quadraticCurveTo(220, 93, 254, 95)
  ctx.moveTo(289, 120)
  ctx.quadraticCurveTo(260, 120, 242, 130)
  ctx.moveTo(295, 140)
  ctx.quadraticCurveTo(270, 142, 260, 150)
  ctx.moveTo(303, 167)
  ctx.quadraticCurveTo(290, 168, 277, 175)

  // ウェブと小指芯先端
  ctx.moveTo(490, 25)
  ctx.quadraticCurveTo(525, 30, 525, 40)
  ctx.moveTo(475, 70)
  ctx.quadraticCurveTo(490, 65, 508, 65)
  ctx.moveTo(482, 95)
  ctx.quadraticCurveTo(495, 85, 508, 87)
  ctx.moveTo(487, 120)
  ctx.quadraticCurveTo(505, 107, 515, 110)

  // ウェブ下捕球面と親指下捕球面
  ctx.moveTo(298, 222)
  ctx.quadraticCurveTo(303, 207, 309, 210)

  // ウェブ下捕球面と小指先端下捕球面
  ctx.moveTo(502, 155)
  ctx.quadraticCurveTo(517, 150, 526, 155)

  // 親指芯周り
  ctx.moveTo(165, 155)
  ctx.quadraticCurveTo(180, 154, 195, 160)
  ctx.moveTo(166, 195)
  ctx.quadraticCurveTo(180, 192, 196, 200)
  ctx.moveTo(172, 235)
  ctx.quadraticCurveTo(190, 235, 202, 240)
  ctx.moveTo(178, 275)
  ctx.quadraticCurveTo(195, 281, 207, 280)
  ctx.moveTo(186, 310)
  ctx.quadraticCurveTo(200, 315, 218, 315)
  ctx.moveTo(197, 350)
  ctx.lineTo(227, 355)
  ctx.moveTo(216, 390)
  ctx.lineTo(246, 395)
  ctx.moveTo(235, 430)
  ctx.lineTo(272, 435)
  ctx.moveTo(261, 470)
  ctx.lineTo(301, 473)
  ctx.moveTo(290, 505)
  ctx.lineTo(330, 507)
  ctx.moveTo(320, 535)
  ctx.lineTo(360, 535)
  ctx.moveTo(353, 562)
  ctx.lineTo(388, 560)
  ctx.moveTo(394, 585)
  ctx.lineTo(429, 575)
  ctx.moveTo(450, 605)
  ctx.lineTo(469, 585)

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

  ctx.stroke()
}
