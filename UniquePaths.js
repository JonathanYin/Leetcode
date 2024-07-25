/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// create a 2D array to store the number of ways to reach each cell
	let dp = new Array(m).fill().map(() => new Array(n).fill(1));

	// iterate through the 2D array
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			// the number of ways to reach a cell is the sum of the ways to reach the cell above and the cell to the left
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	// return the number of ways to reach the bottom right cell
	return dp[m - 1][n - 1];
};
