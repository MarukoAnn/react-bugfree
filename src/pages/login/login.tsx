import { observer } from 'mobx-react-lite'
import store from '@/store'
const { useMobxLoginStore } = store
import Snows from '@/utils/snow'
import './login.scss'
import LoginForm from './loginForm'
import { useState } from 'react'
import { UserInfo } from '@/model/Login'
import { loginApi } from '@/apis/login'
import useUitlsHook from '@/hooks/useUitlsHook'
import { useTranslation, Trans } from 'react-i18next'
// const useMobxLoginStore1 = new useMobxLoginStore();
const Login: React.FC = () => {
  const { t } = useTranslation()
  const { navigation } = useUitlsHook()
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    password: '',
    checked: false,
  })
  // new Snows({
  //   isRain: true,
  //   num: 120,
  //   maxSpeed: 25,
  // });
  // new Snows({
  //     isRain: false,
  //     num: 30
  // })
  const setToken = (data: string): void => {
    useMobxLoginStore.setToken(data)
  }
  const success = (userInfo: UserInfo): void => {
    loginApi(userInfo).then(({ code, data: { token }, msg }) => {
      if (code !== 200) {
        return
      }
      setToken(token)
      console.log(useMobxLoginStore.getToken(), 'token')
      navigation('/layout/home')
    })
  }

  return (
    <>
      <div className="login">
        <div className="form-content">
          <div className="lf-title">
            <h2>{t('login.title')}</h2>
            <h3>{t('login.subtitle')}!</h3>
          </div>
          <div className="lf-content">
            <LoginForm userInfo={userInfo} success={success} />
          </div>
        </div>
      </div>
    </>
  )
}
export default observer(Login)
