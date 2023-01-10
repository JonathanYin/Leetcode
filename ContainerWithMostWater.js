var maxArea = function(heights) {
    let max = 0;
    let left = 0;
    let right = heights.length - 1;
    
    // while pointers are positioned correctly
    while (left < right) {
        // calculate area for current container
        const minHeight = Math.min(heights[left], heights[right]);
        const area = minHeight * (right - left);
        
        if (area > max) {
            max = area;
        }
        
        // if left height is the limiting factor, the only way area can be increased is if left height is increased, so increment left pointer
        if (heights[left] < heights[right]) {
            left++;
        } 
        // else, increment right pointer
        else {
            right--;
        }
    }
    
    return max;
}