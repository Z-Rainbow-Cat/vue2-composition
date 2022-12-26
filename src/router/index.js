import Router from "vue-router"
import vue from "vue"
vue.use(Router)
const routes= [
    {
        path:"/userlist",
        component:()=>import("page/user/userlist")
    },
    {
        path:"/userinfo",
        name:"userinfo",
        component:()=>import("page/user/userinfo")
    },
    {
        path:"/hisnews",
        component:()=>import("page/news/hisnews")
    },
    {
        path:"/nownews",
        component:()=>import("page/news/nownews")
    },
]
const router = new Router({routes})
export default router