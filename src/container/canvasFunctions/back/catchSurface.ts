export const catchSurFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(463, 142) // 左上
  ctx.quadraticCurveTo(442, 162, 439, 193) // 左下
  ctx.quadraticCurveTo(444, 217, 464, 244) // 左と中央の中間
  ctx.quadraticCurveTo(482, 269, 506, 285) // 中央と右の中間
  ctx.quadraticCurveTo(541, 315, 590, 314) // 右下
  ctx.quadraticCurveTo(600, 285, 626, 263) //
  ctx.quadraticCurveTo(463, 142, 463, 142)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
