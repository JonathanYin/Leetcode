#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

int solution(vector<string> input) {
  // Please write your code here.
  unordered_set<string> set;
  for (string i : input){
    string s;
    for (char c : i){
      if (c == '@' || c == '+'){
        break;
      }
      // ignore characters following '+' or '@' char
      if (c == '.') {
        continue;
      }
      s += c;
      }
      s += i.substr(i.find('@'));
      set.insert(s);
  }

  unordered_set<string> output; 
  // unordered set with case insensitive emails
  for (auto i : set){
    string s;
    for (int j = 0; j < i.length(); j++){
      s += tolower(i[j]);
      // convert char to lowercase
    }
    output.insert(s);
  } 
  return output.size();
}
