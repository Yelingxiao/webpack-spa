function bubbleSort(arr) {
  let len = arr.length
  let tmp = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
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
  let left = []
  let right = []
  arr.forEach(item => item > point ? right.push(item) : left.push(item))
  return quickSort(left).concat(point, quickSort(right))
}

function mergeSort(list, cmp) {
  cmp = cmp || ((x, y) => x - y)

  const {length} = list
  let unit = 1, copy = list, result = []

  while (length > unit) {
    const x2 = 2 * unit

    for (let i = 0; i < length; i += x2) {
      let
        start1 = i,
        start2 = Math.min(i + unit, length - 1),
        end1 = start2 - 1,
        end2 = Math.min(start2 + unit, length) - 1,
        index1 = start1,
        index2 = start2

      while (index1 <= end1 || index2 <= end2) {
        if (index1 <= end1 && index2 <= end2) {
          if (cmp(copy[index1], copy[index2]) > 0) {
            result.push(copy[index2])
            index2++
          } else {
            result.push(copy[index1])
            index1++
          }
        } else if (index1 <= end1) {
          result.push(copy[index1])
          index1++
        } else if (index2 <= end2) {
          result.push(copy[index2])
          index2++
        }
      }
    }
    unit *= 2
    copy = result
    result = []
  }

  return copy
}

// wyx
function sort(ARR) {
  ARR = [...ARR]
  function sort1(arr, num) {
    var len = arr.length
    while (len--) {
      if (arr[len] < num) {
        arr.splice(len + 1, 0, num);
        break;
      } else if (len === 0) {
        arr.unshift(num);
      }
    }
  }

  var obj = {}
  while (ARR.length) {
    let num = ARR.shift();
    let flag = num >>> 5;
    obj[flag] ? sort1(obj[flag], num) : obj[flag] = [num];
  }
  var x = [];
  Object.values(obj).forEach((i) => {
    x = [...x, ...i];
  });
  return x;
}

//yrzhao
function yrSort(list, compare) {
  function compare1(x, y) {
    return x - y;
  }
  compare = compare || compare1;
  let len = list.length;
  let com = compare(1,0);
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j+1]) {
        let temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp; 
      }
    }
  }
  list = com > 0 ? list : list.reverse();
}

  arr = Array.from({length: 1000}, () => ~~(Math.random() * 1000))

  console.time('bubbleSort')
  for (let i = 0; i < 1000; i++) {
    bubbleSort(arr)
  }
  console.timeEnd('bubbleSort')

  
  console.time('yrZhao')
  for (let i = 0; i < 1000; i++) {
    yrSort(arr)
  }
  console.timeEnd('yrZhao')

  // console.time('sort')
  // for (let i = 0; i < 1000; i++) {
  //   sort(arr)
  // }
  // console.timeEnd('sort')

  // console.time('mergeSort')
  // for (let i = 0; i < 1000; i++) {
  //   mergeSort(arr)
  // }
  // console.timeEnd('mergeSort')

  // console.time('quickSort')
  // for (let i = 0; i < 1000; i++) {
  //   quickSort(arr)
  // }
  // console.timeEnd('quickSort')

  


