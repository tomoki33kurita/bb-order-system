export const stitch = (ctx: CanvasRenderingContext2D, color: string, targetColor: string | undefined): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = color

  // ウェブ部分
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  // 一段目
  ctx.moveTo(292, 108)
  ctx.lineTo(467, 62)
  ctx.moveTo(294, 112)
  ctx.lineTo(469, 66)
  // 二段目
  ctx.moveTo(298, 132)
  ctx.lineTo(475, 86)
  ctx.moveTo(298, 137)
  ctx.lineTo(478, 90)

  // 三段目
  ctx.moveTo(307, 156)
  ctx.lineTo(478, 113)
  ctx.moveTo(309, 160)
  ctx.lineTo(486, 115)

  // 捕球面の半円
  ctx.moveTo(300, 235)
  ctx.quadraticCurveTo(335, 325, 450, 300)
  ctx.quadraticCurveTo(540, 270, 530, 185)

  // ウェブ下捕球面_横
  ctx.moveTo(321, 220)
  ctx.lineTo(500, 169)
  ctx.moveTo(325, 224)
  ctx.lineTo(499, 174)

  // 親指寄り捕球面のヘリ革
  ctx.moveTo(290, 225)
  ctx.lineTo(323, 263)
  ctx.quadraticCurveTo(333, 242, 330, 247)

  // ウェブ下捕球面_左縦
  ctx.moveTo(319, 220)
  ctx.lineTo(328, 250)
  ctx.moveTo(325, 224)
  ctx.lineTo(335, 253)
  ctx.quadraticCurveTo(330, 270, 322, 260)

  // ウェブ下捕球面_右縦
  ctx.moveTo(500, 169)
  ctx.lineTo(509, 200)
  ctx.lineTo(521, 212)
  ctx.moveTo(496, 174)
  ctx.lineTo(504, 204)
  ctx.lineTo(521, 214)

  // 小指芯先端寄り捕球面のヘリ革
  ctx.moveTo(545, 140)
  ctx.lineTo(521, 212)

  // 小指芯先端寄りのヘリ革
  ctx.moveTo(530, 45)
  ctx.quadraticCurveTo(500, 55, 545, 140)

  // 小指芯先端から小指マチの開始地点まで
  ctx.moveTo(530, 45)
  ctx.quadraticCurveTo(640, 55, 727, 158)

  // 小指マチ部分
  ctx.moveTo(727, 158)
  ctx.quadraticCurveTo(855, 410, 650, 553)
  // ヘリ革＿土手内
  ctx.quadraticCurveTo(575, 598, 502, 598)

  // 親指芯ヘリ革内側部分
  ctx.moveTo(178, 130)
  ctx.quadraticCurveTo(175, 315, 264, 455)
  ctx.quadraticCurveTo(337, 570, 502, 598)

  if (targetColor) {
    // 親指ターゲット＿ステッチ
    ctx.moveTo(240, 138)
    ctx.quadraticCurveTo(275, 490, 472, 555)
    ctx.lineTo(457, 512)
    ctx.quadraticCurveTo(300, 400, 268, 180)
    ctx.quadraticCurveTo(240, 140, 240, 138)

    // 小指ターゲット＿ステッチ
    ctx.moveTo(530, 45)
    ctx.quadraticCurveTo(510, 60, 520, 52)
    ctx.quadraticCurveTo(520, 70, 540, 70)
    ctx.quadraticCurveTo(628, 90, 728, 180)

    ctx.moveTo(530, 60)
    ctx.quadraticCurveTo(520, 70, 540, 65)
    ctx.quadraticCurveTo(628, 80, 728, 175)
  }

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
