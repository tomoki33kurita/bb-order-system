import React from 'react'
import { thumbMachi, thumbTarget } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { littleTopLeftLine, littleTopOutLine } from 'src/container/canvasFunctions/littleTop'
import { web, webTop } from 'src/container/canvasFunctions/web'
import {
  underWebTopLine,
  underWebLeftLine,
  underWebLeftLeftLine,
  underWebRightLine,
  underWebRightRightLine,
} from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather } from 'src/container/canvasFunctions/edge'

type Props = {
  leatherStrapColor: string
  webColor: string
  edgeColor: string
}

const FigureFront: React.FC<Props> = ({ leatherStrapColor, webColor }) => {
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

    // // ウェブ下捕球面
    // underWebTopLine(ctx)
    // underWebLeftLine(ctx)
    // underWebLeftLeftLine(ctx)
    // underWebRightLine(ctx)
    // underWebRightRightLine(ctx)
    // // 小指芯先端
    // littleTopLeftLine(ctx)
    // littleTopOutLine(ctx)
    // ヘリ革
    edgeLeather(ctx, webColor)
    // 親指マチ部分
    thumbMachi(ctx, webColor)
    thumbTarget(ctx, webColor)

    // 小指マチ部分
    littleMachi(ctx, webColor)
    // 小指芯内側_土手横
    littleInLineBottom(ctx)

    // ウェブ
    web(ctx, webColor)
    webTop(ctx, webColor)
    // 革紐
    leatherStrap(ctx, leatherStrapColor)
  }, [leatherStrapColor, webColor])

  return (
    <>
      <canvas width="1120" height="620" id="canvas"></canvas>
      {/* <LeatherStrap color={leatherStrapColor} /> */}
    </>
  )
}

export default FigureFront
