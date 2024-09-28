function solution(matrix, frameSize) {
	const frameSums = calculateFrameSums(matrix, frameSize);
	const maxFrameSum = Math.max(...frameSums);
	return distinctNumbersInMaxFrames(matrix, frameSize, maxFrameSum);
}

function calculateFrameSums(matrix, frameSize) {
	const rows = matrix.length;
	const cols = matrix[0].length;
	const frameSums = [];

	for (let i = 0; i <= rows - frameSize; i++) {
		for (let j = 0; j <= cols - frameSize; j++) {
			let frameSum = 0;
			// Top and bottom rows
			for (let k = 0; k < frameSize; k++) {
				frameSum += matrix[i][j + k];
				frameSum += matrix[i + frameSize - 1][j + k];
			}
			// Left and right columns (excluding corners)
			for (let k = 1; k < frameSize - 1; k++) {
				frameSum += matrix[i + k][j];
				frameSum += matrix[i + k][j + frameSize - 1];
			}
			frameSums.push(frameSum);
		}
	}

	return frameSums;
}

function distinctNumbersInMaxFrames(matrix, frameSize, maxFrameSum) {
	const distinctNumbers = new Set();
	const rows = matrix.length;
	const cols = matrix[0].length;

	for (let i = 0; i <= rows - frameSize; i++) {
		for (let j = 0; j <= cols - frameSize; j++) {
			let frameSum = 0;
			// Calculate frame sum
			for (let k = 0; k < frameSize; k++) {
				frameSum += matrix[i][j + k];
				frameSum += matrix[i + frameSize - 1][j + k];
			}
			for (let k = 1; k < frameSize - 1; k++) {
				frameSum += matrix[i + k][j];
				frameSum += matrix[i + k][j + frameSize - 1];
			}

			if (frameSum === maxFrameSum) {
				// Collect distinct numbers from the frame
				for (let x = i; x < i + frameSize; x++) {
					for (let y = j; y < j + frameSize; y++) {
						if (x === i || x === i + frameSize - 1 || y === j || y === j + frameSize - 1) {
							distinctNumbers.add(matrix[x][y]);
						}
					}
				}
			}
		}
	}

	return Array.from(distinctNumbers).reduce((sum, num) => sum + num, 0);
}
