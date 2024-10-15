function solution(queries, diff) {
	let numbers = [];
	let counts = [];
	let freq = new Map();

	for (let query of queries) {
		let num = parseInt(query.slice(1));

		if (query[0] === "+") {
			numbers.push(num);
			freq.set(num, (freq.get(num) || 0) + 1);
		} else if (query[0] === "-") {
			numbers = numbers.filter((n) => n !== num);
			freq.delete(num);
		}

		let count = 0;
		for (let [y, freqY] of freq) {
			let x = y + diff;
			let z = y - diff;
			if (freq.has(x) && freq.has(z)) {
				count += freqY * freq.get(x) * freq.get(z);
			}
		}

		counts.push(count);
	}

	return counts;
}
