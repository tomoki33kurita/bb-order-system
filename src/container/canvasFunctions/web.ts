export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // // ウェブ上線
  ctx.moveTo(285, 103)
  ctx.lineTo(471, 55)
  // // ウェブ右線
  ctx.lineTo(492, 135)
  // // ウェブ下線
  ctx.lineTo(307, 187)
  // // ウェブ左線
  ctx.lineTo(285, 103)
  ctx.closePath()

  ctx.fill()
  ctx.stroke()
}

export const webTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ先端上線左
  ctx.moveTo(251, 75)
  // ウェブ先端上線右
  ctx.lineTo(487, 15)
  // ウェブ先端右線下
  ctx.lineTo(495, 47)
  // ウェブ下線右側左
  ctx.lineTo(259, 110)
  // ウェブ先端左線上
  ctx.lineTo(251, 75)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}
