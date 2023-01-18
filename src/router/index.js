// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Home.vue'),
    children: [
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/BlogPage.vue')
      },
      {
        path: '/education',
        name: 'Education',
        component: () => import('@/views/EducationPage.vue')
      },
      {
        path: '/medicine',
        name: 'Medicine',
        component: () => import('@/views/MedicinePage.vue')
      },
      {
        path: '/leisure',
        name: 'Leisure',
        component: () => import('@/views/LeisurePage.vue')
      },
      {
        path: '/support',
        name: 'Support',
        component: () => import('@/views/SupportPage.vue')
      },
      {
        path: '/beauty',
        name: 'Beauty',
        component: () => import('@/views/BeautyPage.vue')
      },
      {
        path: '/job',
        name: 'Job',
        component: () => import('@/views/JobPage.vue')
      },
      {
        path: '/fleaMarket',
        name: 'FleaMarket',
        component: () => import('@/views/FleaMarketPage.vue')
      },
      {
        path: '/delivery',
        name: 'Delivery',
        component: () => import('@/views/DeliveryPage.vue')
      },
      {
        path: '/aboutUs',
        name: 'AboutUs',
        component: () => import('@/views/AboutUsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
