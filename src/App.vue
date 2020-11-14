<template>
  <div id="app">
    <!--    使用keep-alive缓存页面数据-->
    <!--    exclude里加组件名字,可以取消该组件的缓存效果-->
    <keep-alive exclude="Detail">
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
