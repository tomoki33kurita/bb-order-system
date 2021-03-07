import React from 'react'
import { Grid, Box, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core'
import { State } from 'src/types'
import pdfMake from 'pdfmake/build/pdfmake'
// import pdfFonts from 'pdfmake/build/vfs_fonts'
import { japaneseFont } from 'src/constants/vfs_fonts'
// pdfMake.vfs = pdfFonts.pdfMake.vfs
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

// 捕球面の描画
import { thumbMachi, thumbTarget } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { web as webFront, webTop as webTopFront } from 'src/container/canvasFunctions/web'
import { catchSurface as catchSurfaceFront } from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap as leatherStrapFront } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather as edgesFront } from 'src/container/canvasFunctions/edge'
import { stitch as stitchFront } from 'src/container/canvasFunctions/stitch'
import { targetArrange } from 'src/container/canvasFunctions/target'
import { thumbCutSurface, littleCutSurface } from 'src/container/canvasFunctions/cutSurface'

pdfMake.vfs = japaneseFont

const genCellContent = (head: string, content: string, alignment?: string) => {
  return [
    { text: `${head}： `, fontSize: 10 },
    { text: content, alignment: alignment ? alignment : 'right', fontSize: 12 },
  ]
}

const genImgFromCanvas = (state: State, face: 'front' | 'back') => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 900, 652)
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 2

  if (face === 'front') {
    catchSurfaceFront(ctx, state.catchFace.color)
    // ヘリ革
    edgesFront(ctx, state.edge.color, state.listLiningsMaterial.color)
    // 親指マチ部分
    thumbMachi(ctx, state.thumbMachi.color)
    thumbTarget(ctx, state.catchFace.color)
    // 小指マチ部分
    littleMachi(ctx, state.littleMachi.color)
    // ウェブ
    webTopFront(ctx, state.web.color)
    webFront(ctx, state.web.color)
    littleInLineBottom(ctx)
    // ターゲット加工
    if (state.target.value !== 'none') targetArrange(ctx, state.target.color)

    if (state.hamidashi.color) {
      // 親指芯＿キリハミ
      thumbCutSurface(ctx, state.hamidashi.color)
      // 小指芯＿キリハミ
      littleCutSurface(ctx, state.hamidashi.color)
    }
    // ステッチカラー
    stitchFront(ctx, state.stitch.color, state.target.color)
    // 革紐
    leatherStrapFront(ctx, state.strap.color, '#fff')
  }

  if (face === 'back') {
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

  return canvas.toDataURL()
}

