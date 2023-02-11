// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Given a string S of uppercase alphabetical letters. One 'removal' consists of removing six letters
* from the string S, with the letters being that of the word 'BANANA'. One removal must consist of 
* removing these six letters exactly. Return the maximum number of removals that can be applied to S. 
* i.e. S = "ABNNAXXA", after one removal = "XX", result = 1
*/
function solution(S) {
    // keep track of the number of each occurrence of the letters, 'A', 'B', and 'N'
    let count_A = 0;
    let count_B = 0;
    let count_N = 0;

    // loop through each character of the input string S
    for (let i = 0; i < S.length; i++) {
        // if the current character is one of 'A', 'B', or 'N', increment its count
        if(S[i] == 'A'){
            count_A++;
        }
        else if(S[i] == 'B'){
            count_B++;
        }
        else if(S[i] == 'N'){
            count_N++;
        }
    }
    /* Since we need exactly 3 'A's, 1 'B', and 2 'N's in order to remove one instance of 
    'BANANA', we first take the floor of the counts of 'A' and 'N' in order to find the maximum
    number of times their occurrences can be removed. For example, 10 'A's would be rounded down
    to 3 removals, and so would 11 'A's. We then take the minimum of the three characters' set
    occurrences, since the maximum number of removals we can make is limited by it.
    */
    return Math.min(Math.floor(b / 1), Math.floor(a / 3), Math.floor(n / 2));
}
