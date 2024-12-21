/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    // Math.random() 生成的数字是大于等于0，小于1
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!this.map.has(nums[i])) {
        this.map.set(nums[i], []);
      }
      this.map.get(nums[i]).push(i);
    }
  };
  
  /**
   * @param {number} target
   * @return {number}
   */
  Solution.prototype.pick = function (target) {
    const indexes = this.map.get(target);
    return indexes[Math.floor(Math.random() * indexes.length)];
  };
  
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(nums)
   * var param_1 = obj.pick(target)
   */