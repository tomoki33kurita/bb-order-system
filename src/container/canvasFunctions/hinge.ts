// 土手外側
export const hingeUnderLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(500, 585)
  ctx.lineTo(750, 500)
  ctx.closePath()
  ctx.stroke()
}
