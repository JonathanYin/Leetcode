/*
 * Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
*/

const canAttendAllMeetings = (meetings) => {
    meetings.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i][0] < meetings[i - 1][1]) {
            return false;
        }
    }
    return true;
}