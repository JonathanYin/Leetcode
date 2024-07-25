/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const result = [];
	const backtrack = (current, open, close) => {
		if (current.length === 2 * n) {
			result.push(current);
			return;
		}
		if (open < n) {
			backtrack(current + "(", open + 1, close);
		}
		if (close < open) {
			backtrack(current + ")", open, close + 1);
		}
	};

	backtrack("", 0, 0);
	return result;
};
