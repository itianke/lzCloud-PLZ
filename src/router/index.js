/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import modules from './auto-import'

Vue.use(VueRouter)

let routes = [
    { path: '/', redirect: '/index' },
    { path: '*', redirect: '/404', hidden: true }
]
const router = new VueRouter({
    mode: 'history',
    routes: routes.concat(modules),
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    next()

    // remove loading
    let $loading = document.querySelector('#appPageLoading')
    if ($loading) {
        document.body.removeChild($loading)
    }
})

export default router
