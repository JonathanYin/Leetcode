/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // remove all non-alphanumeric characters and convert to uppercase
    // A-Za-z0-9 is a regex that matches all alphanumeric characters
    // ^ is a flag that means negation, so [^A-Za-z0-9] means match all non-alphanumeric characters
    // g is a flag that means global, which means it will match all occurrences of the regex
    s = s.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    // use two pointers to check if the string is a palindrome
    let left = 0; 
    let right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};