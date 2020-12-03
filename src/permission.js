/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.body.scrollTop = 0
    })
    NProgress.done() // 结束Progress
})
