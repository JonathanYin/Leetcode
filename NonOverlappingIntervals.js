var eraseOverlapIntervals = function(intervals) {
    // sort intervals by end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    // keep track of previous interval
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        // if the start time of the current interval is less than the end time of the previous interval, we need to remove an interval
        if (intervals[i][0] < prev[1]) {
            count++;
        }
        // else, update the previous interval
        else {
            prev = intervals[i];
        }
    }
    return count;
}