<!--
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:04:54
 * @LastEditTime: 2021-01-25 17:36:23
 * @LastEditors: zhangyanlong
 * @Description:
-->
<template>
  <div class="container">
    <div class="page-bg"></div>
    <div class="header">
      <div class="logo-info">
        <div class="logo">
          <img class="icon-logo-text" src="./../../assets/imgs/mobile/icon-logo-text.png" alt="">
          <img class="icon-logo" src="./../../assets/imgs/mobile/icon-logo.png" alt="">
        </div>
        <img class="icon-qrcode" src="./../../assets/imgs/mobile/icon-qrcode.png" alt="">
      </div>
      <div class="icon-device"></div>
      <div class="icon-new-info">
        <img src="./../../assets/imgs/mobile/icon-new.png" alt="">
        无线掌上智能彩超
      </div>
    </div>
    <section class="wow slideInUp sec1">
      <div class="label">用不起的用得起 不会用的轻松用</div>
      <div class="tips">0元入驻 20秒上手 检查精准 报告权威</div>
      <div class="awards-wrap">
        <div class="awards-item">
          <img src="./../../assets/imgs/mobile/icon-wlyl.png" alt="">
          <div class="awards-name">未来医疗</div>
          <div class="awards-order">100强</div>
        </div>
        <div class="awards-item">
          <img src="./../../assets/imgs/mobile/icon-jncyj.png" alt="">
          <div class="awards-name">济南创业奖</div>
          <div class="awards-order">TOP10</div>
        </div>
        <div class="awards-item">
          <img src="./../../assets/imgs/mobile/icon-hzcyds.png" alt="">
          <div class="awards-name">杭州创业大赛</div>
          <div class="awards-order">入围奖</div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'container',
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      new WOW().init()
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 786px;
    background: url('./../../assets/imgs/mobile/bg-header.png') no-repeat top center;
    background-size: 100% 100%;
    .logo-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 44px;
      width: 100%;
      padding: 0 24px 0 32px;
      .logo {
        display: flex;
        align-items: center;
        .icon-logo-text {
          width: 132px;
          height: 20px;
        }
        .icon-logo {
          margin-left: 10px;
          width: 25px;
          height: 25px;
        }
      }
      .icon-qrcode {
        width: 16px;
        height: 16px;
      }
    }
    .icon-device {
      margin: 27px 0 0 98px;
      width: 316px;
      height: 555px;
      background: url('./../../assets/imgs/mobile/icon-device-double.png') no-repeat right center;
      background-size: 316px 555px;
      background-attachment: fixed;
    }
    .icon-new-info {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 462px;
      left: 32px;
      font-size: 14px;
      color: #fff;
      img {
        margin-bottom: 7px;
        width: 32px;
        height: 14px;
      }
    }
  }
  section {
    position: relative;
    margin: 0 auto 27px;
    width: 394px;
    padding: 30px 27px 27px 30px;
    background: #19202C;
    border-radius: 30px;
    overflow: hidden;

    &:last-child {
      margin-top: 0;
    }
    &.sec1 {
      margin: -258px auto 27px;
      color: #fff;
      .label {
        width: 199px;
        font-size: 26px;
        line-height: 40px;
      }
      .tips {
        margin-top: 10px;
        font-size: 10px;
        line-height: 26px;
      }
      .awards-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        .awards-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 36px;
            height: 36px;
          }
          .awards-name {
            margin-top: 6px;
            font-size: 14px;
            color: #999999;
            line-height: 20px;
          }
          .awards-order {
            font-size: 16px;
            font-weight: bold;
            line-height: 19px;
          }
        }
      }
    }
  }
}

</style>
