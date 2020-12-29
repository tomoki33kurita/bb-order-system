// 小指先端左側
export const littleTopLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(580, 10)
  // ctx.lineTo(580, 120)
  ctx.quadraticCurveTo(540, 50, 580, 120)
  ctx.stroke()
}

// 小指先端外側
export const littleTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(580, 10)
  // ctx.lineTo(800, 150)
  ctx.quadraticCurveTo(700, 20, 800, 140)
  ctx.stroke()
}

// 小指先端内側
export const littleTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(580, 120)
  // ctx.lineTo(700, 200)
  ctx.quadraticCurveTo(650, 150, 700, 200)
  ctx.stroke()
}
