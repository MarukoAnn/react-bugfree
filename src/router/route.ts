import {router} from '@/model/route';
import { lazy } from 'react';
const routers: router[] = [
    {
        path: '/',
        redirect: '/login'
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
        redirect: '/login'
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
            },
        ]
    }
]
export default routers;