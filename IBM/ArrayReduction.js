/*
 * Complete the 'findTotalCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/* 
 * Given: an array of n integers
 * Repeat the following operation until there is only one element remaining in the array:
 * Remove the min and max of the current array, add their sum back to the array, and add
 * Math.ceil(sum / (max - min + 1)) to the total cost of the operations. 
 * Return: total cost
*/

function findTotalCost(arr) {
    let totalCost = 0;
    // sort array in ascending order
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        // remove min and max elements
        const min = arr.shift();
        const max = arr.pop();
        // add sum back to arr
        arr.push(min + max);
        // add to total cost
        totalCost += Math.ceil((min + max) / (max - min + 1));
    }
    return totalCost;
}