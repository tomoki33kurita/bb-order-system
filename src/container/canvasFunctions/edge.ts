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
  ctx.quadraticCurveTo(871, 405, 735, 150)

  // ヘリ革＿小指先端外
  ctx.quadraticCurveTo(640, 25, 525, 30)
  ctx.quadraticCurveTo(485, 52, 530, 140)
  ctx.lineTo(515, 195)
  ctx.lineTo(520, 200)
  ctx.lineTo(540, 140)

  // // ヘリ革＿小指先端内
  ctx.quadraticCurveTo(495, 45, 530, 42)
  // ctx.quadraticCurveTo(650, 50, 737, 172)
  ctx.quadraticCurveTo(650, 50, 724, 154)

  // // ヘリ革＿小指内
  ctx.quadraticCurveTo(850, 420, 650, 557)

  // // ヘリ革＿土手内
  ctx.quadraticCurveTo(575, 600, 500, 602)

  // // ヘリ革＿親指内
  ctx.quadraticCurveTo(345, 500, 262, 455)
  ctx.quadraticCurveTo(175, 325, 175, 142)
  ctx.quadraticCurveTo(178, 115, 165, 155)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  //親指寄り捕球面のヘリ革
  ctx.beginPath()
  ctx.moveTo(283, 200)
  ctx.lineTo(315, 238)
  ctx.quadraticCurveTo(325, 248, 320, 255)
  ctx.lineTo(288, 217)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
