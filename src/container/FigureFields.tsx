import React from 'react'
import { Box, AppBar, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'src/components/molecules/TabPanel'
import { State } from 'src/types'
import PdfDialog from 'src/container/PdfDialog'
import FigureFront from 'src/container/FigureFront'
import FigureBack from 'src/container/FigureBack'

// const devToolStyle = { backgroundImage: `url(${'/mitt_model_back.jpeg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '60%' }

export const a11yProps = (index: number): any => {
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
  const [value, setValue] = React.useState(1)
  const handleChange = (event: any, newValue: number) => setValue(newValue)
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //// this is devTools
  // const [cordinateX, setCordinateX] = React.useState(0)
  // const [cordinateY, setCordinateY] = React.useState(0)
  // const [isCopy, setCopy] = React.useState(false)
  // const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
  //   // eslint-disable-next-line
  //   // @ts-ignore
  //   const rect = e.target.getBoundingClientRect()
  //   const x = parseInt(`${e.clientX - rect.left}`)
  //   const y = parseInt(`${e.clientY - rect.top}`)
  //   setCordinateX(x)
  //   setCordinateY(y)
  //   setCopy(false)
  // }

  return (
    <Box position="sticky" top={0}>
      <PdfDialog state={state} open={open} handleClose={handleClose} />
      <TabPanel value={value} index={0}>
        <FigureFront
          parts={{
            leatherStrapColor: state.leatherString.color,
            leatherColor: state.leatherColor.color,
            webColor: state.webColor.color,
            edgeColor: state.edgeColor.color,
            stitchColor: state.stitchColor.color,
            targetColor: state.targetSet.color,
            cutSurfaceColor: state.hamidashiType.color,
            thumbMachiColor: state.thumbMachiColor.color,
            littleMachiColor: state.littleMachiColor.color,
            moutonColor: state.listLiningsMaterial.color,
            thumbHookColor: state.thumbHook.color,
            littleHookColor: state.littleHook.color,
          }}
          // 開発で座標を取得したいときは以下を有効にする
          // devTools={{ cordinateX, cordinateY, isCopy, setCopy }}
          // devToolStyle={devToolStyle}
          // handleCoordinate={handleCoordinate}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FigureBack
          parts={{
            leatherStrapColor: state.leatherString.color,
            leatherColor: state.leatherColor.color,
            webColor: state.webColor.color,
            edgeColor: state.edgeColor.color,
            stitchColor: state.stitchColor.color,
            targetColor: state.targetSet.color,
            cutSurfaceColor: state.hamidashiType.color,
            thumbMachiColor: state.thumbMachiColor.color,
            littleMachiColor: state.littleMachiColor.color,
            moutonColor: state.listLiningsMaterial.color,
            thumbHookColor: state.thumbHook.color,
            littleHookColor: state.littleHook.color,
            listBeltColor: state.listBeltColor.color,
            fingerCoverColor: state.fingerCoverColor.color,
            fingerGuardType: state.fingerGuardType.value,
            bagFoundationColor: state.bagFoundationColor.color,
            ringAndLittleBagColor: state.ringAndLittleBagColor.color,
            middleBagColor: state.middleBagColor.color,
            indexAndThumbBagColor: state.indexAndThumbBagColor.color,
            shellarmoveColor: state.shellarmoveColor.color,
            liningsLeatherColor: state.liningsType.color,
            isZabuton: state.zabutonSponge.value,
          }}
          // 開発で座標を取得したいときは以下を有効にする
          // devTools={{ cordinateX, cordinateY, isCopy, setCopy }}
          // devToolStyle={devToolStyle}
          // handleCoordinate={handleCoordinate}
        />
      </TabPanel>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="捕球面" {...a11yProps(0)} />
          <Tab label="背面" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Box display="flex" justifyContent="space-around" mt={5}>
        <Button variant="outlined">リセット</Button>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          オーダー内容確認
        </Button>
      </Box>
    </Box>
  )
}
export default FigureFields
