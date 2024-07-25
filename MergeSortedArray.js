/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// iterate backwards from each array
	let p1 = m - 1;
	let p2 = n - 1;

	// pointer initialized to the end of the merged array
	let p = m + n - 1;

	while (p1 >= 0 && p2 >= 0) {
		// if nums1 has the larger number, add it first
		if (nums1[p1] > nums2[p2]) {
			nums1[p] = nums1[p1];
			p1--;
		}
		// else add element from nums2
		else {
			nums1[p] = nums2[p2];
			p2--;
		}
		// move pointer
		p--;
	}

	// if there are still elements in nums2, add them to the front of nums1
	while (p2 >= 0) {
		nums1[p] = nums2[p2];
		p2--;
		p--;
	}
};
