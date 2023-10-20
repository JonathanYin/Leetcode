/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    // two pointers to check if the string is a palindrome
    let left = 0;
    let right = s.length - 1;

    // while pointers are positioned correctly
    while (left <= right) {
        // on the first instance where we find a character that is not the same, call helper function
        // with two cases: removing the left character, and removing the right character
        if(s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    // helper function
    // given a string with left and right pointers, determine whether the given substring is a palindrome
    function isPalindrome(str, left, right) {
        while (left <= right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    return true;
};