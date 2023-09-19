/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    // helper function to find the length of a palindrome given the left and right indices
    const expand = (left, right) => {
        // initialize number of palindromes counted
        let count = 0;
        // while pointers are positioned correctly and the characters are the same, expand the window
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }

    // loop through the string
    for (let i = 0; i < s.length; i++) {
        // find the length of the palindrome centered at i
        count += expand(i, i);
        count += expand(i, i + 1);
    }

    return count;
};