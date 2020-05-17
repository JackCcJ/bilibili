import Vue from 'vue'
import VueRouter from 'vue-router'
const register = () => import ('@/views/register')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
