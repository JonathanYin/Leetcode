/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	// map character counts to anagrams
	let map = new Map();

	for (str of strs) {
		// array to count occurrences of each char in string
		let count = new Array(26).fill(0);

		for (let i = 0; i < str.length; i++) {
			// increment count of character using ASCII value
			let c = str.charCodeAt(i) - 97;
			count[c]++;
		}

		// join character counts with delimeter
		let key = count.join("#");

		// store strings as values in array
		if (!map.has(key)) {
			map.set(key, []);
		}

		map.get(key).push(str);
	}

	return Array.from(map.values());
};
