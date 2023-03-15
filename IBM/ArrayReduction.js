/*
 * Complete the 'findTotalCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
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