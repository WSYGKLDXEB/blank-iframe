<template>
  <div id="app" class="app">
    <!-- 左侧 -->
    <Left></Left>
    <!-- 中间 -->
    <Main></Main>
    <!-- 右侧 -->
    <Righr></Righr>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Main from './components/Main.vue'
import Righr from './components/Righr.vue'

import { mapMutations } from 'vuex'
export default {
  name: 'App',
  mounted() {
    // 接收iframe子页面的信息
    window.addEventListener('message', (e) => {
      // initThingJsTip(e)
      // console.log(e.data)
      if (e.data.cmd) {
        this.setModel(e.data)
      }
    })
  },
  methods: {
    ...mapMutations(['setModel'])
  },
  components: {
    Left,
    Main,
    Righr
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eff2f9;
}
* {
  margin: 0;
  padding: 0;
}
body {
  min-width: 320px;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
}
.app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // place-content: space-between;
  // place-items: center;
}

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

li {
  list-style-type: none;
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
