/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // create a hash map to map character counts to anagrams
    let res = {};

    for (let str of strs) {
        // create a count array to store the number of each letter in the string
        let count = new Array(26).fill(0);

        // increment the count of each letter in the string
        for (let char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        // join the count array with a delimiter to create a key for the hash map
        let key = count.join("#");
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(str);
    }
    // return the values of the hash map object
    return Object.values(res);
};