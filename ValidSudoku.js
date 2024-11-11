/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	// use a set to store digits in each row 1-9, each col 1-9, and each box 1-9
	let rows = new Array(9).fill(null).map(() => new Set());
	let cols = new Array(9).fill(null).map(() => new Set());
	let boxes = new Array(9).fill(null).map(() => new Set());

	// iterate through the board
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let num = board[i][j];
			// if we find empty square, continue
			if (num === ".") continue;

			// map row, col index to box index
			let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

			// if duplicate num is found in any of our sets
			if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
				return false;
			}

			rows[i].add(num);
			cols[j].add(num);
			boxes[boxIndex].add(num);
		}
	}

	return true;
};
