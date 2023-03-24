import { createRouter, createWebHashHistory } from 'vue-router';
import projectViewPage from "@/components/projectPage";
import addProjectPage from "@/components/addProjectPage";
import projectPageAuth from "@/components/projectsAuth"
import mainPageNotAuth from '@/components/projects'
import store from './store'

const router =  createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: mainPageNotAuth, name: 'login', meta: {requiresAuth: false}},
        {path: "/project", component: addProjectPage, meta: {requiresAuth: true}},
        {path: "/dashboard", component: projectPageAuth, name: 'dashboard', meta: {requiresAuth: true}},
        {path: "/dashboard/:id", component: projectViewPage, meta: {requiresAuth: true}}
    ]
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated
    if (to.name !== 'login' && !isAuthenticated) {
        next({ name: 'login' })
    } else if (to.name === 'login' && isAuthenticated) {
        next({ name: 'dashboard' })
    } else {
        next()
    }
})

export default router;