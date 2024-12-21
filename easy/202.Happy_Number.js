/**
 * @param {number} n
 * @return {boolean}
 */
// 解法一：递归快乐+catch非快乐数
// var isHappy = function(n) {
//   if (n == 1) return true;

//   try {
//     function quadratic(num) {
//       return Math.pow(parseInt(num), 2);
//     }
//     var nextNum = -999;
//     if (`${n}`.length === 1) {
//       // 7 true, 2 false
//       nextNum = quadratic(n);
//     } else {
//       // 19 true, 78 false
//       nextNum = `${n}`
//         .split("")
//         .map(quadratic)
//         .reduce((acc, cur) => acc + cur);
//     }
//     while (nextNum !== 1) {
//       // 递归(理解了递归，可用于理解21题单链表的递归解法）
//       nextNum = isHappy(nextNum);
//       return nextNum;
//     }
//     return nextNum === 1;
//   } catch (err) {
//     // 一直循环的非快乐数会抛出异常
//     return false;
//   }
// };

// 解法二：递归+Set
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n == 1) return true;
  var nextNums = arguments[1] || [];
  var nextNumsSet = new Set(nextNums);
  // 通过Set对数组去重，比较size和length的大小
  if (nextNumsSet.size !== nextNums.length) {
    return false;
  }
  function quadratic(num) {
    return Math.pow(parseInt(num), 2);
  }
  var nextNum = -999;

  if (`${n}`.length === 1) {
    // 7 true, 2 false
    nextNum = quadratic(n);
  } else {
    // 19 true, 78 false
    nextNum = `${n}`
      .split("")
      .map(quadratic)
      .reduce((acc, cur) => acc + cur);
  }
  while (nextNum !== 1) {
    nextNums.push(nextNum);
    // 递归
    nextNum = isHappy(nextNum, nextNums);
    return nextNum;
  }
  return nextNum === 1;
};

/**
 * 解法3：出栈
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  let arr = `${n}`.split("");
  let num = 0;
  let isHappyNumber = true;
  const set = new Set();
  while (arr.length) {
    const pop = parseInt(arr.pop());
    num += pop * pop;
    if (arr.length === 0 && num !== 1) {
      if (set.has(num)) {
        isHappyNumber = false;
        break;
      }
      set.add(num);
      arr = `${num}`.split("");
      num = 0;
    }
  }
  return isHappyNumber;
};

/**
 * 解法4：hashset
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  let isHappyNumber = false;
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let num = 0;
    for (const i of `${n}`) {
      num += i * i;
    }
    if (num === 1) {
      isHappyNumber = true;
      break;
    }
    n = num;
  }
  return isHappyNumber;
};
