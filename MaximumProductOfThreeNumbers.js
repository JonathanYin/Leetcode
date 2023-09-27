/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // max product is either the product of the three largest numbers or the product of the two smallest numbers and the largest number 
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;

    // loop through each number and update the max and min values
    for (let num of nums) {
        // find the three largest numbers
        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        }
        else if (num >= max2) {
            max3 = max2;
            max2 = num;
        }
        else if (num >= max3) {
            max3 = num;
        }

        // find the two smallest numbers
        if (num < min1) {
            min2 = min1;
            min1 = num;
        }
        else if (num < min2) {
            min2 = num;
        }
    }
    // return the max of the two products
    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};