<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/tabbar';
export default {
  components: {
    Tabbar
  }
}
</script>
<style lang="less"></style>
