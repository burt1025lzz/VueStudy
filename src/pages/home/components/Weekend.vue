<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!--      循环输出列表-->
      <li
        class="border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  // 从父组件获取数据
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/mixins.styl"
.title
  line-height .8rem
  background #eee
  text-indent .2rem

.item-img
  overflow hidden
  height 0
  padding-bottom 37.09%

  img
    width 100%

.item-info
  padding .1rem

  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()

  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
