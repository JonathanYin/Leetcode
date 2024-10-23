function solution(queries) {
	const segments = new Map();
	const result = [];
	let maxLength = 0;

	queries.forEach((position) => {
		const leftNeighbor = segments.get(position - 1);
		const rightNeighbor = segments.get(position + 1);

		let newLength;

		if (!leftNeighbor && !rightNeighbor) {
			newLength = 1;
			segments.set(position, 1);
		} else if (!leftNeighbor) {
			newLength = rightNeighbor + 1;
			segments.set(position, newLength);
			segments.set(position + rightNeighbor, newLength);
		} else if (!rightNeighbor) {
			newLength = leftNeighbor + 1;
			segments.set(position, newLength);
			segments.set(position - leftNeighbor, newLength);
		} else {
			newLength = leftNeighbor + rightNeighbor + 1;
			segments.set(position - leftNeighbor, newLength);
			segments.set(position + rightNeighbor, newLength);
			segments.set(position, newLength);
		}

		maxLength = Math.max(maxLength, newLength);
		result.push(maxLength);
	});

	return result;
}
