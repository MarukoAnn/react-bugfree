import { Routes, Navigate, Route } from "react-router-dom";
import { Suspense, Fragment, useState, useEffect, } from "react";
import Redirect from "./Redirect";

const RouterView = (props: { route: any }) => {
  let { route } = props;
  console.log(props, "props");
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    setisLogin(false);
  }, []);
  // 路由展示  
  const RouterList = (route: any) => {
    return (
      <Fragment>
        {route.map((item: any, index: number) => {
          return item.component ? (
            <Route key={index} path={item.path} element={<item.component />}>
              {item?.children ? RouterList(item.children): null}
            </Route>
          ) : null;
        })}
      </Fragment>
    );
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Routes>
        {
            RouterList(route)
        }
      </Routes>
    </Suspense>
  );
};
export default RouterView;
