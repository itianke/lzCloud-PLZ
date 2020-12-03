import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import formSection from 'src/views/components/form-section'

@Component({
    name: 'news-list',
    mixins: [template],
    components: {
        formSection
    }
})
export default class NewsList extends Vue {
    articalList = []
    loading = true

    created() {
        this.fetchList()
    }

    fetchList() {
        this.loading = true
        let opts = {
            pageNum: this.pagination.page,
            pageSize: this.pagination.size
        }
        this.api.mainApi.fetchArticalList({ id: this.id, ...opts }).then(resp => {
            this.articalList = resp.list
            this.pagination.total = resp.total
            this.loading = false
        })
    }

    handletoDetail(id) {
        this.$router.push(`/news-detail?id=${id}`)
    }

    handleSizeChange(val) {
        this.pagination.size = val
        this.fetchList()
    }

    handleCurrentChange(val) {
        this.pagination.page = val
        this.fetchList()
    }
}
