import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import("../views/home.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/about.vue')
        }
    ],
    history:createWebHistory()
})

export default router