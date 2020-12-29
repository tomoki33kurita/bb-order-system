export const web = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.rotate((75 / 180) * Math.PI)
  ctx.rect(160, -475, 90, 200)
  ctx.rect(130, -495, 30, 250)
  ctx.closePath()
  ctx.stroke()
}

// export const webTop = (ctx: CanvasRenderingContext2D): void => {
//   ctx.beginPath()
//   ctx.rect(165, 200, 30, 250)
//   ctx.closePath()
//   ctx.stroke()
// }
