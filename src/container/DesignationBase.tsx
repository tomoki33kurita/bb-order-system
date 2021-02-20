import React from 'react'
import { Box, AppBar, Tabs, Tab, Button } from '@material-ui/core'
import { State, Action } from 'src/types'
import { a11yProps } from 'src/container/FigureFields'
import BaseSet from 'src/container/designations/BaseSet'
import ColoringSet from 'src/container/designations/ColoringSet'
import EmbroiderySet from 'src/container/designations/EmbroiderySet'
import PdfDialog from 'src/container/PdfDialog'

type Props = {
  state: State
  dispatch: React.Dispatch<Action>
}

const DesignationBase: React.FC<Props> = ({ state, dispatch }) => {
  const [value, setValue] = React.useState(1)
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleChange = (event: any, newValue: number) => setValue(newValue)

  return (
    <Box mt={2} border={'solid 1px green'}>
      <PdfDialog state={state} open={open} handleClose={handleClose} />
      <AppBar position="sticky" style={{ top: 0 }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="基本設定" {...a11yProps(0)} />
          <Tab label="カラー設定" {...a11yProps(1)} />
          <Tab label="刺繍設定" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <BaseSet state={state} value={value} dispatch={dispatch} />
      <ColoringSet state={state} value={value} dispatch={dispatch} />
      <EmbroiderySet state={state} value={value} dispatch={dispatch} />
      <Box display="flex" justifyContent="space-around" mt={5}>
        <Button variant="outlined">リセット</Button>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          オーダー内容確認
        </Button>
      </Box>
    </Box>
  )
}
export default DesignationBase
