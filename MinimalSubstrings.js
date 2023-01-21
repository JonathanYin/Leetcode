// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Write a function, that given an input string S consisting of lowercase letters of the English alphabet, 
* splits the string into a minimal number of substrings in such a way that no letter occurs more than once in each substring,
* and returns the minimum number of substrings into which the substring has to be split. 
*
* i.e. string "abacdec"
* a valid solution would be ["ab", "acd", "ec"]
*/

function solution(S) {
    // Implement your solution here
    let set = new Set();
    // keep track of chars in the previous substring
    let substrings = [];
    // store substrings
    let curr = "";
    // store current substring
    
    for (let i = 0; i < S.length; i++) {
        if (!set.has(S[i])) {
            // if the set does not contain this char, add it
            set.add(S[i])
            // add char to current substring
            curr += S[i];
        }
        else {
            // else, the set contains this char, meaning it is used in the previous substring, and we must add the current substring to the array
            substrings.push(curr);
            // reset chars stored in set
            set.clear();
            // add current char, and set curr substring
            set.add(S[i]);
            curr = S[i];
        }
    }
    substrings.push(curr);
    // return the number of substrings
    return substrings.length;
}