import utils from '../../utils'
const menuList = {
    name: 'personal-console',
    label: '个人工作台',
    children: [
        { label: '工作台', name: 'dashboard', path: '/main/dashboard' },
        { label: '我的企业', name: 'mine-enterprise', path: '/enterprise/joined' }
    ]
}

const Apis = {
    getMenus(config) {
        let mockList = menuList
        let ret = {
            code: '200',
            message: '',
            responseBody: {
                code: '200',
                message: '',
                data: mockList && mockList.children
            }
        }
        utils.log('导航菜单列表', config.url, ret)
        return ret
    }
}
// utils.createAllMock(Apis, api.mainApi)

export default Apis
