export const edgeLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革＿親指外
  ctx.beginPath()
  ctx.moveTo(195, 128)
  ctx.quadraticCurveTo(170, 140, 170, 160)
  ctx.quadraticCurveTo(180, 530, 460, 603)
  // ヘリ革＿土手外
  ctx.quadraticCurveTo(550, 618, 655, 560)

  // ヘリ革＿小指外
  ctx.quadraticCurveTo(873, 410, 727, 142)

  // ヘリ革＿小指先端外
  ctx.quadraticCurveTo(640, 30, 525, 35)
  ctx.quadraticCurveTo(485, 52, 530, 140)
  ctx.lineTo(515, 195)
  ctx.lineTo(520, 200)
  ctx.lineTo(540, 140)

  // // ヘリ革＿小指先端内
  ctx.quadraticCurveTo(495, 50, 530, 42)
  // ctx.quadraticCurveTo(650, 50, 737, 172)
  ctx.quadraticCurveTo(650, 50, 724, 154)

  // // ヘリ革＿小指内
  ctx.quadraticCurveTo(850, 420, 650, 557)

  // // ヘリ革＿土手内
  ctx.quadraticCurveTo(575, 600, 500, 602)

  // // ヘリ革＿親指内
  ctx.quadraticCurveTo(345, 500, 262, 455)
  ctx.quadraticCurveTo(200, 128, 200, 128)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 外ヘリ革＿親指
  // ctx.beginPath()
  // ctx.moveTo(180, 130)
  // ctx.quadraticCurveTo(164, 140, 167, 168)
  // ctx.quadraticCurveTo(185, 548, 476, 605)
  // ctx.quadraticCurveTo(185, 535, 175, 155)
  // ctx.stroke()
  // ctx.fill()
  // ctx.closePath()

  // 外ヘリ革＿土手
  ctx.beginPath()
  ctx.moveTo(480, 605)
  ctx.quadraticCurveTo(588, 615, 650, 564)
  ctx.quadraticCurveTo(565, 613, 480, 605)
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
