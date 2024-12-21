/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    // 1.遍历
    // 2.用some去做检验
    const result = text.split(" ").reduce((acc, item)=>{
        if (item.split("").some((char) => brokenLetters.includes(char))) {
            return acc;
        } else {
            acc++;
        }
        return acc;
    }, 0)
    return result;
};