// #include "PriceDivergenceMonitor.h"
// #include <cmath>
  
PriceDivergenceMonitor::PriceDivergenceMonitor(int threshold) : threshold(threshold) {}
  
void PriceDivergenceMonitor::RegisterPair(const std::string& stockOne, const std::string& stockTwo) {
  pairs[stockOne].insert(stockTwo);
  pairs[stockTwo].insert(stockOne);
}

void PriceDivergenceMonitor::UpdatePrice(const std::string& stockName, int newPrice) {
  prices[stockName] = newPrice;

  if (pairs.find(stockName) != pairs.end()) {
    for (const auto& pairedStock : pairs[stockName]) {
      if (prices.find(pairedStock) != prices.end()) {
        int priceDifference = std::abs(newPrice - prices[pairedStock]);
        if (priceDifference > threshold) {
          ReportDivergence(stockName, newPrice, pairedStock, prices[pairedStock]);
        }
      }
    }
  }
}