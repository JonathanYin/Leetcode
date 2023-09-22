/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    // initialize hashmap to store remainders and their counts
    let map = new Map();
    for (let i = 0; i < time.length; i++) {
        let remainder = time[i] % 60;
        // set complement to the amount needed to sum up to 60
        let complement = (60 - remainder) % 60;
        // if the complement exists in the map, add the number of times it appears to the count
        if (map.has(complement)) {
            count += map.get(complement);
        }
        // add the remainder to the map, or increment its count
        map.set(remainder, map.get(remainder) + 1 || 1);
    }
    return count;
};