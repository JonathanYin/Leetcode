/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function (strength) {
	// modulo 10^9 + 7 to prevent overflow
	const MOD = BigInt(1_000_000_007);
	const N = strength.length;

	// initialize arrays with BigInts
	let prefix = Array.from({ length: N + 1 }, () => BigInt(0));
	let prefixSum = Array.from({ length: N + 2 }, () => BigInt(0));
	strength = strength.map(BigInt);

	// prefix sum array stores the sum of all elements up to ith wizard
	for (let i = 0; i < N; ++i) {
		prefix[i + 1] = (prefix[i] + strength[i]) % MOD;
	}
	// prefix sum of prefix sum array
	for (let i = 0; i <= N; ++i) {
		prefixSum[i + 1] = (prefixSum[i] + prefix[i]) % MOD;
	}

	// store the index of the next smaller element to the left
	let left = new Array(N).fill(-1);
	let stack = [];
	for (let i = 0; i < N; ++i) {
		// we want our stack to maintain decreasing order
		// if the element at the top of the stack is greater than or equal to the current element, pop the stack
		while (stack.length && strength[stack[stack.length - 1]] >= strength[i]) {
			stack.pop();
		}
		// if the stack is empty, there is no smaller element to the left
		left[i] = stack.length ? stack[stack.length - 1] : -1;
		stack.push(i);
	}

	// Next smaller element to the right
	let right = new Array(N).fill(N);
	stack = [];
	for (let i = N - 1; i >= 0; --i) {
		while (stack.length && strength[stack[stack.length - 1]] > strength[i]) {
			stack.pop();
		}
		right[i] = stack.length ? stack[stack.length - 1] : N;
		stack.push(i);
	}

	// Calculate the result
	let result = BigInt(0);
	for (let i = 0; i < N; ++i) {
		let sumLeft = (prefixSum[i + 1] - prefixSum[left[i] + 1] + MOD) % MOD;
		let sumRight = (prefixSum[right[i] + 1] - prefixSum[i + 1] + MOD) % MOD;
		result = (result + ((((sumRight * BigInt(i - left[i])) % MOD) - ((sumLeft * BigInt(right[i] - i)) % MOD) + MOD) % MOD) * strength[i]) % MOD;
	}

	return Number(result);
};
