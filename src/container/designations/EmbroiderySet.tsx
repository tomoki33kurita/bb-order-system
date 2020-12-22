import React from 'react'
import { Box, TextField, Card } from '@material-ui/core'
import AccordionRadio from 'src/components/molecules/AccordionRadio'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import { embroideryTypeFaceObjs, embroideryPositionObjs, embroideryColorObjs, embroideryShadowColorObjs } from 'src/constants/radioObjs/embroidery'
import {
  SET_EMBROIDERY_TYPE_FACE,
  SET_EMBROIDERY_POSITION,
  SET_EMBROIDERY_COLOR,
  SET_EMBROIDERY_SHADOW_COLOR,
  SET_EMBROIDERY_CONTENT,
} from 'src/constants/ActionTypes'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const EmbroiderySet: React.FC<Props> = ({ state, value, dispatch }) => {
  const { embroideryTypeFace, embroideryPosition, embroideryColor, embroideryShadowColor } = state

  const handle = {
    embroideryTypeFace: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EMBROIDERY_TYPE_FACE, embroideryTypeFace: embroideryTypeFaceObjs.filter((prev) => prev.value === event.target.value)[0] }),
    embroideryPosition: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EMBROIDERY_POSITION, embroideryPosition: embroideryPositionObjs.filter((prev) => prev.value === event.target.value)[0] }),
    embroideryColor: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EMBROIDERY_COLOR, embroideryColor: embroideryColorObjs.filter((prev) => prev.value === event.target.value)[0] }),
    embroideryShadowColor: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: SET_EMBROIDERY_SHADOW_COLOR,
        embroideryShadowColor: embroideryShadowColorObjs.filter((prev) => prev.value === event.target.value)[0],
      }),
    embroideryContent: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EMBROIDERY_CONTENT, embroideryContent: event.target.value }),
  }
  return (
    <TabPanel value={value} index={2}>
      <AccordionRadio
        summary={'書体'}
        selectedLabel={embroideryTypeFace.label}
        defaultValue={embroideryTypeFace.value}
        objects={embroideryTypeFaceObjs}
        handleChange={handle.embroideryTypeFace}
      />
      <AccordionRadio
        summary={'位置'}
        selectedLabel={embroideryPosition.label}
        defaultValue={embroideryPosition.value}
        objects={embroideryPositionObjs}
        handleChange={handle.embroideryPosition}
      />
      <AccordionRadio
        summary={'刺繍カラー'}
        selectedLabel={embroideryColor.label}
        selectedColor={embroideryColor.color}
        defaultValue={embroideryColor.value}
        objects={embroideryColorObjs}
        handleChange={handle.embroideryColor}
      />
      <AccordionRadio
        summary={'影カラー'}
        selectedLabel={embroideryShadowColor.label}
        selectedColor={embroideryShadowColor.color}
        defaultValue={embroideryShadowColor.value}
        objects={embroideryShadowColorObjs}
        handleChange={handle.embroideryShadowColor}
      />
      <Card>
        <Box display="flex" alignItems="center" mx={1} my={2}>
          <Box mr={2}>刺繍内容</Box>
          <TextField multiline onChange={handle.embroideryContent} variant="outlined" rows={2} style={{ width: '75%' }} />
        </Box>
      </Card>
    </TabPanel>
  )
}
export default EmbroiderySet
