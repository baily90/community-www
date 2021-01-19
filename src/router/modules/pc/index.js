/*
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:04:14
 * @LastEditTime: 2021-01-20 00:04:35
 * @LastEditors: zhangyanlong
 * @Description:
 */
export default [
  {
    path: '/pc',
    name: 'PC',
    component: () => import(/* webpackChunkName: "pc" */ '@/views/pc/index.vue')
  }
]
