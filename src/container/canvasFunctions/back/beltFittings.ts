export const beltFittings = (ctx: CanvasRenderingContext2D, color: string): void => {
  // パッキン自体
  ctx.fillStyle = '#383838'
  ctx.strokeStyle = 'black'
  ctx.moveTo(398, 558)
  ctx.lineTo(412, 563)
  ctx.lineTo(412, 595)
  ctx.lineTo(394, 597)
  ctx.lineTo(451, 602) // 下線
  ctx.lineTo(461, 584)
  ctx.lineTo(450, 559)
  ctx.lineTo(399, 554)
  ctx.lineTo(398, 558)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
