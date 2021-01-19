<!--
 * @Author: zhangyanlong
 * @Date: 2021-01-20 00:04:54
 * @LastEditTime: 2021-01-20 01:19:12
 * @LastEditors: zhangyanlong
 * @Description:
-->
<template>
  <div class="container">
    <div class="page-bg"></div>
    <div class="header"></div>
    <section class="wow slideInUp sec1">
      <div class="label">用不起的用得起 不会用的轻松用</div>
      <div class="tips">0元入驻 20秒上手 检查精准 报告权威</div>
      <div class="awards-wrap">
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">未来医疗</div>
          <div class="awards-order">100强</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">济南创业奖</div>
          <div class="awards-order">TOP10</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">杭州创业大赛</div>
          <div class="awards-order">入围奖</div>
        </div>
      </div>
    </section>

    <section class="wow slideInUp sec1">
      <div class="label">用不起的用得起 不会用的轻松用</div>
      <div class="tips">0元入驻 20秒上手 检查精准 报告权威</div>
      <div class="awards-wrap">
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">未来医疗</div>
          <div class="awards-order">100强</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">济南创业奖</div>
          <div class="awards-order">TOP10</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">杭州创业大赛</div>
          <div class="awards-order">入围奖</div>
        </div>
      </div>
    </section>

    <section class="wow slideInUp sec1">
      <div class="label">用不起的用得起 不会用的轻松用</div>
      <div class="tips">0元入驻 20秒上手 检查精准 报告权威</div>
      <div class="awards-wrap">
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">未来医疗</div>
          <div class="awards-order">100强</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">济南创业奖</div>
          <div class="awards-order">TOP10</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">杭州创业大赛</div>
          <div class="awards-order">入围奖</div>
        </div>
      </div>
    </section>

    <section class="wow slideInUp sec1">
      <div class="label">用不起的用得起 不会用的轻松用</div>
      <div class="tips">0元入驻 20秒上手 检查精准 报告权威</div>
      <div class="awards-wrap">
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">未来医疗</div>
          <div class="awards-order">100强</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
          <div class="awards-name">济南创业奖</div>
          <div class="awards-order">TOP10</div>
        </div>
        <div class="awards-item">
          <img src="" alt="">
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

<style lang="less" scoped>
.container {
  width: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 957px;
    background: url(https://pics.lvjs.com.cn/pics/lego/back/202101/1610005515098.jpg) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  }
  section {
    margin: 0 auto 27px;
    width: 714px;
    padding: 54px 54px 31px 54px;
    background: #19202C;
    border-radius: 54px;
    overflow: hidden;
    &:last-child {
      margin-top: 0;
    }
    &.sec1 {
      color: #fff;
      .label {
        width: 360px;
        font-size: 47px;
        line-height: 72px;
      }
      .tips {
        margin-top: 18px;
        font-size: 29px;
        line-height: 47px;
      }
      .awards-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 43px;
        .awards-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 65px;
            height: 65px;
          }
          .awards-name {
            margin-top: 10px;
            font-size: 25px;
            color: #999999;
            line-height: 36px;
          }
          .awards-order {
            font-size: 29px;
            font-weight: bold;
            line-height: 34px;
          }
        }
      }
    }
  }
}

</style>
