/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	// map possible letter combinations for each digit
	let map = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};

	if (digits.length == 0) return [];

	// array to store possible strings
	let arr = [];

	const backtrack = (str, index) => {
		// if we are at max length, push current string (no more letters to add)
		if (str.length == digits.length) {
			arr.push(str);
			return;
		}

		// get possible letter combinations for current digit
		let letters = map[digits[index]];

		// loop through each possible letter, and add it to the current string
		for (letter of letters) {
			backtrack(str + letter, index + 1);
		}
	};

	backtrack("", 0);

	return arr;
};
