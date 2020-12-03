/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { MessageBox, Message as $msgBox } from 'element-ui'
import config from 'common/config'
import { removeToken, getToken } from 'common/auth'
import router from 'src/router'

/**
    错误代码处理
*/
export function errorHandle(res) {
    if (!res.code) return
    const token = getToken()
    let errObj = {
        msg: res.message,
        confirmButtonText: '确 定',
        cancelButtonText: '取 消'
    }
    switch (res.code) {
        // 清除cookies并退出 重新登录
        case '-110101': {
            handleError(errObj, () => {
                removeToken()
                location.href = config.api.PAM + '/login'
            })
            break
        }
        case '-110104': {
            handleError(errObj, () => {
                removeToken()
                location.href = config.api.PAM + '/login'
            })
            break
        }
        case '-100001': {
            handleConfirmError(errObj)
            break
        }
        // 未激活
        case '-110102': {
            handleError(errObj, () => {
                if (token) {
                    location.href = config.api.PAM + '/activation'
                } else {
                    location.href = config.api.PAM + '/un-active'
                }
            })
            break
        }
        // 用户已注销
        case '-110103': {
            handleError(errObj, () => {
                removeToken()
                location.href = config.api.PAM + '/login'
            })
            break
        }
        // 用户已冻结
        case '-110121': {
            handleError(errObj, () => {
                removeToken()
                location.href = config.api.PAM + '/login'
            })
            break
        }
        // 用户已注销
        case '-110120': {
            handleError(errObj, () => {
                removeToken()
                location.href = config.api.PAM + '/login'
            })
            break
        }
        case '-110209': {
            errObj.msg = '您暂未进行实名认证，请先认证'
            errObj.type = 'auth'
            errObj.redirectUrl = config.api.PAM + '/auth/realName-auth'
            errObj.confirmButtonText = '立即认证'
            errObj.cancelButtonText = '暂不认证'
            handleConfirmError(errObj)
            break
        }
        case '-110203': {
            errObj.msg = '您暂未进行企业认证，请先认证'
            errObj.type = 'auth'
            errObj.redirectUrl = config.api.PAM + '/auth/user-auth'
            errObj.confirmButtonText = '立即认证'
            errObj.cancelButtonText = '暂不认证'
            handleConfirmError(errObj)
            break
        }
        case '-110204': {
            errObj.msg = '您暂未进行材料供应商认证，请先认证'
            errObj.type = 'auth'
            errObj.redirectUrl = config.api.PAM + '/auth/user-auth'
            errObj.confirmButtonText = '立即认证'
            errObj.cancelButtonText = '暂不认证'
            handleConfirmError(errObj)
            break
        }
        case '-110205': {
            errObj.msg = '您暂未进行工程公司认证，请先认证'
            errObj.type = 'auth'
            errObj.redirectUrl = config.api.PAM + '/auth/user-auth'
            errObj.confirmButtonText = '立即认证'
            errObj.cancelButtonText = '暂不认证'
            handleConfirmError(errObj)
            break
        }
        // 未设置组织
        case '-110207': {
            errObj.msg = '您还没有完善组织信息，请先完成'
            errObj.confirmButtonText = '立即完善'
            errObj.cancelButtonText = '暂不完善'
            errObj.routerUrl = '/organization-manage/organization-set'
            handleConfirmError(errObj)
            break
        }
        // 部门上级不能为自己本身
        case '-120305': {
            break
        }
        default:
            handleError(errObj)
            break
    }
}

/**
 * 业务错误弹窗提醒
 * @param {*} err 
 */
function handleConfirmError(err) {
    console.log(err)
    // MessageBox.confirm(err.msg, '提示', {
    //     cancelButtonText: err.cancelButtonText,
    //     confirmButtonText:  err.confirmButtonText,
    //     type: err.type
    // })
    MessageBox({
        title: '',
        message: err.msg,
        center: true,
        iconClass: `alert-warning`,
        type: 'warning',
        showCancelButton: true
    }).then(() => {
        if (err.redirectUrl) {
            location.href = err.redirectUrl
        }
        if (err.routerUrl) {
            router.push(err.routerUrl)
        }
    })
}

/**
 * 错误提醒
 * @param {*} err 
 */
function handleError(err, callback) {
    let msg = err.msg || '发生未知错误，请重试'
    if (('' + err.code).indexOf('timeout') > -1) {
        msg = '加载超时！请检查你的网络'
    }
    $msgBox({
        type: 'warning',
        dangerouslyUseHTMLString: true,
        customClass: 'warning',
        iconClass: 'msg-warning',
        duration: 3000,
        message: `<div class="p1">${msg}</div>`,
        onClose: callback
    })
}
