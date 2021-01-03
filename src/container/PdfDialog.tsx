import React from 'react'
import { Box, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core'
import { State } from 'src/types'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

const handleGenPdf = () => {
  pdfMake.fonts = {
    GenYoMin: {
      normal: 'ipaexm.ttf',
      // bold: 'GenYoMinJP-Bold.ttf',
    },
  }
  const docDefine = {
    content: [
      {
        text: 'これはダウンロード用のPDFです',
        style: { fontSize: 12 },
      },
    ],
    defaultStyle: { font: 'GenYoMin' },
  }

  pdfMake.createPdf(docDefine).download()
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
              (10) ハミダシ：
              <Box component="span" fontWeight="bold">
                {state.hamidashiType.label}
              </Box>
            </Box>
            <Box ml={1}>
              (11) 指カバー：
              <Box component="span" fontWeight="bold">
                {state.fingerGuardType.label}
              </Box>
            </Box>
            <Box ml={1}>
              (12) 座ブトンスポンジ：
              <Box component="span" fontWeight="bold">
                {state.zabutonSponge.label}
              </Box>
            </Box>
            <Box ml={1}>
              (13) EX機能：
              <Box component="span" fontWeight="bold">
                {state.exFunction.label}
              </Box>
            </Box>
            <Box ml={1}>
              (14) ピンキーパターン：
              <Box component="span" fontWeight="bold">
                {state.pinkiePattern.label}
              </Box>
            </Box>
            <Box ml={1}>
              (15) TB刻印：
              <Box component="span" fontWeight="bold">
                {state.tbEngraved.label}
              </Box>
            </Box>
            <Box ml={1}>
              (16) 手首裏の素材：
              <Box component="span" fontWeight="bold">
                {state.listLiningsMaterial.label}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box fontWeight="bold" fontSize="16px">
              カラー・デザイン項目
            </Box>
            <Box ml={1}>
              (15) 捕球面カラー：
              <Box component="span" fontWeight="bold" color={state.leatherColor.color === '#fff' ? 'black' : state.leatherColor.color}>
                {state.leatherColor.label}
              </Box>
            </Box>
            <Box ml={1}>
              (15) ウェブカラー：
              <Box component="span" fontWeight="bold" color={state.webColor.color === '#fff' ? 'black' : state.webColor.color}>
                {state.webColor.label}
              </Box>
            </Box>
            <Box ml={1}>
              (15) 親指マチカラー：
              <Box component="span" fontWeight="bold" color={state.thumbMachiColor.color === '#fff' ? 'black' : state.thumbMachiColor.color}>
                {state.thumbMachiColor.label}
              </Box>
            </Box>
            <Box ml={1}>
              (15) 小指マチカラー：
              <Box component="span" fontWeight="bold" color={state.littleMachiColor.color === '#fff' ? 'black' : state.littleMachiColor.color}>
                {state.littleMachiColor.label}
              </Box>
            </Box>
            <Box ml={1}>
              (17) ヘリ革カラー：
              <Box component="span" fontWeight="bold" color={state.edgeColor.color === '#fff' ? 'black' : state.edgeColor.color}>
                {state.edgeColor.label}
              </Box>
            </Box>
            <Box ml={1}>
              (16) 革紐カラー：
              <Box component="span" fontWeight="bold" color={state.leatherString.color === '#fff' ? 'black' : state.leatherString.color}>
                {state.leatherString.label}
              </Box>
            </Box>
            <Box ml={1}>
              (18) ターゲット加工：
              <Box component="span" fontWeight="bold" color={state.targetSet.color === '#fff' ? 'black' : state.targetSet.color}>
                {state.targetSet.label}
              </Box>
            </Box>
            <Box ml={1}>
              (19) ラベル：
              <Box component="span" fontWeight="bold">
                {state.hatakeyamaLabel.label}
              </Box>
            </Box>
            <Box ml={1}>
              (20) ステッチカラー：
              <Box component="span" fontWeight="bold" color={state.stitchColor.color === '#fff' ? 'black' : state.stitchColor.color}>
                {state.stitchColor.label}
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
                      (21) 書式：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryTypeFace.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (22) 位置：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryPosition.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (23) 刺繍カラー：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryColor.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (24) 影カラー：
                      <Box component="span" fontWeight="bold">
                        {embroidery.embroideryShadowColor.label}
                      </Box>
                    </Box>
                    <Box ml={1}>
                      (25) 刺繍内容：
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
          close
        </Button>
        <Button variant="contained" onClick={handleGenPdf}>
          ダウンロード
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PdfDialog
