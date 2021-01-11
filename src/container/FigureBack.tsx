import React from 'react'
import { Box, Button, FilledInput, Input, TextField } from '@material-ui/core'
import CopyToClipBoard from 'copy-to-clipboard'
import { fingerBase } from 'src/container/canvasFunctions/back/fingerBase'
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
import { beltFittings } from 'src/container/canvasFunctions/back/beltFittings'
import { edges } from 'src/container/canvasFunctions/back/edge'
import { selectedLabel } from 'src/container/canvasFunctions/back/hatakeyamaLabel'

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

    // ヘリ革
    edges(ctx, edgeColor)
    // 指袋部分のベース部分
    // fingerBase(ctx, 'pink')
    // 捕球面
    catchSurFace(ctx, leatherColor)
    // 薬指小指袋
    RingAndLittleBag(ctx, '#005380')
    // 中指袋
    middleBag(ctx, '#005380')
    // 親指・人差し指袋
    thumbAndIndexBag(ctx, '#005380')
    // 人差し指カバー
    indexFinger(ctx, '#fff')
    // シェラームーブ
    shellarmove(ctx, '#fff')
    // ベルトパッキン
    beltFittings(ctx, '#383838')
    // 手口ベルト
    listBelt(ctx, '#fff')
    // ウェブ先端
    webTop(ctx, '#fff')
    // ウェブ本体
    web(ctx, '#005380')
    // 親指掛け紐
    thumbHook(ctx, thumbHookColor)
    // 小指掛け紐
    littleHook(ctx, thumbHookColor)
    // メーカーラベル
    selectedLabel(ctx, 'gold')
  }, [leatherColor, leatherStrapColor, webColor, thumbMachiColor, littleMachiColor, edgeColor, stitchColor, targetColor, cutSurfaceColor, moutonColor, thumbHookColor])

  const [coordinateX, setCoordinateX] = React.useState(0)
  const [coordinateY, setCoordinateY] = React.useState(0)
  const [isCopy, setCopy] = React.useState(false)
  const [inputX, setInputX] = React.useState(0)
  const [inputY, setInputY] = React.useState(0)

  const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect()
    const x = parseInt(`${e.clientX - rect.left}`)
    const y = parseInt(`${e.clientY - rect.top}`)
    setCoordinateX(x)
    setCoordinateY(y)
    setCopy(false)
  }

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopy(true)
  }

  const handlePonter = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#ff4500'
    ctx.fillStyle = '#ff4500'
    ctx.fillRect(inputX, inputY, 5, 5)
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
      <Box display="flex" justifyContent="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Input type="hidden" value={'aaa'} onClick={(e) => console.log('e.target.value')} />
          <TextField placeholder="X座標の値" variant="outlined" onChange={(e) => setInputX(parseInt(e.target.value))} />
          <TextField placeholder="Y座標の値" variant="outlined" onChange={(e) => setInputY(parseInt(e.target.value))} />
          <Button variant="outlined" onClick={handlePonter}>
            検索
          </Button>
        </Box>
        <Box ml={2} display="flex" justifyContent="center" alignItems="center">
          <Box mx={2} p={1} border={'solid 1px green'}>{`${coordinateX}, ${coordinateY}`}</Box>
          <Button variant="outlined" onClick={() => handleCopy(`${coordinateX}, ${coordinateY}`)}>
            コピー
          </Button>
          {isCopy ? <Box ml={2}>コピーしたよ！</Box> : <Box width={90} />}
        </Box>
      </Box>
    </>
  )
}

export default FigureBack
