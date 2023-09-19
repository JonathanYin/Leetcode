/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // negative numbers cannot be palindromes
    if (x < 0) {
        return false;
    }
    
    // single digit numbers are always palindromes
    if (x < 10) {
        return true;
    }
    
    let text = x.toString();
    let left = 0;
    let right = text.length - 1;
    
    while (left <= right) {
        if (text[left] != text[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};