class Private {
  constructor() {
    this.#jump()
    this.jump()
    console.log(this.#name)
  }
  // 私有属性 外部无法使用
  #name = 'private'
  name = 'private'

  // 私有方法 目前没有私有方法，可以利用私有属性实现
  #jump = () => {
    console.log(this)
  }

  jump = () => {
    console.log(this)
    return false
  }
}
const private = new Private()
// console.log(private.jump())
