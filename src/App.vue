<template>
  <div id="app">
    <!--    使用keep-alive缓存页面数据-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
