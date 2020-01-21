/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (isNaN(x)) return false
  return x === +x.toString().split('').join('')
}
