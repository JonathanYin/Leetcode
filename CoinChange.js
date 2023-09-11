/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    // 0 ways to form 0 cents
    dp[0] = 0;

    // loop through every amount, from 1 to amount
    for (let i = 1; i < dp.length; i++) {
        // for each coin type, check if it is less than the amount
        for (let coin of coins) {
            if (coin <= i) {
                // if we can reach 'i - coin' amount with dp[i - coin] coins, then we can reach 'i' amount with dp[i - coin] + 1 coins
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11)); // 3