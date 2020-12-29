// ウェブ下
export const underWebTopLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(305, 200)
  ctx.lineTo(500, 145)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V右
export const underWebLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(305, 200)
  ctx.lineTo(318, 240)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V左
export const underWebLeftLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(318, 240)
  ctx.lineTo(280, 200)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V左
export const underWebRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(500, 145)
  ctx.lineTo(515, 195)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V右
export const underWebRightRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(530, 140)
  ctx.lineTo(515, 195)
  ctx.closePath()
  ctx.stroke()
}
