#include <array>
#include <string>
#include <vector>
#include <limits>
#include <algorithm>

std::string spellWithPingPongBalls(const std::array<Point, 26> &board, const std::vector<Point> &hits) {
    std::string score;
    score.reserve(hits.size());

    for (const auto& hit : hits) {
        double minDistance = std::numeric_limits<double>::max();
        char closestLetter = '*';
        bool isTie = false;

        for (int i = 0; i < 26; ++i) {
            double currentDistance = distance(hit, board[i]);
            
            if (std::abs(currentDistance - minDistance) < 1e-9) {
                isTie = true;
            } else if (currentDistance < minDistance) {
                minDistance = currentDistance;
                closestLetter = static_cast<char>('A' + i);
                isTie = false;
            }
        }

        score += isTie ? '*' : closestLetter;
    }

    return score;
}