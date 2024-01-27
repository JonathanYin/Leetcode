"use strict";

const fs = require("fs");
const fetch = require("node-fetch");

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
 * Complete the 'findCountry' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING region
 *  2. STRING keyword
 * Base URL for copy/paste:
 * https://jsonmock.hackerrank.com/api/countries/search?region={region} &name={keyword}
 */

async function findCountry(region, keyword) {
	const url = `https://jsonmock.hackerrank.com/api/countries/search?`;
	let countries = [];

	const fetchData = async (page) => {
		const response = await fetch(`${url}region=${region}&name=${keyword}&page=${page}`);
		return await response.json();
	};

	const initialData = await fetchData(1);
	countries = countries.concat(initialData.data);
	const totalPages = initialData.total_pages;

	for (let page = 2; page <= totalPages; page++) {
		const pageData = await fetchData(page);
		countries = countries.concat(pageData.data);
	}

	return countries
		.filter((country) => country.region === region && country.name.toLowerCase().includes(keyword.toLowerCase()))
		.map((country) => `${country.name},${country.population}`)
		.sort((a, b) => {
			const [nameA, populationA] = a.split(",");
			const [nameB, populationB] = b.split(",");
			const populationDiff = parseInt(populationA.trim()) - parseInt(populationB.trim());
			if (populationDiff === 0) {
				return nameA.trim().localeCompare(nameB.trim());
			}
			return populationDiff;
		});
}
async function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const region = readLine();

	const keyword = readLine();

	const result = await findCountry(region, keyword);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
