// eslint-disable-next-line no-unused-vars
import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        isAuthenticated: false
    },
// eslint-disable-next-line no-unused-vars
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.isAuthenticated = value
            console.log(value)
        }
    },
// eslint-disable-next-line no-unused-vars
    actions: {
        login({commit}) {
            commit('SET_AUTHENTICATED', true)
        },
        logout({commit}) {
            commit('SET_AUTHENTICATED', false)
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated
    }
})