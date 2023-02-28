/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.reduce((acc, cur)=>{
    if(cur.startsWith(pref)){
      acc++;
    }
    return acc;
  }, 0)
};