import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './mainContent.vue'

@Component({
    name: 'mainContainer',
    mixins: [template],
    components: {
    }
})
export default class MainContainer extends Vue {

}
