/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let charMap = {};

	for (let i = 0; i < s.length; i++) {
		if (charMap[s[i]] === undefined) {
			charMap[s[i]] = 1;
		} else {
			charMap[s[i]]++;
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (charMap[s[i]] === 1) {
			return i;
		}
	}

	return -1;
};
