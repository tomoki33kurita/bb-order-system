// 小指内側
export const littleInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(700, 200)
  ctx.quadraticCurveTo(725, 300, 650, 420)
  ctx.stroke()
}

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(650, 420)
  ctx.quadraticCurveTo(660, 470, 690, 520)
  ctx.stroke()
}

// 小指キリハミ1
export const littEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(780, 160)
  ctx.quadraticCurveTo(840, 370, 700, 515)
  ctx.stroke()
}

// 小指キリハミ2
export const littEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(800, 140)
  ctx.quadraticCurveTo(780, 150, 780, 170)
  ctx.stroke()
}

// 小指外側
export const littleOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(800, 140)
  // ctx.lineTo(750, 500)
  ctx.quadraticCurveTo(900, 360, 750, 500)
  ctx.stroke()
}
