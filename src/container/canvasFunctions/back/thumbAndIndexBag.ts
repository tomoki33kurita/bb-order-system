export const thumbAndIndexBag = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(385, 105) // 人差し指先端
  ctx.quadraticCurveTo(365, 110, 351, 142)
  ctx.quadraticCurveTo(340, 188, 340, 213)
  ctx.quadraticCurveTo(343, 320, 363, 418) // シェラームーブとの接触頂点(左上)
  ctx.quadraticCurveTo(335, 421, 320, 443)
  ctx.quadraticCurveTo(300, 475, 295, 517)
  ctx.quadraticCurveTo(290, 545, 300, 570) // 手口ベルト左横の頂点
  ctx.quadraticCurveTo(329, 606, 329, 606) // 手口部分左下
  ctx.quadraticCurveTo(400, 615, 457, 607)
  ctx.quadraticCurveTo(500, 605, 526, 587)
  ctx.quadraticCurveTo(540, 565, 540, 565)
  ctx.quadraticCurveTo(575, 545, 585, 542) // 親指掛け紐部分
  ctx.quadraticCurveTo(605, 530, 605, 528)

  // ctx.quadraticCurveTo(579, 548, 579, 548)
  ctx.quadraticCurveTo(677, 444, 737, 355) // 親指先端右下
  ctx.quadraticCurveTo(759, 330, 750, 305) // 親指先端中央最上点
  ctx.quadraticCurveTo(740, 290, 723, 297)
  ctx.quadraticCurveTo(617, 359, 565, 365) // ウェブ下延長の右下
  ctx.quadraticCurveTo(501, 363, 465, 329) // ウェブ下延長の中央
  ctx.quadraticCurveTo(431, 303, 417, 263) // ウェブ下延長の左下
  ctx.quadraticCurveTo(400, 210, 400, 150)
  ctx.quadraticCurveTo(410, 95, 385, 105)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
