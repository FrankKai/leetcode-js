/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  function transform(str) {
    const arr = str.split(":");
    const hour = parseInt(arr[0]);
    const minute = parseInt(arr[1]);
    return hour * 60 + minute;
  }
  const arr = timePoints.map((item) => transform(item)).sort((x, y) => x - y);
  let i = 0;
  let min = Infinity;
  while (i < arr.length - 1) {
    const range = Math.min(
      arr[i + 1] - arr[i],
      24 * 60 - (arr[i + 1] - arr[i])
    );
    if (range <= min) {
      min = range;
      if (min === 0) {
        break;
      }
    }
    i++;
  }
  // 头尾需要比较一下
  const range = Math.min(
    arr[arr.length - 1] - arr[0],
    24 * 60 - (arr[arr.length - 1] - arr[0])
  );
  if (range <= min) {
    min = range;
  }
  return min;
};
