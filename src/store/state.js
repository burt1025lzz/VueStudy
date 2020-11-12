// 因为如果用户禁用localStorage或是隐身模式访问
// localStorage会报错,所以此处使用try,catch捕获异常
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defaultCity
}
