export const webTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(526, 41) // 左上
  ctx.quadraticCurveTo(505, 54, 505, 54) // 左下
  ctx.quadraticCurveTo(625, 120, 749, 232) // 右下
  ctx.quadraticCurveTo(769, 220, 769, 220) // 右上
  ctx.quadraticCurveTo(658, 113, 526, 41) // 左上＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(506, 56) // 左上の広がった先端
  ctx.quadraticCurveTo(525, 76, 525, 76) //左上の広がる前
  ctx.quadraticCurveTo(474, 99, 456, 131) // 左下
  ctx.quadraticCurveTo(638, 268, 638, 268) // 右下
  ctx.quadraticCurveTo(661, 228, 706, 216) // 右上の広がる前
  ctx.quadraticCurveTo(719, 209, 749, 234) // 右上の広がった先端
  ctx.quadraticCurveTo(619, 120, 506, 56) // 開始地点の左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
