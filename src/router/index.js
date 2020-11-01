import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login'
import Home from './../views/home/home'
import Layout from '../views/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
