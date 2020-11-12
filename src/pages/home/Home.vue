<template>
  <!--  通过属性的方式向子组件传值-->
  <div>
    <!--    页面头部组件-->
    <home-header></home-header>
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
import {mapState} from 'vuex'

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 此处将访问/api的路径重定向到/static/mock中
      // 配置信息在/config/index.js中
      // 请求数据是加上城市参数
      axios.get('/api/index.json?' + this.city)
        .then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc (res) {
      res = res.data
      // 如果返回值为true 并且data数据存在
      if (res.code && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    // 临时缓冲变量
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用keep-alive标签会多出一个activated生命周期钩子
  activated () {
    // 通过临时缓冲变量检测是否应该有数据更新
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
