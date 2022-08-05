<template>
  <div class="right">
    <h1>RIGHT</h1>
    <h3>模型展示</h3>
    <div class="info"></div>
    <iframe src="https://www.thingjs.com/pp/e13a248e4a77841655db486b" ref="exhibit" name="exhibit" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
import { sendSonInfo } from '@/assets/js/blank'
import { mapState } from 'vuex'
export default {
  name: 'BlankIframeRighr',

  data() {
    return {}
  },
  watch: {
    ModelInfo(New, Old) {
      // 向子页面发送消息
      sendSonInfo(this.$refs.exhibit, this.ModelInfo)
    }
  },
  computed: {
    ...mapState(['ModelInfo'])
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.right {
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  place-content: space-between;

  position: relative;
  flex: 2.5;
  width: 100%;
  height: 100vh;
  border: 1px dashed plum;
}
h1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  // color: pink;
}
.info {
  flex: 5;
}
iframe {
  flex: 5;
  width: 100%;
  border-top: 1px solid red;
}
</style>
