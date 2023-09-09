/*
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
*/
const minMeetingRooms = (meetings) => {
    let start = meetings.sort((a, b) => a[0] - b[0]);
    let end = [...meetings].sort((a, b) => a[1] - b[1]);
    let rooms = 0;

    // init two pointers
    let j = 0;

    // loop through meetings in order
    for (let i = 0; i < meetings.length; i++) {
        // if the start time is less than the end time of the previous meeting, we need a new room
        if (start[i][0] < end[j][1]) {
            rooms++;
        }
        // else, use the same room and move the end pointer
        else {
            j++;
        }
    }
    return rooms;
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2