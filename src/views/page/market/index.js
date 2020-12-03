import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { getToken } from 'common/auth'
import formSection from 'src/views/components/form-section'

@Component({
    name: 'market',
    mixins: [template],
    components: {
        formSection
    }
})
export default class Market extends Vue {
    created() {
        if (!this.utils.isEmpty(getToken())) {
            this.loadData()
        }
    }
}
