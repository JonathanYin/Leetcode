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
 * Complete the 'getMaximumSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY factor
 *  2. 2D_INTEGER_ARRAY data
 *  3. INTEGER x
 */

function getMaximumSum(factor, data, x) {
	// sort in descending order
	for (let i = 0; i < data.length; i++) {
		data[i].sort((a, b) => b - a);
	}

	let dp = new Array(x + 1).fill(-Infinity);
	dp[0] = 0;

	for (let i = 0; i < data.length; i++) {
		let newDp = new Array(factor + 1).fill(0);

		for (let j = 1; j <= factor[i]; j++) {
			newDp[j] = newDp[j - 1] + data[i][j - 1];
		}

		for (let j = x; j >= 0; j--) {
			for (let k = 1; k <= factor[i] && j + k <= x; k++) {
				dp[j + k] = Math.max(dp[j + k], dp[j] + newDp[k]);
			}
		}
	}

	return dp[x] === -Infinity ? -1 : dp[x];
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const factorCount = parseInt(readLine().trim(), 10);

	let factor = [];

	for (let i = 0; i < factorCount; i++) {
		const factorItem = parseInt(readLine().trim(), 10);
		factor.push(factorItem);
	}

	const dataRows = parseInt(readLine().trim(), 10);

	const dataColumns = parseInt(readLine().trim(), 10);

	let data = Array(dataRows);

	for (let i = 0; i < dataRows; i++) {
		data[i] = readLine()
			.replace(/\s+$/g, "")
			.split(" ")
			.map((dataTemp) => parseInt(dataTemp, 10));
	}

	const x = parseInt(readLine().trim(), 10);

	const result = getMaximumSum(factor, data, x);

	ws.write(result + "\n");

	ws.end();
}
