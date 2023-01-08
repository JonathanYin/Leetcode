var maxArea = function(heights) {
    let max = 0;
    let left = 0;
    let right = heights.length - 1;
    
    while (left < right) {
        const minHeight = Math.min(heights[left], heights[right]);
        const area = minHeight * (right - left);
        
        if (area > max) {
            max = area;
        }
        
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
}