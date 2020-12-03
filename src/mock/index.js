import Mock from 'mockjs'

import menuApi from './modules/main'
import mineEnterpriseApi from './modules/mine-enterprise'

Mock.mock(/\/api\/sys\/menus\.*/, 'get', menuApi.getMenus)
Mock.mock(/\/api\/enterprise\/fetchAuthList\.*/, 'get', mineEnterpriseApi.fetchAuthList)
export default Mock
