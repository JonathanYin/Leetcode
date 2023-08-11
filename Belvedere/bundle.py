import sys


class Bundle:
    def __init__(self, name, price, components):
        self.name = name
        self.price = price
        self.components = components


class Stock:
    def __init__(self, name, price):
        self.name = name
        self.price = price


def PrintTrade(name, bundleOrStock, price):
    p = "{:.2f}".format(price)
    print("{} E {} {}".format(name, bundleOrStock, p))


def PrintNoTrade(name):
    print("{} P".format(name))


class MarketWatchPortfolio:
    def __init__(self, bundles, stocks):
        self.bundles = bundles
        self.stocks = stocks

    def get_bundle_price(self, bundle):
        total_price = 0.0
        for quantity, component in bundle.components:
            if component in self.stocks:
                total_price += self.stocks[component].price * quantity
            elif component in self.bundles:
                total_price += self.get_bundle_price(
                    self.bundles[component]) * quantity
            else:
                return float('inf')
        return total_price

    def ExecuteTrades(self):
        for bundle_name, bundle in self.bundles.items():
            individual_price = self.get_bundle_price(bundle)

            # if individual stocks price is cheaper than the bundle
            if individual_price < bundle.price:
                PrintTrade(bundle.name, "I", individual_price)
            # if the bundle price is cheaper or the same as individual stocks
            elif individual_price >= bundle.price and individual_price != float('inf'):
                PrintTrade(bundle.name, "B", bundle.price)
            else:
                # if it's not possible to buy all the stocks in the bundle
                PrintNoTrade(bundle.name)


def ParseInputs():
    bundles = dict()
    stocks = dict()
    num_stocks = -1
    num_bundles = -1
    for line in sys.stdin:
        parsed = line.strip().split(' ')
        if num_bundles == -1 and num_stocks == -1:
            num_bundles = int(parsed[0])
            num_stocks = int(parsed[1])
            continue
        if num_bundles > 0:
            components = list()
            for i in range(3, len(parsed) - 1, 2):
                components.append((int(parsed[i + 1]), parsed[i]))
            b = Bundle(parsed[0], float(parsed[1]), components)
            bundles[b.name] = b
            num_bundles -= 1
            continue
        s = Stock(parsed[0], float(parsed[1]))
        stocks[parsed[0]] = s
    return MarketWatchPortfolio(bundles, stocks)


def main():
    portfolio = ParseInputs()
    portfolio.ExecuteTrades()


if __name__ == '__main__':
    main()
