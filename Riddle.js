// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Write a function, that given an input string riddle, containing an arbitrary number of "?",
* return a copy of the string with all instances of "?" replaced with lowercase letters
* in such a way that the same letters do not occur next to each other.
*
* i.e. riddle "ab?ac?"
* a valid solution would be "abcaca"
*/

function solution(riddle) {
    // Implement your solution here
    let result = "";
    // store result string
    let previousLetter = "";
    // store previous letter
  
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] === "?") {
            // if a question mark is found, replace it
        let letter = "a";
        while (letter === previousLetter || (i > 0 && letter === riddle[i-1]) || (i < riddle.length - 1 && letter === riddle[i + 1])) {
            // generate a new random letter if it is the same as the previous or next letter
            letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        // add new letter to the result string
        result += letter;
        // update previousLetter
        previousLetter = letter;
        } 
        else {
            // if no question mark is found, add the char as normal and set previousLetter to the current char
            result += riddle[i];
            previousLetter = riddle[i];
        }   
    }
    return result;
}