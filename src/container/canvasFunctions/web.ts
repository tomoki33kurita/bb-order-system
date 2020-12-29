export const web = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.rotate((75 / 180) * Math.PI)
  ctx.rect(180, -475, 90, 200)
  ctx.rect(150, -495, 30, 250)
  ctx.closePath()
  ctx.stroke()
}

// export const webTop = (ctx: CanvasRenderingContext2D): void => {
//   ctx.beginPath()
//   ctx.rect(165, 200, 30, 250)
//   ctx.closePath()
//   ctx.stroke()
// }
