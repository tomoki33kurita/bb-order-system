//革紐
export const leatherStrap = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 10
  // 土手三本紐
  ctx.moveTo(485, 510)
  ctx.lineTo(510, 570)
  ctx.moveTo(533, 485)
  ctx.lineTo(555, 550)
  ctx.moveTo(580, 470)
  ctx.lineTo(600, 530)

  // 小指芯先端内側
  ctx.moveTo(550, 155)
  ctx.lineTo(565, 163)
  ctx.moveTo(587, 175)
  ctx.lineTo(607, 190)
  ctx.moveTo(627, 206)
  ctx.lineTo(647, 221)

  // 小指芯先端垂直
  ctx.moveTo(685, 165)
  ctx.lineTo(660, 200)

  // 小指芯内_土手側
  ctx.moveTo(650, 275)
  ctx.lineTo(647, 315)
  ctx.moveTo(638, 350)
  ctx.lineTo(620, 390)

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
  ctx.lineTo(475, 55)
  ctx.moveTo(478, 15)
  ctx.lineTo(485, 50)

  // ウェブと捕球面の間
  ctx.moveTo(345, 175)
  ctx.lineTo(350, 190)
  ctx.moveTo(395, 160)
  ctx.lineTo(400, 175)
  ctx.moveTo(445, 145)
  ctx.lineTo(450, 160)

  // ウェブと親指芯
  ctx.moveTo(205, 125)
  ctx.quadraticCurveTo(220, 90, 255, 90)
  ctx.moveTo(290, 120)
  ctx.lineTo(245, 130)
  ctx.moveTo(295, 140)
  ctx.lineTo(265, 150)
  ctx.moveTo(300, 170)
  ctx.lineTo(280, 175)

  // ウェブと小指芯先端
  ctx.moveTo(490, 25)
  ctx.quadraticCurveTo(525, 30, 525, 40)
  ctx.moveTo(475, 70)
  ctx.lineTo(520, 60)
  ctx.moveTo(480, 95)
  ctx.lineTo(520, 87)
  ctx.moveTo(490, 120)
  ctx.lineTo(520, 110)

  // ウェブ下捕球面と親指下捕球面
  ctx.moveTo(295, 220)
  ctx.lineTo(310, 210)

  // ウェブ下捕球面と小指先端下捕球面
  ctx.moveTo(500, 155)
  ctx.lineTo(525, 158)

  // 親指芯周り
  ctx.moveTo(165, 155)
  ctx.lineTo(195, 160)
  ctx.moveTo(166, 195)
  ctx.lineTo(196, 200)
  ctx.moveTo(172, 235)
  ctx.lineTo(202, 240)
  ctx.moveTo(180, 275)
  ctx.lineTo(210, 280)
  ctx.moveTo(186, 310)
  ctx.lineTo(218, 315)
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
  ctx.lineTo(429, 580)
  ctx.stroke()
}
