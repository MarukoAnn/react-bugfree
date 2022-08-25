import { Routes, Navigate, Route } from 'react-router-dom'
import { Suspense, Fragment, useState, useEffect } from 'react'
import Redirect from './Redirect'
import { Space, Spin } from 'antd'

const RouterView = (props: { route: any }) => {
  let { route } = props
  console.log(props, 'props')
  const [isLogin, setisLogin] = useState(false)
  useEffect(() => {
    setisLogin(false)
  }, [])
  // 路由展示
  const RouterList = (route: any) => {
    return (
      <Fragment>
        {route.map((item: any, index: number) => {
          return item.component ? (
            <Route key={index} path={item.path} element={<item.component />}>
              {item?.children ? RouterList(item.children) : null}
            </Route>
          ) : (
            <Route
              key={index}
              path={item.path}
              element={<Redirect to={item.redirect} />}
            ></Route>
          ) // 配置路由重定向
        })}
      </Fragment>
    )
  }
  return (
    <Suspense
      fallback={
        <div>
          <Spin size={'large'} tip="Loading..."></Spin>
        </div>
      }
    >
      <Routes>{RouterList(route)}</Routes>
    </Suspense>
  )
}
export default RouterView
