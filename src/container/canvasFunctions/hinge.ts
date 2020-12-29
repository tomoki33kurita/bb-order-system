// 土手外側
export const hingeUnderLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(465, 600)
  ctx.lineTo(700, 520)
  ctx.closePath()
  ctx.stroke()
}
