import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['username', 'isAuthenticated']
    })],
    state: {
        username: '',
        isAuthenticated: false
    },
// eslint-disable-next-line no-unused-vars
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.isAuthenticated = value
        },
        SET_USERNAME(state, value) {
            state.username = value
        }
    },
// eslint-disable-next-line no-unused-vars
    actions: {
        login({commit}) {
            commit('SET_AUTHENTICATED', true)
        },
        logout({commit}) {
            commit('SET_AUTHENTICATED', false)
        },
        usernameChange({commit}) {
            commit('SET_USERNAME', this.state.username)
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        username: state => state.username
    }
})