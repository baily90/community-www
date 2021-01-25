/*
 * @Author: zhangyanlong
 * @Date: 2021-01-19 23:56:14
 * @LastEditTime: 2021-01-26 00:25:20
 * @LastEditors: zhangyanlong
 * @Description:
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
