
/**
 * 自动扫描引入路由模块
 * @author liugy
 */
const readRouters = require.context(
    // 组件目录
    './modules',
    // 是否查询其子目录
    true,
    /[.js]$/
)

let router = []

readRouters.keys().forEach(fileName => {
    const item = readRouters(fileName)
    router = router.concat(item.default || item)
})

export default router
