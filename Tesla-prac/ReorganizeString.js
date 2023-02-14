/**
* @param {string} s
* @return {string}
*/

/*
* Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
*/

var reorganizeString = function(s) {
    // create a hashmap for counting the frequency of each character in the input string
    const map = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 97]++;
    }
    
    // initialize the maximum frequency character in the string
    let maxCount = 0;
    let maxChar = 0;
    for (let i = 0; i < map.length; i++) {
        if (map[i] > maxCount) {
            maxCount = map[i];
            maxChar = i;
        }
    }
    
    if (maxCount > Math.floor((s.length + 1) / 2)) {
        // if the maximum frequency is greater than half of the length of the string + 1, then it is impossible to create a rearrangement
        return "";
    }
    
    // create array to store characters
    const result = new Array(s.length);
    
    // add alternating occurrences of the maximum frequency character to the output array
    let index = 0;
    while (map[maxChar] > 0) {
        result[index] = String.fromCharCode(maxChar + 97);
        index += 2;
        map[maxChar]--;
    }
    
    // loop through the map, and add the remaining characters to the output array
    for (let i = 0; i < map.length; i++) {
        while (map[i] > 0) {
            if (index >= s.length) {
                // if we move past the length of the array, go back to the beginning to continue filling out characters
                index = 1;
            }
            result[index] = String.fromCharCode(i + 97);
            index += 2;
            map[i]--;
        }
    }
    
    // return chars of result array as a string
    return result.join("");
};
