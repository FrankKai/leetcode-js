/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var strX = x + '';
    var strArr = [];
    var strLength = strX.length;
    var isPalindrome = true;
    for(var i=0; i<strLength; i++){
        strArr.push(strX.charAt(i));
    }
    var strArrReverse = strArr.map((e)=>e).reverse();
    strArr.forEach((e,i)=>{
        if(e!==strArrReverse[i]){
            isPalindrome = false;
        }
    })
    return isPalindrome;
};