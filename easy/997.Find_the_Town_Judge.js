/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1 && trust.length === 0) return 1;
    const candidateMap = new Map();
    const trustOthersMap = new Map();
    for (let i = 0; i < trust.length; i++) {
      candidateMap.set(
        trust[i][1],
        candidateMap.has(trust[i][1]) ? candidateMap.get(trust[i][1]) + 1 : 1
      );
      trustOthersMap.set(trust[i][0], true);
    }
    return (
      [...candidateMap.keys()].find(
        (item) => !trustOthersMap.has(item) && candidateMap.get(item) === n - 1
      ) || -1
    );
  };