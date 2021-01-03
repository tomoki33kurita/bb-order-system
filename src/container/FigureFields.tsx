import React from 'react'
import { Box, AppBar, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'src/components/molecules/TabPanel'
import { State } from 'src/types'
import PdfDialog from 'src/container/PdfDialog'
import FigureFront from 'src/container/FigureFront'

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
  const [value, setValue] = React.useState(0)
  const handleChange = (event: any, newValue: number) => setValue(newValue)

  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box position="sticky" top={0}>
      <PdfDialog state={state} open={open} handleClose={handleClose} />
      <TabPanel value={value} index={0}>
        <FigureFront
          leatherStrapColor={state.leatherString.color}
          leatherColor={state.leatherColor.color}
          webColor={state.webColor.color}
          edgeColor={state.edgeColor.color}
          stitchColor={state.stitchColor.color}
          targetColor={state.targetSet.color}
          cutSurfaceColor={state.hamidashiType.color}
          thumbMachiColor={state.thumbMachiColor.color}
          littleMachiColor={state.littleMachiColor.color}
          moutonColor={state.listLiningsMaterial.color}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src="/mitt_front.jpg" alt="catchersMitt_front" height={400} />
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
