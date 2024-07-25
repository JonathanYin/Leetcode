/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		// return the element if we found it
		if (nums[mid] == target) return mid;

		// if target is smaller than midpoint, move right pointer inwards
		if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return left;
};
