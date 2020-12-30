export const edgeLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革＿親指外
  ctx.beginPath()
  ctx.moveTo(165, 155)
  ctx.quadraticCurveTo(180, 530, 470, 610)
  // ヘリ革＿土手外
  ctx.quadraticCurveTo(560, 620, 660, 563)

  // ヘリ革＿小指外
  ctx.quadraticCurveTo(865, 425, 750, 165)

  // ヘリ革＿小指先端外
  ctx.quadraticCurveTo(640, 25, 525, 30)

  // // ヘリ革＿小指先端内
  ctx.quadraticCurveTo(500, 40, 525, 45)
  ctx.quadraticCurveTo(650, 50, 740, 170)

  // // ヘリ革＿小指内
  ctx.quadraticCurveTo(850, 420, 650, 557)

  // // ヘリ革＿土手内
  ctx.quadraticCurveTo(575, 600, 500, 600)

  // // ヘリ革＿親指内
  ctx.quadraticCurveTo(335, 575, 262, 455)
  ctx.quadraticCurveTo(175, 325, 175, 142)
  ctx.quadraticCurveTo(178, 115, 165, 155)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
