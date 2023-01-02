var productExceptSelf = function(nums) {
    var arr = [];
    let left = 1;
    let right = 1;
    
    // calculate prefix products to left of element
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            left = left * nums[i - 1];
        }
        arr[i] = left;
    }
    
    // calculate postfix products to right of element
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i < nums.length - 1) {
            right = right * nums[i + 1];
        }
        arr[i] *= right;
    }
    return arr;
}