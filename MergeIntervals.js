/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let output = [];
    for (interval of intervals) {
        let prev = output.at(-1);
        if (!output.length || prev[1] < interval[0]) {
            // (1, 3), (4, 6)
            output.push(interval);
        }
        else {
            prev[1] = Math.max(prev[1], interval[1]);
            // (1, 3), (2, 4) -> (1, 4)
        }
    }
    return output;
};