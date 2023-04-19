export interface ITextData  {
  value: string,
  font: string,
  size: string,
  color?: string,
  width?: number,
  scaleX?: number,
  scaleY?: number,
  sideColor?: string,
  boarderColor?: string,
  x?: number,
  y?: number,
  skewx?: number,
  skewY?: number,
  corners?: position,
  shadowColor?: string,
  raceColor?: string,
  faceImage?: string,
  shapes?: IShapes,
  opacity?: number,
  completed?: boolean
  selectable?: boolean
}

export interface position {
  leftTop: positionCoOrd,
  rightTop: positionCoOrd,
  leftBottom: positionCoOrd,
  rightBottom: positionCoOrd
}

export interface positionCoOrd {
  x: number,
  y: number,
  offsetX: number,
  offsetY: number
}

export interface Ifont {
  name: string,
  imgpath: string,
}

export interface IColor {
  name: string,
  // imgpath: string,
}

export interface ISize {
  size: string,
  width: string,
  height: string,
}

export interface IProduct {
  category: string,
  subCategory: string,
  type: string
}

export interface IShapes {
  backgroundPath: string,
  path: string,
  name: string,
  code: string,
  size?: string
  img?: string,
  scaleFactorx?: number,
  scaleFactorY?: number,
  offsetX?: number,
  offsetY?: number,
}