// ウェブ下
export const underWebTopLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(335, 180)
  ctx.lineTo(530, 125)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V右
export const underWebLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(335, 180)
  ctx.lineTo(348, 220)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V左
export const underWebLeftLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(348, 220)
  ctx.lineTo(310, 180)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V左
export const underWebRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(530, 125)
  ctx.lineTo(545, 175)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V右
export const underWebRightRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(560, 120)
  ctx.lineTo(545, 175)
  ctx.closePath()
  ctx.stroke()
}