const handleGenPdf = (state: State) => {
  pdfMake.fonts = {
    GenYoMin: {
      normal: 'ipaexg.ttf',
      // bold: 'GenYoMinJP-Bold.ttf',
    },
  }
  const docDefine = {
    content: [
      {
        text: 'ハタケヤマゴールドオーダー',
        style: { fontSize: 18 },
      },
      {
        text: 'お客様情報',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8],
      },
      {
        table: {
          body: [
            [
              genCellContent('お客様名', '畠山太郎'),
              genCellContent('お名前(カナ)', 'ハタケヤマ タロウ'),
              genCellContent('住所', '畠北海道札幌市北区1-2-3 サッポロドームマンション101'),
            ],
            [genCellContent('お電話番号', '090-1234-5678'), genCellContent('メールアドレス', 'test-test@gmail.com'), ['']],
          ],
        },
      },

      {
        text: '基本設定',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8],
      },
      {
        table: {
          widths: ['33%', '33%', '33%'],
          body: [
            [genCellContent('基本モデル', state.baseModel.label), genCellContent('利き腕', state.dominantArm.label), genCellContent('ミットの大きさ', state.mittSize.label)],
            [
              genCellContent('ポケットの深さ', state.mittDepth.label),
              genCellContent('バックスタイル', state.backStyle.label),
              genCellContent('パッドモデル', state.padModel.label),
            ],
            [
              genCellContent('革の硬さ', state.leatherHardness.label),
              genCellContent('芯の硬さ', state.coreMaterialHardness.label),
              genCellContent('芯の厚さ', state.coreMaterialThickness.label),
            ],
            [
              genCellContent('指カバー', state.fingerGuardType.label),
              genCellContent('座ブトンスポンジ', state.zabutonSponge.label),
              genCellContent('EX機能', state.exFunction.label),
            ],
            [genCellContent('ピンキーパターン', state.pinkiePattern.label), '', ''],
          ],
        },
      },
      {
        text: 'カラー設定',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8],
      },
      {
        table: {
          widths: ['33%', '33%', '33%'],
          body: [
            [genCellContent(`捕球面カラー`, state.catchFace.label), genCellContent(`革紐カラー`, state.strap.label), genCellContent(`ウェブカラー`, state.web.label)],
            [
              genCellContent(`ヘリ革カラー`, state.edge.label),
              genCellContent(`ステッチカラー`, state.stitch.label),
              genCellContent(`手首裏の素材`, state.listLiningsMaterial.label),
            ],
            [
              genCellContent(`ハミダシ`, state.hamidashi.label),
              genCellContent(`親指マチカラー`, state.thumbMachi.label),
              genCellContent(`小指マチカラー`, state.littleMachi.label),
            ],
            [
              genCellContent(`親指掛け紐カラー`, state.thumbHook.label),
              genCellContent(`小指掛け紐カラー`, state.littleHook.label),
              genCellContent(`人差し指カバーカラー`, state.indexCover.label),
            ],
            [
              genCellContent(`シェラームーブカラー`, state.shellarmove.label),
              genCellContent(`台カラー`, state.bagFoundation.label),
              genCellContent(`薬指小指袋カラー`, state.ringAndLittle.label),
            ],
            [
              genCellContent(`中指袋カラー`, state.middle.label),
              genCellContent(`人差し指親指袋カラー`, state.indexAndThumb.label),
              genCellContent(`手口ベルトカラー`, state.listBelt.label),
            ],
            [genCellContent(`裏革カラー`, state.linings.label), genCellContent(`ターゲット加工`, state.target.label), genCellContent(`ラベル`, state.hatakeyamaLabel.label)],
          ],
        },
      },
      {
        text: '刺繍設定１',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8],
      },
      {
        table: {
          widths: '50%',
          body: [
            [genCellContent(`書式`, state.embroideries[0].embroideryTypeFace.label), genCellContent(`位置`, state.embroideries[0].embroideryPosition.label)],
            [genCellContent(`刺繍カラー`, state.embroideries[0].embroideryColor.label), genCellContent(`影カラー`, state.embroideries[0].embroideryShadowColor.label)],
            [genCellContent(`刺繍内容`, `${state.embroideries[0].embroideryContent} `), ''],
          ],
        },
      },
      {
        image: `${genImgFromCanvas(state, 'front')}`,
        width: 450,
        height: 326,
      },
      {
        image: `${genImgFromCanvas(state, 'back')}`,
        width: 450,
        height: 326,
      },
      // {
      //   text: '備考欄',
      //   style: { fontSize: 14 },
      //   margin: [0, 16, 0, 8],
      // },
      // {
      //   table: {
      //     // headerRows: 2,
      //     body: [
      //       [
      //         genCellContent(
      //           `その他ご要望`,
      //           `親指側の芯のみ、芯材を薄めにしていただきたいです。革紐を芯通し有りにして欲しいです。どうしても芯通し有りにして欲しいですどうしても芯通し有りにして欲しいですどうしても芯通し有りにして欲しいですどうしても芯通し有りにして欲しいですどうしても芯通し有りにして欲しいですどうしても芯通し有りにして欲しいです`,
      //           'left'
      //         ),
      //       ],
      //     ],
      //   },
      // },
      // {
      // canvas: [
      //   {
      //     type: 'rect',
      //     x: 20,
      //     y: 20,
      //     w: 70,
      //     h: 70,
      //     lineWidth: 1,
      //     lineColor: 'pink',
      //   },
      // ],
      // },
    ],

    defaultStyle: { font: 'GenYoMin' },
  }
  // eslint-disable-next-line
  // @ts-ignore
  pdfMake.createPdf(docDefine).download('hatakeyama_order.pdf') // margin設定によって構文チェックエラーになっている。
}

type Props = {
  state: State
  open: boolean
  handleClose: () => void
}

