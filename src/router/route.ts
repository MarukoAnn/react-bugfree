import { router } from '@/model/route'
import { lazy } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
const routers: router[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/error',
    name: '/error',
    component: lazy(() => import('../pages/error/error')),
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../pages/login/login')),
  },
  {
    path: '/test',
    name: 'test',
    component: '',
  },
  {
    path: '/layout',
    name: 'layout',
    component: lazy(() => import('../layout/layout')),
    children: [
      {
        path: '/layout/home',
        name: 'home',
        component: lazy(() => import('../pages/home/home')),
        meta: {
          icon: 'MailOutlined',
          title: '首页',
        },
      },
      {
        path: '/layout/system',
        name: 'system',
        component: lazy(() => import('../pages/system/system')),
        meta: {
          icon: 'icon-shezhi',
          title: '系统设置',
        },
        children: [
          {
            path: '/layout/system/menu',
            name: 'menu',
            component: lazy(() => import('../pages/system/menuView')),
            meta: {
              icon: 'icon-caidan',
              title: '菜单管理',
            },
          },
        ],
      },
    ],
  },
]
export default routers
