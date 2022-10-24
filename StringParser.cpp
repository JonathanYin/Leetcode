#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string text = "Sphinx of black quartz, judge my vow.";
    string delim = " ";
    vector<string> words;

    int start = 0;
    int end;
    string token;
    vector<string> out;

    while ((end = text.find(delim, start)) != string::npos) {
        token = text.substr(start, end - start);
        start = end + delim.length();
        out.push_back(token);
    }
    out.push_back(text.substr(start));
    for (int i = 0; i < out.size(); i++) {
        cout << out[i] << endl;
    }

    // int pos = 0;
    // string token;
    // while ((pos = text.find(delim)) != string::npos){
    //     // words.push_back(text.substr(0, pos));
    //     // text.erase(0, pos + delim.length());
    //     token = text.substr(0, pos);
    //     words.push_back(token);
    //     text.erase(0, pos + delim.length());
    // }
    // cout << text << endl;
    // for (auto i : words){
    //     cout << i << endl;
    // }
    return 0;
}