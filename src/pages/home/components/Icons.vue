<template>
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
        desc: '游乐园'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
        desc: '必游榜单'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
        desc: '演出'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        desc: '城市观光'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        desc: '城市观光'
      }]
    }
  },
  computed: {
    // 一维数组转二维
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
