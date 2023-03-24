import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import Vuex from 'vuex'
import VueLocalStorage from 'vue-ls'
import createPersistedState from 'vuex-persistedstate'

const app = createApp(App)

app.use(VueLocalStorage)

const store = new Vuex.Store({
    // опции хранилища vuex
    plugins: [createPersistedState()]
})

app.use(store)
app.use(router)
app.mount('#app')