var threeSum = function(nums) {
    // need at least 3 elements to sum
    if (nums.length < 3) {
        return nums;
    }
    const results = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // once we reach positive numbers, we can no longer sum to 0
        if (nums[i] > 0) 
        break;
        
        // skip repeated values
        if (i > 0 && nums[i] == nums[i - 1]) 
        continue;
        
        // two numbers used to sum with nums[i]
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            // if we reach a sum of 0, add it to results array
            if (sum == 0) {
                results.push([nums[i], nums[j], nums[k]]);
                
                // increment j and decrement k until we find unique values
                while (nums[j] == nums[j + 1]) 
                j++;
                while (nums[k] == nums[k - 1])
                k--;
                
                // move to next elements
                j++;
                k--;
            }
            
            // if sum is too small, increment j to get closer to target
            else if (sum < 0) {
                j++;
            }
            
            // if sum is too large, decrement k to get closer to target
            else {
                k--;
            }
        }
    }
    return results;
}