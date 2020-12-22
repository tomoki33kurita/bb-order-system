import React from 'react'
import { Box, TextField, Card, Accordion, AccordionSummary, AccordionDetails, Fab, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionRadio from 'src/components/molecules/AccordionRadio'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import { embroideryTypeFaceObjs, embroideryPositionObjs, embroideryColorObjs, embroideryShadowColorObjs } from 'src/constants/radioObjs/embroidery'
import { SET_EMBROIDERIES, ADD_EMBROIDERY, REMOVE_EMBROIDERY } from 'src/constants/ActionTypes'
import { initialEmbroState } from 'src/hooks/stateReducer'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const EmbroiderySet: React.FC<Props> = ({ state, value, dispatch }) => {
  const { embroideries } = state

  const updateEmbroideries = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number,
    type: 'embroideryTypeFace' | 'embroideryPosition' | 'embroideryColor' | 'embroideryShadowColor' | 'embroideryContent',
    objs?: { label: string; value: string; color?: string }[]
  ) => {
    const newEmbroideries =
      type === 'embroideryContent'
        ? { ...embroideries[i], [type]: event.target.value }
        : { ...embroideries[i], [type]: objs.filter((prev) => prev.value === event.target.value)[0] }

    return embroideries.reduce((a, c) => {
      if (c.id === i) a.push(newEmbroideries)
      if (c.id !== i) a.push(c)
      return a
    }, [])
  }

  const handle = {
    embroideryTypeFace: (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(event, i, 'embroideryTypeFace', embroideryTypeFaceObjs) })
    },
    embroideryPosition: (event: React.ChangeEvent<HTMLInputElement>, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(event, i, 'embroideryPosition', embroideryPositionObjs) }),
    embroideryColor: (event: React.ChangeEvent<HTMLInputElement>, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(event, i, 'embroideryColor', embroideryColorObjs) }),
    embroideryShadowColor: (event: React.ChangeEvent<HTMLInputElement>, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(event, i, 'embroideryShadowColor', embroideryShadowColorObjs) }),
    embroideryContent: (event: React.ChangeEvent<HTMLInputElement>, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(event, i, 'embroideryContent') }),
  }
  const handleAddForm = () => dispatch({ type: ADD_EMBROIDERY, embroideries: embroideries.concat({ ...initialEmbroState, id: embroideries.length }) })
  const handleRemoveForm = () =>
    dispatch({ type: REMOVE_EMBROIDERY, embroideries: embroideries.filter((prev) => prev.id !== embroideries.length - 1) })

  return (
    <>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button onClick={handleAddForm} disabled={embroideries.length === 6} variant="outlined" style={{ marginRight: '4px' }}>
          ＋
        </Button>
        <Button onClick={handleRemoveForm} disabled={embroideries.length === 1} variant="outlined" style={{ marginLeft: '4px' }}>
          ー
        </Button>
      </Box>

      <TabPanel value={value} index={2}>
        {embroideries.map((embroidery, i) => (
          <Box key={`${i}`} my={1}>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
                    <ExpandMoreIcon />
                  </Fab>
                }
              >
                {`刺繍設定 ${i + 1}`}
              </AccordionSummary>
              <AccordionDetails>
                <Box m={0.5} ml={'auto'} width={'90%'}>
                  <AccordionRadio
                    summary={'書体'}
                    selectedLabel={embroidery.embroideryTypeFace?.label}
                    defaultValue={embroidery.embroideryTypeFace?.value}
                    objects={embroideryTypeFaceObjs}
                    index={i}
                    handleChange={handle.embroideryTypeFace}
                  />
                </Box>
                <Box m={0.5} ml={'auto'} width={'90%'}>
                  <AccordionRadio
                    summary={'位置'}
                    selectedLabel={embroidery.embroideryPosition?.label}
                    defaultValue={embroidery.embroideryPosition?.value}
                    objects={embroideryPositionObjs}
                    index={i}
                    handleChange={handle.embroideryPosition}
                  />
                </Box>
                <Box m={0.5} ml={'auto'} width={'90%'}>
                  <AccordionRadio
                    summary={'刺繍カラー'}
                    selectedLabel={embroidery.embroideryColor?.label}
                    selectedColor={embroidery.embroideryColor?.color}
                    defaultValue={embroidery.embroideryColor?.value}
                    objects={embroideryColorObjs}
                    index={i}
                    handleChange={handle.embroideryColor}
                  />
                </Box>
                <Box m={0.5} ml={'auto'} width={'90%'}>
                  <AccordionRadio
                    summary={'影カラー'}
                    selectedLabel={embroidery.embroideryShadowColor?.label}
                    selectedColor={embroidery.embroideryShadowColor?.color}
                    defaultValue={embroidery.embroideryShadowColor?.value}
                    objects={embroideryShadowColorObjs}
                    index={i}
                    handleChange={handle.embroideryShadowColor}
                  />
                </Box>
                <Box m={0.5} ml={'auto'} width={'90%'}>
                  <Card>
                    <Box display="flex" alignItems="center" mx={1} my={2}>
                      <Box mr={2}>刺繍内容</Box>
                      <TextField
                        multiline
                        onChange={(event) => {
                          handle.embroideryContent(event as React.ChangeEvent<HTMLInputElement>, i)
                        }}
                        variant="outlined"
                        rows={2}
                        style={{ width: '75%' }}
                      />
                    </Box>
                  </Card>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </TabPanel>
    </>
  )
}
export default EmbroiderySet
