export const indexCoverNormal = (ctx: CanvasRenderingContext2D, color: string, liningsLeatherColor: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 指カバー
  ctx.beginPath()
  ctx.moveTo(385, 198) // 右上
  ctx.quadraticCurveTo(348, 213, 331, 229) // 左上
  ctx.quadraticCurveTo(340, 325, 362, 414) // 左下
  ctx.quadraticCurveTo(394, 384, 450, 377) // 右下
  ctx.quadraticCurveTo(377, 198, 385, 198) // 右上＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 裏革が見える、指出し用の空間
  ctx.beginPath()
  ctx.fillStyle = liningsLeatherColor
  ctx.moveTo(363, 414) // 左上
  ctx.quadraticCurveTo(365, 418, 365, 418) // 左下
  ctx.quadraticCurveTo(408, 407, 450, 384) // 右下
  ctx.quadraticCurveTo(449, 381, 449, 381) // 右上
  ctx.quadraticCurveTo(402, 393, 363, 414) // 左＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const indexCoverLong = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(380, 193) // 右上
  ctx.quadraticCurveTo(348, 206, 331, 224) // 左上
  ctx.quadraticCurveTo(340, 320, 368, 433) // 左下
  ctx.quadraticCurveTo(380, 443, 407, 433) // 中央下
  ctx.quadraticCurveTo(448, 410, 450, 372) // 右下
  ctx.quadraticCurveTo(377, 193, 380, 193) // 右上＿開始地点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const indexFingerCoverstitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  // stitch
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  ctx.moveTo(382, 205) // 人差し指カバー右上
  ctx.quadraticCurveTo(406, 292, 446, 375) // 人差し指カバー右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([5, 5])
  ctx.moveTo(365, 407) // 人差し指カバー右上
  ctx.quadraticCurveTo(399, 379, 446, 375) // 人差し指カバー右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
