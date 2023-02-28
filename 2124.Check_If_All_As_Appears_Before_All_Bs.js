var checkString = function (s) {
  // 比较a的最大索引和b的最小索引，若a的最大索引小于b的最小索引为true，否则为false
  if (!s.includes("a") || !s.includes("b")) return true;
  const chars = [...s];
  // const aMaxIndex = chars.findLastIndex((item) => item === "a");
  let aMaxIndex = Infinity;
  let i = chars.length - 1;
  while (i >= 0) {
    if(chars[i] === 'a'){
      aMaxIndex = i;
      break;
    }
    i--;
  }
  const bMinIndex = chars.findIndex((item) => item === "b");
  return aMaxIndex < bMinIndex;
};