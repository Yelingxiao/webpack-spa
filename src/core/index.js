// 异步延时
const delay = (t = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, t * 1e3)
  })
}

// 生成随机数
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 取数组中最小值
const arrMin = (arr) => {
  return Math.min(...arr)
}
// 取数组中最大值
const arrMax = (arr) => {
  return Math.max(...arr)
}

// reload
const visibilitychange = () => {
  let visibleChange = ''
  if (typeof document.visibleChange !== 'undefined') {
    visibleChange = 'visibleChange'
  } else if (typeof document.webkitVisibilityState !== 'undefined') {
    visibleChange = 'webkitvisibilitychange'
  }
  document.addEventListener(visibleChange, () => {
    var tag = document.hidden || document.webkitHidden
    if (!tag) {
      window.location.reload()
    }
  })
}

// 小数转为百分数
const toPercent = (point) => {
  let str = parseInt(point * 100).toFixed(2)
  str += '%'
  return str
}

// 生成不重复的随机数
const createRandomArr = (num, from, to) => {
  const arr = []
  let page = 0
  while (arr.length < num) {
    page = randomNum(from, to)
    if (!arr.includes(page)) arr.push(page)
  }
  return arr
}

// 将时间戳转化为正常日期
const formatDateTime = (time = +new Date()) => {
  const date = new Date(time + 8 * 3600 * 1000) // 增加8小时
  return date.toJSON().substr(0, 19).replace('T', ' ')
}

export {
  delay,
  randomNum,
  createRandomArr,
  arrMin,
  arrMax,
  toPercent,
  visibilitychange,
  formatDateTime
}
