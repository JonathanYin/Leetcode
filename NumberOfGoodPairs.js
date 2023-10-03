/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // use an inner loop to iterate through indices where i < j
        for (let j = i + 1; j < nums.length; j++) {
            // check for good pair
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};