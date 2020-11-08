<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!--      二维数组遍历-->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!--        循环生成页面-->
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p>{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  // 从父组件获取数据
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 是否自动滚动
        autoplay: false
      }
    }
  },
  computed: {
    // 一维数组转二维
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        // 一维数组长度为8
        const page = Math.floor(index / 8)
        // 创建二维数组的子数组
        if (!pages[page]) {
          pages[page] = []
        }
        // 将元素传入二维数组中
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
@import "~css/mixins.styl"
.icons >>> .swiper-container
  height 0
  padding-bottom 50%

.icons
  margin-top .1rem

  .icon
    position relative
    float left
    overflow hidden
    width 25%
    height 0
    padding-bottom 25%

    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem

      img
        height 100%
        display block
        margin 0 auto

    p
      position absolute
      left 0
      right 0
      bottom 0
      line-height .44rem
      text-align center
      color $darkTextColor
      // 使用stylus函数引用
      ellipsis()
</style>
