/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  if (num < 1 || num > 3999) return false
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ''
  let i = 0
  while (i < 13) {
    while (num >= nums[i]) {
      res += romans[i]
      num -= nums[i]
    }
    i++
  }
  return res
}
