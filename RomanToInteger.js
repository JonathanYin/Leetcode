/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    // use two pointers to keep track of the current and previous values
    let prev = 0;
    let curr = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                curr = 1;
                break;
            case 'V':
                curr = 5;
                break;
            case 'X':
                curr = 10;
                break;
            case 'L':
                curr = 50;
                break;
            case 'C':
                curr = 100;
                break;
            case 'D':
                curr = 500;
                break;
            case 'M':
                curr = 1000;
                break;
        }
        sum += curr;
        // if the current value is greater than the previous value, subtract the previous value twice (to account for instsances like IV, IX, etc.)
        if (curr > prev) {
            sum -= 2 * prev;
        }
        // set new previous
        prev = curr;
    }
    return sum;
};