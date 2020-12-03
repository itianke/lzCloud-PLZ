import Vue from 'src/views/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './layout.vue'
import MainContainer from './unit/mainContent'
import HeaderBar from './unit/headerBar'
import footerBar from './unit/footerBar'

@Component({
    name: 'layout',
    mixins: [template],
    components: {
        HeaderBar,
        footerBar,
        MainContainer
    }
})
export default class Layout extends Vue {
    @Watch('$route', {
        immediate: true,
        deep: true
    })
    handleWatchScroll(val) {
        this.$nextTick(() => {
            document.getElementById('container').scrollTop = 0
        })
    }
}
