<template>
  <div>
    <!--    城市列表头部组件-->
    <city-header></city-header>
    <!--    城市列表搜索组件-->
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped>

</style>
