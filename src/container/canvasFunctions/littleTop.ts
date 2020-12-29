// 小指先端左側
export const littleTopLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 10)
  ctx.quadraticCurveTo(520, 50, 560, 120)
  ctx.stroke()
}

// 小指先端外側
export const littleTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 10)
  ctx.quadraticCurveTo(680, 20, 780, 140)
  ctx.stroke()
}

// 小指先端内側
export const littleTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 120)
  ctx.quadraticCurveTo(630, 150, 680, 200)
  ctx.stroke()
}
