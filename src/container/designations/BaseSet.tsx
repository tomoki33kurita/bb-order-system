import React from 'react'
import AccordionRadio from 'src/components/molecules/AccordionRadio'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  baseModelObjs,
  dominantArmObjs,
  mittSizeObjs,
  mittDepthObjs,
  backStyleObjs,
  padModleObjs,
  hardnessObjs,
  thicknessObjs,
  fingerGuardTypeObjs,
  zabutonSpongeObjs,
  exFunctionObjs,
  pinkiePatternObjs,
  tbEngravedObjs,
  listLiningsMaterialObjs,
} from 'src/constants/radioObjs/baseSet'
import {
  SET_BASE_MODEL,
  SET_DOMINANT_ARM,
  SET_SIZE,
  SET_DEPTH,
  SET_BACK_STYLE,
  SET_PAD_MODEL,
  SET_LEATHER_HARDNESS,
  SET_CORE_MATERIAL_HARDNESS,
  SET_CORE_MATERIAL_THICKNESS,
  // SET_LININGS_LEATHER_COLOR,
  SET_HAMIDASHI_TYPE,
  SET_FINGER_GUARD_TYPE,
  SET_ZABUTON_SPONGE,
  SET_EX_FUNCTION,
  SET_PINKIE_PATTERN,
  SET_TB_ENGRAVED,
  SET_LIST_LININGS_MATERIAL,
} from 'src/constants/ActionTypes'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const BaseSet: React.FC<Props> = ({ state, value, dispatch }) => {
  const {
    baseModel,
    dominantArm,
    mittSize,
    mittDepth,
    backStyle,
    padModel,
    leatherHardness,
    coreMaterialHardness,
    coreMaterialThickness,
    // liningsLeatherColor,
    fingerGuardType,
    zabutonSponge,
    exFunction,
    pinkiePattern,
    tbEngraved,
    listLiningsMaterial,
  } = state

  const handle = {
    baseModel: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_BASE_MODEL, baseModel: baseModelObjs.filter((prev) => prev.value === event.target.value)[0] }),
    dominantArm: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_DOMINANT_ARM, dominantArm: dominantArmObjs.filter((prev) => prev.value === event.target.value)[0] }),
    mittSize: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_SIZE, mittSize: mittSizeObjs.filter((prev) => prev.value === event.target.value)[0] }),
    mittDepth: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_DEPTH, mittDepth: mittDepthObjs.filter((prev) => prev.value === event.target.value)[0] }),
    backStyle: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_BACK_STYLE, backStyle: backStyleObjs.filter((prev) => prev.value === event.target.value)[0] }),
    padModel: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_PAD_MODEL, padModel: padModleObjs.filter((prev) => prev.value === event.target.value)[0] }),
    leatherHardness: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_LEATHER_HARDNESS, leatherHardness: hardnessObjs.filter((prev) => prev.value === event.target.value)[0] }),
    coreMaterialHardness: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_CORE_MATERIAL_HARDNESS, coreMaterialHardness: hardnessObjs.filter((prev) => prev.value === event.target.value)[0] }),
    coreMaterialThickness: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_CORE_MATERIAL_THICKNESS, coreMaterialThickness: thicknessObjs.filter((prev) => prev.value === event.target.value)[0] }),
    // liningsLeatherColor: (event: React.ChangeEvent<HTMLInputElement>) =>
    //   dispatch({ type: SET_LININGS_LEATHER_COLOR, liningsLeatherColor: baseModelObjs.filter((prev) => prev.value === event.target.value)[0] }),
    fingerGuardType: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_FINGER_GUARD_TYPE, fingerGuardType: fingerGuardTypeObjs.filter((prev) => prev.value === event.target.value)[0] }),
    zabutonSponge: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_ZABUTON_SPONGE, zabutonSponge: zabutonSpongeObjs.filter((prev) => prev.value === event.target.value)[0] }),
    exFunction: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_EX_FUNCTION, exFunction: exFunctionObjs.filter((prev) => prev.value === event.target.value)[0] }),
    pinkiePattern: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_PINKIE_PATTERN, pinkiePattern: pinkiePatternObjs.filter((prev) => prev.value === event.target.value)[0] }),
    tbEngraved: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: SET_TB_ENGRAVED, tbEngraved: tbEngravedObjs.filter((prev) => prev.value === event.target.value)[0] }),
    listLiningsMaterial: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: SET_LIST_LININGS_MATERIAL,
        listLiningsMaterial: listLiningsMaterialObjs.filter((prev) => prev.value === event.target.value)[0],
      }),
  }

  return (
    <TabPanel value={value} index={0}>
      <AccordionRadio
        summary={'基本モデルを選択'}
        selectedLabel={baseModel.label}
        defaultValue={baseModel.value}
        objects={baseModelObjs}
        handleChange={handle.baseModel}
      />
      <AccordionRadio
        summary={'利き腕を選択'}
        selectedLabel={dominantArm.label}
        defaultValue={dominantArm.value}
        objects={dominantArmObjs}
        handleChange={handle.dominantArm}
      />
      <AccordionRadio
        summary={'ミットの大きさ'}
        selectedLabel={mittSize.label}
        defaultValue={mittSize.value}
        objects={mittSizeObjs}
        handleChange={handle.mittSize}
      />
      <AccordionRadio
        summary={'ポケットの深さ'}
        selectedLabel={mittDepth.label}
        defaultValue={mittDepth.value}
        objects={mittDepthObjs}
        handleChange={handle.mittDepth}
      />
      <AccordionRadio
        summary={'バックスタイル'}
        selectedLabel={backStyle.label}
        defaultValue={backStyle.value}
        objects={backStyleObjs}
        handleChange={handle.backStyle}
      />
      <AccordionRadio
        summary={'パッドモデル'}
        selectedLabel={padModel.label}
        defaultValue={padModel.value}
        objects={padModleObjs}
        handleChange={handle.padModel}
      />
      <AccordionRadio
        summary={'革の硬さ'}
        selectedLabel={leatherHardness.label}
        defaultValue={leatherHardness.value}
        objects={hardnessObjs}
        handleChange={handle.leatherHardness}
      />
      <AccordionRadio
        summary={'芯の硬さ'}
        selectedLabel={coreMaterialHardness.label}
        defaultValue={coreMaterialHardness.value}
        objects={hardnessObjs}
        handleChange={handle.coreMaterialHardness}
      />
      <AccordionRadio
        summary={'芯の厚さ'}
        selectedLabel={coreMaterialThickness.label}
        defaultValue={coreMaterialThickness.value}
        objects={thicknessObjs}
        handleChange={handle.coreMaterialThickness}
      />

      <AccordionRadio
        summary={'指カバー'}
        selectedLabel={fingerGuardType.label}
        defaultValue={fingerGuardType.value}
        objects={fingerGuardTypeObjs}
        handleChange={handle.fingerGuardType}
      />
      <AccordionRadio
        summary={'座ブトンスポンジ'}
        selectedLabel={zabutonSponge.label}
        defaultValue={zabutonSponge.value}
        objects={zabutonSpongeObjs}
        handleChange={handle.zabutonSponge}
      />
      <AccordionRadio
        summary={'EX機能'}
        selectedLabel={exFunction.label}
        defaultValue={exFunction.value}
        objects={exFunctionObjs}
        handleChange={handle.exFunction}
      />
      <AccordionRadio
        summary={'ピンキーパターン'}
        selectedLabel={pinkiePattern.label}
        defaultValue={pinkiePattern.value}
        objects={pinkiePatternObjs}
        handleChange={handle.pinkiePattern}
      />
      <AccordionRadio
        summary={'TB刻印'}
        selectedLabel={tbEngraved.label}
        defaultValue={tbEngraved.value}
        objects={tbEngravedObjs}
        handleChange={handle.tbEngraved}
      />
      <AccordionRadio
        summary={'手首裏部の素材'}
        selectedLabel={listLiningsMaterial.label}
        defaultValue={listLiningsMaterial.value}
        objects={listLiningsMaterialObjs}
        handleChange={handle.listLiningsMaterial}
      />
    </TabPanel>
  )
}
export default BaseSet
