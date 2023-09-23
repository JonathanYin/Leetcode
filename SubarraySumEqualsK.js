/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // initialize a hashmap to store the sum of the subarray and the number of times it occurs
    let hashmap = new Map();
    hashmap.set(0, 1);
    // count the number of times the sum of the subarray equals k
    let count = 0;
    // sum of the subarray
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        // add the current number to the sum
        sum += nums[i];
        // if the hashmap has the sum - k, then add the number of times the sum - k has occurred to the count
        if (hashmap.has(sum - k)) {
            count += hashmap.get(sum - k);
        }
        // if the hashmap has the sum, then increment the number of times the sum has occurred
        if (hashmap.has(sum)) {
            hashmap.set(sum, hashmap.get(sum) + 1);
        } 
        // otherwise, set the number of times the sum has occurred to 1
        else {
            hashmap.set(sum, 1);
        }
    }
    return count;
};