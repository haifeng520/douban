<template>
  <div class="tabitem" @click="change">
    <span v-if="!flag"><slot name="normalImg"></slot></span>
    <span v-else><slot name="activeImg"></slot></span>
    <span :class="{active: flag}">{{txt}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props: ["txt", "mark", "sel"],
  computed: {
    flag() {
      if(this.mark === this.sel) {
        return true;
      }
      return false;
    }
  },
  methods: {
    change() {
      this.$emit('changeSelected', this.mark);
      this.$router.push('/' + this.mark);
    }
  }
}
</script>

<style lang='less' scoped>
.tabitem {
  flex: 1;
  display: flex; // 转换块元素
  flex-direction: column;  // 垂直排列
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  .active {
    color: #42bd56;
  }
}
</style>
