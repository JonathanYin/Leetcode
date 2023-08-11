import sys
import math

# Data classes


class AddOrder():
    def __init__(self, orderId, artist, price, quantity):
        self.orderId = int(orderId)
        self.artist = str(artist)
        self.price = float(price)
        self.quantity = float(quantity)


class ModifyOrder():
    def __init__(self, orderId, artist, price, quantity):
        self.orderId = int(orderId)
        self.artist = str(artist)
        self.price = float(price)
        self.quantity = float(quantity)


class DeleteOrder():
    def __init__(self, orderId, artist):
        self.orderId = int(orderId)
        self.artist = str(artist)


class DeletePriceLevel():
    def __init__(self, artist, price):
        self.artist = str(artist)
        self.price = int(price)

# TODO(candidate): implementation below


class PriceLadder():
    def __init__(self):
        pass

    def AddOrder(self, order):
        # TODO(candidate): implement
        pass

    def DeleteOrder(self, delete):
        # TODO(candidate): implement
        pass

    def DeletePriceLevel(self, deletePriceLevel):
        # TODO(candidate): implement
        pass

    def GetPriceLevels(self, artist, numberOfPriceLevels):
        # TODO(candidate): implement
        pass


priceLadder = PriceLadder()
for line in sys.stdin:
    tokens = line.split()
    if tokens[0] == "ADD":
        priceLadder.AddOrder(AddOrder(*tokens[1:]))
    elif tokens[0] == "DEL":
        priceLadder.DeleteOrder(DeleteOrder(*tokens[1:]))
    elif tokens[0] == "DEL_PRICE":
        priceLadder.DeletePriceLevel(DeletePriceLevel(*tokens[1:]))
    else:
        artist = tokens[0]
        numberOfPriceLevels = int(tokens[1])
        priceLadder.GetPriceLevels(artist, numberOfPriceLevels)
