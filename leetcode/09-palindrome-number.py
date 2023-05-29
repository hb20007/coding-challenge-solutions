"""
Determine whether an integer is a palindrome. Do this without extra space (so can't convert int to str).

HINT:
Reversed integers might overflow.
"""


class Solution:
    def is_palindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # SOLUTION: REVERSE HALF OF THE NUMBER
        # The question is poorly setup. Extra space is always needed eg. to create variables etc. This, however, is the best solution.
        if x < 0 or (x % 10 == 0 and x != 0):
            return False    # Negative numbers are not palindromes. Also numbers that end with 0 which are not 0.

        reversed_x = 0
        while x > reversed_x:
            reversed_x = reversed_x * 10 + x % 10
            x //= 10

        return x == reversed_x or x == reversed_x // 10  # The latter is when the number is odd
