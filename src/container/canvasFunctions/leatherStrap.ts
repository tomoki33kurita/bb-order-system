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
