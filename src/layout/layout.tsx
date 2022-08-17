import { Outlet, useHref } from 'react-router-dom'
import { useState, useEffect } from "react";
import Redirect from "../router/Redirect";
export default function Layout() {
    const [isLogin, setisLogin] = useState(true);
    return (
        <div>
            {
                isLogin ? <Outlet /> : 
                <Redirect to={'/login'} />
            }
        </div>
    )
}