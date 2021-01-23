// 人差し指の入り口(裏革が見える)
const indexFingerEnter = (ctx: CanvasRenderingContext2D, liningsLeatherColor: string): void => {
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

// スタンダードタイプのステッチ
const standardCoverStitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  // 縦方向
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  ctx.moveTo(382, 205) // 人差し指カバー右上
  ctx.quadraticCurveTo(406, 292, 446, 375) // 人差し指カバー右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // 横方向
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  ctx.moveTo(365, 407) // 人差し指カバー左下
  ctx.quadraticCurveTo(399, 379, 446, 375) // 人差し指カバー右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

// ロングタイプのステッチ
const longCoverStitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  ctx.moveTo(378, 199) // 人差し指カバー右上
  ctx.quadraticCurveTo(408, 289, 448, 374) // 人差し指カバー右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

// スタンダードタイプ
const indexCoverStandard = (ctx: CanvasRenderingContext2D, color: string, liningsLeatherColor: string, stitchColor: string): void => {
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
  indexFingerEnter(ctx, liningsLeatherColor)
  // 右縦方法のステッチ
  standardCoverStitch(ctx, stitchColor)
}

const indexCoverLong = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
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
  longCoverStitch(ctx, stitchColor)
}

const indexCoverNone = (ctx: CanvasRenderingContext2D, color: string, liningsLeatherColor: string): void => {
  // 裏革が見える、指出し用の空間
  indexFingerEnter(ctx, liningsLeatherColor)
}

export const indexFingerCover = (ctx: CanvasRenderingContext2D, color: string, liningsLeatherColor: string, stitchColor: string, type: string): void => {
  switch (type) {
    case 'standard':
      indexCoverStandard(ctx, color, liningsLeatherColor, stitchColor)
      return
    case 'long':
      indexCoverLong(ctx, color, stitchColor)
      return
    case 'none':
      indexCoverNone(ctx, color, liningsLeatherColor)
      return
    default:
      return
  }
}
