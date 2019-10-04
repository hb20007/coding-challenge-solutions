"""
Implement regular expression matching with support for '.' and '*'.
The matching should cover the entire input string (not partial).
Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aa", "a*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
"""


class Solution:
    def isMatch(self, text, pattern):
        """
        :type text: str
        :type pattern: str
        :rtype: bool
        """
        # SOLUTION 1: RECURSION
        # Runtime: Time limit exceeded after running 44/445 test cases
        if not pattern:
            return not text     # If both are empty it's considered a match.

        first_match = bool(text) and pattern[0] in {text[0], '.'}   # text is not empty and the first char matches

        if len(pattern) >= 2 and pattern[1] == '*':     # The Kleene star is dealt with separately
            return (self.isMatch(text, pattern[2:]) or  # This usually runs until both text and pattern[2:] are empty. This line represents the case when there are 0 occurences of the character with the *.
                    first_match and self.isMatch(text[1:], pattern))    # The key is that in this line the second argument is pattern itself. This allows us to match the same character in pattern multiple times as long as the one after it is a star. Note the lack of need of having parenthesis in our statement involving 'or' and 'and'.
        else:
            return first_match and self.isMatch(text[1:], pattern[1:])  # The problem is really easy if no * is involved.

        # SOLUTION 2: DYNAMIC PROGRAMMING (DP), TOP-DOWN APPROACH
        memo = {}   # Will be used to cache intermediate results.

        def dp(i, j):       #  Because calls will only ever be made to match(text[i:], pattern[j:]), we use \text{dp(i, j)}dp(i, j) to handle those calls instead, saving us expensive string-building operations and allowing us to cache the intermediate results
            if (i, j) not in memo:  # This line is where we are using DP (memoization). (i, j) might already be in the memo because of the statement "dp(i, j+2) or first_match and dp(i+1, j)" below, where we are trying 2 different calls involving dp simultaneously.
                if j == len(pattern):
                    ans = i == len(text)    # If we see that both strings have terminated at the same time then the ans for this specific 'char' is true.
                else:
                    first_match = i < len(text) and pattern[j] in {text[i], '.'}
                    if j + 1 < len(pattern) and pattern[j + 1] == '*':
                        ans = dp(i, j + 2) or first_match and dp(i + 1, j)
                    else:
                        ans = first_match and dp(i + 1, j + 1)

                memo[i, j] = ans
            return memo[i, j]   # memo[i, j] should be true for all i, j for the method to finally return true.

        return dp(0, 0)     # dp(i, j) represents the question "Do text[i:] and pattern[j:] match?" This is why we call dp(0,0).

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
