var containsDuplicate = function(nums) {
    let hashset = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hashtable.has(nums[i])) {
            return true;
        }
        hashtable.add(nums[i]);
    }
    return false;
}