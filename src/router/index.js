import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/blogs'
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogsView.vue')
    }
  ]
})

export default router
