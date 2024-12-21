/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    // 常量额外空间-算法使用的空间不随输入内容的长度/多少变化而变化，是一个常量空间
    let writeIndex = 0;
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
      if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
        count++;
      } else {
        chars[writeIndex++] = chars[i];
        if (count > 1) {
          let len = `${count}`;
          for (let j = 0; j < len.length; j++) {
            chars[writeIndex++] = len[j];
          }
        }
        count = 1;
      }
    }
    return writeIndex;
  };