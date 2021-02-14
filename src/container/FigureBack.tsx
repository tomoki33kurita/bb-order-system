import React from 'react'
import { fingerBase } from 'src/container/canvasFunctions/back/fingerBase'
import { indexFingerCover } from 'src/container/canvasFunctions/back/indexFinger'
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
import { stitch } from 'src/container/canvasFunctions/back/stitch'
import { leatherStrap, knotOnWebLeatherStrap, arroundEdgheLeatherStrap, topOfFingerBagLeatherStrap, knotOnLeatherStraps } from 'src/container/canvasFunctions/back/leatherStrap'
import { zabutonSponge } from 'src/container/canvasFunctions/back/zabutonSponge'
import { FigureBack as FigureBackTypes, DevTools } from 'src/types'
import DevTool from 'src/container/devTools'

type Props = {
  parts: FigureBackTypes
  devTools?: DevTools
  devToolStyle?: { backgroundImage: string; backgroundRepeat: 'no-repeat'; backgroundPosition: string; backgroundSize: string }
  handleCoordinate?: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}

const FigureBack: React.FC<Props> = ({ parts, devTools, devToolStyle, handleCoordinate }) => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#383838'
    ctx.lineWidth = 2
    // ヘリ革
    edges(ctx, parts.edgeColor)
    // 捕球面
    catchSurFace(ctx, parts.leatherColor)
    // 指袋部分のベース部分_台
    fingerBase(ctx, parts.bagFoundationColor)
    // 人差し親指指袋
    thumbAndIndexBag(ctx, parts.indexAndThumbColor)
    // シェラームーブ
    shellarmove(ctx, parts.shellarmoveColor)
    // 薬指小指袋
    RingAndLittleBag(ctx, parts.ringAndLittleColor)
    // 中指袋
    middleBag(ctx, parts.middleColor)
    // ベルトパッキン
    beltFittings(ctx)
    // ウェブ先端
    webTop(ctx, parts.webColor)
    // ウェブ本体
    web(ctx, parts.webColor)
    // メーカーラベル
    selectedLabel(ctx, 'gold')
    // ステッチ
    stitch(ctx, parts.stitchColor)
    // 座ブトンスポンジ
    parts.isZabuton === 'zabuton' && zabutonSponge(ctx, parts.indexCoverColor, parts.stitchColor)
    // 人差し指カバー
    indexFingerCover(ctx, parts.indexCoverColor, parts.liningsColor, parts.stitchColor, parts.indexCoverType)
    // 手口ベルト
    listBelt(ctx, parts.listBeltColor)
    // 革紐
    leatherStrap(ctx, parts.strapColor)
    knotOnWebLeatherStrap(ctx, parts.strapColor)
    arroundEdgheLeatherStrap(ctx, parts.strapColor)
    topOfFingerBagLeatherStrap(ctx, parts.strapColor)
    knotOnLeatherStraps(ctx, parts.strapColor)
    // 親指掛け紐
    thumbHook(ctx, parts.thumbHookColor)
    // 小指掛け紐
    littleHook(ctx, parts.littleHookColor)
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

export default FigureBack
