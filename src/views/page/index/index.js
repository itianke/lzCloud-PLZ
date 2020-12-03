import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import HeaderBar from 'src/views/components/layout/unit/headerBar'
import formSection from 'src/views/components/form-section'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
    name: 'index',
    mixins: [template],
    components: {
        HeaderBar,
        formSection,
        swiper,
        swiperSlide
    }
})
export default class Index extends Vue {
    options = {
        speed: 400,
        loop: true,
        autoplay: 3000,
        direction: 'vertical'
    }

    count = {}

    articalList = []

    created() {
        this.fetchList()
    }

    transferData(type) {
        return type === 1 ? '行业动态' : type === 2 ? '官方公告' : type === 3 ? '平台运营' : '未知类型'
    }

    fetchList() {
        this.api.mainApi.fetchHomeCount().then(resp => {
            this.count = resp
        })

        this.api.mainApi.fetchArticalList().then(resp => {
            this.articalList = resp.list.slice(0, 3)
        })
    }
}
