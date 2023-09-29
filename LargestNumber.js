/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // sort via comparator function
    nums.sort(comparator);

    // concatenate the numbers for output
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    // if the first digit of result is a 0, return 0, otherwise return the result
    return result[0] === "0" ? "0" : result;
};

// helper function to compare the concatenations of two numbers
function comparator(x, y) {
    let a = x.toString();
    let b = y.toString();
    
    let str1 = a + b;
    let str2 = b + a;

    if (str1 > str2) {
        return -1;
    }
    return 1;
}