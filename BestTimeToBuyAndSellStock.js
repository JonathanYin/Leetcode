/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // keep track of highest price to sell at 
    let sellIndex = prices.length - 1;
    let profit = 0;

    for (let i = prices.length - 2; i >= 0; i--) {
        // if the current price is greater than the sell price, update the sell price
        if (prices[i] > prices[sellIndex]) {
            sellIndex = i;
        }
        // if the current price is less than the sell price, calculate the profit
        else if (prices[i] < prices[sellIndex]) {
            // if the profit at the current index is greater than the current profit, update it
            profit = Math.max(profit, prices[sellIndex] - prices[i]);
        }
    }
    return profit;
};