/*
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:02:15
 * @LastEditTime: 2021-01-20 01:33:57
 * @LastEditors: zhangyanlong
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// automatic context all page router
let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(router => {
  if (router.indexOf('./index') === 0) {
    return false
  }
  const routerModule = routerContext(router)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/mobile' },
    ...routes
  ]
})

export default router
