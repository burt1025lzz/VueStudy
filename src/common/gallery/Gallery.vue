<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img class="gallery-img"
               src="https://imgs.qunarzz.com/sight/p0/1509/11/11f48afdd282f695.img.jpg_r_800x800_979033db.jpg"/>
        </swiper-slide>
        <swiper-slide>
          <img class="gallery-img"
               src="https://imgs.qunarzz.com/sight/p0/1709/59/59d6fe2a3dcb69ffa3.img.png_r_800x800_c45347b3.png"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit

.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000

  .wrapper
    height 0
    width 100%
    padding-bottom 66.62%

    .gallery-img
      width 100%

    .swiper-pagination
      color #fff
      bottom -1rem
</style>
