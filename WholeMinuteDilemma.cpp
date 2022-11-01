#include <vector>
#include <algorithm>

using namespace std;

long playlist(vector<int> songs) {
    long count = 0;
    vector<int> vec(60);
    // stores remainders
    for (int i = 0; i < songs.size(); i++){
        // loop through each song length
        int rem = songs[i] % 60;
        if (rem == 0){
            count += vec[0];
        }
        else {
            count += vec[60 - rem];
        }
        vec[rem]++;
    }
    return count;
}

int main(){
    return 1;
}