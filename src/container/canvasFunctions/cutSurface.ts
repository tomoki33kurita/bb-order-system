export const thumbCutSurface = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 親指芯キリハミ左回り
  ctx.moveTo(221, 120)
  ctx.quadraticCurveTo(257, 460, 411, 540)
  ctx.quadraticCurveTo(427, 550, 465, 595)
  ctx.quadraticCurveTo(477, 597, 473, 595)
  ctx.quadraticCurveTo(433, 545, 409, 530)
  ctx.quadraticCurveTo(265, 455, 228, 123)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const littleCutSurface = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(720, 145)
  ctx.quadraticCurveTo(726, 170, 726, 181)
  ctx.quadraticCurveTo(786, 390, 649, 511)
  ctx.quadraticCurveTo(644, 521, 646, 555)
  ctx.quadraticCurveTo(651, 560, 653, 553)
  ctx.quadraticCurveTo(649, 534, 656, 515)
  ctx.quadraticCurveTo(793, 389, 734, 180)
  ctx.quadraticCurveTo(731, 161, 730, 162)
  ctx.quadraticCurveTo(720, 145, 720, 145)

  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
