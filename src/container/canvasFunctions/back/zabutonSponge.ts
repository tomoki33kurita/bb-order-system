export const zabutonSponge = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 指カバー 本体
  ctx.beginPath()
  ctx.moveTo(370, 234) // 中央上
  ctx.quadraticCurveTo(356, 242, 351, 262) // 左上
  ctx.quadraticCurveTo(348, 333, 364, 411) // 左下
  ctx.quadraticCurveTo(400, 390, 444, 380) // 右下
  ctx.quadraticCurveTo(415, 296, 390, 240) // 右上＿
  ctx.quadraticCurveTo(385, 233, 370, 234) // 中央上＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // ステッチ
  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  ctx.moveTo(373, 236) // 中央上
  ctx.quadraticCurveTo(357, 243, 353, 264) // 左上
  ctx.quadraticCurveTo(353, 321, 366, 409) // 左下
  ctx.quadraticCurveTo(398, 387, 442, 379) // 右下
  ctx.quadraticCurveTo(392, 251, 392, 251) // 右上
  ctx.quadraticCurveTo(388, 235, 373, 236) // 中央上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
