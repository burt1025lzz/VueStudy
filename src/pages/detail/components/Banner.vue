<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-num">
          <i class="iconfont banner-icon">&#xe692;</i>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="gallaryImgs"
                      v-show="showGallery"
                      @close="handelGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
