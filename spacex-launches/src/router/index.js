import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Launch from '../views/Launch.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/launch/:id',
    props: true,
    name: 'Launch',
    component: Launch
  }
]

const router = new VueRouter({
  routes
})

export default router
