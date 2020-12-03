/* eslint-disable */
import Mock from 'mockjs'

export default {

    createMock(apiFn, fn) {
        const obj = this.getFnParams(apiFn)
        if (obj.method) {
            Mock.mock(new RegExp('(' + obj.url + '\\?\.*)'), item, fn)
        } else {
            const arr = ['post', 'get', 'put', 'delete']
            arr.forEach((item) => {
                Mock.mock(new RegExp('(' + obj.url + '\\?\.*)'), item, fn)
            })
        }
        console.log('Mock', Mock)
    },
    createAllMock(mockObjs, aipObj) {
        for (const prop in mockObjs) {
            this.createMock(aipObj[prop], mockObjs[prop])
        }
    },
    getFnParams(fn) {
        const str = fn + ''
        console.log('str', str)
        let url = '',
            method = ''
        const urlReg = str.match(/url\s*:\s*'([\S]*)'/)
        const methodReg = str.match(/method\s*:\s*'([\S]*)'/)
        url = urlReg ? urlReg[1] : ''
        method = methodReg ? methodReg[1] : null
        console.log('url', url, 'method', method)
        method = method && ['put', 'get', 'post', 'delete', 'head', 'connect', 'options', 'trace', 'patch']
            .includes(method.toLocaleLowerCase()) ? method : null
        return {
            url,
            method
        }
    },
    log(title, ...arg) {
        const str = '%c ' + title
        const arr = [str, 'color:red', ...arg]
        console.info.apply(null, arr)
    },
    params2Obj(url) {
        const search = url.split('?')[1]
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    },
    data2Obj(body) {
        const params = body.split('&')
        let _params = {}
        if (params) {
            params.forEach((item) => {
                const keyValue = item.split('=')
                _params[keyValue[0]] = keyValue[1]
            })
        }
        return _params
    }
}
