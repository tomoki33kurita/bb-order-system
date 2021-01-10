import React from 'react'
import { Box, Button } from '@material-ui/core'
import CopyToClipBoard from 'copy-to-clipboard'
import { edgeLeatherBack } from 'src/container/canvasFunctions/edge'
import { indexFinger } from 'src/container/canvasFunctions/back/indexFinger'
import { thumbAndIndexBag } from 'src/container/canvasFunctions/back/thumbAndIndexBag'
import { listBelt } from 'src/container/canvasFunctions/back/listBelt'
import { web, webTop } from 'src/container/canvasFunctions/back/web'
import { shellarmove } from 'src/container/canvasFunctions/back/shellarmove'
import { middleBag } from 'src/container/canvasFunctions/back/middleBag'
import { RingAndLittleBag } from 'src/container/canvasFunctions/back/ringAndLittleBag'
import { catchSurFace } from 'src/container/canvasFunctions/back/catchSurface'
import { thumbHook } from 'src/container/canvasFunctions/back/thumbHook'
import { littleHook } from 'src/container/canvasFunctions/back/littleHook'

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

    // 捕球面
    catchSurFace(ctx, '#005380')
    // ヘリ革
    // edgeLeatherBack(ctx, edgeColor)
    // 薬指小指袋
    RingAndLittleBag(ctx, '#005380')
    // 中指袋
    middleBag(ctx, '#005380')
    // 親指・人差し指袋
    // thumbAndIndexBag(ctx, '#005380')
    // 人差し指カバー
    indexFinger(ctx, '#fff')
    // シェラームーブ
    shellarmove(ctx, '#fff')
    // 手口ベルト
    listBelt(ctx, '#fff')
    // ウェブ先端
    webTop(ctx, '#fff')
    // ウェブ本体
    web(ctx, '#005380')
    // 親指掛け紐
    thumbHook(ctx, '#fff')
    // 小指掛け紐
    littleHook(ctx, '#fff')
  }, [leatherColor, leatherStrapColor, webColor, thumbMachiColor, littleMachiColor, edgeColor, stitchColor, targetColor, cutSurfaceColor, moutonColor, thumbHookColor])

  const [coordinateX, setCoordinateX] = React.useState(0)
  const [coordinateY, setCoordinateY] = React.useState(0)

  const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect()
    const x = parseInt(`${e.clientX - rect.left}`)
    const y = parseInt(`${e.clientY - rect.top}`)
    setCoordinateX(x)
    setCoordinateY(y)
  }

  return (
    <>
      <canvas
        width="1000"
        height="652"
        id="canvas"
        style={{ backgroundImage: `url(${'/mitt_model_back.jpeg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '60%' }}
        onClick={(e) => handleCoordinate(e)}
      ></canvas>
      <Box>
        {`${coordinateX}, ${coordinateY}`}
        {/* <CopyToClipBoard>aa</CopyToClipBoard> */}
      </Box>
    </>
  )
}

export default FigureBack
