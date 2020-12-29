// 小指先端左側
export const littleTopLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 30)
  ctx.quadraticCurveTo(520, 70, 560, 140)
  ctx.stroke()
}

// 小指先端外側
export const littleTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 30)
  ctx.quadraticCurveTo(680, 40, 780, 160)
  ctx.stroke()
}

// 小指先端内側
export const littleTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 140)
  ctx.quadraticCurveTo(630, 170, 680, 220)
  ctx.stroke()
}
