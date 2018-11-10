// 以下文件格式为描述路由的协议格式
import BasicLayout from '../layouts/BasicLayout';
import Home from '../pages/Home';
import ArticleAdd from "../pages/ArticleAdd";
import ArticleList from "../pages/ArticleList";

const routerConfig = [
    {
        path: '/',
        layout: BasicLayout,
        component: Home,
    },
    {
        path: '/dashboard',
        layout: BasicLayout,
        component: Home,
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