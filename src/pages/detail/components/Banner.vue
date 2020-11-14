<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-num">
          <i class="iconfont banner-icon">&#xe692;</i>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs"
                    v-show="showGallery"
                    @close="handelGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: [
        'https://imgs.qunarzz.com/sight/p0/1509/11/11f48afdd282f695.img.jpg_r_800x800_979033db.jpg',
        'https://imgs.qunarzz.com/sight/p0/1709/59/59d6fe2a3dcb69ffa3.img.png_r_800x800_c45347b3.png'
      ],
      showGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handelGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%

  .banner-img
    width 100%

  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    // 渐变
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem

    .banner-num
      height .32rem
      margin-top .14rem
      padding 0 .4rem
      line-height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      font-size .24rem

      .banner-icon
        font-size .24rem
</style>
