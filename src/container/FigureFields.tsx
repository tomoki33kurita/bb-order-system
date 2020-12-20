import React from 'react'
import { Box, AppBar, Tabs, Tab } from '@material-ui/core'
import TabPanel from 'src/components/TabPanel'

const a11yProps = (index: number) => {
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
    <>
      <TabPanel imgPath={'/mitt_front.jpg'} imgAlt={'catchersMitt_back'} value={value} index={0} />
      <TabPanel imgPath={'/mitt_back.jpg'} imgAlt={'catchersMitt_back'} value={value} index={1} />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="捕球面" {...a11yProps(0)} />
          <Tab label="背面" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </>
  )
}
export default FigureFields
