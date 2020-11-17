import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

export default createRouter({
  routes: [
    {
      path: '/',
      alias: '/home',
      component: () => import('./views/v-home.vue')
    },
    {
      path: '/todos',
      component: () => import('./views/v-todos.vue')
    },
    {
      path: '/jsx',
      component: () => import('./views/v-jsx.vue')
    }
  ],
  history: createWebHashHistory()
})

