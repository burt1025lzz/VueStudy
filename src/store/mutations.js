// 定义同步修改数据的方法
// 第一个参数为公共数据
// 第二个参数为要改变成的数据
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
