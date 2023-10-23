/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    /*
     * n = 4^x
     * log(n) = x * log(4)
     * log(n) / log(4) = x
    */
    return Number.isInteger(Math.log(n) / Math.log(4));
};
