/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let res = 0
  let temp = []
  for (let i = 0; i < s.length; i++) {
    let index = temp.indexOf(s[i])
    if (index !== -1) {
      temp.splice(0, ++index)
    }
    temp.push(s[i])
    res = Math.max(res, temp.length)
  }
  return res
}

var lengthOfLongestSubstring2 = function(s) {
  var res = 0,
    i = 0
  var temp = []
  while (i < s.length) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i])
    } else {
      temp.shift()
      continue
    }
    res = Math.max(res, temp.length)
    i++
  }
  return res
}

let a = lengthOfLongestSubstring2('aab')
console.log(a)
