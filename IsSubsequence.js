/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        // find the index of the current character in t
        let index = t.indexOf(s[i]);
        // if the character is not found, return false
        if (index == -1) {
            return false;
        }
        // slice off characters before the index
        t = t.slice(index + 1);
    }
    return true;
};