/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const map = new Map();
  let min = { key: undefined, value: Infinity };
  for (let i = 0; i < s.length; i++) {
    const indexs = map.has(s[i]) ? [...map.get(s[i]), i] : [i];
    map.set(s[i], indexs);
    if (indexs[1] < min.value) {
      min = { key: s[i], value: indexs[1] };
    }
  }
  return min.key;
};
