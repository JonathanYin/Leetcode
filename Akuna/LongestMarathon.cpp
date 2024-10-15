#include <vector>
#include <unordered_map>
#include <algorithm>

int longestMarathon(const std::vector<int> &runtimes) {
    // Create a frequency map to count occurrences of each runtime
    std::unordered_map<int, int> count;
    for (int runtime : runtimes) {
        count[runtime]++;
    }

    // Create a sorted vector of unique runtimes
    std::vector<int> unique_runtimes;
    for (const auto &pair : count) {
        unique_runtimes.push_back(pair.first);
    }
    std::sort(unique_runtimes.begin(), unique_runtimes.end());

    // This will hold the maximum lengths of marathons we can have
    std::unordered_map<int, int> dp;
    int max_length = 0;

    // Iterate over unique runtimes
    for (int runtime : unique_runtimes) {
        // If we take this movie, we can extend from previously seen lengths
        if (dp.find(runtime - 1) != dp.end()) {
            dp[runtime] = dp[runtime - 1] + count[runtime];
        } else {
            dp[runtime] = count[runtime]; // We can start a new marathon with this movie
        }
        
        // Keep track of the maximum length found
        max_length = std::max(max_length, dp[runtime]);
    }

    return max_length;
}