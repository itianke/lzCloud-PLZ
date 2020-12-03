/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import storage from 'src/unit/storage'

export const storeName = 'common'

/** state **/
let state = {
    sidebar: {
        // opened: !+storage.get('sidebarStatus')
        opened: false
    }
}

/** getters **/
let getters = getter(state, {
    sidebar: state => state.sidebar
})

/** mutations **/
let mutations = mutation(state, {
    toggleSideBar(state, data) {
        storage.set('sidebarStatus', state.sidebar.opened ? 1 : 0)
        state.sidebar.opened = !state.sidebar.opened
    },
    hiddenSideBar(state, data) {
        console.log('state', data)
        state.sidebar.opened = data
    }
})

/** actions **/
let actions = action(state, {
    // sidebar展开状态
    async toggleSideBar({ commit }, value) {
        commit('toggleSideBar', value)
    },
    async hiddenSideBar({ commit }, value) {
        commit('hiddenSideBar', value)
    }
})

/** module store **/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store
