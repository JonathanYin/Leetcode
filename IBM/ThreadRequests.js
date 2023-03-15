/*
 * Complete the 'countDroppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY server as parameter.
 */

/* 
 * Given: an array of integers, representing a threads being opened, or requests
 * If the integer is positive, it corresponds to the number of threads being opened.
 * Else, the integer is -1, and represents a request call.
 * If the current number of available threads is 0 when a request is made, 
 * then the thread is dropped. Else, add to the number of available threads
 * by the number of threads opened. 
 * Return: number of dropped threads
*/

function countDroppedRequests(server) {
    // Write your code here
    let numThreads = 0;
    let droppedRequests = 0;
    
    // loop through each element of server[], adding threads or subtracting for assignment/request
    for (let i = 0; i < server.length; i++){
        if (server[i] > 0) {
            // if the element is positive, we add to the number of threads
            numThreads += server[i];
        }
        else if (server[i] == -1) {
            // if the number is negative, we subtract from numThreads for the incoming request
            if (numThreads > 0) {
                numThreads --;
            }
            else {
                // if the number of threads we have is 0, the request is dropped
                droppedRequests++;
            }
        }
    }
    return droppedRequests;
}