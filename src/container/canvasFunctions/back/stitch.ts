export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  ctx.moveTo(376, 202) // 人差し指カバー右上
  ctx.quadraticCurveTo(445, 370, 445, 370) // 人差し指カバー右下

  ctx.moveTo(511, 56) // ウェブ先端左上
  ctx.quadraticCurveTo(560, 70, 631, 128) // ウェブ先端中央
  ctx.quadraticCurveTo(695, 170, 750, 225) // ウェブ先端右下

  ctx.moveTo(517, 87) // ウェブ本体上
  ctx.quadraticCurveTo(609, 144, 691, 215) //
  ctx.moveTo(514, 91) //
  ctx.quadraticCurveTo(602, 147, 685, 218) //

  ctx.moveTo(495, 105) // ウェブ本体下
  ctx.quadraticCurveTo(667, 231, 667, 231) //
  ctx.moveTo(492, 110) //
  ctx.quadraticCurveTo(662, 236, 662, 236) //

  ctx.moveTo(441, 197) //捕球面折り返し部分＿外線の左下
  ctx.quadraticCurveTo(451, 177, 451, 177) // // 外線の左上
  ctx.quadraticCurveTo(593, 285, 593, 285) // // 外線の右上
  ctx.quadraticCurveTo(577, 305, 583, 313) // // 外線の右下
  ctx.moveTo(445, 205) //捕球面折り返し部分＿内線の左下
  ctx.quadraticCurveTo(455, 188, 455, 188) // // 内線の左上
  ctx.quadraticCurveTo(581, 287, 581, 287) // // 内線の右上
  ctx.quadraticCurveTo(572, 305, 572, 305) // // 内線の右下
  ctx.quadraticCurveTo(578, 313, 578, 313) // // 内線の右下右

  ctx.moveTo(362, 414) // シェラームーブ右下
  ctx.quadraticCurveTo(309, 428, 306, 472) //
  ctx.quadraticCurveTo(273, 514, 294, 565) // シェラームーブ左下
  ctx.quadraticCurveTo(271, 546, 273, 546) // シェラームーブ左上
  ctx.quadraticCurveTo(256, 513, 256, 513) // シェラームーブ左上の左上

  ctx.moveTo(297, 207) // 中指袋_先端＿左下
  ctx.quadraticCurveTo(294, 162, 328, 148) // 中指袋＿先端＿中央上
  ctx.quadraticCurveTo(350, 145, 343, 168) //
  ctx.quadraticCurveTo(339, 196, 343, 209) // 中指袋＿先端＿右下
  ctx.moveTo(346, 329) // 中指袋_手前＿右上
  ctx.quadraticCurveTo(311, 321, 296, 348) // 中指袋_手前＿左下

  ctx.moveTo(256, 214) // 小指薬指袋_先端＿中央上
  ctx.quadraticCurveTo(290, 193, 292, 217)
  ctx.quadraticCurveTo(290, 235, 294, 256)
  ctx.moveTo(304, 381) // 小指薬指袋_手前＿右上
  ctx.quadraticCurveTo(232, 397, 220, 435) // 小指薬指袋_手前＿左下

  // ctx.moveTo(376, 202) //
  // ctx.quadraticCurveTo(445, 370, 445, 370) //
  // ctx.moveTo(376, 202) //
  // ctx.quadraticCurveTo(445, 370, 445, 370) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
