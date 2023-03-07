import {createRouter,createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

const Home = () => import('pages/Home.vue')
const List = () => import('pages/List.vue')
const NotFound = () => import('pages/NotFound.vue')

const routes:RouteRecordRaw[] = [
  {
    name:'data',
    path:'/home/data',
    component:Home
  },
  {
    name:'list',
    path:'/home/list',
    component:List
  },
  // 配置404页面
  {
    name:'not-found',
    path:'/:path(.*)',
    component:NotFound
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router