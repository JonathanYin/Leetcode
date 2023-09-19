/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // initialize pointers 
    let tortoise = nums[0];
    let hare = nums[0];
    
    // find the intersection point of the two pointers (the duplicate number)
    while (true) {
        // move the tortoise one step and the hare two steps
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
        if (tortoise === hare) {
            break;
        }
    }

    // find the entrance to the cycle
    let ptr = nums[0];
    while (ptr !== tortoise) {
        ptr = nums[ptr];
        tortoise = nums[tortoise];
    }
    return ptr;
};