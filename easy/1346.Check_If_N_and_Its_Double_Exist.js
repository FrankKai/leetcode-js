/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  /**
   * 思路：
   * 依次遍历 从剩余项目中查找是否有当前数字2或1/2的数字
   */
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const isTwoOrAHalf = arr
      .slice(i + 1)
      .find(
        (remainNum) =>
          num / remainNum === 2 ||
          num / remainNum === 1 / 2 ||
          (num === 0 && remainNum === 0)
      );
    if (isTwoOrAHalf !== undefined) {
      result = true;
      break;
    }
  }
  return result;
};
