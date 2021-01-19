/*
 * @Author: zhangyanlong
 * @Date: 2021-01-19 23:57:08
 * @LastEditTime: 2021-01-19 23:57:37
 * @LastEditors: zhangyanlong
 * @Description:
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 prefetch 插件
    config.plugins.delete('preload')
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios'
    },
    plugins: [
      new CompressionWebpackPlugin({
        compressionOptions: {
          numiterations: 15
        },
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
