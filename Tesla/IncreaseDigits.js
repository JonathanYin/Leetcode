// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
* Given a three-digit integer N, and an integer K, return the maximum three-digit number that can be created
* if K represents the number of (+1) operations that can be made on any given digit of N. 
* i.e. N = 521, K = 9, result = 971 (since you add to the hundred's place 4 times, and the ten's place 5 times)
*/
function solution(N, K) {
    // convert input array into string array of digits
    let str = N.toString();
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++){
        if (K <= 0){
            // if K is 0 or less, N cannot be increased further
            break;
        }
        if (arr[i] == '9'){
            // if the digit we are increasing is already 9, continue to the next one
            continue;
        }
        /* the number of increases we can make to a digit is limited by the value of K, 
        and the difference between the current digit and 9 (since 9 is the max for a digit),
        so we take the minimum of the two and add it to the current value
        */
        let needed = Math.min(K, 9 - parseInt(arr[i]))
        arr[i] = (parseInt(arr[i]) + needed).toString();
        // we then decrement the value of K by the number of increases we just made to the digit
        K-= needed;
    }

    return Math.min(parseInt(arr.join('')), 999);
}
