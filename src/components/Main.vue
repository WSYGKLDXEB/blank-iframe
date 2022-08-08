<template>
  <div class="main">
    <h1>MAIN</h1>
    <!-- 3d盒子 -->
    <iframe src="https://www.thingjs.com/pp/e0e7c59693bc654843375c2b" ref="scenes" frameborder="0" name="scenes" scrolling="no"></iframe>
  </div>
</template>

<script>
import { sendSonInfo } from '@/assets/js/blank'
import { mapState } from 'vuex'
export default {
  name: 'BlankIframeMain',

  data() {
    return {}
  },
  watch: {
    topologyInfo: {
      handler(New, Old) {
        sendSonInfo(this.$refs.scenes, New)
      },
      deep: true
    }
  },
  mounted() {},
  computed: {
    ...mapState(['topologyInfo'])
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  margin: 0 20px;
  flex: 6;
  width: 100px;
  height: 100vh;
  border: 1px solid pink;
}
h1 {
  position: absolute;
  // top
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
