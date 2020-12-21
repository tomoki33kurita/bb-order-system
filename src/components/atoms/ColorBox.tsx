import React from 'react'
import { Box } from '@material-ui/core'

type Props = {
  bgcolor: string
}

const ColorBox: React.FC<Props> = ({ bgcolor }) => (
  <Box display="inline-block" border="solid 1px #eee" bgcolor={bgcolor} width={'12px'} height={'12px'} mr={0.5} />
)

export default ColorBox
