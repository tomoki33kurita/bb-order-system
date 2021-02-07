export const fingerBase = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#red'
  ctx.fillStyle = color

  // 人差し指右上始点(ウェブの左)
  ctx.beginPath()
  ctx.moveTo(467, 53) // 人差し指先端
  ctx.quadraticCurveTo(345, 85, 273, 178) //
  ctx.quadraticCurveTo(213, 270, 211, 371) //
  ctx.quadraticCurveTo(207, 460, 259, 522) //
  ctx.quadraticCurveTo(284, 563, 284, 563) //
  ctx.quadraticCurveTo(306, 576, 306, 576) //
  ctx.quadraticCurveTo(332, 608, 332, 608) //
  ctx.quadraticCurveTo(435, 620, 527, 590) //
  ctx.quadraticCurveTo(538, 572, 537, 571) //
  ctx.quadraticCurveTo(610, 530, 623, 513) //
  ctx.quadraticCurveTo(648, 489, 667, 464) //
  ctx.quadraticCurveTo(730, 400, 767, 306) //
  ctx.quadraticCurveTo(773, 273, 763, 268) //
  ctx.quadraticCurveTo(740, 255, 695, 287) //
  ctx.quadraticCurveTo(660, 325, 600, 331) //
  ctx.quadraticCurveTo(520, 325, 471, 274) //
  ctx.quadraticCurveTo(425, 225, 418, 162) //
  ctx.quadraticCurveTo(415, 140, 427, 125) //
  ctx.quadraticCurveTo(446, 97, 469, 77) //
  ctx.quadraticCurveTo(487, 55, 467, 53) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
