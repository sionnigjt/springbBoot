import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  }, {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register')
  },
  {
    path: '/changePwd',
    name: 'changePwd',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/changePwd/changePwd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' ||to.path=='/changePwd') {
    next()
  } else {
    //console.log('before')
    let token = window.sessionStorage.getItem('token')
    console.log(token);
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
