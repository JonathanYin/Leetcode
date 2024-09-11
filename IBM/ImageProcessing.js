"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'getFinalImage' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY image
 *  2. INTEGER rotation
 *  3. INTEGER vertical_flip
 *  4. INTEGER horizontal_flip
 */

function getFinalImage(image, rotation, vertical_flip, horizontal_flip) {
	// Write your code here
	// rotate image
	function rotateImage(img, angle) {
		const n = img.length;
		const rotated = Array(n)
			.fill()
			.map(() => Array(n).fill(0));

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				switch (angle) {
					case 90:
						rotated[j][n - 1 - i] = img[i][j];
						break;
					case 180:
						rotated[n - 1 - i][n - 1 - j] = img[i][j];
						break;
					case 270:
						rotated[n - 1 - j][i] = img[i][j];
						break;
				}
			}
		}

		return rotated;
	}

	// flip image vertically
	function flipVertical(img) {
		return img.slice().reverse();
	}

	// flip image horizontally
	function flipHorizontal(img) {
		return img.map((row) => row.slice().reverse());
	}

	// check rotation and flip properties and perform operations
	let result = image;
	if (rotation !== 0) {
		result = rotateImage(result, rotation);
	}

	if (vertical_flip === 1) {
		result = flipVertical(result);
	}

	if (horizontal_flip === 1) {
		result = flipHorizontal(result);
	}

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const imageRows = parseInt(readLine().trim(), 10);

	const imageColumns = parseInt(readLine().trim(), 10);

	let image = Array(imageRows);

	for (let i = 0; i < imageRows; i++) {
		image[i] = readLine()
			.replace(/\s+$/g, "")
			.split(" ")
			.map((imageTemp) => parseInt(imageTemp, 10));
	}

	const rotation = parseInt(readLine().trim(), 10);

	const vertical_flip = parseInt(readLine().trim(), 10);

	const horizontal_flip = parseInt(readLine().trim(), 10);

	const result = getFinalImage(image, rotation, vertical_flip, horizontal_flip);

	ws.write(result.map((x) => x.join(" ")).join("\n") + "\n");

	ws.end();
}
