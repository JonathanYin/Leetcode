/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let direction = 0;
	let output = [];

	// iterating from left to right goes through columns
	let left = 0;
	let right = matrix[0].length - 1;

	// iterating from top to bottom goes through rows
	let top = 0;
	let bot = matrix.length - 1;

	// while we are within the boundaries of the matrix
	while (left <= right && top <= bot) {
		// going left to right
		if (direction == 0) {
			for (let i = left; i <= right; i++) {
				output.push(matrix[top][i]);
			}
			// after iterating across columns, move down a row
			top++;
		}

		// going top to bot
		else if (direction == 1) {
			for (let i = top; i <= bot; i++) {
				output.push(matrix[i][right]);
			}
			// after iterating down rows, move left a col
			right--;
		}

		// going right to left
		else if (direction == 2) {
			for (let i = right; i >= left; i--) {
				output.push(matrix[bot][i]);
			}
			// move back up a row
			bot--;
		}

		// going bot to top
		else if (direction == 3) {
			for (let i = bot; i >= top; i--) {
				output.push(matrix[i][left]);
			}
			// move right a col
			left++;
		}

		direction = (direction + 1) % 4;
	}

	return output;
};
