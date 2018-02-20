"""
Given a 32-bit signed integer, reverse digits of an integer.

EXAMPLE: Input: 120, Output: 21

Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
"""


class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        # SOLUTION 1: STRAIGHTFORWARD APPROACH
        # Runtime: 76ms
        sign = (x > 0) - (x < 0)    # The parentheses are neccessary, otherwise - happens before comparison. NB:In Python, True and False are keywords which internally represent 1 and 0. This explains why this expression returns 1 if the sign is positive and -1 if it is negative.
        x = x * sign      # remove sign

        ans = 0
        while x > 0:
            ans = ans * 10 + x % 10
            x = x // 10

        return ans * sign if ans < 2**31 else 0     # NB how we avoid checking against the lowest possible int by adding the sign only at the end.


        # SOLUTION 2: HACKY SOLUTION
        # Runtime: 60ms
        xs = str(x)
        xr = int("-" + xs[:0:-1]) if xs[0] == "-" else int(xs[::-1])        # xs[:0:-1] is the same as xs[1:] then xs[::-1]. The reason is that when we use -1 as the last arg, we count from the end, so we need to reverse the arguments. So instead of [1:] it should now be [:1] or rather [:0] because the second argument is strict comparsion as opposed to less/greater than or equal to comparison.
        return xr if 2147483647 >= xr >= -2147483648 else 0     # NB simplified notation of chained comparison. Also NB writing the numbers in hex (0x7FFFFFFF and 0x80000000) doesn't work because Python doesn't use 32-bit unsigned for hex representation. What would have worked as well is checking if abs(xr) <= 0x7FFFFFFF.

        # SOLUTION 3: CODE GOLF
        # Runtime: 56ms
        n = ((x > 0) - (x < 0)) * int(str(abs(x))[::-1])
        return n if n.bit_length() < 32 else 0