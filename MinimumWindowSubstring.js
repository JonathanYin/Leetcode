/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(base, target) {
	let left = 0;
	// Map each char in target to its frequency
	const map = new Map();
	for (const char of target) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	// Number of unique target chars are satisfied; we are done
	// when this equals map.size (i.e. the number of unique chars in target)
	let zeroCounter = 0;
	// Start and end of current smallest window
	let k1;
	let k2;
	// Length of smallest window
	let min = Infinity;
	// Right stores the end of the sliding window, go until end of the base string
	for (let right = 0; right < base.length; right++) {
		const char = base[right];
		// If the current char is needed still
		if (map.has(char)) {
			// Decrement its needed count
			const val = map.get(char) - 1;
			map.set(char, val);
			// If we have met the required number for this char, increment zeroCounter
			if (val === 0) {
				zeroCounter++;
				// If we have met all the unique chars
				while (zeroCounter === map.size) {
					const char = base[left];
					// Start shrinking window from left
					if (map.has(char)) {
						// New required count for char
						const val = map.get(char) + 1;
						// If we now need this char, decrement unique target chars counter
						if (val === 1) {
							zeroCounter--;
							// Set new min window
							if (right - left < min) {
								min = right - left + 1;
								k1 = left;
								k2 = right;
							}
						}
						map.set(char, val);
					}
					left++;
				}
			}
		}
	}
	return base.slice(k1, k2 + 1);
}
