/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function(n) {
    const output = [];
    /**
    * Examples 
    * n = 1
    *  ()
    *
    *  n = 2
    *  (())
    *  ()()
    *
    *  n = 3
    *  ((()))
    *  (()())
    *  (())()
    *  ()(())
    *  ()()()
    */
    const dfs = (str, open, close) => {
        // Close parentheses can not be more than open parentheses at any 
        // given time to stay valid.
        if (open > close) {
            return;
        }
        // Base case. We now have n pairs of parentheses
        if (open === 0 && close === 0) {
            output.push(str);
            return;
        }
        // Insert open parenthsis and search for the next valid insertion.
        if (open > 0) {
            dfs(`${str}(`, open - 1, close);
        }
        // Insert close parenthsis and search for the next valid insertion.
        if (close > 0) {
            dfs(`${str})`, open, close - 1);
        }
    };
    dfs('', n, n);
    return output;
};