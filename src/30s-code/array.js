/* eslint-disable no-unused-expressions */
const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(val => val === arr[0])

const any = (arr, fn = Boolean) => arr.some(fn)

const arrayToCSV = (arr, delimiter = ',') => {
  arr
    .map(v => {
      v.map(x => {
        isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x
      }).join(delimiter)
    })
    .join('\n')
}

const bifurcate = (arr, indices) => arr.filter((item, i) => indices[i])
bifurcate([1, 2, 3, 4], [1, 1, 0, 1])

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
    return arr.slice(i * size, i * size + size)
  })
const a = chunk([1, 2, 3, 4, 5], 2) // [[1,2],[3,4],[5]]
console.log(a)
