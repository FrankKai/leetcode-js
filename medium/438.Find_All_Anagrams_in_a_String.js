/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // 使用定长数组统计每个字符出现的次数，再搭配对比函数进行对比（要比slice + split + sort + join性能高很多）
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    const aCode = "a".charCodeAt();
    for (const char of p) {
      pCount[char.charCodeAt() - aCode]++;
    }
    const result = [];
    let left = 0;
    for (let right = 0; right < s.length; right++) {
      sCount[s[right].charCodeAt() - aCode]++;
      // 缩小窗口
      if (right - left + 1 > p.length) {
        sCount[s[left].charCodeAt() - aCode]--;
        left++;
      }
      if (isSame(sCount, pCount)) {
        result.push(left);
      }
    }
    function isSame(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    return result;
  };