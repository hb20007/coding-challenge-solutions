"""
Given a 32-bit integer, reverse its digit.

EXAMPLE: Input: 120, Output: 21

Assume the environment does not support 64-bit integers.
"""


class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        # SOLUTION 1: STRAIGHTFORWARD APPROACH
        sign = (x > 0) - (x < 0)
        x = x * sign # Remove sign.

        ans = 0
        while x > 0:
            ans = ans * 10 + x % 10
            x = x // 10

        return ans * sign if ans < 2**31 else 0 # We avoid checking against the lowest possible int by adding the sign only at the end.

        # SOLUTION 2: HACKY SOLUTION
        xs = str(x)
        xr = int("-" + xs[:0:-1]) if xs[0] == "-" else int(xs[::-1]) # xs[:0:-1] is the same as xs[1:] followed by xs[::-1]. The reason is that when we use -1 as the last argument, we count from the end, so we need to reverse the arguments. So instead of [1:], it should now be [:1] or rather [:0] because the second argument is a strict comparison as opposed to a less/greater than or equal to comparison.
        return xr if 2147483647 >= xr >= -2147483648 else 0 # Note the simplified notation of chained comparison. Writing the numbers in hex (0x7FFFFFFF and 0x80000000) doesn't work because Python doesn't use 32-bit unsigned for hex representation. What would have also worked is checking if abs(xr) <= 0x7FFFFFFF.

        # SOLUTION 3: CODE GOLF
        n = ((x > 0) - (x < 0)) * int(str(abs(x))[::-1])
        return n if n.bit_length() < 32 else 0
