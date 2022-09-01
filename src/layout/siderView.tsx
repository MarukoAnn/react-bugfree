import { Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import routers from '@/router/route'
import { router } from '@/model/route'
import { MenuData } from '@/model/layout'
import FontIcon from '@/components/fontIcon'
import { useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import useUitlsHook from '@/hooks/useUitlsHook'
import subMenuItem from './subMenuItem'
import './sideView.scss'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
let copyArr: string
const SiderView: React.FC = () => {
  const { navigation } = useUitlsHook()
  const [menuData, setMenuData] = useState<MenuItem[]>([])
  const [defaultRouteList, setDefaultRouteList] = useState<string[]>([])
  let location = useLocation()
  useEffect(() => {
    let list: router[] | undefined = routers.find(
      (val) => val.name == 'layout'
    )?.children
    let MenuData = list && setMenuList(list)
    setMenuData(MenuData)
    console.log('menuData', location.pathname.split('/'))
    let arr = location.pathname.split('/')
    if (arr.length > 3) {
      let copyArr = arr.slice(1, arr.length - 1).join('/')
      console.log(`/${copyArr}`, 'copyArr')
      // setDefaultRouteList([copyArr])
    }
  }, [])

  const setMenuList: any = (routes: router[]) => {
    return (
      routes &&
      routes.map((route: router) => {
        return getItem(
          route?.meta?.title,
          route?.path,
          route?.meta?.icon ? <FontIcon name={route?.meta?.icon} /> : '',
          setMenuList(route?.children)
        )
      })
    )
  }
  const menuItemClick = (e: any) => {
    console.log(e, 'e')
    navigation(e.key)
  }
  return (
    <div>
      <Menu
        defaultOpenKeys={[`/${copyArr}`]}
        defaultSelectedKeys={[location.pathname]}
        theme="dark"
        mode="inline"
        items={menuData}
        onClick={(e) => menuItemClick(e)}
      />
    </div>
  )
}

export default SiderView
