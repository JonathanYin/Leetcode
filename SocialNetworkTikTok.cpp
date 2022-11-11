#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;
int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int T = 0;
    cin >> T;
    int max = 0;
    for (int i = 0; i < T; i++){
        // number of countries
        int m = 0;
        cin >> m;
        string s;
        vector<tuple<int, int>> t;
        for (int j = 0; j < m; j++){
            // loop for m pairs of relationships
            cin.get();
            getline(cin, s); // add pair to string s
            stringstream ss(s);
            vector<int> v;
            int hlp; 
            while (ss >> hlp){
                v.push_back(hlp);
            }
            t.push_back(make_tuple(v[0], v[1])); // add tuple containing pair to t
        }
        
    }
    cout << max << endl;

    return 0;
}
