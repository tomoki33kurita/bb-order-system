import React from 'react'
import { Box } from '@material-ui/core'
import AccordionRadio from 'src/components/molecules/AccordionRadio'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  leatherColorObjs,
  liningsTypeObjs,
  leatherStringColorObjs,
  hatakeyamaLabelObjs,
  stitchColorObjs,
  targetSetObjs,
} from 'src/constants/radioObjs/coloring'
import {
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_LININGS_TYPE,
  SET_LEATHER_STRING,
  SET_LABEL,
  SET_STITCH_COLOR,
  SET_TARGET_SET,
} from 'src/constants/ActionTypes'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const ColoringSet: React.FC<Props> = ({ state, value, dispatch }) => {
  const { leatherColor, edgeColor, targetSet, leatherString, liningsType, hatakeyamaLabel, stitchColor } = state

  const handle = {
    leatherColor: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_LEATHER_COLOR, leatherColor: leatherColorObjs.filter((prev) => prev.value === event.target.value)[0] }),
    edgeColor: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EDGE_COLOR, edgeColor: leatherColorObjs.filter((prev) => prev.value === event.target.value)[0] }),
    targetSet: (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: SET_TARGET_SET, targetSet: targetSetObjs.filter((prev) => prev.value === event.target.value)[0] })
    },
    leatherString: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_LEATHER_STRING, leatherString: leatherStringColorObjs.filter((prev) => prev.value === event.target.value)[0] }),
    label: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_LABEL, hatakeyamaLabel: hatakeyamaLabelObjs.filter((prev) => prev.value === event.target.value)[0] }),
    liningsType: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_LININGS_TYPE, liningsType: liningsTypeObjs.filter((prev) => prev.value === event.target.value)[0] }),
    stitchColor: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_STITCH_COLOR, stitchColor: stitchColorObjs.filter((prev) => prev.value === event.target.value)[0] }),
  }
  return (
    <TabPanel value={value} index={1}>
      <AccordionRadio
        summary={'本体カラー'}
        selectedLabel={leatherColor.label}
        selectedColor={leatherColor.color}
        defaultValue={leatherColor.value}
        objects={leatherColorObjs}
        handleChange={handle.leatherColor}
      />
      <AccordionRadio
        summary={'革紐'}
        selectedLabel={leatherString.label}
        selectedColor={leatherString.color}
        defaultValue={leatherString.value}
        objects={leatherStringColorObjs}
        handleChange={handle.leatherString}
      />
      <AccordionRadio
        summary={'ヘリ革カラー'}
        selectedLabel={edgeColor.label}
        selectedColor={edgeColor.color}
        defaultValue={edgeColor.value}
        objects={leatherColorObjs}
        handleChange={handle.edgeColor}
      />
      <AccordionRadio
        summary={'ターゲット加工'}
        selectedLabel={targetSet.label}
        selectedColor={targetSet.color}
        defaultValue={targetSet.value}
        objects={targetSetObjs}
        handleChange={handle.targetSet}
      />
      <AccordionRadio
        summary={'裏革カラー'}
        selectedLabel={liningsType.label}
        selectedColor={liningsType.color}
        defaultValue={liningsType.value}
        objects={liningsTypeObjs}
        handleChange={handle.liningsType}
      />
      <AccordionRadio
        summary={'ラベル'}
        selectedLabel={hatakeyamaLabel.label}
        defaultValue={hatakeyamaLabel.value}
        objects={hatakeyamaLabelObjs}
        handleChange={handle.label}
      />
      {/* キャビティライン加工の項目作る */}
      <AccordionRadio
        summary={'ステッチカラー'}
        selectedLabel={stitchColor.label}
        selectedColor={stitchColor.color}
        defaultValue={stitchColor.value}
        objects={stitchColorObjs}
        handleChange={handle.stitchColor}
      />
    </TabPanel>
  )
}
export default ColoringSet
