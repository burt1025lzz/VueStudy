<template>
  <div>
    <!--    城市列表头部组件-->
    <city-header></city-header>
    <!--    城市列表搜索组件-->
    <city-search></city-search>
    <!--    城市列表项组件-->
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped>

</style>
