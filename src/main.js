/*
 * @Author: zhangyanlong
 * @Date: 2021-01-19 23:56:14
 * @LastEditTime: 2021-01-20 00:40:38
 * @LastEditors: zhangyanlong
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/animate.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
