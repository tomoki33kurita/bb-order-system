import React from 'react'
import { Box } from '@material-ui/core'
import AccordionRadio from 'src/components/molecules/AccordionRadio'
import SelectCard from 'src/components/molecules/SelectCard'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  leatherColorObjs,
  liningsTypeObjs,
  leatherStringColorObjs,
  hatakeyamaLabelObjs,
  hamidashiTypeObjs,
  stitchColorObjs,
  targetSetObjs,
  listLiningsMaterialObjs,
} from 'src/constants/radioObjs/coloring'
import {
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_LININGS_TYPE,
  SET_LEATHER_STRING,
  SET_LABEL,
  SET_STITCH_COLOR,
  SET_TARGET_SET,
  SET_HAMIDASHI_TYPE,
  SET_WEB_COLOR,
  SET_THUMB_MACHI_COLOR,
  SET_LITTLE_MACHI_COLOR,
  SET_LIST_LININGS_MATERIAL,
  SET_THUMB_HOOK,
} from 'src/constants/ActionTypes'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const ColoringSet: React.FC<Props> = ({ state, value, dispatch }) => {
  const {
    leatherColor,
    edgeColor,
    targetSet,
    leatherString,
    liningsType,
    hatakeyamaLabel,
    stitchColor,
    hamidashiType,
    webColor,
    thumbMachiColor,
    littleMachiColor,
    listLiningsMaterial,
    thumbHook,
  } = state

  const handle = {
    leatherColor: (selected: string) => dispatch({ type: SET_LEATHER_COLOR, leatherColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    edgeColor: (selected: string) => dispatch({ type: SET_EDGE_COLOR, edgeColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    targetSet: (selected: string) => {
      dispatch({ type: SET_TARGET_SET, targetSet: targetSetObjs.filter((prev) => prev.value === selected)[0] })
    },
    leatherString: (selected: string) => dispatch({ type: SET_LEATHER_STRING, leatherString: leatherStringColorObjs.filter((prev) => prev.value === selected)[0] }),
    label: (selected: string) => dispatch({ type: SET_LABEL, hatakeyamaLabel: hatakeyamaLabelObjs.filter((prev) => prev.value === selected)[0] }),
    liningsType: (selected: string) => dispatch({ type: SET_LININGS_TYPE, liningsType: liningsTypeObjs.filter((prev) => prev.value === selected)[0] }),
    stitchColor: (selected: string) => dispatch({ type: SET_STITCH_COLOR, stitchColor: stitchColorObjs.filter((prev) => prev.value === selected)[0] }),
    hamidashiType: (selected: string) => dispatch({ type: SET_HAMIDASHI_TYPE, hamidashiType: hamidashiTypeObjs.filter((prev) => prev.value === selected)[0] }),
    webColor: (selected: string) => dispatch({ type: SET_WEB_COLOR, webColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    thumbMachiColor: (selected: string) => dispatch({ type: SET_THUMB_MACHI_COLOR, thumbMachiColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    littleMachiColor: (selected: string) => dispatch({ type: SET_LITTLE_MACHI_COLOR, littleMachiColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    listLiningsMaterial: (selected: string) =>
      dispatch({
        type: SET_LIST_LININGS_MATERIAL,
        listLiningsMaterial: listLiningsMaterialObjs.filter((prev) => prev.value === selected)[0],
      }),
    thumbHook: (selected: string) => dispatch({ type: SET_THUMB_HOOK, thumbHook: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
  }
  return (
    <TabPanel value={value} index={1}>
      <SelectCard
        summary={'捕球面カラー'}
        selectedLabel={leatherColor.label}
        selectedColor={leatherColor.color}
        defaultValue={leatherColor.value}
        objects={leatherColorObjs}
        handleChange={handle.leatherColor}
      />
      <SelectCard
        summary={'ウェブカラー'}
        selectedLabel={webColor.label}
        selectedColor={webColor.color}
        defaultValue={webColor.value}
        objects={leatherColorObjs}
        handleChange={handle.webColor}
      />
      <SelectCard
        summary={'親指マチカラー'}
        selectedLabel={thumbMachiColor.label}
        selectedColor={thumbMachiColor.color}
        defaultValue={thumbMachiColor.value}
        objects={leatherColorObjs}
        handleChange={handle.thumbMachiColor}
      />
      <SelectCard
        summary={'小指マチカラー'}
        selectedLabel={littleMachiColor.label}
        selectedColor={littleMachiColor.color}
        defaultValue={littleMachiColor.value}
        objects={leatherColorObjs}
        handleChange={handle.littleMachiColor}
        disabled={targetSet.value !== 'none'}
        setTarget={targetSet.value !== 'none'}
      />
      <SelectCard
        summary={'ターゲット加工'}
        selectedLabel={targetSet.label}
        selectedColor={targetSet.color}
        defaultValue={targetSet.value}
        objects={targetSetObjs}
        handleChange={handle.targetSet}
      />

      <SelectCard
        summary={'ヘリ革カラー'}
        selectedLabel={edgeColor.label}
        selectedColor={edgeColor.color}
        defaultValue={edgeColor.value}
        objects={leatherColorObjs}
        handleChange={handle.edgeColor}
      />
      <SelectCard
        summary={'親指掛け紐カラー'}
        selectedLabel={thumbHook.label}
        selectedColor={thumbHook.color}
        defaultValue={thumbHook.value}
        objects={leatherColorObjs}
        handleChange={handle.thumbHook}
      />
      <SelectCard
        summary={'革紐'}
        selectedLabel={leatherString.label}
        selectedColor={leatherString.color}
        defaultValue={leatherString.value}
        objects={leatherStringColorObjs}
        handleChange={handle.leatherString}
      />
      <SelectCard
        summary={'ステッチカラー'}
        selectedLabel={stitchColor.label}
        selectedColor={stitchColor.color}
        defaultValue={stitchColor.value}
        objects={stitchColorObjs}
        handleChange={handle.stitchColor}
      />

      <SelectCard
        summary={'手首裏部の素材'}
        selectedLabel={listLiningsMaterial.label}
        selectedColor={listLiningsMaterial.color}
        defaultValue={listLiningsMaterial.value}
        objects={listLiningsMaterialObjs}
        handleChange={handle.listLiningsMaterial}
      />

      <SelectCard
        summary={'裏革カラー'}
        selectedLabel={liningsType.label}
        selectedColor={liningsType.color}
        defaultValue={liningsType.value}
        objects={liningsTypeObjs}
        handleChange={handle.liningsType}
      />
      <SelectCard summary={'ハミダシ'} selectedLabel={hamidashiType.label} defaultValue={hamidashiType.value} objects={hamidashiTypeObjs} handleChange={handle.hamidashiType} />
      <SelectCard summary={'ラベル'} selectedLabel={hatakeyamaLabel.label} defaultValue={hatakeyamaLabel.value} objects={hatakeyamaLabelObjs} handleChange={handle.label} />

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
