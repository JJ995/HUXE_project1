import Vue from 'vue';
import Router from 'vue-router';
import AuthService from './auth/authService';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Profile from "./views/Profile.vue";
import Callback from './components/Callback/Callback';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (AuthService.isAuthenticated()) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/callback',
            name: 'callback',
            component: Callback
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            beforeEnter: (to, from, next) => {
                if (AuthService.isAuthenticated()) {
                    next();
                } else {
                    next('/login');
                }
            }
        }
    ]
});

export default router;