const PdfDialog: React.FC<Props> = ({ state, open, handleClose }) => {
  const baseCells = [
    { head: '基本モデル：', label: state.baseModel.label },
    { head: '利き腕：', label: state.dominantArm.label },
    { head: 'ミットの大きさ：', label: state.mittSize.label },
    { head: 'ポケットの大きさ：', label: state.mittDepth.label },
    { head: 'バックスタイル：', label: state.backStyle.label },
    { head: 'パッドモデル：', label: state.padModel.label },
    { head: '革の硬さ：', label: state.leatherHardness.label },
    { head: '芯の硬さ', label: state.coreMaterialHardness.label },
    { head: '芯の厚さ：', label: state.coreMaterialThickness.label },
    { head: '指カバー：', label: state.fingerGuardType.label },
    { head: '座ブトンスポンジ：', label: state.zabutonSponge.label },
    { head: 'EX機能：', label: state.exFunction.label },
    { head: 'ピンキーパターン：', label: state.pinkiePattern.label },
    { head: 'TB刻印：', label: state.tbEngraved.label },
  ]

  const colorCells = [
    { head: '捕球面カラー：', label: state.catchFace.label, color: state.catchFace.color },
    { head: '革紐カラー：', label: state.strap.label, color: state.strap.color },
    { head: 'ウェブカラー：', label: state.web.label, color: state.web.color },
    { head: 'ヘリ革カラー：', label: state.edge.label, color: state.edge.color },
    { head: 'ステッチカラー：', label: state.stitch.label, color: state.stitch.color },
    { head: '手首裏の素材：', label: state.listLiningsMaterial.label, color: state.listLiningsMaterial.color },
    { head: 'ハミダシ：', label: state.hamidashi.label, color: state.hamidashi.color },
    { head: '親指マチカラー：', label: state.thumbMachi.label, color: state.thumbMachi.color },
    { head: '小指マチカラー：', label: state.littleMachi.label, color: state.littleMachi.color },
    { head: '親指掛け紐カラー：', label: state.thumbHook.label, color: state.thumbMachi.color },
    { head: '小指掛け紐カラー：', label: state.littleHook.label, color: state.littleMachi.color },
    { head: '人差し指カバーカラー：', label: state.indexCover.label, color: state.indexCover.color },
    { head: '台カラー：', label: state.bagFoundation.label, color: state.bagFoundation.color },
    { head: '薬指小指袋カラー：', label: state.ringAndLittle.label, color: state.ringAndLittle.color },
    { head: '中指袋カラー：', label: state.middle.label, color: state.middle.color },
    { head: '人差し指親指袋カラー：', label: state.indexAndThumb.label, color: state.indexAndThumb.color },
    { head: 'シェラームーブカラー：', label: state.shellarmove.label, color: state.shellarmove.color },
    { head: '手口ベルトカラー：', label: state.listBelt.label, color: state.listBelt.color },
    { head: '裏革カラー：', label: state.linings.label, color: state.linings.color },
    { head: 'ターゲット加工：', label: state.target.label, color: state.target.color },
    { head: 'ラベル：', label: state.hatakeyamaLabel.label, color: state.hatakeyamaLabel.color },
  ]

  return (
    <Dialog open={open} style={{ width: '90%', margin: 'auto' }}>
      {/* <canvas width={900} height={652} id="canvasImg" style={{ maxWidth: '100%' }}></canvas>
      <canvas width={900} height={652} id="canvasImg" style={{ maxWidth: '100%' }}></canvas> */}
      <DialogContent>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              <Box fontWeight="bold" fontSize="16px">
                基本項目
              </Box>
              {baseCells.map((cell, i) => (
                <Box ml={1} key={cell.head}>
                  {`(${i + 1}) ${cell.head}`}
                  <Box component="span" fontWeight="bold">
                    {cell.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              <Box fontWeight="bold" fontSize="16px">
                カラー・デザイン項目
              </Box>
              {colorCells.map((cell, i) => (
                <Box ml={1} key={cell.head}>
                  {`(${i + 15}) ${cell.head}`}
                  <Box component="span" fontWeight="bold" color={cell.color !== '#fff' && cell.color !== '#eee' ? cell.color : 'black'}>
                    {cell.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              {state.embroideries.map((embroidery, index) => {
                const embroideryCells = [
                  { head: '書式：', label: embroidery.embroideryTypeFace.label, color: embroidery.embroideryTypeFace.color },
                  { head: '位置：', label: embroidery.embroideryPosition.label, color: embroidery.embroideryPosition.color },
                  { head: '刺繍カラー：', label: embroidery.embroideryColor.label, color: embroidery.embroideryColor.color },
                  { head: '影カラー：', label: embroidery.embroideryShadowColor.label, color: embroidery.embroideryShadowColor.color },
                  { head: '刺繍内容：', label: embroidery.embroideryContent },
                ]

                return (
                  <React.Fragment key={`${index}`}>
                    {embroidery.embroideryContent.length > 0 ? (
                      <Box mb={2}>
                        <Box fontWeight="bold" fontSize="16px">
                          刺繍項目{index + 1}
                        </Box>
                        {embroideryCells.map((cell, i) => (
                          <Box ml={1} key={cell.head}>
                            {`(${i + 36 + index * 5}) ${cell.head}`}
                            <Box component="span" fontWeight="bold">
                              {cell.label}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Box>
                        <Box fontWeight="bold" fontSize="16px">
                          刺繍項目
                        </Box>
                        刺繍なし
                      </Box>
                    )}
                  </React.Fragment>
                )
              })}
              {/* <Box>備考</Box> */}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          閉じる
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleGenPdf(state)}>
          ダウンロード
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PdfDialog
