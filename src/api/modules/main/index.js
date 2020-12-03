import { postJson } from '../../http'

export default {
    // 查询用户详细信息
    fetchUserInfo(data) {
        return postJson('/lz/account/passport/loginUser', data)
    },
    // 获取菜单列表
    fetchMenus(data) {
        return postJson('/lz/platform/curuser/menu/list', data)
    },
    /**
     * 工作台切换组织
     *
     * @param {*} data
     * @returns
     */
    changeCompany(data) {
        return postJson('/lz/console/org/change', data)
    },

    /**
     * 查询组织信息
     */
    fetchOrganization() {
        return postJson('/lz/console/organization/queryOrganization')
    },
    /**
     * 工作台信息加载
     *
     * @param {*} data
     * @returns
     */
    loadViewData(data) {
        return postJson('/lz/console/index/load', data)
    },

    loadLogout(data) {
        return postJson('/lz/account/passport/logout', data)
    },

    fetchHomeCount(data) {
        return postJson('/lz/operate/homepage/get/performance', data)
    },

    fetchArticalList(data) {
        return postJson('/lz/operate/frontDesk/article/list', data)
    },

    fetchArticalDetail(data) {
        return postJson('/lz/operate/frontDesk/article/getById', data)
    },

    fetchArticalPageViews(data) {
        return postJson('/lz/operate/frontDesk/article/increase/pageviews', data)
    },

    addBusiness(data) {
        return postJson('/lz/operate/businessOpportunity/add', data)
    }

}
