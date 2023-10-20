/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // use stack to keep track of open parentheses
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // push open parentheses to stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        // if we find a closing parenthesis, check if the most recent one is the corresponding open parenthesis
        else if (s[i] === ')') {
            let top = stack.pop();
            if (top !== '(') {
                return false;
            }
        }
        else if (s[i] === '}') {
            let top = stack.pop();
            if (top !== '{') {
                return false;
            }
        }
        else if (s[i] === ']') {
            let top = stack.pop();
            if (top !== '[') {
                return false;
            }
        }
    }
    // if the stack is not empty, there are unclosed parentheses
    return stack.length ? false : true;
};