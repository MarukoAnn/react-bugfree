export interface UserInfo {
  username: string
  password: string
  checked: boolean
}

export interface Props {
  userInfo?: UserInfo
  success: (userInfo: UserInfo) => void
}
