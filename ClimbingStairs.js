/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    // 1 way to climb 0 stairs
    dp[0] = 1;

    // loop through every number of stairs, from 1 to n
    for (let i = 1; i < dp.length; i++) {
        // we can reach 'i' stairs by climbing 1 step from dp[i - 1]
        dp[i] += dp[i - 1];
        // if i >= 2, we can reach 'i' stairs by climbing 2 steps from dp[i - 2]
        if (i - 2 >= 0) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};