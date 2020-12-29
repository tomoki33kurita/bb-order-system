// 小指内側
export const littleInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(650, 220)
  ctx.quadraticCurveTo(675, 320, 600, 440)
  ctx.stroke()
}

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(600, 440)
  ctx.quadraticCurveTo(610, 490, 640, 540)
  ctx.stroke()
}

// 小指キリハミ1
export const littEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(730, 180)
  ctx.quadraticCurveTo(790, 390, 650, 535)
  ctx.stroke()
}

// 小指キリハミ2
export const littEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(750, 160)
  ctx.quadraticCurveTo(730, 170, 730, 190)
  ctx.stroke()
}

// 小指外側
export const littleOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(750, 160)
  ctx.quadraticCurveTo(850, 380, 700, 520)
  ctx.stroke()
}
