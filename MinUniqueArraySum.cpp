#include <vector>
#include <algorithm>

using namespace std;

int getMinimumUniqueSum(vector<int> arr) {
    sort(arr.begin(), arr.end());
    int size = arr.size();
    int sum = arr[0];
    int prev = arr[0];
        
    for (int i = 1; i < size; i++){
        int curr = arr[i];
        if (prev >= curr){
            curr = prev + 1;
        }
        sum += curr;
        prev = curr;
    }
    return sum;
}


