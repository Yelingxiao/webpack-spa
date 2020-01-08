// promise
class Promise {
  constructor (executor) {
    this.status = 'PENDING'
    this.value = ''
    this.onfulfilledArr = []
    this.onrejectedArr = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.then = this.then.bind(this)
    executor(this.resolve, this.reject)
  }

  resolve (value) {
    if (this.status === 'PENDING') {
      this.value = value
      this.onfulfilledArr.forEach(item => {
        item(this.value)
      })
      this.status = 'FULFILLED'
    }
  }

  reject (value) {
    if (this.status === 'PENDING') {
      this.value = value
      this.onrejectedArr.forEach(item => {
        item(this.value)
      })
      this.status = 'REJECTED'
    }
  }

  then (onfulfilled, onrejected) {
    if (this.status === 'FULFILLED') {
      const res = onfulfilled(this.value)
      console.log(222)
      return new Promise(function (resolve, reject) {
        resolve(res)
      })
    }
    if (this.status === 'REJECTED') {
      const res = onrejected(this.value)
      return new Promise(function (resolve, reject) {
        reject(res)
      })
    }
    if (this.status === 'PENDING') {
      console.log(111)
      const self = this
      return new Promise(function (resolve, reject) {
        self.onfulfilledArr.push(() => {
          const res = onfulfilled(self.value)
          resolve(res)
        })
        self.onrejectedArr.push(() => {
          const res = onrejected(self.value)
          reject(res)
        })
      })
    }
  }
}

const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
  }, 2000)
})

test.then(
  data => {
    setTimeout(() => {
      console.log(data)
    }, 2000)
    // eslint-disable-next-line no-unused-expressions
    data
  }
).then((data) => {
  console.log(data + '111')
})
