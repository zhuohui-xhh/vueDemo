import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'demoPage'
  },
  {
    path: '/demoPage',
    name: 'demoPage',
    component: () => import('../views/demoPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
