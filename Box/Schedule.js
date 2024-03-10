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

function findSchedules(workHours, dayHours, pattern) {
	const solutions = [];
	let hoursToBeScheduled = workHours;
	for (let c of pattern) {
		if (c !== "?") {
			hoursToBeScheduled -= parseInt(c, 10);
		}
	}
	searchSolutions(hoursToBeScheduled, dayHours, workHours, pattern, 0, solutions);
	return solutions.sort();
}

function searchSolutions(hoursToBeScheduled, dayHours, workHours, pattern, index, solutions) {
	if (index === pattern.length) {
		if (hoursToBeScheduled === 0) {
			solutions.push(pattern);
		}
		return;
	}
	if (pattern[index] === "?") {
		for (let numHoursForDay = 0; numHoursForDay <= Math.min(hoursToBeScheduled, dayHours); numHoursForDay++) {
			const newPattern = pattern.slice(0, index) + numHoursForDay + pattern.slice(index + 1);
			searchSolutions(hoursToBeScheduled - numHoursForDay, dayHours, workHours, newPattern, index + 1, solutions);
		}
	} else {
		searchSolutions(hoursToBeScheduled, dayHours, workHours, pattern, index + 1, solutions);
	}
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
	const workHours = parseInt(readLine().trim(), 10);
	const dayHours = parseInt(readLine().trim(), 10);
	const pattern = readLine();
	const result = findSchedules(workHours, dayHours, pattern);
	ws.write(result.join("\n") + "\n");
	ws.end();
}
