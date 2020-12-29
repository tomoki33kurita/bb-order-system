// 土手外側
export const hingeUnderLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(470, 600)
  ctx.quadraticCurveTo(575, 590, 663, 553)
  // ヘリ革
  ctx.moveTo(465, 610)
  ctx.quadraticCurveTo(575, 600, 680, 555)
  ctx.stroke()
}
