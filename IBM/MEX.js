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
/* * Complete the 'getMaximumMex' function below.
 * * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * * 1. INTEGER_ARRAY arr
 * * 2. INTEGER x
 * */
function getMaximumMex(arr, x) {
	// Write your code here
	const count = new Array(x).fill(0);
	for (let num of arr) {
		count[num % x]++;
	}
	let minCount = Infinity;
	let minRemainder = 0;
	for (let i = 0; i < x; i++) {
		if (count[i] < minCount) {
			minCount = count[i];
			minRemainder = i;
		}
	}
	return minRemainder + minCount * x;
}
function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
	const arrCount = parseInt(readLine().trim(), 10);
	let arr = [];
	for (let i = 0; i < arrCount; i++) {
		const arrItem = parseInt(readLine().trim(), 10);
		arr.push(arrItem);
	}
	const x = parseInt(readLine().trim(), 10);
	const result = getMaximumMex(arr, x);
	ws.write(result + "\n");
	ws.end();
}
