import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user from "@/store/user";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/UserCenter'),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 通过 Vuex 获取用户登录信息
  const userInfo = user.getters.getUser(user.state());

  // 若用户未登录且访问的页面需要登录，则跳转至登录页面
  if (!userInfo && to.meta.requireAuth) {
    next({
      name: 'Login',
    })
  }

  next()
})

export default router
