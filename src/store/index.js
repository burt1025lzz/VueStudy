import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 此处返回应为如下数据,而不是Vuex()
export default new Vuex.Store({
  state,
  mutations
  // 类似computed计算属性
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
  // actions方法有两个参数,主要应用于异步操作
  // 通过第一个参数中的commit方法触发state数据修改
  // 第二个参数为传入的数据
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
})
