// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/BlogPage.vue')
      },
      {
        path: '/articles',
        name: 'Articles',
        component: () => import('@/views/ArticlesPage.vue')
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
      },
      {
        path: '/mainForm',
        name: 'MainForm',
        component: () => import('@/views/MainForm.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
