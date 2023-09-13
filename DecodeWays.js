/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0);
    // if the first number is 0, we cannot decode
    if (s[0] === '0') {
        return 0;
    }
    // 1 way to decode 0 characters
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        // if the current number is not 0, we can decode the current number in the same number of ways as the previous number
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        // if the previous two numbers are between 10 and 26, we can decode the current number in the same number of ways as the number 2 numbers before
        if (i >= 2 && s[i - 2] !== '0' && parseInt(s.substring(i - 2, i)) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};