/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let max = 0;
	let start = 0;

	// helper function to find the length of a palindrome given the left and right indices
	const expand = (left, right) => {
		// while pointers are positioned correctly and the characters are the same, expand the window
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		return right - left - 1;
	};

	// loop through the string
	for (let i = 0; i < s.length; i++) {
		// find the length of the palindrome centered at i (can have one or two characters at center)
		let len = Math.max(expand(i, i), expand(i, i + 1));
		// if the length is greater than the current max, update the max and the start index
		if (len > max) {
			max = len;
			start = i - Math.floor((len - 1) / 2);
		}
	}
	return s.substring(start, start + max);
};
