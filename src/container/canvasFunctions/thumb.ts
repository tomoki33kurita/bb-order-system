// 親指上部左
export const thumbTopOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(215, 135)
  // ctx.lineTo(275, 100)
  ctx.quadraticCurveTo(230, 105, 275, 100)
  ctx.stroke()
}

// 親指上部右
export const thumbTopInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(275, 100)
  // ctx.lineTo(325, 150)
  ctx.quadraticCurveTo(320, 125, 325, 150)
  ctx.stroke()
}

// 親指外側
export const thumbOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(215, 135)
  // ctx.lineTo(425, 625)
  ctx.quadraticCurveTo(230, 500, 500, 585)
  ctx.stroke()
}

// 親指キリハミ1
export const thumbEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(275, 100)
  ctx.quadraticCurveTo(300, 420, 485, 530)
  ctx.stroke()
}

// 親指キリハミ2
export const thumbEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(485, 530)
  ctx.quadraticCurveTo(525, 565, 515, 575)
  ctx.stroke()
}

// 親指内側1
export const thumbInLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(325, 150)
  // ctx.lineTo(530, 575)
  ctx.quadraticCurveTo(350, 350, 520, 480)
  ctx.stroke()
}

// 親指内側2
export const thumbInLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(520, 480)
  // ctx.lineTo(530, 575)
  ctx.quadraticCurveTo(520, 500, 550, 565)
  ctx.stroke()
}
