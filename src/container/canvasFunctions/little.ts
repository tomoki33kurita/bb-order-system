// 小指内側
export const littleInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(680, 200)
  ctx.quadraticCurveTo(705, 300, 630, 420)
  ctx.stroke()
}

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(630, 420)
  ctx.quadraticCurveTo(640, 470, 670, 520)
  ctx.stroke()
}

// 小指キリハミ1
export const littEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(760, 160)
  ctx.quadraticCurveTo(820, 370, 680, 515)
  ctx.stroke()
}

// 小指キリハミ2
export const littEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(780, 140)
  ctx.quadraticCurveTo(760, 150, 760, 170)
  ctx.stroke()
}

// 小指外側
export const littleOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(780, 140)
  // ctx.lineTo(750, 500)
  ctx.quadraticCurveTo(880, 360, 730, 500)
  ctx.stroke()
}
