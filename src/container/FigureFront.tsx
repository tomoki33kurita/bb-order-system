import React from 'react'
import { thumbMachi, thumbTarget } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { web, webTop } from 'src/container/canvasFunctions/web'
import { catchSurface } from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather } from 'src/container/canvasFunctions/edge'
import { stitch } from 'src/container/canvasFunctions/stitch'
import { targetArrange } from 'src/container/canvasFunctions/target'
import { thumbCutSurface, littleCutSurface } from 'src/container/canvasFunctions/cutSurface'
import { DevTools } from 'src/types'
import DevTool from 'src/container/devTools'

type Props = {
  parts: {
    strapColor: string
    leatherColor: string
    webColor: string
    thumbMachiColor: string
    littleMachiColor: string
    edgeColor: string
    stitchColor: string
    targetColor: string | undefined
    cutSurfaceColor: string | undefined
    moutonColor: string
    thumbHookColor: string
    littleHookColor: string
  }
  devTools?: DevTools
  devToolStyle?: { backgroundImage: string; backgroundRepeat: 'no-repeat'; backgroundPosition: string; backgroundSize: string }
  handleCoordinate?: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}

const FigureFront: React.FC<Props> = ({ parts, devTools, devToolStyle, handleCoordinate }) => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#383838'
    ctx.lineWidth = 2
    // ウェブ下捕球面
    catchSurface(ctx, parts.leatherColor)
    // ヘリ革
    edgeLeather(ctx, parts.edgeColor, parts.moutonColor)
    // 親指マチ部分
    thumbMachi(ctx, parts.thumbMachiColor)
    thumbTarget(ctx, parts.leatherColor)
    // 小指マチ部分
    littleMachi(ctx, parts.littleMachiColor)
    // ウェブ
    webTop(ctx, parts.webColor)
    web(ctx, parts.webColor)
    littleInLineBottom(ctx)
    // ターゲット加工
    if (parts.targetColor) targetArrange(ctx, parts.targetColor)

    if (parts.cutSurfaceColor) {
      // 親指芯＿キリハミ
      thumbCutSurface(ctx, parts.cutSurfaceColor)
      // 小指芯＿キリハミ
      littleCutSurface(ctx, parts.cutSurfaceColor)
    }
    // ステッチカラー
    stitch(ctx, parts.stitchColor, parts.targetColor)
    // 革紐
    leatherStrap(ctx, parts.leatherStrapColor, '#fff')
    // thumbHookLeather(ctx, parts.thumbHookColor)
  }, [parts])

  return (
    <>
      {devTools && handleCoordinate ? (
        <>
          <canvas width={900} height={652} id="canvas" style={devToolStyle} onClick={(e) => handleCoordinate(e)}></canvas>
          <DevTool devTools={devTools} />
        </>
      ) : (
        <canvas width={900} height={652} id="canvas"></canvas>
      )}
    </>
  )
}

export default FigureFront
