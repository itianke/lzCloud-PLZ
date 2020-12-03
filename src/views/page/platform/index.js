import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { getToken } from 'common/auth'

@Component({
    name: 'platform',
    mixins: [template]
})
export default class Platform extends Vue {
    created() {
        if (!this.utils.isEmpty(getToken())) {
            this.loadData()
        }
    }
}
