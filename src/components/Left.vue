<template>
  <div class="left">
    <h1>LEFT</h1>
    <button @click="toggleTopology('sewage')">污水处理系统</button>
    <button @click="toggleTopology('firepower')">火力发电系统</button>
    <button @click="toggleTopology('blower')">鼓风机系统</button>
    <button @click="toggleTopology('waterCooling')">水冷机系统</button>
    <button @click="toggleTopology('close')">关闭</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'BlankIframeLeft',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    ...mapMutations(['toggleTopology'])
  }
}
</script>

<style lang="less" scoped>
.left {
  flex: 1.5;
  border: 1px dashed palevioletred;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  // place-content: c;
  justify-content: flex-start;
  align-items: center;
}
button {
  margin-top: 15px;
}
</style>
