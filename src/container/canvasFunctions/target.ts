export const targetArrange = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.fillStyle = color
  ctx.beginPath()
  // 親指芯＿ターゲット
  ctx.moveTo(235, 130)
  ctx.quadraticCurveTo(265, 490, 480, 562)
  ctx.lineTo(462, 510)
  ctx.quadraticCurveTo(310, 400, 273, 180)
  ctx.quadraticCurveTo(250, 140, 235, 130)

  // 小指芯＿ターゲット
  ctx.moveTo(530, 45)
  ctx.quadraticCurveTo(640, 55, 727, 158)
  ctx.quadraticCurveTo(728, 170, 728, 180)
  ctx.quadraticCurveTo(580, 70, 535, 75)
  ctx.quadraticCurveTo(510, 60, 518, 52)

  // 小指マチ部分
  ctx.moveTo(725, 150)
  ctx.quadraticCurveTo(730, 170, 730, 180)
  ctx.quadraticCurveTo(790, 390, 655, 510)
  ctx.quadraticCurveTo(645, 520, 650, 557)
  ctx.quadraticCurveTo(865, 400, 725, 150)

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
