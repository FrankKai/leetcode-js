/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 前提是升序排列，因此只要和i位置数字不同，就记录到++i的位置
  let i = 0;
  for(let j = 1;j<nums.length;j++){
      if(nums[j]!==nums[i]){
          nums[++i] = nums[j]
      }
  }
  return i+1;

  // 双指针法
  // 慢指针i，快指针j
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
