import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import homeRev from '../views/home-rev.vue'
import pickMakan from '../views/pickMakan.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeRev
  },
  {
    path: '/fail',
    component: home
  },
  {
    path: '/pilih-makan',
    component: pickMakan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
