
/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Layout from 'src/views/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'page')
    }
}

let routes = {
    path: '/',
    hidden: true,
    component: Layout,
    meta: {
        title: ''
    },
    children: [
        {
            name: 'enginner-cloud',
            path: 'enginner-cloud',
            meta: {
                title: '领筑工程云'
            }
        },
        {
            name: 'cooperative-partner',
            path: 'cooperative-partner',
            meta: {
                title: '合作伙伴'
            }
        },
        {
            name: 'index',
            path: 'index',
            meta: {
                title: '领筑云-领筑采购云-领筑施工云-领筑维保云-工程公司经营管理SaaS系统-消防工程全周期信息化-工程产业互联网服务平台-领筑云'
            }
        },
        {
            name: 'service-provider-program',
            path: 'service-provider-program',
            meta: {
                title: '城市服务商计划',
                scrollToTop: true
            }
        },
        {
            name: 'product',
            path: 'product',
            meta: {
                title: '产品'
            }
        },
        {
            name: 'price',
            path: 'price',
            meta: {
                title: '价格'
            }
        },
        {
            name: 'service',
            path: 'service',
            meta: {
                title: '服务案例'
            }
        },
        {
            name: 'market',
            path: 'market',
            meta: {
                title: '市场合作'
            }
        },
        {
            name: 'about',
            path: 'about',
            meta: {
                title: '关于我们'
            }
        },
        {
            name: 'news-list',
            path: 'news-list',
            meta: {
                title: '新闻列表'
            }
        },
        {
            name: 'news-detail',
            path: 'news-detail',
            meta: {
                title: '详情页面'
            }
        }
    ]
}

routes.children.forEach((v) => {
    if (!v.redirect && (!v.component || !v.components)) {
        const router = v.meta.router || 'default'
        v.components = {
            [router]: getView(v.name, v.meta.title)
        }
    }
})

export default [routes]
