import utils from '../../utils'
import Mock from 'mockjs'

const applyList = []
const inviteList = []
const count = 99

for (let i = 0; i < count; i++) {
    applyList.push(Mock.mock({
        id: '@id',
        applyTime: '@datetime',
        organzation: '@cword(14)',
        licenseNo: '@natural',
        address: '@city(true)',
        name: '@name',
        'status|1': [0, 1, 2]
    }))

    inviteList.push(Mock.mock({
        id: '@id',
        inviteTime: '@datetime',
        organzation: '@cword(14)',
        licenseNo: '@natural',
        address: '@city(true)',
        name: '@name',
        'status|1': [0, 1, 2]
    }))
}

const Apis = {
    fetchAuthList(params) {
        const { page, size, type } = utils.params2Obj(params.url)
        console.log(type)
        // eslint-disable-next-line eqeqeq
        const list = type == 1 ? applyList : inviteList
        // eslint-disable-next-line eqeqeq
        const message = type == 1 ? '授权申请' : '授权邀请'
        const pageList = list.filter((item, index) => index < size * page && index >= size * (page - 1))
        let ret = {
            code: '200',
            message: '',
            responseBody: {
                code: '200',
                message: '',
                data: {
                    content: pageList,
                    total: list.length
                }
            }
        }
        utils.log(`${message}列表`, params.url, ret)
        return ret
    }
}

export default Apis
