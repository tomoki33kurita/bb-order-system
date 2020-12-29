export const web = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.rotate((75 / 180) * Math.PI)
  ctx.rect(130, -500, 125, 200)
  ctx.closePath()
  ctx.stroke()
}
