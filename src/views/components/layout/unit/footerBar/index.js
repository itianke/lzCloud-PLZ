import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'footerBar',
    mixins: [template],
    components: {
    }
})
export default class FooterBar extends Vue {
    
}
