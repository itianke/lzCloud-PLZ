/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import axios from 'axios'
import config from 'common/config'
import { Message as $msgBox } from 'element-ui'
import { errorHandle } from './errorHandle'
import { getToken } from 'common/auth'

const host = config.api.host

// build http header
function buildHeader(option) {
    let token = getToken()
    if (!token) return {}

    let headers = {
        login_token: `${token}`
    }

    if (option) {
        headers = { ...headers, ...option }
    }
    return headers
}

function handleError(err = {}) {
    let errorCode = err.code
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(errorCode)) {
        console.log(errorCode)
    } else {
        errorHandle(err)
        let msg = err.message || '发生未知错误，请重试'
        if (('' + errorCode).indexOf('timeout') > -1) {
            msg = '加载超时！请检查你的网络'
        }
        $msgBox({
            type: 'error',
            message: msg
        })
    }
}

function processData(apiData = {}) {
    let request = {
        ...apiData
    }
    return request
}

function transformResponse(_data) {
    let data
    try {
        data = JSON.parse(_data)
    } catch (e) {
        return _data
    }
    if (data) {
        if (data.code === '1') {
            return data.data
        } else {
            handleError(data)
            let msg = JSON.stringify(data) || '发生未知错误，请重试'
            throw new Error(msg)
        }
    } else {
        let msg = 'Unknow Error'
        throw new Error(msg)
    }
}

// axios配置
let axiosConfig = (option = {}) => {
    return {
        baseURL: host,
        headers: buildHeader(option),
        timeout: 10000,
        // responseType: 'json',
        // transformRequest: [function (data) {
        //     if (data instanceof FormData) {
        //         return data
        //     } else {
        //         let contType = option['Content-Type']
        //         if (contType && contType.indexOf('application/json') > -1) {
        //             return JSON.stringify(data)
        //         } else {
        //             return data
        //         }
        //     }
        // }],
        transformResponse: [function (data) {
            return transformResponse(data)
        }]
    }
}

// http get method
export function get(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.get(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http post method
export function post(url, data) {
    let nax = axios.create(axiosConfig({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }))
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postJson(url, data) {
    let nax = axios.create(axiosConfig({
        responseType: 'json',
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postFile(url, data) {
    let nax = axios.create({
        headers: buildHeader({})
    })
    return nax.post(`${host}${url}`, data).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postString(url, data) {
    let nax = axios.create(axiosConfig({
        responseType: 'text',
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax({
        url: `${host}${url}`,
        method: 'POST',
        data: processData(data)
    }).then((res) => {
        return res.data
    }).catch((error) => {
        throw error
    })
}

// http post method
export function postForm(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}
// http delete method
export function del(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.delete(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}
