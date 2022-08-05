// 向子页面发送消息
export const sendSonInfo = (father, info) => father.contentWindow.postMessage(info, '*')

// 向父页面发送消息
export const sendFatherInfo = (name, url) => {
  window.parent.postMessage(
    {
      cmd: 'Model',
      res: {
        name,
        url
      }
    },
    '*'
  )
}

export const receiveFatherInfo = () => {
  // 接收父页面发来的消息
  window.addEventListener('message', (e) => {
    switch (e.data.cmd) {
      case 'Topology':
        break

      case 'ClerTopology':
        break
    }
  })
}

// 接收iframe子页面的信息
export const receiveSonInfo = () => {
  window.addEventListener('message', (e) => {
    // initThingJsTip(e)
    // console.log(e.data.parent.a)
  })
}
