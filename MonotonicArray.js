/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        // if the current number is less than the previous number, the array is no longer increasing
        if (increasing && nums[i] < nums[i - 1]) {
            increasing = false;
        }

        // if the current number is greater than the previous number, the array is no longer decreasing
        if (decreasing && nums[i] > nums[i - 1]) {
            decreasing = false;
        }

         // if we have found that the array is no longer monotone, return false
        if (!increasing && !decreasing) {
            return false;
        }
    }
    return true;
};