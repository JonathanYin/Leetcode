/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp array to store the max sum at each index
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // take the max of the current number and the sum of the previous number and the current number
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
}