import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Account from '../views/Account.vue';
import Cookies from '../views/Cookies.vue';
import Home from '../views/Home.vue';
import Integrations from '../views/Integrations.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/about',
        //name: 'about',
        component: About
    },
    {
        path: '/account',
        //name: 'account',
        component: Account
    },
    {
        path: '/cookies',
        //name: 'cookies',
        component: Cookies
    },
    {
        path: '/home',
        //name: 'home',
        component: Home
    },
    {
        path: '/integrations',
        //name: 'integrations',
        component: Integrations
    },
    {
        path: '/',
        redirect: '/home'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: 'http://localhost:8080',
    routes
})

export default router
