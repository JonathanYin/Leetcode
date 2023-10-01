/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // split the string into array of words, filter out empty strings, reverse array, and join back into string with spaces
    return s.split(' ').filter((s) => s.length > 0).reverse().join(' ');
};
