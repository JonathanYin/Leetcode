var findMin = function(nums) {
    var res = nums[0];
    let left = 0;
    let right = nums.length - 1;
    // while pointers are positioned correctly
    while (left <= right) {
        if (nums[left] <= nums[right]) {
            // if the left value is less than the right value, then the subarray is sorted
            return Math.min(res, nums[left]);
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= nums[left]) {
            // if the mid value is larger than the left-most value, we know that the min must be on the right-half of the array
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return res;
}