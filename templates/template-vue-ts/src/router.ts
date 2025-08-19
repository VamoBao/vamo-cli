import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PageDetail from './pages/PageDetail.vue'
import HomePage from './pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  {
    path: '/detail',
    component: PageDetail,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
