<template>
  <div>
    <!--    页面头部组件-->
    <home-header></home-header>
    <!--    轮播图组件-->
    <home-swiper></home-swiper>
    <!--    图标区域组件-->
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
