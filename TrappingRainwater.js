/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // two pointers to keep track of the left and right walls
    let left = 0;
    let right = height.length - 1;
    // keep track of the max height of the left and right walls
    let leftMax = 0;
    let rightMax = 0;

    // total amount of water trapped
    let total = 0;
    
    // while pointers are positioned correctly
    while (left <= right) {
        // left and right bars
        let leftHeight = height[left];
        let rightHeight = height[right];

        // if the left wall is shorter than the right wall, then the left wall is the limiting factor, and will determine the amount of water trapped
        if (leftHeight <= rightHeight) {
            // if the left wall is greater than the max height of the left wall, then update the max height of the left wall
            if (leftHeight > leftMax) {
                leftMax = leftHeight;
            }
            // else, add the difference between the max height of the left wall and the current height of the left wall to the total
            else {
                total += leftMax - height[left];
                left++;
            }
        }

        // if the right wall is shorter than the left wall, then the right wall is the limiting factor, and will determine the amount of water trapped
        else {
            // if the right wall is greater than the max height of the right wall, then update the max height of the right wall
            if (rightHeight > rightMax) {
                rightMax = rightHeight;
            }
            // else, add the difference between the max height of the right wall and the current height of the right wall to the total
            else {
                total += rightMax - height[right];
                right--;
            }
        }
    }

    return total;
};