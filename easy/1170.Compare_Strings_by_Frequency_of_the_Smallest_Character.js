/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const fQueries = queries.map((item) => f(item));
  const fWords = words.map((item) => f(item));
  const answers = fQueries.reduce((acc, fQuery) => {
    const answer = fWords.filter((fWord) => fQuery < fWord).length;
    acc.push(answer);
    return acc;
  }, []);
  return answers;

  function f(s) {
    const sortArr = s.split("").sort();
    const first = sortArr.shift();
    let count = 1;
    for (const char of sortArr) {
      if (char !== first) break;
      count++;
    }
    return count;
  }
};
