/*
 * Complete the 'escape_castle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER rows
 *  2. INTEGER columns
 *  3. 2D_INTEGER_ARRAY walls
 *  4. INTEGER_ARRAY escape_point
 */

class Castle {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
		this.grid = Array(rows)
			.fill()
			.map(() => Array(columns).fill(0));
	}

	// Place wall at given coordinates
	addWall(x, y) {
		if (this.isValidPosition(x, y)) {
			this.grid[x][y] = 1; // 1 represents wall
		}
	}

	// Set escape point
	setEscapePoint(x, y) {
		if (this.isValidPosition(x, y)) {
			this.grid[x][y] = 2; // 2 represents escape point
		}
	}

	// Check if position is within grid bounds
	isValidPosition(x, y) {
		return x >= 0 && x < this.rows && y >= 0 && y < this.columns;
	}

	// Check if position is a wall
	isWall(x, y) {
		return this.grid[x][y] === 1;
	}

	// Check if position is the escape point
	isEscapePoint(x, y) {
		return this.grid[x][y] === 2;
	}
}

// Adventurer class to manage player position
class Adventurer {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	// Get current position
	getPosition() {
		return [this.x, this.y];
	}
}

function escape_castle(rows, columns, walls, escape_point) {
	// Initialize castle and place walls
	const castle = new Castle(rows, columns);
	for (let wall of walls) {
		castle.addWall(wall[0], wall[1]);
	}

	// Set escape point
	castle.setEscapePoint(escape_point[0], escape_point[1]);

	// Initialize adventurer
	const adventurer = new Adventurer();

	// BFS to find shortest path
	const queue = [[0, 0, 0]]; // [x, y, steps]
	const visited = new Set(["0,0"]);
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	]; // down, up, right, left

	while (queue.length > 0) {
		const [currentX, currentY, steps] = queue.shift();

		// Check if we've reached the escape point
		if (castle.isEscapePoint(currentX, currentY)) {
			return [steps];
		}

		// Try all possible directions
		for (let [dx, dy] of directions) {
			const newX = currentX + dx;
			const newY = currentY + dy;
			const posKey = `${newX},${newY}`;

			// Check if new position is valid and not visited
			if (castle.isValidPosition(newX, newY) && !castle.isWall(newX, newY) && !visited.has(posKey)) {
				queue.push([newX, newY, steps + 1]);
				visited.add(posKey);
			}
		}
	}

	// No path found
	return [-1];
}
