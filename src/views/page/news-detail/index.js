import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'news-detail',
    mixins: [template]
})
export default class NewsDetail extends Vue {
    artical = {}

    get id() {
        return this.$route.query.id
    }

    created() {
        this.fetchList()
    }

    fetchList() {
        this.api.mainApi.fetchArticalDetail({ id: this.id }).then(resp => {
            this.artical = resp
        })

        this.api.mainApi.fetchArticalPageViews({ id: this.id })
    }

    handleBack() {
        open(`${this.config.api.PLZ}/news-list`, '_self')
    }
}
