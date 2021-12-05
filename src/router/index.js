import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Books from '../views/Books.vue';
import Cookies from '../views/Cookies.vue';
import Home from '../views/Home.vue';
import Integrations from '../views/Integrations.vue';
import Cards from '@/components/Cards'

Vue.use(VueRouter);

const routes = [
    {
        path: '/about',
        //name: 'about',
        component: About
    },
    {
        path: '/books',
        //name: 'books',
        component: Books
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
        path: '/coins',
        name: 'Coins',
        component: () => import('../views/Coins.vue')
    },
    {
        path: '/coins/:cardid',
        name: 'Cards',
        component: Cards
    },
    {
        path: '/',
        redirect: '/home'
    }
];
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
