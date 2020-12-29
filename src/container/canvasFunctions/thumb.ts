// 親指上部左
export const thumbTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(165, 155)
  ctx.quadraticCurveTo(180, 125, 225, 120)
  ctx.stroke()
}

// 親指上部右
export const thumbTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(225, 120)
  ctx.quadraticCurveTo(270, 145, 275, 170)
  ctx.stroke()
}

// 親指外側
export const thumbOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(165, 155)
  ctx.quadraticCurveTo(180, 520, 450, 605)
  ctx.stroke()
}

// 親指キリハミ1
export const thumbEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(225, 120)
  ctx.quadraticCurveTo(250, 440, 435, 550)
  ctx.stroke()
}

// 親指キリハミ2
export const thumbEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(435, 550)
  ctx.quadraticCurveTo(475, 585, 465, 600)
  ctx.stroke()
}

// 親指内側1
export const thumbInLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(275, 170)
  ctx.quadraticCurveTo(300, 370, 465, 505)
  ctx.stroke()
}

// 親指内側2
export const thumbInLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(465, 505)
  ctx.quadraticCurveTo(470, 520, 500, 585)
  ctx.stroke()
}
