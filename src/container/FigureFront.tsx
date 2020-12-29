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
import { littleOutLine, littleInLineBottom, littEdgeLine1, littEdgeLine2, littEdgeLine3, littleInLine } from 'src/container/canvasFunctions/little'
import { littleTopLeftLine, littleTopInLine, littleTopOutLine } from 'src/container/canvasFunctions/littleTop'
import { web } from 'src/container/canvasFunctions/web'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'
import {
  underWebTopLine,
  underWebLeftLine,
  underWebLeftLeftLine,
  underWebRightLine,
  underWebRightRightLine,
} from 'src/container/canvasFunctions/catchingSurface'
import { hingeUnderLine } from 'src/container/canvasFunctions/hinge'

const FigureFront: React.FC = () => {
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
    // 土手
    hingeUnderLine(ctx)
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
    littleInLine(ctx)
    littleInLineBottom(ctx)
    // 小指芯先端
    littleTopLeftLine(ctx)
    littleTopOutLine(ctx)
    littleTopInLine(ctx)
    // 革紐
    leatherStrap(ctx)
    // ウェブ
    web(ctx)
  }, [])
  return <canvas width="1120" height="620" id="canvas"></canvas>
}

export default FigureFront
