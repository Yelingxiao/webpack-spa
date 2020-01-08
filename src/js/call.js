/* eslint-disable no-proto */
/* eslint-disable no-extend-native */
/**
 * call
 * apply
 * bind
 * new
 */
Function.prototype.myCall = function (context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  context.fn = this
  const arg = [...arguments].slice(1)
  const result = context.fn(...arg)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  context.fn = this
  let result = null
  // 处理参数和 call 有区别
  arguments[1] ? result = context.fn(...arguments[1]) : result = context.fn()
  delete context.fn
  return result
}

Function.prototype.myBind = function (context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F () {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

function create () {
  const obj = {}
  const Con = [].shift.call()
  obj.__proto__ = Con.prototype
  const result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

/**
 * 要创建一个新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤：
 * （1）创建一个新对象；
 * （2）将构造函数的作用域赋给新对象（因此this就指向了这个对象）；
 * （3）执行构造函数中的代码（为这个新对象添加属性）；
 * （4）返回新对象。
 */
function New (func) {
  const obj = {}
  if (func.prototype !== null) es.__proto__ = func.prototype
  const ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) return ret
  return res
}

function Product (name, price) {
  this.name = name
  this.price = price
}

function Food (name, price) {
  this.category = 'food'
  Product.myCall(this, name, price)
}
function Food2 (name, price) {
  this.category = 'food'
  Product.myBind(this)(name, price)
}

const product = new Food(12, 12)
const product1 = new Food2(12, 12)
