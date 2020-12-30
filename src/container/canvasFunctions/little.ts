// 小指内側
// export const littleInLine = (ctx: CanvasRenderingContext2D): void => {
//   ctx.beginPath()
//   ctx.moveTo(650, 220)
//   ctx.quadraticCurveTo(675, 320, 600, 440)
//   ctx.stroke()
// }

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(600, 440)
  ctx.quadraticCurveTo(610, 490, 648, 557)
  ctx.stroke()
}

// 小指キリハミ1
export const littEdgeLine1 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(743, 151)
  ctx.quadraticCurveTo(730, 170, 730, 180)
  ctx.stroke()
}

// 小指キリハミ2
export const littEdgeLine2 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(730, 180)
  ctx.quadraticCurveTo(790, 390, 655, 510)
  ctx.stroke()
}

// 小指キリハミ3
export const littEdgeLine3 = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(655, 510)
  ctx.quadraticCurveTo(645, 520, 650, 557)
  ctx.stroke()
}

// 小指外側
export const littleOutLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(750, 160)
  ctx.quadraticCurveTo(860, 400, 680, 555)
  ctx.moveTo(740, 160)
  ctx.quadraticCurveTo(860, 400, 663, 553)
  ctx.stroke()
}
