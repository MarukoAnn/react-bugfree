import { observer } from "mobx-react-lite";
import store from "@/store";
const { useMobxLoginStore } = store;
import { Button, Space } from "antd";
import Snows from "@/utils/snow";
import './login.scss';
import LoginForm from './loginForm'
import { useState } from "react";
import { UserInfo } from '@/model/Login'
// const useMobxLoginStore1 = new useMobxLoginStore();
const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    password: '',
    checked: false,
  }); 
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
    useMobxLoginStore.setToken(data);
  };
  const success = (userInfo: UserInfo): void => {
    console.log(userInfo, 'userInfo')
  }

  return (
    <>
      <div
        className="login"
      >
        <div className="login-left">

        </div>
         {/* <div>
          <Button type="primary" onClick={() => setToken("123")}>
            修改token
          </Button>
        </div>
        <div>{useMobxLoginStore.token}</div> */}
        <div className="login-right">
          <div className="form-content">
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <h2>react管理平台</h2>
              <h3>系统欢迎您!</h3>
              <LoginForm userInfo={userInfo} success={success} />
            </Space>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default observer(Login);
