/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    // if nums1 is longer than nums2, switch them
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // init binary search
    let low = 0;
    let high = n1;

    while (low <= high) {
        // partition nums1 and nums2
        let partition1 = Math.floor((low + high) / 2);
        let partition2 = Math.floor((n1 + n2 + 1) / 2) - partition1;

        // init edge cases
        let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        let minRight1 = partition1 === n1 ? Infinity : nums1[partition1];
        let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        let minRight2 = partition2 === n2 ? Infinity : nums2[partition2];

        // check if the partitions are correct
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // if the total length is even, return the average of the two middle numbers
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
            // if the total length is odd, return the middle number
            else {
                return Math.max(maxLeft1, maxLeft2);
            }
        }
        // if the partitions are not correct, move the partition
        else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        }
        else {
            low = partition1 + 1;
        }
    }
    return -1;
};