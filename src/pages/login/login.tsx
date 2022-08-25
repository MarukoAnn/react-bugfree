import { observer } from 'mobx-react-lite'
import store from '@/store'
const { useMobxLoginStore } = store
import { Button, Space } from 'antd'
import Snows from '@/utils/snow'
import './login.scss'
import LoginForm from './loginForm'
import { useState } from 'react'
import { UserInfo } from '@/model/Login'
import { loginApi } from '@/apis/login'
import useUitlsHook from '@/hooks/useUitlsHook'
// const useMobxLoginStore1 = new useMobxLoginStore();
const Login: React.FC = () => {
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
      useMobxLoginStore.setToken(token)
      console.log(useMobxLoginStore.getToken(), 'token')
      navigation('/layout/home')
    })
    //     fetch("http://www.baidu.com").then((res)=>{
    // 　　　　console.log(res);//是一个综合各种方法的对象，并不是请求的数据
    // 　　})
  }

  return (
    <>
      <div className="login">
        {/* <div>
          <Button type="primary" onClick={() => setToken("123")}>
            修改token
          </Button>
        </div>
        <div>{useMobxLoginStore.token}</div> */}
        <div className="form-content">
          {/* <Space direction="vertical" size="middle" style={{ display: 'flex' }}> */}
          <div className="lf-title">
            <h2>react管理平台</h2>
            <h3>系统欢迎您!</h3>
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
