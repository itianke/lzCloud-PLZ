/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import storage from 'src/unit/storage'

export const storeName = 'menu'

/** state **/
let state = {
    navRouteName: null,
    activeModule: {
        name: null,
        path: null
    }
}

/** getters **/
let getters = getter(state, {
    navRouteName: state => state.navRouteName,
    activeModule: state => state.activeModule
})

/** mutations **/
let mutations = mutation(state, {
    SET_NAV_ROUTE_NAME: (state, value) => {
        if (value) {
            state.navRouteName = value
            storage.set('navRouteName', value)
        } else {
            state.navRouteName = null
            storage.set('navRouteName', null)
        }
    },
    SET_MODULE: (state, obj) => {
        state.activeModule = obj
    }
})

/** actions **/
let actions = action(state, {
    async setNavRouteName({ commit }, value) {
        commit('SET_NAV_ROUTE_NAME', value)
    },
    async setModule({ commit }, value) {
        commit('SET_MODULE', value)
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
