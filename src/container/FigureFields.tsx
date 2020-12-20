import React from 'react'
import { Box, AppBar, Tabs, Tab, Button, Grid } from '@material-ui/core'
import TabPanel from 'src/components/TabPanel'

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const FigureFields: React.FC = () => {
  // todo あとでuseReducerを突っ込んでまとめて状態管理する
  const [value, setValue] = React.useState(0)
  const handleChange = (event: any, newValue: number) => setValue(newValue)

  return (
    <Box position="sticky" top={0}>
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
        <Button variant="contained" color="primary">
          最終確認
        </Button>
      </Box>
    </Box>
  )
}
export default FigureFields
