#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'calculateWays' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER wordLen
#  2. INTEGER maxVowels
#
import itertools

def calculateWays(wordLen, maxVowels):
    MOD = 10**9 + 7
    vowels = 5
    consonants = 21
    
    # dp[i][j] will be the number of ways to construct a word of length i
    # with exactly j consecutive vowels at the end
    dp = [[0] * (maxVowels + 1) for _ in range(wordLen + 1)]
    
    # Initialize base case: a word of length 0 can be formed in 1 way
    dp[0][0] = 1
    
    # Compute the number of ways to form words of each length
    for i in range(1, wordLen + 1):
        # Case for ending with a consonant: sum all the ways of previous length
        for j in range(maxVowels + 1):
            dp[i][0] += dp[i - 1][j] * consonants
            dp[i][0] %= MOD
        
        # Case for ending with a vowel: can only come from a word ending with a vowel or starting fresh
        for j in range(1, maxVowels + 1):
            dp[i][j] = dp[i - 1][j - 1] * vowels % MOD
    
    # Sum up all the ways to form words of length wordLen with up to maxVowels vowels at the end
    total_ways = sum(dp[wordLen]) % MOD
    return total_ways
                
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    wordLen = int(input().strip())

    maxVowels = int(input().strip())

    result = calculateWays(wordLen, maxVowels)

    fptr.write(str(result) + '\n')

    fptr.close()
