export default class Dep {
  constructor () {
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  removeSub (sub) {}

  depend () {
    if (window.target) this.addSub(window.target)
  }
}
