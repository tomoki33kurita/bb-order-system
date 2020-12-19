import React from 'react'
import { Box, Grid } from '@material-ui/core'
import FigureFields from 'src/container/FigureFields'
import Designation from 'src/container/Designation'

const Index: React.FC = () => {
  return (
    <Box p={2}>
      <Box p={2}>ハタケヤマ オーダーシュミレーション</Box>
      <Grid container>
        <Grid item md={7}>
          <FigureFields />
        </Grid>
        <Grid item md={5}>
          <Designation />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
