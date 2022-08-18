import { Outlet, useHref } from 'react-router-dom'
import { useState, useEffect } from "react";
import Redirect from "../router/Redirect";
import store from "@/store";
const { useMobxLoginStore } = store;
export default function Layout() {
    // const [isLogin, setisLogin] = useState(true);
    return (
        <div>
            {
                useMobxLoginStore.token ? <Outlet /> : 
                <Redirect to={'/login'} />
            }
        </div>
    )
}