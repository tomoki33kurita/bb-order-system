// 小指内側
export const littleInLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(680, 220)
  ctx.quadraticCurveTo(705, 320, 630, 440)
  ctx.stroke()
}

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(630, 440)
  ctx.quadraticCurveTo(640, 490, 670, 540)
  ctx.stroke()
}

// 小指キリハミ1
export const littEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(760, 180)
  ctx.quadraticCurveTo(820, 390, 680, 535)
  ctx.stroke()
}

// 小指キリハミ2
export const littEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(780, 160)
  ctx.quadraticCurveTo(760, 170, 760, 190)
  ctx.stroke()
}

// 小指外側
export const littleOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.moveTo(780, 160)
  ctx.quadraticCurveTo(880, 380, 730, 520)
  ctx.stroke()
}
