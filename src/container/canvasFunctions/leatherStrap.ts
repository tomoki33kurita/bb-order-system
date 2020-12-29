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

  // ctx.quadraticCurveTo(470, 520, 500, 588)
  ctx.stroke()
}
