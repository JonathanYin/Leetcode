/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length + 1).fill(0);

    for (let i = 1; i < dp.length; i++) {
        // we can rob the current house and the house 2 houses before, or we can rob the house before
        dp[i] = Math.max(nums[i - 1] + (i - 2 >= 0 ? dp[i - 2] : 0), dp[i - 1]);
    }
    return dp[nums.length];
};