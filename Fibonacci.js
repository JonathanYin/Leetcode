const fibonacci = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i < dp.length; i++) {
        // each value is the sum of the previous two values
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(fibonacci(9)); // 34