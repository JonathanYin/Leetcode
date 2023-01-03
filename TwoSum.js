var TwoSum = function(nums, target) {
    var hashmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hashmap.has(difference)) {
            // if a pair summing to target is found, return the index of the complement and the current index in an array
            return [hashmap.get(difference), i];
        }
        hashmap.set(nums[i], i);
    }
    return null;
}