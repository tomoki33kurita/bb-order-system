import React from 'react'
import { Box, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core'
import { State } from 'src/types'
import pdfMake from 'pdfmake/build/pdfmake'
// import pdfFonts from 'pdfmake/build/vfs_fonts'
import { japaneseFont } from 'src/constants/vfs_fonts'
// pdfMake.vfs = pdfFonts.pdfMake.vfs
pdfMake.vfs = japaneseFont

const genCellContent = (head: string, content: string, alignment?: string) => {
  return [
    { text: `${head}： `, fontSize: 10 },
    { text: content, alignment: alignment ? alignment : 'right', fontSize: 12 },
  ]
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
            [genCellContent(`捕球面カラー`, state.catchFace.label), genCellContent(`ウェブカラー`, state.web.label), genCellContent(`親指マチカラー`, state.thumbMachi.label)],
            [genCellContent(`小指マチカラー`, state.littleMachi.label), genCellContent(`ヘリ革カラー`, state.edge.label), genCellContent(`革紐カラー`, state.strap.label)],
            [
              genCellContent(`ステッチカラー`, state.stitch.label),
              genCellContent(`ターゲット加工`, state.target.label),
              genCellContent(`手首裏の素材`, state.listLiningsMaterial.label),
            ],
            [genCellContent(`ハミダシ`, state.hamidashi.label), genCellContent(`ラベル`, state.hatakeyamaLabel.label), ''],
          ],
        },
      },
      // state.embroideries[0].embroideryContent.length > 0

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
      //   canvas: [
      //     {
      //       type: 'rect',
      //       x: 20,
      //       y: 20,
      //       w: 70,
      //       h: 70,
      //       lineWidth: 1,
      //       lineColor: 'pink',
      //     },
      //   ],
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
  return (
    <Dialog open={open}>
      <DialogContent>
        <Box display="flex">
          <Box>
            <Box fontWeight="bold" fontSize="16px">
              基本項目
            </Box>
            <Box ml={1}>
              (1) 基本モデル：
              <Box component="span" fontWeight="bold">
                {state.baseModel.label}
              </Box>
            </Box>
            <Box ml={1}>
              (2) 利き腕：
              <Box component="span" fontWeight="bold">
                {state.dominantArm.label}
              </Box>
            </Box>
            <Box ml={1}>
              (3) ミットの大きさ：
              <Box component="span" fontWeight="bold">
                {state.mittSize.label}
              </Box>
            </Box>
            <Box ml={1}>
              (4) ポケットの大きさ：
              <Box component="span" fontWeight="bold">
                {state.mittDepth.label}
              </Box>
            </Box>
            <Box ml={1}>
              (5) バックスタイル：
              <Box component="span" fontWeight="bold">
                {state.backStyle.label}
              </Box>
            </Box>
            <Box ml={1}>
              (6) パッドモデル：
              <Box component="span" fontWeight="bold">
                {state.padModel.label}
              </Box>
            </Box>
            <Box ml={1}>
              (7) 革の硬さ：
              <Box component="span" fontWeight="bold">
                {state.leatherHardness.label}
              </Box>
            </Box>
            <Box ml={1}>
              (8) 芯の強さ：
              <Box component="span" fontWeight="bold">
                {state.coreMaterialHardness.label}
              </Box>
            </Box>
            <Box ml={1}>
              (9) 芯の厚さ：
              <Box component="span" fontWeight="bold">
                {state.coreMaterialThickness.label}
              </Box>
            </Box>
            <Box ml={1}>
              (10) 指カバー：
              <Box component="span" fontWeight="bold">
                {state.fingerGuardType.label}
              </Box>
            </Box>
            <Box ml={1}>
              (11) 座ブトンスポンジ：
              <Box component="span" fontWeight="bold">
                {state.zabutonSponge.label}
              </Box>
            </Box>
            <Box ml={1}>
              (12) EX機能：
              <Box component="span" fontWeight="bold">
                {state.exFunction.label}
              </Box>
            </Box>
            <Box ml={1}>
              (13) ピンキーパターン：
              <Box component="span" fontWeight="bold">
                {state.pinkiePattern.label}
              </Box>
            </Box>
            <Box ml={1}>
              (14) TB刻印：
              <Box component="span" fontWeight="bold">
                {state.tbEngraved.label}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box fontWeight="bold" fontSize="16px">
              カラー・デザイン項目
            </Box>
            <Box ml={1}>
              (15) 捕球面カラー：
              <Box component="span" fontWeight="bold" color={state.catchFace.color === '#fff' ? 'black' : state.catchFace.color}>
                {state.catchFace.label}
              </Box>
            </Box>
            <Box ml={1}>
              (16) ウェブカラー：
              <Box component="span" fontWeight="bold" color={state.web.color === '#fff' ? 'black' : state.web.color}>
                {state.web.label}
              </Box>
            </Box>
            <Box ml={1}>
              (17) 親指マチカラー：
              <Box component="span" fontWeight="bold" color={state.thumbMachi.color === '#fff' ? 'black' : state.thumbMachi.color}>
                {state.thumbMachi.label}
              </Box>
            </Box>
            <Box ml={1}>
              (18) 小指マチカラー：
              <Box component="span" fontWeight="bold" color={state.littleMachi.color === '#fff' ? 'black' : state.littleMachi.color}>
                {state.littleMachi.label}
              </Box>
            </Box>
            <Box ml={1}>
              (19) ヘリ革カラー：
              <Box component="span" fontWeight="bold" color={state.edge.color === '#fff' ? 'black' : state.edge.color}>
                {state.edge.label}
              </Box>
            </Box>
            <Box ml={1}>
              (20) 革紐カラー：
              <Box component="span" fontWeight="bold" color={state.strap.color === '#fff' ? 'black' : state.strap.color}>
                {state.strap.label}
              </Box>
            </Box>
            <Box ml={1}>
              (21) ステッチカラー：
              <Box component="span" fontWeight="bold" color={state.stitch.color === '#fff' ? 'black' : state.stitch.color}>
                {state.stitch.label}
              </Box>
            </Box>
            <Box ml={1}>
              (22) ターゲット加工：
              <Box component="span" fontWeight="bold" color={state.target.color === '#fff' ? 'black' : state.target.color}>
                {state.target.label}
              </Box>
            </Box>
            <Box ml={1}>
              (23) 手首裏の素材：
              <Box component="span" fontWeight="bold">
                {state.listLiningsMaterial.label}
              </Box>
            </Box>
            <Box ml={1}>
              (24) ハミダシ：
              <Box component="span" fontWeight="bold">
                {state.hamidashi.label}
              </Box>
            </Box>
            <Box ml={1}>
              (25) ラベル：
              <Box component="span" fontWeight="bold">
                {state.hatakeyamaLabel.label}
              </Box>
            </Box>
          </Box>
          <Box>
            {state.embroideries.map((embroidery, i) => (
              <React.Fragment key={`${i}`}>
                {embroidery.embroideryContent.length > 0 && (
                  <Box mb={2}>
                    <Box fontWeight="bold" fontSize="16px">
                      刺繍項目{i + 1}
                    </Box>
                    <Box ml={1}>
                      (26) 書式：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryTypeFace.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (27) 位置：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryPosition.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (28) 刺繍カラー：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryColor.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (29) 影カラー：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryShadowColor.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (30) 刺繍内容：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryContent}
                      </Box>
                    </Box>
                  </Box>
                )}
              </React.Fragment>
            ))}
            {/* <Box>備考</Box> */}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          閉じる
        </Button>
        <Button variant="contained" onClick={() => handleGenPdf(state)}>
          ダウンロード
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PdfDialog
