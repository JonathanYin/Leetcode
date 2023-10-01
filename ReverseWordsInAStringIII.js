/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let output = [];
    for (let str of arr) {
        output.push(str.split('').reverse().join(''));
    }
    return output.join(' ');
}