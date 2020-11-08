<template>
  <div>
    <!--    页面头部组件-->
    <home-header></home-header>
    <!--    轮播图组件-->
    <home-swiper></home-swiper>
    <!--    图标区域组件-->
    <home-icons></home-icons>
    <!--    热销推荐组件-->
    <home-recommend></home-recommend>
    <!--    周末游组件-->
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
