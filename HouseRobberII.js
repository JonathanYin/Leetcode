/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]; // Edge case: only one house

    let excludeFirst = new Array(nums.length).fill(0);
    let excludeLast = new Array(nums.length).fill(0);

    // Initialize first two elements for both scenarios
    excludeFirst[0] = 0;
    excludeFirst[1] = nums[1];
    excludeLast[0] = nums[0];
    excludeLast[1] = Math.max(nums[0], nums[1]);

    // Exclude the first house
    for (let i = 2; i < nums.length; i++) {
        excludeFirst[i] = Math.max(nums[i] + excludeFirst[i - 2], excludeFirst[i - 1]);
    }

    // Exclude the last house
    for (let i = 2; i < nums.length - 1; i++) {
        excludeLast[i] = Math.max(nums[i] + excludeLast[i - 2], excludeLast[i - 1]);
    }

    return Math.max(excludeFirst[nums.length - 1], excludeLast[nums.length - 2]);
};
