/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
	const freqMap = new Map();

	// Step 1: Count frequency of each character
	for (let char of s) {
		freqMap.set(char, (freqMap.get(char) || 0) + 1);
	}

	// Step 2: Create a max heap based on the frequency
	const maxHeap = [];
	for (let [char, freq] of freqMap.entries()) {
		maxHeap.push({ char, freq });
	}
	maxHeap.sort((a, b) => b.freq - a.freq);

	// Step 3: Reorganize the string
	let result = [];
	let prev = { char: null, freq: 0 }; // Store previous character and its frequency

	while (maxHeap.length > 0) {
		let current = maxHeap.shift(); // Get the most frequent character

		// Add the previous character back to the heap if it has remaining frequency
		if (prev.freq > 0) {
			maxHeap.push(prev);
			maxHeap.sort((a, b) => b.freq - a.freq);
		}

		// Append current character to the result and update its frequency
		result.push(current.char);
		current.freq -= 1;

		// Update previous character to current for the next iteration
		prev = current;
	}

	// Step 4: If the result length matches the input length, return it
	const resStr = result.join("");
	return resStr.length === s.length ? resStr : "";
};
