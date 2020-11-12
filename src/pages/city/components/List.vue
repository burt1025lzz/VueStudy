<template>
  <!--  使用ref属性来让Vue获取DOM元素-->
  <div class="list" ref="wrapper">
    <!--    此div为了解决符合better-scroll插件要求的DOM结构-->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <!--            使用vuex获取当前城市数据-->
            <div class="btn">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="btn">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!--      循环遍历对象时,第二项是key,数组则是index-->
      <!--      只要不是在一个循环层级,key值重复也无伤大雅,但尽量避免-->
      <div class="area"
           v-for="(cityItem, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="item of cityItem"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // mapState也可传入对象
    ...mapState({
      currentCity: 'city'
    })
  },
  // DOM加载完毕后执行
  mounted () {
    // 通过$refs找到ref属性为wrapper的对应DOM元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  methods: {
    handleCityClick (city) {
      // 通过commit方法触发vuex修改数据
      // 因为此处业务逻辑较简单,所以直接使用commit
      // 否则应该使用dispatch方法触发actions容器
      // 再通过actions容器触发commit方法
      // this.$store.commit('changeCity', city)
      // 可使用mapMutations方法简化
      this.changeCity(city)
      // vue中路由跳转的方法
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 解决个别情况无法滚动问题
  updated () {
    this.scroll.refresh()
  },
  // 通过watch监听器监听letter的变化
  watch: {
    letter () {
      if (this.letter) {
        // 因为scrollToElement方法内部要传入DOM元素
        // 通过$refs找到跟列表中一致的元素
        // 注意此处要加上.trim方法去掉空格
        const element = this.$refs[this.letter.trim()][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
.border-topbottom
  &:before
    border-color #ccc

  &:after
    border-color #ccc

.border-bottom
  &:before
    border-color #ccc

.list
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0

  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem

  .btn-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden

    .btn-wrapper
      float left
      width 33.3%

      .btn
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
