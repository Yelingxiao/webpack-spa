/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const result = (x < 0 ? -1 : 1) * String(x).split('').filter(item => item !== '-').reverse().join('')
  if (result > 2 ** 31 || result < -(2 ** 31 - 1)) return 0
  return result
}

console.log(reverse(1534236469))
