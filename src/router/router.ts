import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '../views/PersonalInfo.vue'

const routes = [
  {
    path: '/',
    name: 'personal-info',
    component: PersonalInfo
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
