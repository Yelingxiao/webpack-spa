/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
  console.log(arr)
  const { length } = arr
  return length % 2 ? arr[~~(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2
}

findMedianSortedArrays([1, 3], [2])
