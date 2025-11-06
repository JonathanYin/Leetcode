function solution(queries) {
	const built = new Set(); // positions already built
	const boundary = new Map(); // boundary point -> length of that block
	const ans = [];
	let maxLen = 0;

	for (const x of queries) {
		if (built.has(x)) {
			// uniqueness guaranteed, but safe-guard
			ans.push(maxLen);
			continue;
		}
		built.add(x);

		const left = boundary.get(x - 1) || 0; // length of block ending at x-1
		const right = boundary.get(x + 1) || 0; // length of block starting at x+1
		const total = left + 1 + right;

		const start = x - left; // new block's start boundary
		const end = x + right; // new block's end boundary

		// Update only the new boundaries with the merged length
		boundary.set(start, total);
		boundary.set(end, total);

		maxLen = Math.max(maxLen, total);
		ans.push(maxLen);
	}

	return ans;
}
