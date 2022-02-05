import Profile from "../pages/Profile";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Control from "../pages/Control";


export const privateRoute = [
    {path: '/profile', exact: true, component: Profile},
    {path: '/basket', exact: true, component: Basket},
    {path: '/', exact: true, component: Home},
    {path: '/control', exact: true, component: Control}
]

export const publicRoute = [
    {path: '/', exact: true, component: Home},
    {path: '/registration', exact: true, component: Registration},
    {path: '/login', exact: true, component: Login}
]