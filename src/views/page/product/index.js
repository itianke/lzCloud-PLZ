import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import formSection from 'src/views/components/form-section'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
    name: 'product',
    mixins: [template],
    components: {
        formSection,
        swiper,
        swiperSlide
    }
})
export default class Product extends Vue {
    options = {
        loop: false,
        autoplay: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    }

    focusList = [
        {
            title: '不增加人员',
            content: '轻松管理1万个项目',
            checked: true,
            id: 1
        },
        {
            title: '不用担心被诉讼',
            content: '安心睡好觉',
            checked: false,
            id: 2
        },
        {
            title: '企业合规经营',
            content: '上市不再难',
            checked: false,
            id: 3
        }
    ]

    handleFocus(id) {
        this.focusList = this.focusList.map(item => {
            item.checked = item.id === id
            return item
        })
    }
}
