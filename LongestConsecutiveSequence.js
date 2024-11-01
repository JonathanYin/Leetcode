/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	// add all numbers into set
	let set = new Set(nums);
	let max = 0;

	// iterate through each number in the set, and check for sequences
	for (let num of [...set]) {
		// check for start of sequence
		if (!set.has(num - 1)) {
			// if there is no number 1 smaller than this, then this can be the start of a sequence
			let current = num;
			let streak = 1;

			// check for longest streak from current
			while (set.has(current + 1)) {
				current++;
				streak++;
			}

			// update max streak
			max = Math.max(max, streak);
		}
	}

	return max;
};
