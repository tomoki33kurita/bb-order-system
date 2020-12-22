type stateObj = {
  value: string
  label: string
  color?: string
}

export type State = {
  baseModel: stateObj
  dominantArm: stateObj
  mittSize: stateObj
  mittDepth: stateObj
  backStyle: stateObj
  padModel: stateObj
  leatherColor: stateObj
  edgeColor: stateObj
  targetSet: stateObj
  leatherHardness: stateObj
  coreMaterialHardness: stateObj
  coreMaterialThickness: stateObj
  liningsType: stateObj
  // liningsLeatherColor: stateObj
  hamidashiType: stateObj
  fingerGuardType: stateObj
  zabutonSponge: stateObj
  exFunction: stateObj
  pinkiePattern: stateObj
  leatherString: stateObj
  hatakeyamaLabel: stateObj
  tbEngraved: stateObj
  listLiningsMaterial: stateObj
  stitchColor: stateObj
  embroideryTypeFace: stateObj
  embroideryPosition: stateObj
  embroideryColor: stateObj
  embroideryShadowColor: stateObj
  embroideryContent: string
}

export type Action = Partial<State> & { type: string }
