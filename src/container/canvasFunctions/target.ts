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
  // ctx.moveTo(235, 130)
  // ctx.quadraticCurveTo(265, 490, 480, 562)

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
