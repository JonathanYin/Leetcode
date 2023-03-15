/*
 * Complete the 'countDroppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY server as parameter.
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