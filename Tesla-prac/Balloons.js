/*
* Given an input string text, return the maximum number of times
* the letters from the word "balloon" can be removed from the string.
*/

function maximumNumberOfBalloons(text) {
    // init array filled with '0', to represent occurrences of each alphabetical letter
    let list = Array(26).fill(0);
    
    for (let i = 0; i < text.length; i++){
        let val = text.charCodeAt(i) - 97;
        list[val]++;
    }
    
    return Math.min(list[0], list[1], Math.floor(list[11] / 2), Math.floor(list[14] / 2), list[13]);
}