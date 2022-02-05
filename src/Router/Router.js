import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Home from "./pages/Home";


export const Route = [
    {path: '/profile', exact: true, component: Profile},
    {path: '/basket', exact: true, component: Basket},
    {path: '/home', exact: true, component: Home}
]