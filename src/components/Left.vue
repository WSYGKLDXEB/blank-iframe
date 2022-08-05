<template>
  <div class="left">
    <h1>LEFT</h1>
    <button @click="toggleTopology">拓扑图</button>
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
}
</style>
