/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.streams = [];
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.streams[idKey] = value;
    const result = [];
    if(this.ptr === idKey){
        while(this.ptr in this.streams){
            result.push(this.streams[this.ptr])
            this.ptr++;
        }
    }
    return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */