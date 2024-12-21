/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const result = arr.reduce((acc, _, idx) => {
    if (idx === arr.length - 1) {
      acc.push(-1);
      return acc;
    }
    const item = Math.max(...arr.slice(idx + 1));
    acc.push(item);
    return acc;
  }, []);
  return result;
};
