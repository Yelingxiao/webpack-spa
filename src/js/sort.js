let arr = [2,3,1,5,6,4]
function bubbleSort(arr) {
  if (arr.length <= 1) return arr
  let tmp = 0
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}



function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pointIndex = ~~(arr.length / 2)
  let point = arr.splice(pointIndex, 1)[0]
  // let point = arr[pointIndex]
  let left = []
  let right = []
 arr.forEach(item => item > point ? right.push(item) : left.push(item))
 return quickSort(left).concat(quickSort(right))
}

function mergeSort(list, cmp=(a, b) => a - b) {
  const queue = []
  for (let i = 0; i < list.length; i += 2) {
      const
          a = list[i],
          b = list[i + 1]
      if (b === undefined) queue.push([a])
      else if (cmp(a, b) > 0) queue.push([b, a])
      else queue.push([a, b])
  }

  while (queue.length > 1) {
      const
          a = queue.shift(),
          b = queue.shift(),
          c = []

      while (b.length && a.length) {
          cmp(a[0], b[0]) > 0 ? c.push(b.shift()) : c.push(a.shift())
      }

      queue.unshift(c.concat(a, b))
  }

  return queue.pop()
}
let list = [...arr]
console.log(quickSort(list))
console.log(arr)
