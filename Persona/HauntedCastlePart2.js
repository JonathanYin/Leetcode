/*
 * Complete the 'escape_castle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER rows
 *  2. INTEGER cols
 *  3. 2D_INTEGER_ARRAY walls
 *  4. INTEGER_ARRAY escape_point
 *  5. 2D_INTEGER_ARRAY treasures
 */

class Castle {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
		this.grid = Array(rows)
			.fill()
			.map(() => Array(columns).fill(0));
	}

	addWall(x, y) {
		if (this.isValidPosition(x, y)) {
			this.grid[x][y] = 1;
		}
	}

	setEscapePoint(x, y) {
		if (this.isValidPosition(x, y)) {
			this.grid[x][y] = 2;
		}
	}

	isValidPosition(x, y) {
		return x >= 0 && x < this.rows && y >= 0 && y < this.columns;
	}

	isWall(x, y) {
		return this.grid[x][y] === 1;
	}

	isEscapePoint(x, y) {
		return this.grid[x][y] === 2;
	}
}

function escape_castle(rows, cols, walls, escape_point, treasures) {
	const castle = new Castle(rows, cols);
	for (let wall of walls) {
		castle.addWall(wall[0], wall[1]);
	}

	castle.setEscapePoint(escape_point[0], escape_point[1]);
	const treasurePositions = new Set(treasures.map((t) => `${t[0]},${t[1]}`));

	// first, find minimum steps to escape
	const minSteps = findMinSteps(castle, escape_point);
	if (minSteps === -1) return ["-1 0"];

	// then find max treasures possible within those minimum steps
	const queue = [[0, 0, 0, new Set()]];
	const visited = new Set();
	const getStateKey = (x, y, collected) => {
		const collectedStr = Array.from(collected).sort().join(",");
		return `${x},${y}:${collectedStr}`;
	};

	let maxTreasures = 0;
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	while (queue.length > 0) {
		const [x, y, steps, collected] = queue.shift();

		// only consider paths of exactly minSteps length
		if (steps > minSteps) continue;

		// try to collect treasure at current position
		const posKey = `${x},${y}`;
		if (treasurePositions.has(posKey) && !collected.has(posKey)) {
			collected.add(posKey);
		}

		// if we reached escape point in minimum steps, update max treasures
		if (x === escape_point[0] && y === escape_point[1] && steps === minSteps) {
			maxTreasures = Math.max(maxTreasures, collected.size);
			continue;
		}

		// only continue if we can still reach escape point in remaining steps
		const remainingSteps = minSteps - steps;
		const manhattanDist = Math.abs(escape_point[0] - x) + Math.abs(escape_point[1] - y);
		if (manhattanDist > remainingSteps) continue;

		for (const [dx, dy] of directions) {
			const newX = x + dx;
			const newY = y + dy;

			if (!castle.isValidPosition(newX, newY) || castle.isWall(newX, newY)) {
				continue;
			}

			const newCollected = new Set(collected);
			const newStateKey = getStateKey(newX, newY, newCollected);

			if (!visited.has(newStateKey)) {
				visited.add(newStateKey);
				queue.push([newX, newY, steps + 1, newCollected]);
			}
		}
	}

	return [`${minSteps} ${maxTreasures}`];
}

// helper function to find minimum steps to escape
function findMinSteps(castle, escape_point) {
	const queue = [[0, 0, 0]]; // x, y, steps
	const visited = new Set(["0,0"]);
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	while (queue.length > 0) {
		const [x, y, steps] = queue.shift();

		if (x === escape_point[0] && y === escape_point[1]) {
			return steps;
		}

		for (const [dx, dy] of directions) {
			const newX = x + dx;
			const newY = y + dy;
			const newKey = `${newX},${newY}`;

			if (castle.isValidPosition(newX, newY) && !castle.isWall(newX, newY) && !visited.has(newKey)) {
				visited.add(newKey);
				queue.push([newX, newY, steps + 1]);
			}
		}
	}

	return -1;
}
