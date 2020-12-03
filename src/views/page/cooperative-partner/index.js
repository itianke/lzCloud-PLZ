import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './cooperative-partner.vue'
import HeaderBar from 'src/views/components/layout/unit/headerBar'
import { getToken } from 'common/auth'
import { MessageBox, Message } from 'element-ui'
import Cookies from 'js-cookie'

@Component({
    name: 'cooperativePartner',
    mixins: [template],
    components: {
        HeaderBar
    }
})
export default class CooperativePartner extends Vue {
    created() {
        if (!this.utils.isEmpty(getToken())) {
            this.loadData()
        }
    }

    handleView() {
        this.goTo('/service-provider-program')
    }

    handleJoin() {
        // 判断是否登录
        if (getToken()) {
            // 判断用户状态
            this.api.mainApi.fetchUserInfo({}).then(res => {
                // eslint-disable-next-line default-case
                switch (res.userStatus) {
                    case 0: {   // 未激活
                        this.open(this.config.api.PAM + '/activation', '_self')
                        break
                    }
                    case 1: {   // 正常
                        this.api.mainApi.fetchOrganization({}).then(res => {
                            if (res && res.companyName) {
                                this.open(this.config.api.BBC + '/enterprise-cooperation/cooperation-center')
                            } else {
                                MessageBox({
                                    title: '尚未进行组织设置，确定去设置组织？',
                                    message: '',
                                    center: true,
                                    iconClass: 'alert-warning',
                                    showCancelButton: true,
                                    type: 'warning',
                                    callback: (action) => {
                                        if (action === 'confirm') {
                                            this.open(this.config.api.BBC + '/organization-manage/organization-set', '_self')
                                        }
                                    }
                                })
                            }
                        })
                        break
                    }
                    case 2: {   // 已冻结
                        Message({
                            type: 'warning',
                            dangerouslyUseHTMLString: true,
                            customClass: 'warning',
                            iconClass: 'msg-warning',
                            duration: 1500,
                            message: '<div class="p1">对不起！该账号已被冻结，请进行其他操作!</div>'
                        })
                        break
                    }
                    case 3: {   // 已注销
                        Message({
                            type: 'warning',
                            dangerouslyUseHTMLString: true,
                            customClass: 'warning',
                            iconClass: 'msg-warning',
                            duration: 1500,
                            message: '<div class="p1">对不起！该账号已被注销，请进行其他操作!</div>'
                        })
                        break
                    }
                }
            })
        } else {
            Cookies.set('backUrl', location.href)
            this.open(this.config.api.PAM + '/login')
        }
    }
}
