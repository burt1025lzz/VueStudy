<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      v-show="showAbs"
      to="/"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 重要!!!在为全局事件绑定时,页面销毁或者是隐藏时一定要解绑事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // 页面滚动距离
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"

.header-abs
  position absolute
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  text-align center
  line-height .8rem

  .header-abs-back
    color #fff
    font-size .4rem

.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  color #fff
  background $bgColor

  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem
    font-size .4rem
    text-align center
    color $linkTextColor
</style>
