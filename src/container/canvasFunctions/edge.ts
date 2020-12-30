export const edgeLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革＿親指外
  ctx.beginPath()
  ctx.moveTo(165, 155)
  ctx.quadraticCurveTo(180, 530, 470, 610)
  // ヘリ革＿土手外
  ctx.quadraticCurveTo(550, 620, 663, 565)

  // ヘリ革＿小指外
  ctx.quadraticCurveTo(865, 425, 750, 160)

  // ヘリ革＿小指先端外
  ctx.quadraticCurveTo(650, 40, 525, 30)

  // // ヘリ革＿小指先端内
  ctx.quadraticCurveTo(500, 40, 525, 45)
  ctx.quadraticCurveTo(650, 50, 745, 170)

  // // ヘリ革＿小指内
  ctx.quadraticCurveTo(850, 420, 655, 555)

  // // ヘリ革＿土手内
  ctx.quadraticCurveTo(575, 600, 500, 601)

  // // ヘリ革＿親指内
  ctx.quadraticCurveTo(335, 575, 262, 455)
  ctx.quadraticCurveTo(175, 325, 175, 142)
  ctx.quadraticCurveTo(178, 115, 165, 155)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
