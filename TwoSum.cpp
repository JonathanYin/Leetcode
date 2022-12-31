#include <vector>
#include <unordered_map>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        unordered_map<int, int> map;
        vector<int> output;

        for (int i = 0; i < n; i++){
            int needed = target - nums[i];
            // set needed to equal the value needed to achieve target

            if (map.count(needed) > 0){
                // if hashmap contains the value needed
                output.push_back(map[needed]);
                output.push_back(i);
                // add the indices to the output vector
                return output;
            }
            map[nums[i]] = i;
            // add key value pair to hashmap
        }
    return output;
}

int main () {
    vector<int> test{2, 7, 11, 15};
    int t = 9;

    vector<int> out = twoSum(test, t);
    for (int i = 0; i < out.size(); i++){
        cout << out[i] << endl;
    }
}
