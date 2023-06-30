export interface ITextData {
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
  selectable?: boolean,
  graphics?: Array<IGraphic>,
  product?: any
}

export interface IGraphic {
  align?: string,
  angle?: number,
  color_hex?: string,
  diameter?: number,
  face?: number,
  faceart_id?: string,
  faceart_url?: string,
  faceart_url_thumb?: string,
  filename?: string,
  flip_h?: number,
  flip_v?: number,
  font_name?: string,
  font_size?: number,
  font_style?: string,
  height?: number,
  id?: number,
  kerning?: string,
  line_height?: number
  opacity?: number,
  position_x?: number,
  position_y?: number,
  scale_x?: number,
  scale_y?: number,
  shadow_color_hex?: string,
  shadow_size?: string,
  signgroup_id?: number,
  stack_order?: number,
  stroke_color_hex?: string,
  stroke_size?: number,
  text?: string,
  text_max_height_percent?: number,
  text_max_width_percent?: number,
  type?: string,
  width?: number,
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
  id?: number,
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
  faceArtId?: number,
}