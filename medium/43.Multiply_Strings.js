/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// "123" "345"
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    // 手动实现一个乘法即可
    const nums1 = num1.split("").map(Number).reverse();
    const nums2 = num2.split("").map(Number).reverse();
    const result = Array.from({ length: nums1.length + nums2.length }, () => 0);
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        result[i + j] += nums1[i] * nums2[j];
        result[i + j + 1] += Math.floor(result[i + j] / 10);
        result[i + j] %= 10;
      }
    }
    while (result.length > 0 && result[result.length - 1] === 0) {
      result.pop();
    }
    return result.reverse().join("");
  };