<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallery-img"
               :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      // 默认值是函数,要有返回值
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 分页样式
        paginationType: 'fraction',
        // 监听父组件变化刷新
        observeParents: true,
        // 监听自己变化刷新
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      // 子组件向父组件传值
      this.$emit('close')
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
