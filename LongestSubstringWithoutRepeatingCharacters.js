/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    // use two pointers for sliding window
    let start = 0;
    let end = 0;
    // set to keep track of duplicate chars
    let set = new Set();
    while (end < s.length) {
        // if we have a duplicate char, remove the char at start pointer, and move start
        if (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }
        // else, add the current char to the set, and increment end
        else {
            set.add(s[end]);
            end++;
        }
        max = Math.max(max, end - start);
    }
    return max;
};
