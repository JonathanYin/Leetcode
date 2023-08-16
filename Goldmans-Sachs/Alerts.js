function numberOfAlerts(precedingMinutes, alertThreshold, numCalls) {
    let alerts = 0;
    let rollingSum = 0;
  
    // Create a queue to keep track of the calls over the past precedingMinutes
    let queue = [];
  
    for (let i = 0; i < numCalls.length; i++) {
      // Add the current call count to the rolling sum
      rollingSum += numCalls[i];
      queue.push(numCalls[i]);
  
      // If there are enough preceding minutes, calculate the average and check against the threshold
      if (i >= precedingMinutes - 1) {
        let avgCalls = rollingSum / precedingMinutes;
        if (avgCalls > alertThreshold) {
          alerts++;
        }
  
        // Subtract the earliest call count from the rolling sum and remove it from the queue
        rollingSum -= queue.shift();
      }
    }
  
    return alerts;
  }
  
  // Sample test
  const precedingMinutes = 3;
  const alertThreshold = 10;
  const numCalls = [0, 11, 10, 10, 7];
  console.log(numberOfAlerts(precedingMinutes, alertThreshold, numCalls)); // Output: 1
  