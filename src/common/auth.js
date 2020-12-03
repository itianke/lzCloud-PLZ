import Cookies from 'js-cookie'
import { isEmpty } from './utils'
import config from 'common/config'
import storage from 'unit/storage'
import sessionStorage from 'unit/sessionStorage'

const key = 'token'

// 获取用户信息
export function getToken() {
    let token = Cookies.get(key)
    if (!isEmpty(token)) {
        return token
    }
    return null
}

// 获取是否设置机构
export function getOrgAuthStatus() {
    let user = Cookies.get(key)
    if (!isEmpty(user)) {
        return JSON.parse(user).isOrgAuth
    }
    return null
}

// 设置用户信息
export function setToken(data) {
    // 设置顶级域
    // Cookies.domain = config.api.host
    return Cookies.set(key, data, { domain: config.api.domain })
}

// 删除用户信息
export function removeToken() {
    storage.clear()
    Cookies.set('sevenDay', '', { domain: config.api.domain })
    Cookies.set('companyId', '', { domain: config.api.domain })
    return Cookies.set(key, '', { domain: config.api.domain })
}

// 设置公司ID
export function setCompanyId(id) {
    return Cookies.set('companyId', id, { domain: config.api.domain })
}

// 设置企业token
export function setCompanyToken(val) {
    sessionStorage.set('company_token', val)
}

// 获取企业token
export function getCompanyToken() {
    return sessionStorage.get('company_token')
}
