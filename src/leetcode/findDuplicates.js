/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const arr = [...nums]
  const out = []
  nums.forEach(item => {
    arr.shift()
    if (arr.includes(item)) out.push(item)
  })
  return out
}

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
