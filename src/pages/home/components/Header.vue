<template>
  <div class="header">
    <div class="header-left">
      <!--      使用iconfont库-->
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <i class="iconfont arrow-icon">&#xe62a;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  // 从父组件获取数据
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
/* css引入使用@快捷目录时,前面要加上~
   此处css为快捷指向src/assets/styles,可以在/build/webpack.base.conf.js中定义 */
@import "~css/varibles.styl"

// stylus语法可以省略 {} : ; 但是要注意缩进
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff

  .header-left
    width .64rem
    float left

    .back-icon
      text-align center
      font-size .4rem

  .header-input
    flex 1
    height .64rem
    line-height .64rem
    color #ccc
    margin .12rem 0 0 .2rem
    padding-left .2rem
    background #fff
    border-radius .1rem

  .header-right
    width 1.24rem
    float right
    text-align center
    color #fff

    .arrow-icon
      margin-left -.04rem
      font-size .24rem
</style>
