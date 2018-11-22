// 以下文件格式为描述路由的协议格式
import BasicLayout from '../layouts/BasicLayout';
import BlankLayout from '../layouts/BlankLayout';
import Home from '../pages/Home';
import ArticleAdd from "../pages/ArticleAdd";
import ArticleList from "../pages/ArticleList";
import Login from '../pages/Login';
import DashBoard from '../pages/DashBoard';

const routerConfig = [
    {
        path: '/',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/login',
        layout: BlankLayout,
        component: Login,
    },
    {
        path: '/dashboard',
        layout: BasicLayout,
        component: DashBoard,
    },
    {
        path: '/article/add',
        layout: BasicLayout,
        component: ArticleAdd,
    },
    {
        path: '/article/list',
        layout: BasicLayout,
        component: ArticleList,
    },
    {
        path: '/article/category',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/article/tag',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/comment',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/file',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/user/add',
        layout: BasicLayout,
        component: ArticleAdd,
    },
    {
        path: '/user/list',
        layout: BasicLayout,
        component: ArticleList,
    },
    {
        path: '/user/pwd',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/setting/base',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/setting/comment',
        layout: BasicLayout,
        component: Home,
    },
];

export default routerConfig;
