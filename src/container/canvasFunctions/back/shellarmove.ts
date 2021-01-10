export const shellarmove = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(348, 336) // 中指部分の一番右上
  ctx.quadraticCurveTo(340, 332, 329, 335)
  ctx.quadraticCurveTo(285, 353, 304, 366)
  ctx.quadraticCurveTo(307, 389, 307, 389)
  ctx.quadraticCurveTo(220, 400, 224, 448) // 薬指小指＿左
  ctx.quadraticCurveTo(239, 463, 239, 463)
  ctx.quadraticCurveTo(271, 547, 271, 547)
  ctx.quadraticCurveTo(281, 565, 297, 569) // 手口ベルト左横の頂点

  ctx.quadraticCurveTo(280, 507, 319, 441)
  ctx.quadraticCurveTo(335, 420, 362, 417)
  ctx.quadraticCurveTo(348, 336, 348, 336)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
