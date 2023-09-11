/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length + 1).fill(1);
    
    for (let i = 1; i < dp.length; i++) {
        // for each number before the current number
        for (let j = 0; j < i; j++) {
            // if the number before is less, take the max of the current longest subsequence and the longest subsequence of the number before + 1
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);    
            }
        }
    }
    return Math.max(...dp);
};