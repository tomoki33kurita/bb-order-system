// 小指マチ
export const littleMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(725, 150)
  ctx.quadraticCurveTo(730, 170, 730, 180)
  ctx.quadraticCurveTo(790, 390, 655, 510)
  ctx.quadraticCurveTo(645, 520, 650, 557)
  ctx.quadraticCurveTo(865, 400, 725, 150)

  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// 小指内側_土手横
export const littleInLineBottom = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(600, 440)
  ctx.quadraticCurveTo(610, 490, 648, 557)
  ctx.stroke()
}
