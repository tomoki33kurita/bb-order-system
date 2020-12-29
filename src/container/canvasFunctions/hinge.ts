// 土手外側
export const hingeUnderLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(450, 605)
  ctx.lineTo(700, 520)
  ctx.closePath()
  ctx.stroke()
}
