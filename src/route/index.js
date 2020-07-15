import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {
        path: "/",
        name: '首页',
        redirect: '/home',
        component: () => import(/* webpackChunkName: 'home' */ '@/view/home'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/homeIndex'),
                meta:{
                    keepAlive:true
                }
            }, {
                path: '/news/:id',
                name: 'newsList',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/newsList'),
                meta: {
                    keepAlive: true,
                    isBack:false
                }
            }, {
                path: '/contributionRanking/:id',
                name: 'contributionRanking',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/contributionRanking'),
            }, {
                path: '/friendshipLink/:id',
                name: 'friendshipLink',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/friendshipLink')
            }, {
                path: '/guardStyle/:id',
                name: 'guardStyle',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/guardStyle')
            }, {
                path: '/newsDetail/:id',
                name: 'newsDetail',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/newsDetail')
            }, {
                path: '/searchPage',
                name: 'searchPage',
                component: () => import(/* webpackChunkName: 'home' */ '@/view/searchPage')
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    originalPush,
    mode:'history',
    base: process.env.BASE_URL,
    // scrollBehavior(to,from,savedPosition) {
    //     if(from.name === 'newsDetail') {
            
    //     }
    //     if(savedPosition) {
    //         return savedPosition
    //     }else {
    //         return {
    //             x:0,
    //             y:0
    //         }
    //     }
    // }
})

export default router