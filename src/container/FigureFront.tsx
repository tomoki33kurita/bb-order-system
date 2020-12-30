import React from 'react'
import {
  thumbTopOutLine,
  thumbTopInLine,
  thumbOutLine,
  thumbEdgeLine1,
  thumbEdgeLine2,
  thumbInLine1,
  thumbInLine2,
} from 'src/container/canvasFunctions/thumb'
import { littleOutLine, littleInLineBottom, littEdgeLine1, littEdgeLine2, littEdgeLine3 } from 'src/container/canvasFunctions/little'
import { littleTopLeftLine, littleTopOutLine } from 'src/container/canvasFunctions/littleTop'
import { web, webTop } from 'src/container/canvasFunctions/web'
import {
  underWebTopLine,
  underWebLeftLine,
  underWebLeftLeftLine,
  underWebRightLine,
  underWebRightRightLine,
} from 'src/container/canvasFunctions/catchingSurface'
import { hingeUnderLine } from 'src/container/canvasFunctions/hinge'
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

    // ウェブ下捕球面
    underWebTopLine(ctx)
    underWebLeftLine(ctx)
    underWebLeftLeftLine(ctx)
    underWebRightLine(ctx)
    underWebRightRightLine(ctx)
    // 親指芯
    thumbTopOutLine(ctx)
    thumbTopInLine(ctx)
    thumbOutLine(ctx)
    thumbEdgeLine1(ctx)
    thumbEdgeLine2(ctx)
    thumbInLine1(ctx)
    thumbInLine2(ctx)
    // 小指芯
    littleOutLine(ctx)
    littEdgeLine1(ctx)
    littEdgeLine2(ctx)
    littEdgeLine3(ctx)
    littleInLineBottom(ctx)
    // 小指芯先端
    littleTopLeftLine(ctx)
    littleTopOutLine(ctx)
    // ヘリ革
    edgeLeather(ctx, webColor)
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
