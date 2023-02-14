/**
 * @param {string} s
 * @return {number}
 */

/* 
* Given a string S consisting of only the characters '0' and '1', a string is considered
* alternating if no two consecutive characters are the same. You can change a '0' to a '1'
* or vice versa in one operation. Return the minimum number of operations needed to make
* s an alternating string. 
*/

 var minOperations = function(s) {
    /* There are two forms for any alternating string: those that start with '1', and have '1' digits in even positions
    * or those that start with '0', and have '0' digits in even positions. Initialize two counts to keep track of the 
    * number of operations needed to create each form, and take the minimum of the two at the end. 
    */ 
    let count_one = 0;
    let count_zero = 0;
    
    for (let i = 0; i < s.length; i++) {
        // for strings that start with '1'
        if (i % 2 == 0 &&  s[i] !== '1') {
            // if even-positioned char is not 1, it must be changed
            count_one++;
        }
        else if (i % 2 == 1 && s[i] !== '0') {
            // if odd-positioned char is not 0, it must be changed
            count_one++;
        }
        
        // for strings that start with '0'
        else if (i % 2 === 0 && s[i] !== '0') {
            // if even-positioned char is not 0, it must be changed
            count_zero++;
        }
        else if (i % 2 === 1 && s[i] !== '1') {
            // if odd-positioned char is not 1, it must be changed
            count_zero++;
        }
    }
    // return the minimum of the two operations 
    return Math.min(count_one, count_zero);
};