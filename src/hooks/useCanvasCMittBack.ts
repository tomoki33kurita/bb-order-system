import { State } from 'src/types'

// 背面の描画
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

export const useCanvasCMittBack = (ctx: CanvasRenderingContext2D, state: State): void => {
  // ヘリ革
  edges(ctx, state.edge.color)
  // 捕球面
  catchSurFace(ctx, state.catchFace.color)
  // 指袋部分のベース部分_台
  fingerBase(ctx, state.bagFoundation.color)
  // 人差し親指指袋
  thumbAndIndexBag(ctx, state.indexAndThumb.color)
  // シェラームーブ
  shellarmove(ctx, state.shellarmove.color)
  // 薬指小指袋
  RingAndLittleBag(ctx, state.ringAndLittle.color)
  // 中指袋
  middleBag(ctx, state.middle.color)
  // ベルトパッキン
  beltFittings(ctx)
  // ウェブ先端
  webTop(ctx, state.web.color)
  // ウェブ本体
  web(ctx, state.web.color)
  // メーカーラベル
  selectedLabel(ctx, 'gold')
  // ステッチ
  stitch(ctx, state.stitch.color)
  // 座ブトンスポンジ
  state.zabutonSponge.value === 'zabuton' && zabutonSponge(ctx, state.indexCover.color, state.stitch.color)
  // 人差し指カバー
  indexFingerCover(ctx, state.indexCover.color, state.linings.color, state.stitch.color, state.fingerGuardType.value)
  // 手口ベルト
  listBelt(ctx, state.listBelt.color)
  // 革紐
  leatherStrap(ctx, state.strap.color)
  knotOnWebLeatherStrap(ctx, state.strap.color)
  arroundEdgheLeatherStrap(ctx, state.strap.color)
  topOfFingerBagLeatherStrap(ctx, state.strap.color)
  knotOnLeatherStraps(ctx, state.strap.color)
  // 親指掛け紐
  thumbHook(ctx, state.thumbHook.color)
  // 小指掛け紐
  littleHook(ctx, state.littleHook.color)
}
