export const middleBag = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(334, 144) // 中指先端
  ctx.quadraticCurveTo(325, 143, 318, 151)
  ctx.quadraticCurveTo(296, 174, 294, 208)
  ctx.quadraticCurveTo(285, 278, 294, 359)
  ctx.quadraticCurveTo(304, 368, 304, 368) // 中指袋一番左下(右方向へのカーブ前)

  ctx.quadraticCurveTo(277, 347, 329, 332) // 右カーブ先の頂点
  ctx.quadraticCurveTo(340, 328, 349, 333)
  ctx.quadraticCurveTo(330, 225, 332, 224)
  ctx.quadraticCurveTo(339, 211, 343, 213)
  ctx.quadraticCurveTo(346, 151, 346, 151)
  ctx.quadraticCurveTo(334, 144, 334, 144)
  ctx.stroke()
  ctx.closePath()
}
