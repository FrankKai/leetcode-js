/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    const word_len = word.length;
    let result = 0;
    // 正序
    const getK = (str) => {
      let k = 0;
      let curK = 0;
      for (let i = 0; i < str.length; ) {
        const sub_str = str.slice(i, i + word_len);
        if (sub_str === word) {
          curK++;
          i += word_len;
        } else {
          k = Math.max(k, curK);
          curK = 0;
          i++;
        }
      }
      k = Math.max(k, curK);
      return k;
    };
    // 倒序
    const getKRevert = (str) => {
      let k = 0;
      let curK = 0;
      for (let i = str.length - 1; i >= 0; ) {
        const sub_str = str.slice(i, i + word_len);
        if (sub_str === word) {
          curK++;
          i -= word_len;
        } else {
          k = Math.max(k, curK);
          curK = 0;
          i--;
        }
      }
      k = Math.max(k, curK);
      return k;
    };
    result = Math.max(getK(sequence), getKRevert(sequence));
    return result;
  };