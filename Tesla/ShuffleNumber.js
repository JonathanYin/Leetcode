// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Given an integer A, shuffle its digits such that the digits of the new representation
* consist of one digit from the front of A, followed by one digit from the back, then the 
* second digit from the front, and the second from the back, and so on until the length of
* the shuffled number is the same as that of the original. Return the shuffled number.
* i.e. A = 123456, result = 162534
*/
function solution(A) {
    // Implement your solution here
    let str = A.toString();
    // create two pointers pointing to the starting and ending digits of A
    let i = 0; 
    let j = str.length - 1;
    let output = "";

    // while the pointers do not overlap
    while (i <= j){
        // add the first digit to output string
        output+= str[i];
        // if the pointers are not pointing to the same digit, add the second digit
        if (i != j){
            output+= str[j];
        }
        // move pointers inwards
        i++;
        j--;
    }
    return parseInt(output);
}
