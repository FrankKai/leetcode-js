/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  const answer = queries.reduce((acc, query) => {
    A[query[1]] += query[0];
    const sum = A.reduce((iacc, num) => {
      if (num % 2 === 0) iacc += num;
      return iacc;
    }, 0);
    acc.push(sum);
    return acc;
  }, []);
  return answer;
};
