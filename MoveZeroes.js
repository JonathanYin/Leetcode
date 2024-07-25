/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let lastNonZeroFoundAt = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[lastNonZeroFoundAt] = nums[i];
			lastNonZeroFoundAt++;
		}
	}

	for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
		nums[i] = 0;
	}
};
