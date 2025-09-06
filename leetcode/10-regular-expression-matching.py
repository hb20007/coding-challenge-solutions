"""
Implement regular expression matching with support for '.' and '*'.
The matching should cover the entire input string (not partial).

Some examples:
is_match("aa","a") → false
is_match("aa","aa") → true
is_match("aa", "a*") → true
is_match("ab", ".*") → true
is_match("aab", "c*a*b") → true
"""


class Solution:
    def is_match(self, text, pattern):
        """
        :type text: str
        :type pattern: str
        :rtype: bool
        """

        # SOLUTION 1: RECURSION
        # Very slow
        if not pattern:
            return not text # It's a match if both are empty.

        first_match = bool(text) and pattern[0] in {text[0], '.'} # text is not empty and the first char matches

        if len(pattern) >= 2 and pattern[1] == '*': # The Kleene star is dealt with separately.
            return (self.is_match(text, pattern[2:]) # This usually runs until both text and pattern[2:] are empty. This line represents the case when there are 0 occurrences of the character with the *.
                    or first_match and self.is_match(text[1:], pattern)) # The second argument is the pattern itself. This allows us to match the same character in a pattern multiple times, as long as the one after it is a star.

        else:
            return first_match and self.is_match(text[1:], pattern[1:]) # It's trivial if no * is involved.

        # SOLUTION 2: DYNAMIC PROGRAMMING (DP), TOP-DOWN APPROACH
        memo = {} # Used to cache intermediate results

        def dp(i, j): # Because calls will only ever be made to match(text[i:], pattern[j:]), we use dp(i, j) to handle those calls instead, saving us expensive string-building operations and allowing us to cache the intermediate results.
            if (i, j) not in memo: # This is where we use DP (memoization). (i, j) might already be in the memo because of the statement "dp(i, j+2) or first_match and dp(i+1, j)" below, where we try two different calls involving dp simultaneously.
                if j == len(pattern):
                    ans = i == len(text) # If both strings have terminated simultaneously, then the answer is true for this specific character.
                else:
                    first_match = i < len(text) and pattern[j] in {text[i], '.'}
                    if j + 1 < len(pattern) and pattern[j + 1] == '*':
                        ans = dp(i, j + 2) or first_match and dp(i + 1, j)
                    else:
                        ans = first_match and dp(i + 1, j + 1)

                memo[i, j] = ans
            return memo[i, j] # For the method to finally return true, memo[i, j] should be true for all i, j.

        return dp(0, 0) # dp(i, j) represents the question "Do text[i:] and pattern[j:] match?" This is why we call dp(0,0).

        # SOLUTION 3: DP, BOTTOM-UP APPROACH
        dp = [[False] * (len(pattern) + 1) for _ in range(len(text) + 1)]

        dp[-1][-1] = True
        for i in range(len(text), -1, -1):
            for j in range(len(pattern) - 1, -1, -1):
                first_match = i < len(text) and pattern[j] in {text[i], '.'}
                if j + 1 < len(pattern) and pattern[j + 1] == '*':
                    dp[i][j] = dp[i][j + 2] or first_match and dp[i + 1][j]
                else:
                    dp[i][j] = first_match and dp[i + 1][j + 1]

        return dp[0][0]
