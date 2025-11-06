function solution(n, m, figures) {
	// Shapes as 0/1 matrices (unrotated).
	// A: 1x1
	// B: 1x3 horizontal line
	// C: 2x2 square
	// D: vertical 3x1 with a nub to the right in the middle:
	//    [1,0]
	//    [1,1]
	//    [1,0]
	// E: T-like:
	//    [0,1,0]
	//    [1,1,1]
	const SHAPES = {
		A: [[1]],
		B: [[1, 1, 1]],
		C: [
			[1, 1],
			[1, 1],
		],
		D: [
			[1, 0],
			[1, 1],
			[1, 0],
		],
		E: [
			[0, 1, 0],
			[1, 1, 1],
		],
	};

	// Initialize grid with 0s
	const grid = Array.from({ length: n }, () => Array(m).fill(0));

	// Try to place a shape matrix at (r, c) if it fits and doesn't overlap
	const canPlace = (shape, r, c) => {
		const h = shape.length;
		const w = shape[0].length;
		if (r + h > n || c + w > m) return false;
		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (shape[i][j] === 1 && grid[r + i][c + j] !== 0) return false;
			}
		}
		return true;
	};

	const place = (shape, r, c, val) => {
		const h = shape.length;
		const w = shape[0].length;
		for (let i = 0; i < h; i++) {
			for (let j = 0; j < w; j++) {
				if (shape[i][j] === 1) grid[r + i][c + j] = val;
			}
		}
	};

	// Place figures in given order
	figures.forEach((type, idx) => {
		const shape = SHAPES[type];
		const val = idx + 1; // 1-based index
		let placed = false;

		// Scan positions row-major to satisfy tie-breakers
		for (let r = 0; r < n && !placed; r++) {
			for (let c = 0; c < m && !placed; c++) {
				if (canPlace(shape, r, c)) {
					place(shape, r, c, val);
					placed = true;
				}
			}
		}
		// Per problem statement, a placement is always possible (guaranteed to fit)
	});

	return grid;
}
