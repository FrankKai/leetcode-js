
var MagicDictionary = function () {
    this.words = [];
  };
  
  /**
   * @param {string[]} dictionary
   * @return {void}
   */
  MagicDictionary.prototype.buildDict = function (dictionary) {
    this.words = dictionary;
  };
  
  /**
   * @param {string} searchWord
   * @return {boolean}
   */
  MagicDictionary.prototype.search = function (searchWord) {
    let isExist = false;
  
    for (const word of this.words) {
      const lenEqual = word.length === searchWord.length;
      if (!lenEqual) continue;
      let count = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== searchWord[i]) {
          count++;
        }
        if (count > 1) {
          break;
        }
      }
      if (count === 1) {
        isExist = true;
        break;
      }
    }
    return isExist;
  };
  
  /**
   * Your MagicDictionary object will be instantiated and called as such:
   * var obj = new MagicDictionary()
   * obj.buildDict(dictionary)
   * var param_2 = obj.search(searchWord)
   */