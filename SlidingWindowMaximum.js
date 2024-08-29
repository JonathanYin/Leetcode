/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	// initialize double-ended queue to keep track of max element at deque[0], and pop elements from right
	let deque = [];
	// output array
	let output = [];
	// initialize two pointers to move sliding window
	let left = 0;
	let right = 0;

	while (right < nums.length) {
		// while there are still elements in the deque, and the last element is smaller than the current
		while (deque.length > 0 && nums[right] > deque.at(-1)) {
			// remove the last element
			deque.pop();
		}
		// add current element to the deque
		deque.push(nums[right]);

		// increment right pointer to move window
		right++;

		// if we have reached the window size
		if (right - left === k) {
			// add the largest element to the output
			output.push(deque[0]);
			// if the largest element is the leftmost element, remove it from the deque
			if (deque[0] === nums[left]) {
				deque.shift();
			}
			// increment the left pointer
			left++;
		}
	}
	return output;
};
