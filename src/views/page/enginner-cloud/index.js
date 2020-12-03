import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './enginner-cloud.vue'
import HeaderBar from 'src/views/components/layout/unit/headerBar'
import { getToken } from 'common/auth'

@Component({
    name: 'enginnerCloud',
    mixins: [template],
    components: {
        HeaderBar
    }
})
export default class EnginnerCloud extends Vue {
    created() {
        if (!this.utils.isEmpty(getToken())) {
            this.loadData()
        }
    }
}
