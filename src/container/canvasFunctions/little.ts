// 小指マチ
export const littleMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(723, 154)
  ctx.quadraticCurveTo(710, 170, 715, 190)
  ctx.quadraticCurveTo(780, 370, 655, 510)
  ctx.quadraticCurveTo(645, 520, 650, 557)
  ctx.quadraticCurveTo(858, 405, 723, 154)

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
