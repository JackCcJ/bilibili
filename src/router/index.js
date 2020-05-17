import Vue from 'vue'
import VueRouter from 'vue-router'
const register = () => import ('@/views/register')
const login = () =>import ('@/views/login')
const userInfo = () => import ('@/views/userInfo')
Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   redirect: '/register'
  // },
  {
    path: '/register',
    component: register
  },
  {
    path:'/login',
    component: login
  },
  {
    path:'/userInfo',
    component: userInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
