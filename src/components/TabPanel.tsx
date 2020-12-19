import React from 'react'
import { Box } from '@material-ui/core'

type Props = {
  imgPath: string
  imgAlt: string
  value: number
  index: number
}

const TabPanel: React.FC<Props> = ({ imgPath, imgAlt, value, index }) => {
  return (
    <>
      {index === value && (
        <Box m={1} p={5} border={'solid 1px #eee'} bgcolor={'#eee'} textAlign="center">
          <img src={imgPath} alt={imgAlt} height={400} />
        </Box>
      )}
    </>
  )
}
export default TabPanel
