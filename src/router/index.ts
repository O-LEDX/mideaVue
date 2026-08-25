import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name:'home',
    component: () => import('@/views/homePage.vue')
  },
  {
    path: '/career',
    name:'career',
    component: () => import('@/views/careerPage.vue')
  },
  {
    path: '/investor',
    name:'investor',
    component: () => import('@/views/investorPage.vue')
  },
  {
    path:'/shop',
    name:'shop',
    component: () => import('@/views/shopPage.vue')
  },
  {
    path: '/living',
    name:'living',
    component: () => import('@/views/livingPage.vue')
  },
  {
    path: '/server',
    name:'server',
    component: () => import('@/views/serverPage.vue')
  },
  {
    path: '/join',
    name:'join',
    component: () => import('@/views/joinPage.vue')
  },
  {
    path: '/about',
    name:'about',
    component: () => import('@/views/aboutPage.vue')
  },
  {
    path: '/suppler',
    name:'suppler',
    component: () => import('@/views/supplerPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router
