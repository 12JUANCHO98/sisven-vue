import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
 },
  {
    path: '/paymodes',
    name: 'paymodes',
    component: () => import('@/paymodes/pages/index.vue')
  },
 
   {
    path: '/categories',
    name: 'categories',
    component: () => import('@/categories/pages/index.vue')
  },
    {
    path: '/products',
    name: 'products',
    component: () => import('@/products/pages/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router