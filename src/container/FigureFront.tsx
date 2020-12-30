import React from 'react'
import { thumbMachi, thumbTarget } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { web, webTop } from 'src/container/canvasFunctions/web'
import { catchSurface } from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather } from 'src/container/canvasFunctions/edge'

type Props = {
  leatherStrapColor: string
  webColor: string
  edgeColor: string
}

const FigureFront: React.FC<Props> = ({ leatherStrapColor, webColor, edgeColor }) => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    const csWidth = canvas.width
    const csHeight = canvas.height
    const center = {
      x: csWidth / 2,
      y: csHeight / 2,
    }
    ctx.strokeStyle = '#383838'
    ctx.lineWidth = 2

    // ヘリ革
    edgeLeather(ctx, edgeColor)
    // 親指マチ部分
    thumbMachi(ctx, webColor)
    thumbTarget(ctx, webColor)
    // 小指マチ部分
    littleMachi(ctx, webColor)
    // ウェブ
    web(ctx, webColor)
    webTop(ctx, webColor)
    // ウェブ下捕球面
    catchSurface(ctx, webColor)
    littleInLineBottom(ctx)
    // 革紐
    leatherStrap(ctx, leatherStrapColor)
  }, [leatherStrapColor, webColor, edgeColor])

  return (
    <>
      <canvas width="1120" height="620" id="canvas"></canvas>
      {/* <LeatherStrap color={leatherStrapColor} /> */}
    </>
  )
}

export default FigureFront