import React from 'react'
import { Box, AppBar, Tabs, Tab, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core'
import TabPanel from 'src/components/molecules/TabPanel'
import { State } from 'src/types'

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type Props = {
  state: State
}

const FigureFields: React.FC<Props> = ({ state }) => {
  // todo あとでuseReducerを突っ込んでまとめて状態管理する
  const [value, setValue] = React.useState(0)
  const handleChange = (event: any, newValue: number) => setValue(newValue)

  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box position="sticky" top={0}>
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
                (15) 本体カラー：
                <Box component="span" fontWeight="bold">
                  {state.leatherColor.label}
                </Box>
              </Box>
              <Box ml={1}>
                (16) 革紐カラー：
                <Box component="span" fontWeight="bold">
                  {state.leatherString.label}
                </Box>
              </Box>
              <Box ml={1}>
                (17) ヘリ革カラー：
                <Box component="span" fontWeight="bold">
                  {state.edgeColor.label}
                </Box>
              </Box>
              <Box ml={1}>
                (18) ターゲット加工：
                <Box component="span" fontWeight="bold">
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
                <Box component="span" fontWeight="bold">
                  {state.stitchColor.label}
                </Box>
              </Box>
            </Box>
            <Box>
              {state.embroideries.map((embroidery, i) => (
                <>
                  {embroidery.embroideryContent.length > 0 && (
                    <Box mb={2} key={`${i}`}>
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
                </>
              ))}
              {/* <Box>備考</Box> */}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            close
          </Button>
          <Button variant="contained">ダウンロード</Button>
        </DialogActions>
      </Dialog>
      <TabPanel value={value} index={0}>
        <img src="/mitt_front.jpg" alt="catchersMitt_front" height={400} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src="/mitt_back.jpg" alt="catchersMitt_back" height={400} />
      </TabPanel>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="捕球面" {...a11yProps(0)} />
          <Tab label="背面" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Box display="flex" justifyContent="space-around" mt={5}>
        <Button variant="outlined">リセット</Button>
        <Button variant="contained" onClick={handleOpen}>
          オーダー内容確認
        </Button>
        <Button variant="contained" color="primary">
          最終確認
        </Button>
      </Box>
    </Box>
  )
}
export default FigureFields
