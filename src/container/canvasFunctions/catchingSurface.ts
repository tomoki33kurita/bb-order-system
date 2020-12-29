// ウェブ下
export const underWebTopLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(355, 180)
  ctx.lineTo(550, 125)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V右
export const underWebLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(355, 180)
  ctx.lineTo(368, 220)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V左
export const underWebLeftLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(368, 220)
  ctx.lineTo(330, 180)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V左
export const underWebRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(550, 125)
  ctx.lineTo(565, 175)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V右
export const underWebRightRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(580, 120)
  ctx.lineTo(565, 175)
  ctx.closePath()
  ctx.stroke()
}
