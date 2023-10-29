/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // if n is negative, we can invert x and make n positive
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    let curr = x;

    // loop using binary exponentiation
    while (n > 0) {
        // if we have an odd power, multiply result by curr 
        if (n % 2 == 1) {
            result *= curr;
        }
        curr = curr * curr;
        n = Math.floor(n / 2);
    }

    return result;
};