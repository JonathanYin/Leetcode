// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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
