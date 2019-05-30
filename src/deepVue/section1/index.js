/**
 *  Object的变化侦测
 */

 const defineProperty = (data, key, val) => {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val
    },
     set(newVal) {
       if (val === newVal) return
       val = newVal
     }
  })
 }

let data = {
  key: '1',
  val: 23
}
console.log(data)
defineProperty(data, 'key', 2)
console.log(data)
data.key=3
console.log(data)