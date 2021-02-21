import React from 'react'
import { Box, AppBar, Tabs, Tab } from '@material-ui/core'
import TabPanel from 'src/components/molecules/TabPanel'
import { State } from 'src/types'
import FigureFront from 'src/container/FigureFront'
import FigureBack from 'src/container/FigureBack'

// const devToolStyle = { backgroundImage: `url(${'/mitt_model_back.jpeg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '60%', maxWidth: '100%' }

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
  const [value, setValue] = React.useState(1)
  const handleChange = (event: any, newValue: number) => setValue(newValue)
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
      <TabPanel value={value} index={0}>
        <FigureFront
          parts={{
            strapColor: state.strap.color,
            leatherColor: state.catchFace.color,
            webColor: state.web.color,
            edgeColor: state.edge.color,
            stitchColor: state.stitch.color,
            targetColor: state.target.color,
            cutSurfaceColor: state.hamidashi.color,
            thumbMachiColor: state.thumbMachi.color,
            littleMachiColor: state.littleMachi.color,
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
            strapColor: state.strap.color,
            leatherColor: state.catchFace.color,
            webColor: state.web.color,
            edgeColor: state.edge.color,
            stitchColor: state.stitch.color,
            targetColor: state.target.color,
            cutSurfaceColor: state.hamidashi.color,
            thumbMachiColor: state.thumbMachi.color,
            littleMachiColor: state.littleMachi.color,
            moutonColor: state.listLiningsMaterial.color,
            thumbHookColor: state.thumbHook.color,
            littleHookColor: state.littleHook.color,
            listBeltColor: state.listBelt.color,
            indexCoverColor: state.indexCover.color,
            indexCoverType: state.fingerGuardType.value,
            bagFoundationColor: state.bagFoundation.color,
            ringAndLittleColor: state.ringAndLittle.color,
            middleColor: state.middle.color,
            indexAndThumbColor: state.indexAndThumb.color,
            shellarmoveColor: state.shellarmove.color,
            liningsColor: state.linings.color,
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
    </Box>
  )
}
export default FigureFields
