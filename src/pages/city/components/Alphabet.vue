<template>
  <ul class="list">
    <li v-for="(item, key) of cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/varibles.styl"
.list
  // 弹性盒子布局,高度居中样式写法
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem

  li
    line-height .4rem
    text-align center
    color $bgColor
</style>
