export interface MenuData {
  key?: string
  label?: string
  icon?: string
  children?: MenuData[]
  path: string
  // disabled?: boolean
  // popupClassName?: string
  // popupOffset?: [number, number]
  // theme?: string
  // dashed?: boolean // 是否虚线
}
