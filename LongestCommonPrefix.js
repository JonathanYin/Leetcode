/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // initialize the common prefix to be the first string
    let ans = strs[0];

    // loop through each string, comparing it with the current common prefix
    for (let i = 1; i < strs.length; i++) {
        // while the current string does not start with the common prefix
        while (strs[i].indexOf(ans) != 0) {
            // remove the last character from the common prefix
            ans = ans.substring(0, ans.length - 1);
            // if the common prefix is empty, return an empty string
            if (ans == "") {
                return "";
            }
        }
    }
    return ans;
};