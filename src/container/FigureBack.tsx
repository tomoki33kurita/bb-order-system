import React from 'react'
import { Box } from '@material-ui/core'
import { thumbMachi, thumbTarget, thumbHookLeather } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { web, webTop } from 'src/container/canvasFunctions/web'
import { catchSurface } from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather } from 'src/container/canvasFunctions/edge'
import { stitch } from 'src/container/canvasFunctions/stitch'
import { targetArrange } from 'src/container/canvasFunctions/target'
import { thumbCutSurface, littleCutSurface } from 'src/container/canvasFunctions/cutSurface'

type Props = {
  leatherStrapColor: string
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
}

const FigureBack: React.FC<Props> = ({
  leatherStrapColor,
  leatherColor,
  webColor,
  thumbMachiColor,
  littleMachiColor,
  edgeColor,
  stitchColor,
  targetColor,
  cutSurfaceColor,
  moutonColor,
  thumbHookColor,
}) => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#383838'
    ctx.lineWidth = 2

    // ウェブ下捕球面
    catchSurface(ctx, leatherColor)
    // ヘリ革
    edgeLeather(ctx, edgeColor, moutonColor)
    // 親指マチ部分
    thumbMachi(ctx, thumbMachiColor)
    thumbTarget(ctx, leatherColor)
    // 小指マチ部分
    littleMachi(ctx, littleMachiColor)
    // ウェブ
    webTop(ctx, webColor)
    web(ctx, webColor)
    littleInLineBottom(ctx)
    if (targetColor) {
      // ターゲット加工
      targetArrange(ctx, targetColor)
    }
    if (cutSurfaceColor) {
      // 親指芯＿キリハミ
      thumbCutSurface(ctx, cutSurfaceColor)
      // 小指芯＿キリハミ
      littleCutSurface(ctx, cutSurfaceColor)
    }
    // ステッチカラー
    stitch(ctx, stitchColor, targetColor)
    // 革紐
    leatherStrap(ctx, leatherStrapColor, '#fff')
    // thumbHookLeather(ctx, thumbHookColor)
  }, [leatherColor, leatherStrapColor, webColor, thumbMachiColor, littleMachiColor, edgeColor, stitchColor, targetColor, cutSurfaceColor, moutonColor, thumbHookColor])

  const [coordinateX, setCoordinateX] = React.useState(0)
  const [coordinateY, setCoordinateY] = React.useState(0)

  const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoordinateX(x)
    setCoordinateY(y)
  }

  return (
    <>
      <canvas width="1000" height="652" id="canvas" onClick={(e) => handleCoordinate(e)}></canvas>
      <Box>{`(${coordinateX}, ${coordinateY})`}</Box>
    </>
  )
}

export default FigureBack
