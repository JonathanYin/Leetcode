// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Write a function, that given an input array A of N integers, returns true if A
* contains at least two elements that differ exactly by 1, and false otherwise
*/

function solution(A) {
    // Implement your solution here
    // sort array in ascending order
    const arr = A.sort((a, b) => a - b);
    
    // loop through elements of the sorted array, two at a time
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] - arr[i] == 1) {
            // if elements differ by exactly 1, return true
            return true;
        }
    }
    // if we loop through all the elements without finding two that differ by 1, return false
    return false;
}