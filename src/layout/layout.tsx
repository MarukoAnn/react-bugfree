import { Outlet, useHref } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Redirect from '../router/Redirect'
import store from '@/store'
import './layout.scss'
const { useMobxLoginStore } = store
import { Layout, Button } from 'antd'
const { Header, Sider, Content } = Layout
import SiderView from './siderView'
import HeaderView from './headerView'
const LayoutView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [icon, setIcon] = useState('MenuFoldOutlined')

  const setIconData = () => {
    setIcon('MenuUnfoldOutlined')
    setCollapsed(!collapsed)
  }

  const View = () => {
    return (
      <Layout className="layout">
        <Sider
          className="Sider"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SiderView />
        </Sider>
        <Layout>
          <Header className="Header">
            <HeaderView onIconClick={setIconData} icon={icon} />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    )
  }
  // const [isLogin, setisLogin] = useState(true);
  return (
    <div>{useMobxLoginStore.token ? View() : <Redirect to={'/login'} />}</div>
  )
}
export default LayoutView
