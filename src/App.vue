<!--
 * @Author: zhangyanlong
 * @Date: 2021-01-19 23:56:14
 * @LastEditTime: 2021-01-20 01:20:55
 * @LastEditors: zhangyanlong
 * @Description:
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  outline: none;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", sans-serif, "Microsoft YaHei";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
html,
body {
  width: 100%;
  height: 100vh;
}
body {
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
  -webkit-font-smoothing: antialiased; /*chrome、safari*/
  -moz-osx-font-smoothing: grayscale; /*firefox*/
}
img {
  display: inline-flex;
  vertical-align: top;
  width: 100%;
}
div::-webkit-scrollbar {
  display: none;
}
input {
  border: none;
  color: #333333;
}
::-webkit-input-placeholder {
  color: #999999;
}

:-ms-input-placeholder {
  color: #999999;
}

::-moz-placeholder {
  color: #999999;
}

:-moz-placeholder {
  color: #999999;
}

.page-bg {
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #010D1A;
}
</style>
