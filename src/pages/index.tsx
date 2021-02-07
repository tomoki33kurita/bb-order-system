import React from 'react'
import { Box, Grid } from '@material-ui/core'
import FigureFields from 'src/container/FigureFields'
import DesignationBase from 'src/container/DesignationBase'
import { reducer, initialState } from 'src/hooks/stateReducer'

export const stateContext = React.createContext('')

const Index: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Box p={2}>
      <Box p={2}>
        <Box component="span" fontWeight="bold">
          硬式 / ゴールドオーダー
        </Box>
        を選択中
      </Box>
      <Grid container>
        <Grid item md={7}>
          <FigureFields state={state} />
        </Grid>
        <Grid item md={5}>
          <DesignationBase state={state} dispatch={dispatch} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
