import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend.vue'
import Search from '@/views/search.vue'
import Singer from '@/views/singer.vue'
import TopList from '@/views/top-list.vue'

const routes = [
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/toplist',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
