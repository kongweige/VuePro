import { createRouter,createWebHashHistory } from "vue-router";
// import Ceshiren from "@/views/router/Ceshiren.vue";
import Ceshiren from "../views/router/Ceshiren.vue";
import Hogwarts from "../views/router/Hogwarts.vue";


// 创建一个路由表
const routerTable = [ 
    {
        path:"/ceshiren",
        component:Ceshiren
    },
    {
        path:"/hogwarts",
        component:Hogwarts
    } 
]

// 创建路由对象
const router  = createRouter({
    history:createWebHashHistory(),
    routes:routerTable
})

// 暴露路由对象
export default router
