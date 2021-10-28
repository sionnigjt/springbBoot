import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register/register.vue')
    },
    {
        path: '/changePwd',
        name: 'changePwd',
        component: () => import('../views/register/changePwd/changePwd.vue')
    }]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login' || to.path === '/register' || to.path == '/changePwd') {
//         next()
//     } else {
//         //console.log('before')
//         let token = window.sessionStorage.getItem('token')
//         console.log(token);
//         if (token === null || token === '') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// });

export default router