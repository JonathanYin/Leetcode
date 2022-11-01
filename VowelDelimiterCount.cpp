#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

vector<int> hasVowels(vector<string> strArr, vector<string> query) {
    vector<int> output;
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    string delim = "-";
    
    for (int i = 0; i < query.size(); i++){
        // loop through each query
        string q = query[i];
        int start = 0;
        size_t end;
        string token;
        
        vector<int> indices;
        // contains indices of each query
        while ((end = q.find(delim, start)) != string::npos){
            token = q.substr(start, end - start);
            start = end + delim.length();
            indices.push_back(stoi(token));
        }
        indices.push_back(stoi(q.substr(start)));
        
        int count = 0;
        
        int index1 = indices[0] - 1;
        int index2 = indices[1] - 1;

        for (int j = index1; j <= index2; j++){
            // loop through strings from strArr using indices
            string str = strArr[j];
            char s1 = str[0];
            char s2 = str[str.length() - 1];

            if (vowels.count(s1) > 0 && vowels.count(s2) > 0){
                // if both first and last char are vowels, increment count
                count ++;
            }
        }
        
        output.push_back(count);
    }
    
    return output;
}