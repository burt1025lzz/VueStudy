<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arrow-icon">&#xe62a;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
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

    .arrow-icon
      margin-left -.04rem
      font-size .24rem
</style>
