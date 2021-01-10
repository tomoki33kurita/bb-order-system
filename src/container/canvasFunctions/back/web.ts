export const webTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(526, 41)
  ctx.quadraticCurveTo(505, 54, 505, 54)
  ctx.quadraticCurveTo(749, 232, 749, 232)
  ctx.quadraticCurveTo(769, 220, 769, 220)
  ctx.quadraticCurveTo(526, 41, 526, 41)
  ctx.stroke()
  ctx.closePath()
}

export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(506, 56)
  ctx.quadraticCurveTo(525, 76, 525, 76)
  ctx.quadraticCurveTo(456, 131, 456, 131)
  ctx.quadraticCurveTo(638, 268, 638, 268)
  ctx.quadraticCurveTo(706, 216, 706, 216)
  ctx.quadraticCurveTo(749, 234, 749, 234)
  ctx.quadraticCurveTo(506, 56, 506, 56)
  ctx.stroke()
  ctx.closePath()
}
