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
 * Complete the 'raisingPower' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function raisingPower(arr) {
	// Write your code here
	const MOD = 1000000007;
	let maxValue = BigInt(0);
	let maxIndex = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		// compute arr[i]^arr[i+1] % MOD
		let result = BigInt(1);
		let base = BigInt(arr[i]);
		let exponent = arr[i + 1];

		// use modular exponentiation
		while (exponent > 0) {
			if (exponent % 2 === 1) {
				result = (result * base) % BigInt(MOD);
			}

			base = (base * base) % BigInt(MOD);
			exponent = Math.floor(exponent / 2);
		}

		if (result > maxValue) {
			maxValue = result;
			maxIndex = i;
		} else if (result === maxValue && i < maxIndex) {
			maxIndex = i;
		}
	}

	return maxIndex + 1;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arrCount = parseInt(readLine().trim(), 10);

	let arr = [];

	for (let i = 0; i < arrCount; i++) {
		const arrItem = parseInt(readLine().trim(), 10);
		arr.push(arrItem);
	}

	const result = raisingPower(arr);

	ws.write(result + "\n");

	ws.end();
}
