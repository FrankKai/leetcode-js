var maxVowels = function (s, k) {
  // 滑动窗口：首次统计所有，后面统计首尾即可，用上一次的加减
  let i = 0;
  const chars = ['a', 'e', 'i', 'o', 'u']
  let max = 0;
  let cur = 0;
  while (i < s.length) {
    if (i < k) {
      if (chars.includes(s[i])) {
         cur++;
      }
      if(i === k - 1){
        max = cur;
      }
    } else {
      if (chars.includes(s[i - k])) {
        cur--;
      }
      if (chars.includes(s[i])) {
        cur++;
      }
      max = Math.max(cur, max);
    }
    i++;
  }
  return max;
};
