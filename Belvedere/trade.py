import sys


class Trade():
    def __init__(self, trader, asset, quantity, price):
        self.Trader = trader
        self.Asset = asset
        self.Quantity = quantity
        self.Price = price


class TheoUpdate():
    def __init__(self, asset, value):
        self.Asset = asset
        self.Value = value


def ParseTrade(line):
    args = line.split(" ")
    # args[0] is "Trade"
    return Trade(str(args[1]), int(args[2]), int(args[3]), float(args[4]))


def ParseTheoUpdate(line):
    args = line.split(" ")
    # args[0] is "TheoUpdate"
    return TheoUpdate(int(args[1]), float(args[2]))


def PrintTraderScore(traderName, score):
    print(traderName, "{:.2f}".format(score))


class TradeAggregator():
    def __init__(self):
        self.theo_values = {}
        self.trader_scores = {}

    def HandleTrade(self, trade):
        if trade.Asset not in self.theo_values:
            self.theo_values[trade.Asset] = trade.Price
            edge = 0
        else:
            if trade.Quantity > 0:
                edge = self.theo_values[trade.Asset] - trade.Price
            else:
                edge = trade.Price - self.theo_values[trade.Asset]
        score = (edge ** 2) * abs(trade.Quantity) * (1 if edge > 0 else -1)
        if trade.Trader not in self.trader_scores:
            self.trader_scores[trade.Trader] = 0
        self.trader_scores[trade.Trader] += score

    def HandleTheoUpdate(self, theoUpdate):
        self.theo_values[theoUpdate.Asset] = theoUpdate.Value

    def PrintBestScore(self):
        best_traders = sorted(self.trader_scores.items(),
                              key=lambda x: (-x[-1], x[0]))
        best_trader, best_score = best_traders[0]
        PrintTraderScore(best_trader, best_score)


tradeAgg = TradeAggregator()
for line in sys.stdin:
    if line.find("Trade") != -1:
        trade = ParseTrade(line)
        tradeAgg.HandleTrade(trade)
        tradeAgg.PrintBestScore()
    else:
        theoUpdate = ParseTheoUpdate(line)
        tradeAgg.HandleTheoUpdate(theoUpdate)
