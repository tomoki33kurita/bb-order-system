export const edges = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ウェブ下捕球面の革右下のヘリ革
  ctx.beginPath()
  ctx.moveTo(599, 298) // ウェブ下捕球面の革右下の上部
  ctx.quadraticCurveTo(588, 310, 590, 315) // 左下
  ctx.quadraticCurveTo(624, 320, 648, 300)
  ctx.quadraticCurveTo(670, 290, 690, 270)
  ctx.quadraticCurveTo(717, 250, 769, 258) // 親指先端(捕球面へと見えなくなる直前)
  ctx.quadraticCurveTo(756, 234, 735, 230)
  ctx.quadraticCurveTo(684, 236, 653, 282)
  ctx.quadraticCurveTo(628, 302, 599, 298)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指＿捕球面側のヘリ革
  ctx.beginPath()
  ctx.moveTo(490, 60) //
  ctx.quadraticCurveTo(490, 85, 470, 100) //
  ctx.quadraticCurveTo(440, 115, 430, 150) //
  ctx.quadraticCurveTo(430, 170, 435, 195)
  ctx.quadraticCurveTo(445, 170, 445, 170)
  ctx.quadraticCurveTo(435, 135, 480, 105)
  ctx.quadraticCurveTo(500, 90, 500, 65)
  ctx.quadraticCurveTo(496, 58, 490, 60)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指先端から手口右下まで
  ctx.beginPath()
  ctx.moveTo(465, 45)
  ctx.quadraticCurveTo(337, 82, 275, 163)
  ctx.quadraticCurveTo(197, 260, 201, 392)
  ctx.quadraticCurveTo(211, 493, 256, 527)
  ctx.quadraticCurveTo(279, 566, 279, 566)
  ctx.quadraticCurveTo(304, 584, 304, 584)
  ctx.quadraticCurveTo(331, 617, 331, 617)
  ctx.quadraticCurveTo(430, 635, 522, 600)
  ctx.quadraticCurveTo(530, 589, 525, 590) // 折り返す部分：手口右下
  ctx.quadraticCurveTo(436, 621, 331, 607)
  ctx.quadraticCurveTo(317, 586, 302, 573)
  ctx.quadraticCurveTo(283, 562, 283, 562)
  ctx.quadraticCurveTo(259, 523, 259, 523)
  ctx.quadraticCurveTo(231, 491, 222, 452) // シェラームーブ左上
  ctx.quadraticCurveTo(187, 340, 252, 211) // 小指袋先端
  ctx.quadraticCurveTo(294, 132, 381, 88)
  ctx.quadraticCurveTo(413, 65, 466, 53) // 開始地点の内側
  ctx.quadraticCurveTo(490, 55, 464, 82)
  ctx.quadraticCurveTo(414, 129, 417, 159)
  ctx.quadraticCurveTo(421, 194, 438, 228) // ウェブ左下あたり
  ctx.quadraticCurveTo(459, 270, 498, 297) // ウェブ中央下あたり
  ctx.quadraticCurveTo(534, 326, 595, 331) // ウェブ中央下から右下あたり
  ctx.quadraticCurveTo(649, 329, 699, 284)
  ctx.quadraticCurveTo(726, 264, 756, 265)
  ctx.quadraticCurveTo(777, 270, 767, 305)
  ctx.quadraticCurveTo(743, 380, 667, 464)
  ctx.quadraticCurveTo(605, 545, 540, 565) //手口ベルト右＿折り返し地点_内側
  ctx.quadraticCurveTo(530, 577, 543, 567) //手口ベルト右＿折り返し地点_外側
  ctx.quadraticCurveTo(577, 557, 625, 520)
  ctx.quadraticCurveTo(650, 500, 672, 470)
  ctx.quadraticCurveTo(740, 394, 772, 311) // 親指先端入り口外側
  ctx.quadraticCurveTo(784, 264, 765, 256) // 親指最先端外側
  ctx.quadraticCurveTo(731, 245, 689, 271)
  ctx.quadraticCurveTo(653, 312, 592, 314) // ウェブ下捕球面の革右下との交点
  ctx.quadraticCurveTo(496, 315, 440, 200) // ウェブ下捕球面の革左下との交点
  ctx.quadraticCurveTo(430, 180, 431, 155)
  ctx.quadraticCurveTo(430, 125, 475, 95)
  ctx.quadraticCurveTo(513, 45, 465, 45)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
