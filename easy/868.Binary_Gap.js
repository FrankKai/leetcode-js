/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  const NArr = N.toString(2);
  const distances = [0];
  let i = 0;
  let j = 1;
  while (j < NArr.length) {
    if (NArr.charAt(i) === "1") {
      if (NArr.charAt(j) === "1") {
        distances.push(j - i);
        i = j;
        j = i + 1;
        continue;
      } else {
        j++;
        continue;
      }
    }
    i++;
  }
  const maxDistance = Math.max(...distances);
  return maxDistance;
};
