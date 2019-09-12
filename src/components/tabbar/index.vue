<template>
  <div class="tabbar">
    <Tabitme txt="首页" mark="home" :sel="selected" @changeSelected="changeSeleted">
      <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
    </Tabitme>
    <Tabitme txt="影音" mark="audio" :sel="selected" @changeSelected="changeSeleted">
      <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
    </Tabitme>
    <Tabitme txt="广播" mark="broadcast" :sel="selected" @changeSelected="changeSeleted">
      <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
    </Tabitme>
    <Tabitme txt="小组" mark="group" :sel="selected" @changeSelected="changeSeleted">
      <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
    </Tabitme>
    <Tabitme txt="我的" mark="mine" :sel="selected" @changeSelected="changeSeleted">
      <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
    </Tabitme>
  </div>
</template>

<script>
import Tabitme from './tabitem';
export default {
  name: '',
  components: {
    Tabitme
  },
  data () {
    return {
      selected: 'home'
    }
  },
  methods: {
    changeSeleted(val) {
      // val 子组件传回的值
      this.selected = val;
    }
  }
}
</script>

<style lang='less' scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  display: flex;
  height: 60px;
  width:100%;
  border-top: 1px solid #ccc;
}
</style>
