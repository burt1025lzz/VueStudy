import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 此处返回应为如下数据,而不是Vuex()
export default new Vuex.Store({
  state: {
    city: '北京'
  }
})
