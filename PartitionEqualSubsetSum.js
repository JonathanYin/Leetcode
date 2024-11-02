/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((a, b) => a + b);
	if (sum % 2 !== 0) return false;

	let target = sum / 2;

	// dp[i][j] means: can we make sum j using numbers up to index i?
	let dp = new Array(target + 1).fill(false);
	dp[0] = true;

	for (let num of nums) {
		for (let j = target; j >= num; j--) {
			// if we have the previous sum, or we can add to it using num
			dp[j] = dp[j] || dp[j - num];
		}
	}
	return dp[target];
};
