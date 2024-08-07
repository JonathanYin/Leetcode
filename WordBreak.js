/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	// convert dictionary of strings to set for fast lookup
	let set = new Set(wordDict);

	// dp array representing whether each substring of s is able to be generated by the dictionary
	let dp = new Array(s.length + 1).fill(false);
	// empty string is always true
	dp[0] = true;

	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && set.has(s.substring(j, i))) {
				dp[i] = true;
				break;
			}
		}
	}

	return dp[s.length];
};
