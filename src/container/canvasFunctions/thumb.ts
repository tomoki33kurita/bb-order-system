// 親指上部左
export const thumbTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(195, 155)
  ctx.quadraticCurveTo(210, 125, 255, 120)
  ctx.stroke()
}

// 親指上部右
export const thumbTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(255, 120)
  ctx.quadraticCurveTo(300, 145, 305, 170)
  ctx.stroke()
}

// 親指外側
export const thumbOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(195, 155)
  ctx.quadraticCurveTo(210, 520, 480, 605)
  ctx.stroke()
}

// 親指キリハミ1
export const thumbEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(255, 120)
  ctx.quadraticCurveTo(280, 440, 465, 550)
  ctx.stroke()
}

// 親指キリハミ2
export const thumbEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(465, 550)
  ctx.quadraticCurveTo(505, 585, 495, 600)
  ctx.stroke()
}

// 親指内側1
export const thumbInLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(305, 170)
  ctx.quadraticCurveTo(330, 370, 495, 505)
  ctx.stroke()
}

// 親指内側2
export const thumbInLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(495, 505)
  ctx.quadraticCurveTo(500, 520, 530, 585)
  ctx.stroke()
}
