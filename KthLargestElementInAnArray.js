/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // partition function arranges elements in array such that all elements 
    // to the left of pivot are less than pivot and all elements to the right of pivot are greater than pivot
    const partition = (left, right, pivotIndex) => {
        const pivot = nums[pivotIndex];
        // move pivot to end
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        // storeIndex keeps track of index where pivot should be placed
        let storeIndex = left;

        // move all elements less than pivot to left of storeIndex
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        // move pivot to its final place
        [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
        return storeIndex;
    };

    let left = 0;
    let right = nums.length - 1;
    // partition array until pivot is at index nums.length - k
    while (left <= right) {
        // choose random pivot
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        // get final index of pivot after partitioning
        const finalIndex = partition(left, right, pivotIndex);

        // if final index is nums.length - k, then pivot is the kth largest element
        if (finalIndex === nums.length - k) {
            return nums[finalIndex];
        } 
        // if final index is less than nums.length - k, then kth largest element is to the right of pivot
        else if (finalIndex < nums.length - k) {
            left = finalIndex + 1;
        } 
        // if final index is greater than nums.length - k, then kth largest element is to the left of pivot
        else {
            right = finalIndex - 1;
        }
    }

    return -1;
};