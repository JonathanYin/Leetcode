/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let fresh = 0;
	let queue = [];
	let time = 0;

	// count fresh oranges and add rotten ones to the queue
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 2) {
				queue.push([i, j]);
			} else if (grid[i][j] == 1) {
				fresh++;
			}
		}
	}

	// BFS to rot oranges
	while (queue.length && fresh > 0) {
		// get the number of oranges at the current time step
		let size = queue.length;

		// process all oranges at the current time step
		for (let i = 0; i < size; i++) {
			let [x, y] = queue.shift();

			// loop through each of the four directions
			for (let [dirX, dirY] of [
				[0, 1],
				[0, -1],
				[1, 0],
				[-1, 0],
			]) {
				let newX = x + dirX;
				let newY = y + dirY;

				// if the new position is within the grid and the orange is fresh
				if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] == 1) {
					// set it to rotting, decrement fresh count, and add the new rotting orange to the queue
					grid[newX][newY] = 2;
					fresh--;
					queue.push([newX, newY]);
				}
			}
		}

		// increment time after processing all oranges at the current step
		time++;
	}

	return fresh == 0 ? time : -1;
};
