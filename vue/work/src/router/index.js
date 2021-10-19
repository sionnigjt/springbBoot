import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    //console.log('before')
    let token = window.sessionStorage.getItem('token')

    if (token === null || token === '') {
      next('/admin/login');
    } else {
      next();
    }
  }
});

export default router
