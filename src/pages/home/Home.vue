<template>
  <!--  通过属性的方式向子组件传值-->
  <div>
    <!--    页面头部组件-->
    <home-header :city="city"></home-header>
    <!--    轮播图组件-->
    <home-swiper :list="swiperList"></home-swiper>
    <!--    图标区域组件-->
    <home-icons :list="iconList"></home-icons>
    <!--    热销推荐组件-->
    <home-recommend :list="recommendList"></home-recommend>
    <!--    周末游组件-->
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  // 在模板中导入子组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      // 此处将访问/api的路径重定向到/static/mock中
      // 配置信息在/config/index.js中
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc (res) {
      res = res.data
      // 如果返回值为true 并且data数据存在
      if (res.code && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style scoped>

</style>
