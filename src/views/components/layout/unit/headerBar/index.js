import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './headerBar.vue'
import { getToken, removeToken, setCompanyToken } from 'common/auth'
import { MessageBox, Message } from 'element-ui'

@Component({
    name: 'headerBar',
    mixins: [template],
    components: {
    }
})
export default class HeaderBar extends Vue {
    @Prop({ type: String }) fromModule
    @Prop({ type: String }) loginUrl
    @Prop({ type: String }) registryUrl
    @Prop({ type: Object, default: {} }) config
    @Prop({ type: Number, default: 0 }) unReaded
    @Prop({ type: Number, default: 0 }) unTreated
    @Prop({ type: String }) source
    @Prop({ type: Number }) activeIndex

    visible = false
    isActive = true
    navBarMenus = []
    name = null
    isLogged = false
    userName = ''
    isShowNewsList = false

    unReadNum = 0

    get iconColor() {
        return this.source === '1' ? '#E84133' : '#fff'
    }

    get sourceColor() {
        return this.source === '1' ? 'rgba(0,0,0,0.38)' : '#fff'
    }

    get isLogin() {
        return !this.utils.isEmpty(getToken())
    }

    created() {
        this.init()
    }

    init() {
        if (this.isLogin) {
            // 加载未读/未处理消息
            this.loadTipsRecord()
            this.fetchList()
        }
    }

    fetchList () {
        this.api.mainApi.fetchUserInfo().then(resp => {
            this.socket(resp)
        })
    }

    socket (resp) {
        let that = this
        let ws = new WebSocket(`${this.config.api.wshost}${resp.id}`)
        console.log(ws)

        ws.onopen = function () {
            console.log('WebSocket连接成功')
        }

        ws.onmessage = function (evt) {
            let result = JSON.parse(evt.data)
            console.log(result)
            that.unReadNum = result.msgCount
        }
    }

    toModule(_moduleName, path) {
        if (this.fromModule === _moduleName) {
            this.$router.push(path)
        } else {
            this.handleOpen(_moduleName, path)
        }
    }
    logout() {
        Message({
            type: 'success',
            dangerouslyUseHTMLString: true,
            customClass: 'success',
            iconClass: 'msg-success',
            duration: 1500,
            message: '<div class="p1">用户登出成功</div>',
            onClose: () => {
                this.api.mainApi.loadLogout().then(_ => {
                    removeToken(this.domain)
                    this.toModule('PAM', '/login')
                })
            }
        })
    }
    userLogout() {
        MessageBox({
            title: '确定要退出登录吗？',
            message: '',
            center: true,
            iconClass: 'alert-warning',
            showCancelButton: true,
            type: 'warning',
            callback: (action) => {
                if (action === 'confirm') {
                    this.logout()
                }
            }
        })
    }
    handleOver() {
        if (!this.visible) this.visible = true
    }
    handleOut() {
        if (this.visible) this.visible = false
    }
    handleOpen(to, path) {
        let redirectUrl = ''
        if (to === 'PAM') {
            location.href = this.config.api.PAM + path
        } else {
            redirectUrl = this.config.api[to] + path
            this.open(redirectUrl)
        }
    }

    handleInConsole() {
        // 切换到当前组织
        // this.api.mainApi.changeCompany({ id: -1 }).then((data) => {
        //     if (data && data.id) {
        //         setCompanyId(data.id)
        //     }
        this.toModule('BBC', '/')
        // })
    }

    /**
     * 查询未读/未处理消息
     *
     */
    loadTipsRecord() {
        this.api.mainApi.loadViewData().then((data) => {
            if (data) {
                this.$emit('update:unReaded', data.msgNumber || 0)
                this.$emit('update:unTreated', data.inviteNumber || 0)
                this.userName = data.userName
                this.companyList = data.joinedOrgList || []
                const companyId = this.getParam('id')
                if (!this.utils.isEmpty(companyId)) {
                    const obj = this.utils.arrayAttrToObj(this.companyList, 'companyId', companyId)
                    // 设置切换后的企业ID
                    setCompanyToken(companyId)
                    this.defaultCompany = obj
                } else {
                    this.$nextTick(() => {
                        // 设置默认的企业ID
                        if (!this.utils.isEmptyArray(data.joinedOrgList)) {
                            setCompanyToken(data.joinedOrgList[0].companyId)
                            this.defaultCompany = data.joinedOrgList[0]
                        }
                    })
                }
            }
        })
    }

    /**
     * 获取URL参数
     *
     * @param {*} paramName
     * @returns
     */
    getParam(paramName) {
        let paramValue = ''
        let isFound = !1
        if (location.search.indexOf('?') === 0 && location.search.indexOf('=') > 1) {
            let arrSource = unescape(location.search).substring(1, location.search.length).split('&')
            let i = 0
            // eslint-disable-next-line no-sequences
            while (i < arrSource.length && !isFound) arrSource[i].indexOf('=') > 0 && arrSource[i].split('=')[0].toLowerCase() === paramName.toLowerCase() && (paramValue = arrSource[i].split('=')[1], isFound = !0), i++
        }
        // eslint-disable-next-line no-sequences
        return paramValue === '' && (paramValue = null), paramValue
    }

    @Watch('unReaded', {
        immediate: true,
        deep: true
    })
    handleWatchUnReaded(val) {
        this.unReaded = val
    }

    @Watch('unTreated', {
        immediate: true,
        deep: true
    })
    handleWatchUnTreated(val) {
        this.unTreated = val
    }

    handleNewsOver() {
        this.isShowNewsList = true
    }

    handleNewsOut() {
        this.isShowNewsList = false
    }
}
