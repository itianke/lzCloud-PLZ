import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { isEmpty } from 'src/common/utils'
// eslint-disable-next-line standard/object-curly-even-spacing

@Component({
    name: 'formSection',
    mixins: [template],
    components: {}
})
export default class FormSection extends Vue {
    options = {
        uName: null,
        uMobile: null,
        businessType: 1 // 1，产品体验；2，合作渠道
    }

    rules = {
        uName: [
            { required: true, message: '请输入你的姓名', trigger: 'change' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'change' }
        ],
        uMobile: [
            { required: true, message: '请输入你的手机号码', trigger: 'change' },
            { validator: this.validateMobile, trigger: 'change' }
        ]
    }

    validateMobile(rule, value, callback) {
        let required = typeof rule.required !== 'undefined' ? rule.required : false
        const reg = new RegExp(/^1[3-9]\d{9}$/)
        if (required) {
            if (isEmpty(value)) {
                return callback(new Error('请输入'))
            }
            if (!reg.test(value)) {
                return callback(new Error('请输入正确的手机号码'))
            }
            callback()
        } else {
            if (isEmpty(value)) {
                callback()
            } else {
                if (!reg.test(value)) {
                    return callback(new Error('请输入正确的手机号码'))
                }
                callback()
            }
        }
    }

    created() {
        this.options.businessType = this.$route.name === 'market' ? 2 : 1
    }

    onSubmit() {
        this.$refs['ruleForm'].validate(valid => {
            if (valid) {
                this.handleAdd()
            }
        })
    }

    handleAdd() {
        this.api.mainApi.addBusiness({ ...this.options }).then(resp => {
            if (resp.judge) {
                this.$alert('提交成功，等待工作人员与您联系。', '提示', {
                    confirmButtonText: '确定',
                    customClass: 'form-box-wrap'
                })
            }
        })
    }
}
