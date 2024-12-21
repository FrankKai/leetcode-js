/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 回溯算法
    const res = [];
    const path = [];
    recall(nums, nums.length, [])
    function recall(n, k, used) {
        if(path.length === k){
            res.push([...path])
            return;
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(n[i]);
            used[i] = true;
            recall(n, k, used)
            path.pop() // 回溯
            used[i] = false
        }
    }
    return res;
};