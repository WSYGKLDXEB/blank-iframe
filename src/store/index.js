import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 双击模型信息
    ModelInfo: {},
    // 是否显示拓扑图
    isTopology: false
  },
  getters: {},
  mutations: {
    setModel(state, val, position = [0, 0, 20]) {
      state.ModelInfo = val

      state.ModelInfo.res.position = position
    },
    toggleTopology(state) {
      state.isTopology = !state.isTopology
    }
  },
  actions: {},
  modules: {}
})
