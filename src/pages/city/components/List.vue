<template>
  <!--  使用ref属性来让Vue获取DOM元素-->
  <div class="list" ref="wrapper">
    <!--    此div为了解决符合better-scroll插件要求的DOM结构-->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  // DOM加载完毕后执行
  mounted () {
    // 通过$refs找到ref属性为wrapper的对应DOM元素
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
.border-topbottom
  &:before
    border-color #ccc

  &:after
    border-color #ccc

.border-bottom
  &:before
    border-color #ccc

.list
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0

  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem

  .btn-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden

    .btn-wrapper
      float left
      width 33.3%

      .btn
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
