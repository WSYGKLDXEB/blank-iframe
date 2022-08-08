import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 双击模型信息
    ModelInfo: {},
    topologyInfo: {
      cmd: 'Topology',
      name: 'sewage'
    }
  },
  getters: {},
  mutations: {
    setModel(state, val, position = [0, 0, 20]) {
      state.ModelInfo = val

      state.ModelInfo.res.position = position
    },
    toggleTopology(state, name) {
      state.topologyInfo.name = name
    }
  },
  actions: {},
  modules: {}
})
