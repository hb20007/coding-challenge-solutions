"""
Given an integer, return true if it is a palindrome, and false otherwise.

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
        if x < 0 or (x % 10 == 0 and x != 0):
            return False # Negative numbers and non-zero numbers ending with 0 are not palindromes.

        reversed_x = 0
        while x > reversed_x:
            reversed_x = reversed_x * 10 + x % 10
            x //= 10

        return x == reversed_x or x == reversed_x // 10 # The latter is when the number is odd.
