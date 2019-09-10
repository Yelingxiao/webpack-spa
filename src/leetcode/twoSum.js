/**
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[ 0 ] + nums[ 1 ] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (target === nums[i] + nums[j]) return [i, j]
    }
  }
}

let twoSum = function(nums, target) {
  let r = [], len = nums.length;
  r[nums[0]] = 0
  for(let i = 1; i < len; i++){
      if(r[target - nums[i]] !== undefined){
          return [r[target - nums[i]], i]
      }
      r[nums[i]] = i
  }
}
let nums = [3,2,4]
let target = 6
console.log(twoSum2(nums, target))