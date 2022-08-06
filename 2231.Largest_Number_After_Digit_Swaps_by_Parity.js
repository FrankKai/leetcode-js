/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    // 记忆奇数及其index，记忆偶数及其index
    // 降序排序，不仅要降序，还要重拍index
    // 按原位置组合
    const arr = `${num}`.split("");
    let i = 0;
    const odd = [];
    const even = [];
    while (i < arr.length) {
      const item = { index: i, value: arr[i] };
      if (arr[i] % 2) {
        odd.push(item);
      } else {
        even.push(item);
      }
      i++;
    }
  
    /*
     [{index: 0, value: '1'},{index: 2, value: '3'}]
     =>
     [{index: 0, value: '3'},{index: 2, value: '1'}]
  
    */
    function generate(input) {
      input.sort((x, y) => parseInt(y.value) - parseInt(x.value));
      const idxs = input.map((item) => item.index);
      idxs.sort((x, y) => x - y);
      const result = idxs.map((item, idx) => ({
        index: item,
        value: input[idx].value,
      }));
      return result;
    }
  
    const sortedOdd = generate(odd);
    const sortedEven = generate(even);
  
    const resArr = [...sortedOdd, ...sortedEven];
    resArr.sort((x, y) => x.index - y.index);
    const res = resArr.reduce((acc, cur) => acc + cur.value, [""]);
    return res;
  };