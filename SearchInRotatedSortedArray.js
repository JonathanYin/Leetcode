var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // while pointers are positioned correctly
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // if we find our target, return its index
        if (nums[mid] == target) {
            return mid;
        }

        // if left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // target is on the left
                right = mid - 1;
            }
            else {
                // target is on the right
                left = mid + 1;
            }
        }

        // if right side is sorted
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                // target is  on the right
                left = mid + 1;
            }
            else {
                // target is on the left
                right = mid - 1;
            }
        }
    }
    return -1;
}