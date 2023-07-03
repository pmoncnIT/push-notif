import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
// import MainView from '../views/MainView.vue'
import ProjectOverview from '../views/ProjectOverviewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/about',
    name:'about',
    component: AboutView
  },
  {
    path:'/project_overview',
    name:'projectOverview',
    component: ProjectOverview
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
