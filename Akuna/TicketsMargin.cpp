#include <vector>
#include <algorithm>
#include <unordered_map>

auto ticketsMargin(int initialPrice, const std::vector<Order> &orders, const std::vector<PriceUpdate> &feed) {
    std::vector<std::pair<int, bool>> timeline;
    
    std::unordered_map<int, int> eventMargins;
    std::unordered_map<int, int> eventPrices;
    
    for (const auto &order : orders) {
        timeline.emplace_back(order.timestamp, false);
    }
    
    for (const auto &update : feed) {
        timeline.emplace_back(update.timestamp, true);
    }
    
    std::sort(timeline.begin(), timeline.end());
    
    size_t orderIndex = 0, updateIndex = 0;
    
    for (const auto &[timestamp, isUpdate] : timeline) {
        if (isUpdate) {
            const auto &update = feed[updateIndex++];
            if (eventPrices.find(update.eventId) == eventPrices.end()) {
                eventPrices[update.eventId] = initialPrice;
            }
            eventPrices[update.eventId] = std::max(1, eventPrices[update.eventId] + update.delta);
        }
        else {
            const auto &order = orders[orderIndex++];
            int currentPrice = eventPrices.find(order.eventId) != eventPrices.end() ? 
                               eventPrices[order.eventId] : initialPrice;
            int amount = order.quantity * currentPrice;
            
            if (order.buy) {
                eventMargins[order.eventId] -= amount;
            }
            else {
                eventMargins[order.eventId] += amount;
            }
        }
    }
    
    std::vector<std::pair<int, int>> result;
    for (const auto &[eventId, margin] : eventMargins) {
        result.emplace_back(eventId, margin);
    }
    
    return result;
}