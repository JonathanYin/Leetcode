#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'numWays' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING_ARRAY words
#  2. STRING target
#

def numWays(words, target):
    # Write your code here
    mod = 10**9 + 7
    # Create a list of dictionaries to store the count of each character at each index
    char_count_at_index = [{} for _ in range(len(words[0]))]
    
    # Populate the list with character counts for each index
    for word in words:
        for i, c in enumerate(word):
            char_count_at_index[i][c] = char_count_at_index[i].get(c, 0) + 1
    
    # Initialize a 2D array for dynamic programming
    dp = [[0] * (len(target) + 1) for _ in range(len(words[0]) + 1)]
    
    # Set the base cases
    for i in range(len(words[0]) + 1):
        dp[i][0] = 1
    
    # Fill in the DP table
    for i in range(1, len(words[0]) + 1):
        for j in range(1, min(i+1, len(target) + 1)):
            # If the character is not found at the current index, the count remains the same as the previous index
            if target[j-1] not in char_count_at_index[i-1]:
                dp[i][j] = dp[i-1][j]
            else:
                # The count is the sum of the previous index without including the current character
                # and the previous index for the previous character times the count of the target character at the current index
                dp[i][j] = (dp[i-1][j] + dp[i-1][j-1] * char_count_at_index[i-1][target[j-1]]) % mod
    
    # The answer is in the last cell
    return dp[len(words[0])][len(target)]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    words_count = int(input().strip())

    words = []

    for _ in range(words_count):
        words_item = input()
        words.append(words_item)

    target = input()

    result = numWays(words, target)

    fptr.write(str(result) + '\n')

    fptr.close()
