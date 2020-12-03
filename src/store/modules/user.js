/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import storage from 'src/unit/storage'

export const storeName = 'user'

/** state **/
let state = {
    user: {},
    loggined: false,
    token: null,
    isAuth: false
}

/** getters **/
let getters = getter(state, {
    user: state => state.user,
    loggined: state => state.loggined
})

/** mutations **/
let mutations = mutation(state, {
    SET_USER(state, data) {
        if (data) {
            state.user = Object.assign({}, data)
            storage.set('user', state.user)
            state.loggined = true
        } else {
            storage.set('user', '')
            state.user = null
            state.loggined = false
            state.token = null
        }
    }
})

/** actions **/
let actions = action(state, {
    async setUser({ commit }, value) {
        commit('SET_USER', value)
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
