/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return Math.max.apply(null, sentences.map((item)=>item.split(" ").length));
};