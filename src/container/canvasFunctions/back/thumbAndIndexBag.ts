export const thumbAndIndexBag = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(404, 96) // 人差し指先端
  ctx.lineTo(351, 142)
  ctx.lineTo(343, 213)
  ctx.lineTo(377, 192)
  ctx.lineTo(453, 372)
  ctx.lineTo(391, 443)
  ctx.lineTo(368, 435)
  ctx.lineTo(364, 421)
  ctx.lineTo(324, 441)
  ctx.lineTo(312, 471)
  ctx.lineTo(295, 517)
  ctx.lineTo(300, 565)
  ctx.lineTo(329, 606)
  ctx.lineTo(457, 607)
  ctx.lineTo(526, 587)
  ctx.lineTo(540, 565)
  ctx.lineTo(631, 520)
  ctx.lineTo(745, 354)
  ctx.lineTo(753, 302)
  ctx.lineTo(723, 297)
  ctx.lineTo(565, 365)
  ctx.lineTo(465, 329)
  ctx.lineTo(417, 263)
  ctx.lineTo(395, 148)
  ctx.lineTo(404, 97)
  ctx.stroke()
  ctx.closePath()
}
