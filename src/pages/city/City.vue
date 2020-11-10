<template>
  <div>
    <!--    城市列表头部组件-->
    <city-header></city-header>
    <!--    城市列表搜索组件-->
    <city-search></city-search>
    <!--    城市列表项组件-->
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <!--    城市列表字母组件-->
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuc)
    },
    getCityInfoSuc (res) {
      res = res.data
      if (res.code && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>

</style>
