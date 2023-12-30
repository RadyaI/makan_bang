import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'
import pickMakan from '../views/pickMakan.vue'
import deviceError from '../views/deviceError.vue'
import home from '../views/page/home.vue'

const routes = [
  {
    path: '/',
    component: landingPage
  },
  {
    path: '/pilih-makan',
    component: pickMakan
  },
  {
    path: '/device-error',
    component: deviceError
  },
  {
    path: '/home',
    component: home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
