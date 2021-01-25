<!--
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:04:54
 * @LastEditTime: 2021-01-26 00:46:39
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
    <section class="wow slideInUp sec2">
      <div class="label">身边即享超声服务</div>
      <div class="second-label">Soundwise technology</div>
      <img class="icon-cs" src="" alt="">
      <div class="tips">
        <div class="tips-item">
          <span>2</span>分钟可检查过程
        </div>
        <div class="tips-item">
          <span>10</span>分钟即可获取报告
        </div>
      </div>
      <div class="btn-contact">立即联系我们</div>
      <div class="info">简单易用的操作方式，引导非超声医师2分钟完成检查；远端专业医师，快速响应，10分出具专业报告</div>
    </section>
    <section class="wow slideInUp sec3">
      <div class="label">我们的使命</div>
      <div class="second-label">打造基层影像家园</div>
      <img class="icon-sm" src="" alt="">
      <div class="info">无场地要求、无影像科要求、赋能基层诊所，共创基层影像家园</div>
      <div class="aboutUS">进一步了解我们</div>
    </section>
    <section class="wow slideInUp sec4">
      <div class="label">我们的团队</div>
      <div class="second-label">Soundwise technology</div>
      <div class="info">深至科技专注于超声诊断智能化和超声AI应用，团队由哥伦比亚、麻省理工、哈佛、斯坦福、清华、上海交大等国内外知名高校的博士率领。在小型超声设备硬件、人工智能系统方面拥有国内外的领先技术。</div>
      <van-swipe class="swipe" indicator-color="#2779FF">
        <van-swipe-item>
          <img class="avatar" src="./../../assets/imgs/mobile/icon-boss.png" alt="">
          <div class="name">
            朱瑞星
            <span>CEO</span>
          </div>
          <div class="detail">
            <div class="detail-item">哥伦比亚大学博士</div>
            <div class="detail-item">拥有近十年医疗领域研发和投资经验</div>
            <div class="detail-item">曾任于软银中国医疗投资团队投资总监</div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img class="avatar" src="./../../assets/imgs/mobile/icon-boss.png" alt="">
          <div class="name">
            朱瑞星
            <span>CEO</span>
          </div>
          <div class="detail">
            <div class="detail-item">哥伦比亚大学博士</div>
            <div class="detail-item">拥有近十年医疗领域研发和投资经验</div>
            <div class="detail-item">曾任于软银中国医疗投资团队投资总监</div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import { WOW } from 'wowjs'
export default {
  name: 'container',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
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
  color: #ffffff;
  .header {
    position: relative;
    width: 100%;
    height: 786px;
    padding-top: 44px;
    background: url('./../../assets/imgs/mobile/bg-header.png') no-repeat top center;
    background-size: 100% 100%;
    .logo-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      margin: -258px auto 10px;
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
    &.sec2 {
      margin: 15px auto 10px;
      .label {
        font-size: 24px;
        line-height: 33px;
        font-weight: bold;
      }
      .second-label {
        margin-top: 2px;
        font-size: 14px;
        line-height: 20px;
        color: #666666;
      }
      .icon-cs {
        margin: 30px auto 25px;
        width: 334px;
        height: 260px;
      }
      .tips {
        .tips-item {
          font-size: 18px;
          line-height: 25px;
          &:last-child {
            margin-top: 5px;
          }
          span {
            font-weight: bold;
          }
        }
      }
      .btn-contact {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 19px;
        width: 120px;
        height: 32px;
        background: #2779FF;
        font-size: 14px;
      }
      .info {
        margin-top: 20px;
        font-size: 14px;
        line-height: 22px;
      }
    }
    &.sec3 {
      margin: 15px auto 10px;
      .label {
        font-size: 16px;
        line-height: 22px;
      }
      .second-label {
        margin-top: 8px;
        font-size: 24px;
        line-height: 33px;
        font-weight: bold;
      }
      .icon-sm {
        margin: 30px auto 23px;
        width: 330px;
        height: 335px;
      }
      .info {
        font-size: 14px;
        line-height: 22px;
      }
      .aboutUS {
        margin-top: 10px;
        font-size: 14px;
        line-height: 20px;
        color: #2779FF;
        text-decoration: underline;
      }
    }
    &.sec4 {
      margin: 15px auto 10px;
      .label {
        font-size: 24px;
        line-height: 33px;
        font-weight: bold;
      }
      .second-label {
        margin-top: 2px;
        font-size: 14px;
        line-height: 20px;
        color: #666666;
      }
      .info {
        margin-top: 20px;
        font-size: 16px;
        line-height: 25px;
      }
      .swipe {
        margin-top: 29px;
        width: 100%;
        height: 236px;
        .van-swipe-item {
          text-align: center;
          .avatar {
            width: 80px;
            height: 80px;
          }
          .name {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            font-size: 17px;
            font-weight: bold;
            line-height: 24px;
            span {
              margin-left: 5px;
              font-size: 14px;
              line-height: 20px;
              color: #C6C6C6;
            }
          }
          .detail {
            margin-top: 14px;
            .detail-item {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}

</style>
