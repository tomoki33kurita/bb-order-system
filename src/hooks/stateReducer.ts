import { State, Action } from 'src/types'
import {
  SET_BASE_MODEL,
  SET_DOMINANT_ARM,
  SET_SIZE,
  SET_DEPTH,
  SET_BACK_STYLE,
  SET_PAD_MODEL,
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_TARGET_SET,
  SET_LEATHER_HARDNESS,
  SET_CORE_MATERIAL_HARDNESS,
  SET_CORE_MATERIAL_THICKNESS,
  SET_LININGS_TYPE,
  SET_HAMIDASHI_TYPE,
  SET_FINGER_GUARD_TYPE,
  SET_ZABUTON_SPONGE,
  SET_EX_FUNCTION,
  SET_PINKIE_PATTERN,
  SET_LEATHER_STRING,
  SET_LABEL,
  SET_TB_ENGRAVED,
  SET_LIST_LININGS_MATERIAL,
  SET_STITCH_COLOR,
  SET_EMBROIDERIES,
  ADD_EMBROIDERY,
  REMOVE_EMBROIDERY,
  SET_WEB_COLOR,
  SET_THUMB_MACHI_COLOR,
  SET_LITTLE_MACHI_COLOR,
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

export const initialEmbroState = {
  id: 0,
  embroideryTypeFace: { label: '楷書体', value: 'regular' },
  embroideryPosition: { label: '親指部分', value: 'thumb_finger' },
  embroideryColor: { label: 'ブラック', value: 'black', color: '#000' },
  embroideryShadowColor: { label: 'ブラック', value: 'black', color: '#000' },
  embroideryContent: '',
}

export const initialState: State = {
  baseModel: { label: 'M8型', value: 'm8' },
  dominantArm: { label: '右投げ', value: 'rightThrow' },
  mittSize: { label: '基本モデルズバリ', value: 'default' },
  mittDepth: { label: '基本モデルズバリ', value: 'default' },
  backStyle: { label: 'シェラームーブ', value: 'shellarmove' },
  padModel: { label: 'Aバッド', value: 'A_pad' },
  leatherColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  edgeColor: { label: 'ホワイト', value: 'white', color: '#fff' },
  targetSet: { label: '不要', value: 'none' },
  leatherString: { label: 'ブラック', value: 'black', color: '#000' },
  leatherHardness: { label: '普通', value: 'normal' },
  coreMaterialHardness: { label: '普通', value: 'normal' },
  coreMaterialThickness: { label: '普通', value: 'normal' },
  liningsType: { label: '共牛革(Vオレンジ)', value: 'cow_v_orange', color: '#ff4500' },
  hamidashiType: { label: '切りハミ(ホワイト)', value: 'kirihami_white', color: '#fff' },
  fingerGuardType: { label: 'スタンダード', value: 'standard' },
  zabutonSponge: { label: '有り', value: 'zabuton' },
  exFunction: { label: '有り', value: 'ex_func' },
  pinkiePattern: { label: '有り', value: 'pinkie_pattern' },
  hatakeyamaLabel: { label: '直刺繍C1', value: 'straight_embroidery' },
  tbEngraved: { label: '有り', value: 'tb_engraved' },
  listLiningsMaterial: { label: 'ムートン(ホワイト)', value: 'mouton_white', color: '#fff' },
  stitchColor: { label: 'レッド', value: 'red', color: '#EE0000' },
  webColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  littleMachiColor: { label: 'Vブラック', value: 'v_black', color: '#525151' },
  thumbMachiColor: { label: 'Vブラック', value: 'v_black', color: '#525151' },
  thumbHook: { label: 'レッド', value: 'red', color: 'red' },
  littleHook: { label: 'レッド', value: 'red', color: 'red' },
  listBeltColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  fingerCoverColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  bagFoundationColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  ringAndLittleBagColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  middleBagColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  indexAndThumbBagColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },
  shellarmoveColor: { label: 'Jブルー', value: 'j_blue', color: '#005380' },

  embroideries: [initialEmbroState],
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_BASE_MODEL:
      return { ...state, baseModel: action.baseModel }
    case SET_DOMINANT_ARM:
      return { ...state, dominantArm: action.dominantArm }
    case SET_SIZE:
      return { ...state, mittSize: action.mittSize }
    case SET_DEPTH:
      return { ...state, mittDepth: action.mittDepth }
    case SET_BACK_STYLE:
      return { ...state, backStyle: action.backStyle }
    case SET_PAD_MODEL:
      return { ...state, padModel: action.padModel }
    case SET_LEATHER_COLOR:
      return { ...state, leatherColor: action.leatherColor }
    case SET_EDGE_COLOR:
      return { ...state, edgeColor: action.edgeColor }
    case SET_WEB_COLOR:
      return { ...state, webColor: action.webColor }
    case SET_THUMB_MACHI_COLOR:
      return { ...state, thumbMachiColor: action.thumbMachiColor }
    case SET_LITTLE_MACHI_COLOR:
      return { ...state, littleMachiColor: action.littleMachiColor }
    case SET_TARGET_SET:
      return { ...state, targetSet: action.targetSet }
    case SET_LEATHER_HARDNESS:
      return { ...state, leatherHardness: action.leatherHardness }
    case SET_CORE_MATERIAL_HARDNESS:
      return { ...state, coreMaterialHardness: action.coreMaterialHardness }
    case SET_CORE_MATERIAL_THICKNESS:
      return { ...state, coreMaterialThickness: action.coreMaterialThickness }
    case SET_LININGS_TYPE:
      return { ...state, liningsType: action.liningsType }
    case SET_HAMIDASHI_TYPE:
      return { ...state, hamidashiType: action.hamidashiType }
    case SET_FINGER_GUARD_TYPE:
      return { ...state, fingerGuardType: action.fingerGuardType }
    case SET_ZABUTON_SPONGE:
      return { ...state, zabutonSponge: action.zabutonSponge }
    case SET_EX_FUNCTION:
      return { ...state, exFunction: action.exFunction }
    case SET_PINKIE_PATTERN:
      return { ...state, pinkiePattern: action.pinkiePattern }
    case SET_LEATHER_STRING:
      return { ...state, leatherString: action.leatherString }
    case SET_LABEL:
      return { ...state, hatakeyamaLabel: action.hatakeyamaLabel }
    case SET_TB_ENGRAVED:
      return { ...state, tbEngraved: action.tbEngraved }
    case SET_LIST_LININGS_MATERIAL:
      return { ...state, listLiningsMaterial: action.listLiningsMaterial }
    case SET_STITCH_COLOR:
      return { ...state, stitchColor: action.stitchColor }
    case SET_EMBROIDERIES:
      return { ...state, embroideries: action.embroideries }
    case ADD_EMBROIDERY:
      return { ...state, embroideries: action.embroideries }
    case REMOVE_EMBROIDERY:
      return { ...state, embroideries: action.embroideries }
    case SET_THUMB_HOOK:
      return { ...state, thumbHook: action.thumbHook }
    case SET_LITTLE_HOOK:
      return { ...state, littleHook: action.littleHook }
    case SET_LIST_BELT_COLOR:
      return { ...state, listBeltColor: action.listBeltColor }
    case SET_FINGER_COVER_COLOR:
      return { ...state, fingerCoverColor: action.fingerCoverColor }
    case SET_BAG_FOUNDATION_COLOR:
      return { ...state, bagFoundationColor: action.bagFoundationColor }
    case SET_RING_AND_LITTLE_BAG_COLOR:
      return { ...state, ringAndLittleBagColor: action.ringAndLittleBagColor }
    case SET_MIDDLE_BAG_COLOR:
      return { ...state, middleBagColor: action.middleBagColor }
    case SET_INDEX_AND_THUMB_BAG_COLOR:
      return { ...state, indexAndThumbBagColor: action.indexAndThumbBagColor }
    case SET_SHELLARMOVE_COLOR:
      return { ...state, shellarmoveColor: action.shellarmoveColor }
    default:
      return state
  }
}
