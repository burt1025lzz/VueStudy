<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!--      使用v-for指令循环输出-->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!--      轮播按钮-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 从父组件获取数据
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 是否显示底部轮播按钮
        pagination: '.swiper-pagination',
        // 是否循环
        loop: true,
        // 是否自动滚动,滚动速度
        autoplay: 5000
      }
    }
  },
  computed: {
    // 因为页面加载时,还没有获取到父组件传过来的值
    // 使用计算属性判断list.length的长度,从而判断数据是否传过来
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
//因为有scoped存在,直接定义不会传递出去,因此要使用 >>> 将样式穿透出去
.wrapper >>> .swiper-pagination-bullet-active
  background #fff

.wrapper
  //这样写轮播组件下面的内容,不会在图片未加载的情况下上移
  //也可设置height 31.25vw,但这样有浏览器兼容性问题
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #ccc

  .swiper-img
    width 100%
</style>
