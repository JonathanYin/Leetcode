/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // convert string to array
    s = s.split('');
    // initialize stack to keep track of indices of open parentheses
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // add index of open parentheses to stack
        if (s[i] === '(') {
            stack.push(i);
        }
        else if (s[i] === ')') {
            // if stack has open parentheses, pop it
            if (stack.length) {
                stack.pop();
            }
            else {
                // if no open parentheses, remove current parentheses
                s[i] = '';
            }
        }
    }

    // if the stack has remaining parentheses, they are unclosed, so remove them
    for (let index of stack) {
        s[index] = '';
    }

    return s.join('');
};