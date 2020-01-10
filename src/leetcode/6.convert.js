/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const arr = []
  let index = 0
  let flag = true
  if (numRows === 1) return s
  for (let i = 0; i < s.length; i++) {
    if (!arr[index]) arr[index] = ''
    if (index < numRows && flag) {
      arr[index] = arr[index] + s[i]
      index++
      if (index === numRows) {
        flag = false
        index--
      }
    } else {
      index--
      arr[index] = arr[index] + s[i]
      if (index === 0) {
        flag = true
        index++
      }
    }
  }
  return arr.join('')
}

const s = 'AB'
const numRows = 2
convert(s, numRows)
