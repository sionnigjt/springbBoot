import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
