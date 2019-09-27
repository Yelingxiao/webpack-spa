/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function(s) {
  const { length } = s
  let result = ''
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      let str = s.substring(i, j)
      backstr = str.split('').reverse().join('')
      if (str === backstr && str.length > result.length) {
        result = str
      }
    }
  }
  console.log(result)
  return result
}

longestPalindrome('babad')
