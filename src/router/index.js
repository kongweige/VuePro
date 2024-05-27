import { createRouter,createWebHashHistory } from "vue-router";
// import Ceshiren from "@/views/router/Ceshiren.vue";
import Ceshiren from "../views/router/Ceshiren.vue";
import Hogwarts from "../views/router/Hogwarts.vue";
import VueHome from "../views/router/VueHome.vue"

// 创建一个路由表
const routerTable = [ 
    {
        path:"/",
        component:Ceshiren
    },
    {
        path:"/ceshiren",
        component:Ceshiren
    },
    {
        path:"/hogwarts",
        component:Hogwarts
    },
    // {
    //     path:"/user/:id",
    //     component:VueHome
    // },
    {
        path: '/user/:id(\\d+)', // 使用正则表达式匹配数字
        component: VueHome
    },
    {
        path: '/product/:slug([a-z-]+)', // 使用正则表达式匹配小写字母和短横线
        component: VueHome
    },
    // 通配符路由，捕获所有未匹配到的路径
    {
        path: '/:pathMatch(.*)*',
        component: Ceshiren
    }
]

// 创建路由对象
const router  = createRouter({
    history:createWebHashHistory(),
    routes:routerTable
})

// 暴露路由对象
export default router
