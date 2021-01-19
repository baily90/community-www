/*
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:03:13
 * @LastEditTime: 2021-01-20 00:03:52
 * @LastEditors: zhangyanlong
 * @Description:
 */
export default [
  {
    path: '/mobile',
    name: 'Mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '@/views/mobile/index.vue')
  }
]
