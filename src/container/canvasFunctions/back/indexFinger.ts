export const indexFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(376, 193) // 右上
  ctx.quadraticCurveTo(348, 206, 331, 224) // 左上
  ctx.quadraticCurveTo(340, 320, 368, 433) // 左下
  ctx.quadraticCurveTo(380, 443, 407, 433) // 中央下
  ctx.quadraticCurveTo(448, 410, 450, 372) // 右下
  ctx.quadraticCurveTo(377, 193, 377, 193) // 右上＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
