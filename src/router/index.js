import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component:Home ,
        meta:{
          isLogin:true
        }
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('../views/main/Params.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/main/Product.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path: 'ad',
        name: 'ad',
        component: () => import('../views/main/ADCategory.vue'),
        meta:{
          isLogin:true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
