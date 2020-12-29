// 親指上部左
export const thumbTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(195, 135)
  ctx.quadraticCurveTo(210, 105, 255, 100)
  ctx.stroke()
}

// 親指上部右
export const thumbTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(255, 100)
  ctx.quadraticCurveTo(300, 125, 305, 150)
  ctx.stroke()
}

// 親指外側
export const thumbOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(195, 135)
  // ctx.lineTo(425, 625)
  ctx.quadraticCurveTo(210, 500, 480, 585)
  ctx.stroke()
}

// 親指キリハミ1
export const thumbEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(255, 100)
  ctx.quadraticCurveTo(280, 420, 465, 530)
  ctx.stroke()
}

// 親指キリハミ2
export const thumbEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(465, 530)
  ctx.quadraticCurveTo(505, 565, 495, 580)
  ctx.stroke()
}

// 親指内側1
export const thumbInLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(305, 150)
  // ctx.lineTo(530, 575)
  ctx.quadraticCurveTo(330, 350, 495, 485)
  ctx.stroke()
}

// 親指内側2
export const thumbInLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(495, 485)
  // ctx.lineTo(530, 575)
  ctx.quadraticCurveTo(500, 500, 530, 565)
  ctx.stroke()
}
