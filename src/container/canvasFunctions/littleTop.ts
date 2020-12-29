// 小指先端左側
export const littleTopLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(530, 30)
  ctx.quadraticCurveTo(490, 70, 530, 140)
  ctx.stroke()
}

// 小指先端外側
export const littleTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(530, 30)
  ctx.quadraticCurveTo(650, 40, 750, 160)
  ctx.stroke()
}

// 小指先端内側
export const littleTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(530, 140)
  ctx.quadraticCurveTo(600, 170, 650, 220)
  ctx.stroke()
}
