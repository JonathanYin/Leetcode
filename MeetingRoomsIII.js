/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    // initially, all rooms are available and meeting count for each room is 0
    let rooms_meetings_counter = new Array(n).fill(0);
    let available_rooms = new Array(n).fill(-1);

    // sort meetings by start time
    meetings.sort((a, b) => a[0] - b[0]);

    // loop through each meeting in order
    for (let i = 0; i < meetings.length; i++) {
        // set start to be the start time for the current meeting 
        let start = meetings[i][0];
        // set end to be the end time for the current meeting
        let end = meetings[i][1];

        // keep track of the room with smallest index that is available
        let earliestRoom = -1;
        let earliestTime = Number.MAX_SAFE_INTEGER;
        let roomFound = false;

        // loop through each room
        for (let i = 0; i < n; i++) {
            // if the room is available, book it and increment the meeting count for that room
            if (available_rooms[i] <= start) {
                available_rooms[i] = end;
                rooms_meetings_counter[i]++;
                roomFound = true;
                break;
            }
            if (available_rooms[i] < earliestTime) {
                earliestTime = available_rooms[i];
                earliestRoom = i;
            }
        }

        if (!roomFound) {
            rooms_meetings_counter[earliestRoom]++;
            available_rooms[earliestRoom]+= (end - start);
        }
    }

    let max = 0;
    let maxi = -1;
    // loop through rooms
    for (let i = 0; i < n; i++) {
        // if the room we are on has more meetings than the current max, update the max
        if(rooms_meetings_counter[i]>max){
            max = rooms_meetings_counter[i];
            maxi=i;
        }
    }

    // return the index of the room with the most meetings
    return maxi;
};