export const indexFiner = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(376, 193)
  ctx.lineTo(331, 224)
  ctx.lineTo(368, 433)
  ctx.lineTo(389, 442)
  ctx.lineTo(450, 372)
  ctx.lineTo(377, 193)
  ctx.stroke()
  ctx.closePath()
}
