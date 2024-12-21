/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let n = citations.length;
    let h = n;
    while (n > 0) {
      let count = 0;
      for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= n) {
          count++;
        }
      }
      if (count >= h) {
        break;
      }
      n--;
      h = n;
    }
    return h;
  };