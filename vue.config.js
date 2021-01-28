/*
 * @Author: zhangyanlong
 * @Date: 2021-01-19 23:57:08
 * @LastEditTime: 2021-01-28 15:22:54
 * @LastEditors: zhangyanlong
 * @Description:
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  outputDir: 'build',
  publicPath: '/',
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
