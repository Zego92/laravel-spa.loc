import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: {name: 'Login'}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {layout: 'auth', title: 'Login Page'}
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {layout: 'main', title: 'Home Page'}
    }
]

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})

export default router
