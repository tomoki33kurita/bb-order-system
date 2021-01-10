export const RingAndLittleBag = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(264, 204) // 中指小指先端
  ctx.quadraticCurveTo(235, 232, 222, 287)
  ctx.quadraticCurveTo(203, 364, 220, 448) // 一番左下
  ctx.quadraticCurveTo(231, 457, 231, 457) // 一番下
  ctx.quadraticCurveTo(218, 400, 306, 388)
  ctx.quadraticCurveTo(287, 293, 294, 218)
  ctx.quadraticCurveTo(288, 190, 264, 204)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
