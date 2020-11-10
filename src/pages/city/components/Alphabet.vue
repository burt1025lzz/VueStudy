<template>
  <ul class="list">
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      // 状态码
      touchStatus: false,
      startY: 0,
      // 防抖
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // 找到'A'距离顶部的高度,offsetTop是到上级层的高度
    // 因为这个高度是固定的,所以不必放在handleTouchMove方法当中
    // 在页面完成渲染后执行即可
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (e) {
      // 向父级元素传递数据
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 防抖
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 利用8ms延迟实现防抖,大幅度减少方法调用频率
        this.timer = setTimeout(() => {
          // 记住touches是数组要想获取高度值要加上[0]
          // 79是顶部Header组件及Search组件加起来的高度
          // clientY是事件触发时的手指高度
          const touchY = e.touches[0].clientY - 79
          // 触摸高度-'A'距离顶部的高度,结果再除每一个列表项的高度取整,就是用户触摸的列表项
          const index = Math.floor((touchY - this.startY) / 20)
          // 控制只在此列表内触摸才会触发
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
