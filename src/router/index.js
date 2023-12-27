import { createRouter, createWebHistory } from 'vue-router'
import homeRev from '../views/home-rev.vue'
import pickMakan from '../views/pickMakan.vue'
import deviceError from '../views/deviceError.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeRev
  },
  {
    path: '/pilih-makan',
    component: pickMakan
  },
  {
    path: '/device-error',
    component: deviceError
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
