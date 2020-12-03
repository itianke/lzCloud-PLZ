
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Public extends Vue {
    table = {
        data: [],
        url: null,
        maxHeight: 0
    }
    pagination = {
        total: 0,
        page: 1,
        size: 10,
        pageSizes: [10, 20, 50, 100]
    }
    dialog = {
        data: null,
        visible: false,
        title: null,
        size: 'normal'
    }
    headerInfo = {
        unReaded: 0,
        unTreated: 0
    }
}
