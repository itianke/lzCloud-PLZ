import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import formSection from 'src/views/components/form-section'

@Component({
    name: 'service',
    mixins: [template],
    components: {
        formSection
    }
})
export default class Service extends Vue {
    
}
