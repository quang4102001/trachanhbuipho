
//layout
import LayoutNotSideBar from './../layout/LayoutNotSideBar/LayoutNotSideBar';

//pages
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import AnVat from "../pages/AnVat/AnVat"
import BuiPhoHot from "../pages/BuiPhoHot/BuiPhoHot"
import BuiPhoLove from "../pages/BuiPhoLove/BuiPhoLove"
import Cart from "../pages/Cart/Cart"
import Drink from "../pages/Drink/Drink"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import User from "../pages/User/User"


export const publicNavigation = [
    {path: "/", name: "Trang chủ",component: Home},
    {path: "/about", name: "Giới thiệu",component: About},
    {path: "/anvat", name: "Ăn Vặt",component: AnVat},
    {path: "/buiphohot", name: "Bụi Phố Hot",component: BuiPhoHot},
    {path: "/buipholove", name: "Bụi Phố Love",component: BuiPhoLove},
    {path: "/cart", name: "Giỏ hàng",component: Cart, cart:true},

]

export const publicRoutes = [
    {path: "/", name: "Trang chủ",component: Home},
    {path: "/about", name: "Giới thiệu",component: About},
    {path: "/anvat", name: "Ăn Vặt",component: AnVat},
    {path: "/buiphohot", name: "Bụi Phố Hot",component: BuiPhoHot},
    {path: "/buipholove", name: "Bui Phố Love",component: BuiPhoLove},
    {path: "/cart", name: "Giỏ hàng",component: Cart},
    {path: "/login", name: "Đăng nhập",component: Login},
    {path: "/register", name: "Đăng kí",component: Register},
    {path: "/user", name: "Người dùng",component: User},

]

export const privateRoutes = [
    {path: "/", name: "Trang chủ",component: Home},
    {path: "/about", name: "Giới thiệu",component: About},
    {path: "/anvat", name: "Ăn Vặt",component: AnVat},
    {path: "/buiphohot", name: "Bụi Phố Hot",component: BuiPhoHot},
    {path: "/buipholove", name: "Bui Phố Love",component: BuiPhoLove},
    {path: "/cart", name: "Giỏ hàng",component: Cart, layout: LayoutNotSideBar},
    {path: "/drink", name: "Đồ uống",component: Drink},
    {path: "/login", name: "Đăng nhập",component: Login, layout: LayoutNotSideBar},
    {path: "/register", name: "Đăng kí",component: Register, layout: LayoutNotSideBar},
    {path: "/user", name: "Người dùng",component: User},
]