/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // 2d array representing the longest common subsequence between the first i characters of text1 and the first j characters of text2
    let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // if the characters match, set current max to the max of the previous characters + 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                // if the characters don't match, take the max of the two previous subsequences
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[text1.length][text2.length];
};