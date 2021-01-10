export const catchFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(460, 140) // 中指先端
  ctx.lineTo(439, 193)
  ctx.lineTo(464, 244)
  ctx.lineTo(506, 285)
  ctx.lineTo(590, 314)
  ctx.lineTo(626, 263)
  ctx.lineTo(461, 141)
  ctx.stroke()
  ctx.closePath()
}
