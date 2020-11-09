<template>
  <div class="search">
    <label>
      <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
