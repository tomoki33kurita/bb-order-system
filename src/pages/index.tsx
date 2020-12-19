import React from 'react'
import { Box, Grid } from '@material-ui/core'
import FigureFields from 'src/container/FigureFields'
import Designation from 'src/container/Designation'

const Index: React.FC = () => {
  return (
    <Box>
      ハタケヤマ オーダーシュミレーション
      <Grid container>
        <Grid item md={6}>
          <FigureFields />
        </Grid>
        <Grid item md={6}>
          <Designation />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
