/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const index = ["type", "color", "name"].indexOf(ruleKey);
  const result = items.reduce((acc, cur) => {
    if (cur[index] === ruleValue) {
      acc++;
    }
    return acc;
  }, 0);
  return result;
};
