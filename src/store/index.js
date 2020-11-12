import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 此处返回应为如下数据,而不是Vuex()
export default new Vuex.Store({
  state: {
    city: '北京'
  },
  // actions方法有两个参数
  // 通过第一个参数中的commit方法触发state数据修改
  // 第二个参数为传入的数据
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // 定义Vuex修改数据的方法
  // 第一个参数为公共数据
  // 第二个参数为要改变成的数据
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
