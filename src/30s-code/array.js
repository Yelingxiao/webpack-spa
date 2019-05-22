const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(val => val === arr[0])

const any = (arr, fn = Boolean) => arr.some(fn)

const arrayToCSV = (arr, delimiter = ',') => {
  arr.map(v => {
      v.map(x => {
          (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)
        }).join(delimiter)
    }).join('\n')
}

const bifurcate = (arr, indices) => arr.filter((item, i) => indices[i])
console.log(bifurcate([1, 2, 3, 4], [1,1,0,1]))