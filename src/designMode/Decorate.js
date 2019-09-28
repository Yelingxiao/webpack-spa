// 装饰器函数，它的第一个参数是目标类
function classDecorator(target) {
  console.log(target)
  target.hasDecorator = false
  return target
}

// 具体的参数意义，在下个小节，这里大家先感知一下操作
function funcDecorator(target, name, descriptor) {
  console.log(target, name, descriptor)
  let originalMethod = descriptor.value
  descriptor.value = function() {
  console.log('我是Func的装饰器逻辑')
  return originalMethod.apply(this, arguments)
}
return descriptor
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {
  // Button类的相关逻辑
  // constructor() {
  //   this.hasDecorator = true
  // },

  @funcDecorator
  onClick() { 
    console.log('我是Func的原有逻辑')
}
}

// 验证装饰器是否生效
let button = new Button()
console.log('Button 是否被装饰了：', Button.hasDecorator)
button.onClick()
console.log()