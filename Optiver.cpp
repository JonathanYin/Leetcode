#include <vector>

using namespace std;

int DaysInMonth(int month, int year);
// Do not edit above this line. It is only shown so you can see the function signature.
/*
 * Complete the function below.
 */
int DaysBetween(int year1, int month1, int day1, int year2, int month2, int day2) {
    vector<int> monthDays = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int totalDays1 = day1 + year1 * 365;
    for (int i = 0; i < month1 - 1; i++){
        totalDays1 += monthDays[i];
    }
    
    int totalDays2 = day2 + year2 * 365;
    for (int i = 0; i < month2 - 1; i++){
        totalDays2 += monthDays[i];
    }
    
    return totalDays2 - totalDays1;

}

