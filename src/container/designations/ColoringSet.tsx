import React from 'react'
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
  partsObjs,
} from 'src/constants/radioObjs/coloring'
import {
  SET_SELECTED_PARTS,
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
  SET_LITTLE_HOOK,
  SET_LIST_BELT_COLOR,
  SET_FINGER_COVER_COLOR,
  SET_BAG_FOUNDATION_COLOR,
  SET_RING_AND_LITTLE_BAG_COLOR,
  SET_MIDDLE_BAG_COLOR,
  SET_INDEX_AND_THUMB_BAG_COLOR,
  SET_SHELLARMOVE_COLOR,
} from 'src/constants/ActionTypes'

interface SortType {
  catch_face: string
  web: string
}

const sortReducerType = { catch_face: SET_LEATHER_COLOR, web: SET_WEB_COLOR }

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const ColoringSet: React.FC<Props> = ({ state, value, dispatch }) => {
  const {
    parts,
    leather,
    web,
    // edgeColor,
    // targetSet,
    // leatherString,
    // liningsType,
    // hatakeyamaLabel,
    // stitchColor,
    // hamidashiType,
    // thumbMachiColor,
    // littleMachiColor,
    // listLiningsMaterial,
    // thumbHook,
    // littleHook,
    // listBeltColor,
    // fingerCoverColor,
    // bagFoundationColor,
    // ringAndLittleBagColor,
    // middleBagColor,
    // indexAndThumbBagColor,
    // shellarmoveColor,
  } = state

  const partKey = parts.value as keyof SortType
  console.log('中身', sortReducerType[partKey])
  // console.log('中身', selectedParts.value)
  const handle = {
    selectParts: (selected: string) => dispatch({ type: SET_SELECTED_PARTS, parts: partsObjs.filter((prev) => prev.value === selected)[0] }),
    leatherColor: (selected: string) => dispatch({ type: sortReducerType[partKey], leather: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    webColor: (selected: string) => dispatch({ type: sortReducerType[partKey], web: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // edgeColor: (selected: string) => dispatch({ type: SET_EDGE_COLOR, edgeColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // targetSet: (selected: string) => {
    //   dispatch({ type: SET_TARGET_SET, targetSet: targetSetObjs.filter((prev) => prev.value === selected)[0] })
    // },
    // leatherString: (selected: string) => dispatch({ type: SET_LEATHER_STRING, leatherString: leatherStringColorObjs.filter((prev) => prev.value === selected)[0] }),
    // label: (selected: string) => dispatch({ type: SET_LABEL, hatakeyamaLabel: hatakeyamaLabelObjs.filter((prev) => prev.value === selected)[0] }),
    // liningsType: (selected: string) => dispatch({ type: SET_LININGS_TYPE, liningsType: liningsTypeObjs.filter((prev) => prev.value === selected)[0] }),
    // stitchColor: (selected: string) => dispatch({ type: SET_STITCH_COLOR, stitchColor: stitchColorObjs.filter((prev) => prev.value === selected)[0] }),
    // hamidashiType: (selected: string) => dispatch({ type: SET_HAMIDASHI_TYPE, hamidashiType: hamidashiTypeObjs.filter((prev) => prev.value === selected)[0] }),
    // thumbMachiColor: (selected: string) => dispatch({ type: SET_THUMB_MACHI_COLOR, thumbMachiColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // littleMachiColor: (selected: string) => dispatch({ type: SET_LITTLE_MACHI_COLOR, littleMachiColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // listLiningsMaterial: (selected: string) =>
    //   dispatch({
    //     type: SET_LIST_LININGS_MATERIAL,
    //     listLiningsMaterial: listLiningsMaterialObjs.filter((prev) => prev.value === selected)[0],
    //   }),
    // thumbHook: (selected: string) => dispatch({ type: SET_THUMB_HOOK, thumbHook: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // littleHook: (selected: string) => dispatch({ type: SET_LITTLE_HOOK, littleHook: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // listBeltColor: (selected: string) => dispatch({ type: SET_LIST_BELT_COLOR, listBeltColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // fingerCoverColor: (selected: string) => dispatch({ type: SET_FINGER_COVER_COLOR, fingerCoverColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // bagFoundationColor: (selected: string) => dispatch({ type: SET_BAG_FOUNDATION_COLOR, bagFoundationColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // ringAndLittleBagColor: (selected: string) =>
    //   dispatch({ type: SET_RING_AND_LITTLE_BAG_COLOR, ringAndLittleBagColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // middleBagColor: (selected: string) => dispatch({ type: SET_MIDDLE_BAG_COLOR, middleBagColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // indexAndThumbBagColor: (selected: string) =>
    //   dispatch({ type: SET_INDEX_AND_THUMB_BAG_COLOR, indexAndThumbBagColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
    // shellarmoveColor: (selected: string) => dispatch({ type: SET_SHELLARMOVE_COLOR, shellarmoveColor: leatherColorObjs.filter((prev) => prev.value === selected)[0] }),
  }
  return (
    <TabPanel value={value} index={1}>
      <SelectCard
        summary={'パーツ'}
        selectedLabel={parts.label}
        // selectedColor={leatherColor.color}
        defaultValue={parts.value}
        objects={partsObjs}
        handleChange={handle.selectParts}
      />
      <SelectCard
        summary={'捕球面カラー'}
        selectedLabel={leather.label}
        selectedColor={leather.color}
        defaultValue={leather.value}
        objects={leatherColorObjs}
        handleChange={handle.leatherColor}
      />
      <SelectCard summary={'ウェブカラー'} selectedLabel={web.label} selectedColor={web.color} defaultValue={web.value} objects={leatherColorObjs} handleChange={handle.webColor} />
      {/* <SelectCard
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
        summary={'小指掛け紐カラー'}
        selectedLabel={littleHook.label}
        selectedColor={littleHook.color}
        defaultValue={littleHook.value}
        objects={leatherColorObjs}
        handleChange={handle.littleHook}
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
        summary={'指カバーカラー'}
        selectedLabel={fingerCoverColor.label}
        selectedColor={fingerCoverColor.color}
        defaultValue={fingerCoverColor.value}
        objects={leatherColorObjs}
        handleChange={handle.fingerCoverColor}
      />
      <SelectCard
        summary={'台カラー'}
        selectedLabel={bagFoundationColor.label}
        selectedColor={bagFoundationColor.color}
        defaultValue={bagFoundationColor.value}
        objects={leatherColorObjs}
        handleChange={handle.bagFoundationColor}
      />
      <SelectCard
        summary={'薬指小指カラー'}
        selectedLabel={ringAndLittleBagColor.label}
        selectedColor={ringAndLittleBagColor.color}
        defaultValue={ringAndLittleBagColor.value}
        objects={leatherColorObjs}
        handleChange={handle.ringAndLittleBagColor}
      />
      <SelectCard
        summary={'中指カラー'}
        selectedLabel={middleBagColor.label}
        selectedColor={middleBagColor.color}
        defaultValue={middleBagColor.value}
        objects={leatherColorObjs}
        handleChange={handle.middleBagColor}
      />
      <SelectCard
        summary={'人差し指親指カラー'}
        selectedLabel={indexAndThumbBagColor.label}
        selectedColor={indexAndThumbBagColor.color}
        defaultValue={indexAndThumbBagColor.value}
        objects={leatherColorObjs}
        handleChange={handle.indexAndThumbBagColor}
      />
      <SelectCard
        summary={'シェラームーブカラー'}
        selectedLabel={shellarmoveColor.label}
        selectedColor={shellarmoveColor.color}
        defaultValue={shellarmoveColor.value}
        objects={leatherColorObjs}
        handleChange={handle.shellarmoveColor}
      />
      <SelectCard
        summary={'手口ベルトカラー'}
        selectedLabel={listBeltColor.label}
        selectedColor={listBeltColor.color}
        defaultValue={listBeltColor.value}
        objects={leatherColorObjs}
        handleChange={handle.listBeltColor}
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
      <SelectCard summary={'ラベル'} selectedLabel={hatakeyamaLabel.label} defaultValue={hatakeyamaLabel.value} objects={hatakeyamaLabelObjs} handleChange={handle.label} /> */}

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
