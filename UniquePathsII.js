/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;

	// Init dp array of m x n dimensions, with all 0s (no possible paths)
	let dp = new Array(m).fill().map(() => new Array(n).fill(0));

	// Init starting position: 1 path if no obstacle, 0 paths if obstacle
	dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

	// First col
	for (let i = 1; i < m; i++) {
		// If there is no obstacle here, set number of paths as the previous value
		if (obstacleGrid[i][0] === 0) {
			dp[i][0] = dp[i - 1][0];
		}
		// Else remains as 0
	}

	// First row
	for (let j = 1; j < n; j++) {
		// If there is no obstacle here, set number of paths as the previous value
		if (obstacleGrid[0][j] === 0) {
			dp[0][j] = dp[0][j - 1];
		}
		// Else remains as 0
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			// If no obstacle at the current position, sum possible paths
			if (obstacleGrid[i][j] === 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}
	}
	return dp[m - 1][n - 1];
};
