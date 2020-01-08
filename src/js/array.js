let arr = [[1, [2, 3]], [4, 1], '1', true]
var array = [1, 2, 2, 1, '1']
// 扁平化数组
function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 数组去重
function unique (arr) {
  const res = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return res
}

// 快排
function quickSort (arr) {
  if (arr.length <= 1) return arr
  const pointIndex = ~~(arr.length / 2)
  const point = arr.splice(pointIndex, 1)[0]
  const left = []
  const right = []
  arr.forEach(item => item > point ? right.push(item) : left.push(item))
  return quickSort(left).concat(point, quickSort(right))
}

function recursion (arr) {
  if (arr.length <= 1) return arr
  const pointIndex = ~~(arr.length / 2)
  const point = arr.splice(pointIndex, 1)[0]
  const left = []
  const right = []
  arr.forEach(item => item > point ? right.push(item) : left.push(item))
  return recursion(left).concat(point, recursion(right))
}

arr = Array.from({ length: 1000 }, () => ~~(Math.random() * 5000))
const arr1 = arr
const arr2 = arr
console.time('尾调用优化')
quickSort(arr1)
console.timeEnd('尾调用优化')

console.time('递归')
recursion(arr2)
console.timeEnd('递归')
