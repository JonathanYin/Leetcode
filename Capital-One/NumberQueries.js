function solution(a, b, queries) {
	const results = [];
	const bCount = new Map();

	// Create a frequency map for elements in b
	for (const num of b) {
		bCount.set(num, (bCount.get(num) || 0) + 1);
	}

	// Function to count pairs
	function countPairs(targetSum) {
		let count = 0;
		for (const numA of a) {
			const complement = targetSum - numA;
			if (bCount.has(complement)) {
				count += bCount.get(complement);
			}
		}
		return count;
	}

	for (const query of queries) {
		if (query[0] === 0) {
			// Update a[i] with value x
			const [, index, value] = query;
			a[index] = value;
		} else if (query[0] === 1) {
			// Count pairs where a[i] + b[j] = x
			const targetSum = query[1];
			results.push(countPairs(targetSum));
		}
	}

	return results;
}
