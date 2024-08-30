import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Servicios from '@/views/Servicios.vue'
import Blog from '@/views/Blog.vue'
import Login from '@/views/Login.vue'
import Producto from '@/views/admin/Producto.vue'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      component: AppLayout,
      children: [
        {
          path: 'producto',
          name: 'Producto',
          component: Producto
        }
      ]
    }
  ]
})

export default router
