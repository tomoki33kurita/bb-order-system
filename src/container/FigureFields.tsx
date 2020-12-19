import React from 'react'
import { Box } from '@material-ui/core'

const FigureFields: React.FC = () => {
  return (
    <Box m={1} p={5} border={'solid 1px #eee'} bgcolor={'#eee'}>
      <img src="/mitt_back.jpg" alt="catchersMitt" width={600} />
    </Box>
  )
}
export default FigureFields
