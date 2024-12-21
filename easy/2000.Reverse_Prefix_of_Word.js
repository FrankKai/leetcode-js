/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) return word;
    let prefix = "";
    let i = 0;
    for(const char of word){
        prefix += char;
        i++;
        if(ch === char){
            break;
        }
    }
    const result = prefix.split("").reverse().join("") + word.slice(i);
    return result;
};