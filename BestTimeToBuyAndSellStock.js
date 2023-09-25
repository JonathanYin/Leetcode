/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // set local max to the last element, and iterate backwards to find the local min
    let localMax = prices.at(-1);
    // initialize current max profit to 0
    let profit = 0;
    // start iterating backwards from the second to last element
    for (let i = prices.length - 2; i >= 0; i--) {
        // if the current price is greater than the local max, set the new local max
        if (prices[i] >= localMax) {
            localMax = prices[i];
        }
        // else, take the difference between the two, and update max if profit is higher
        else {
            profit = Math.max(profit, localMax - prices[i]);
        }
    }
    return profit;
};