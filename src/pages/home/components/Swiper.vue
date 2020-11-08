<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!--      使用v-for指令循环输出-->
      <swiper-slide v-for="item of imgList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        // 是否显示底部轮播按钮
        pagination: '.swiper-pagination',
        // 是否循环
        loop: true
      },
      // 图片路径及key值
      imgList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }]
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
