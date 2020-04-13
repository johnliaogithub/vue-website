import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Corona from '../components/Corona.vue'
import Poorpeeps from '../components/Poorpeeps.vue'
import Projects from '../views/Projects.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)
Vue.use(NProgress)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: ''
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testapi',
    name: 'TestApi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/TestApi.vue')
  },
  {
    path: '/projects/',
    name: 'projects',
    component: Projects,
    children: [
    {path: 'covid19donations', component: Corona},
    {path: 'poorpeopledonations', component: Poorpeeps}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done(true)
})

export default router
