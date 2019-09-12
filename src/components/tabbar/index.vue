<template>
  <div class="tabbar">
    <Tabitme txt="首页" mark="home" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
    </Tabitme>
    <Tabitme txt="影音" mark="audio" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
    </Tabitme>
    <Tabitme txt="广播" mark="broadcast" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
    </Tabitme>
    <Tabitme txt="小组" mark="group" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
      <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
    </Tabitme>
    <Tabitme txt="我的" mark="mine" :sel="selected">
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
      selected: this.$route.name
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
