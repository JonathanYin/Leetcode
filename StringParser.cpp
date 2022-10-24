#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

int main() {
    // parse string by delimiter
    string text = "Sphinx of black quartz, judge my vow.";
    string delim = " ";
    vector<string> words;

    int start = 0;
    size_t end;
    string token;
    vector<string> out;

    while ((end = text.find(delim, start)) != string::npos) {
        // set end = index of delimiter, check if not equal to end of string
        token = text.substr(start, end - start);
        // set token to string before delimiter
        start = end + delim.length();
        // set start to new position
        out.push_back(token);
        // add string to vector
    }

    out.push_back(text.substr(start));
    // add final string
    
    for (int i = 0; i < out.size(); i++) {
        cout << out[i] << " ";
    }
    cout << endl;

    // find all indices of substring within string
    string s1 = "an apple applied for an appointment";
    string s2 = "app";
    vector<int> positions; 
    // vector to store positions at which the substr s2 is found within s1
    size_t startPos = 0;

    while ((startPos = s1.find(s2, startPos)) != string::npos) {
        // while not at end of string
        positions.push_back(startPos);
        startPos ++;
    }

    for (int i = 0; i < positions.size(); i++) {
        // print indices at which substr s2 occurs
        cout << positions[i] << endl;
    }

    // stringstream testing
    string s = "+50years";
    stringstream ss(s);
    
    char mathOperator;
    int value;
    string timeUnit;
    ss >> mathOperator >> value >> timeUnit;
    cout << mathOperator<< " " << value << " " << timeUnit << endl;

    stringstream ns;
    ns << 5;
    ns << "hi";

    int n;
    string str;

    ns >> n >> str;
    // extracts int and string from stringstream ns
    cout << n << " " << str << endl;
    return 0;
}