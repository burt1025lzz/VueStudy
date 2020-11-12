<template>
  <div>
    <div class="search">
      <label>
        <input
          v-model="keyword"
          class="search-input"
          type="text"
          placeholder="输入城市名或拼音"
        />
      </label>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
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
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 防抖,优化性能
      this.timer = setTimeout(() => {
        const result = []
        // 遍历对象,找出'A','B'...
        for (let i in this.cities) {
          // 遍历出数据
          this.cities[i].forEach((value) => {
            // 中英文数据搜索
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
.search
  background $bgColor
  padding 0 .1rem
  height .72rem

  .search-input
    // 这里若想使用padding
    // 要配合使用属性box-sizing: border-box
    box-sizing border-box
    padding 0 .1rem
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color $darkTextColor

.search-content
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  z-index 1

  .search-item
    line-height .62rem
    padding-left .2rem
    background #fff
    color #666
</style>
