/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let map = new Map();

	// use a map to store frequencies of each number
	for (let num of nums) {
		if (!map.has(num)) {
			map.set(num, 1);
		} else {
			map.set(num, map.get(num) + 1);
		}
	}

	// use an array to sort the frequencies of each number
	let array = [];
	for (let [key, value] of map) {
		array.push([key, value]);
	}
	array.sort(function (a, b) {
		return b[1] - a[1];
	});

	// add the k most frequent numbers to output
	let result = [];
	for (let i = 0; i < k; i++) {
		result.push(array[i][0]);
	}
	return result;
};
