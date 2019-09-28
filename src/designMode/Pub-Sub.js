const Event = {
  clientList: {},
  on(key, fn) {
    //如果没有订阅过此类消息，创建一个缓存列表
    if (!this.clientList[key]) this.clientList[key] = [];
    this.clientList[key].push(fn)
  },
  emit() {
    let arg = [...arguments]
    let key = arg.shift()
    let fns = this.clientList[key]
    //没有订阅 则返回
    if (!fns || fns.length == 0) return false
    for (let i in fns) {
      let fn = fns[i]
      fn.apply(this, arg);
    }
  },
  remove(key, fn) {
    let fns = this.clientList[key]
    if (!fns) return false
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let index in fns) {
        const _fn = fns[index];
        if (_fn === fn) fns.splice(index, 1);
      }
    }
  }
}


Event.on('marrgie', (name) => {
  console.log(`${name}想知道你失业`)
})
Event.on('unemployment', (name) => {
  console.log(`${name}想知道你失业`)
})

Event.emit('marrgie', '张三')
Event.emit('unemployment', '李四')