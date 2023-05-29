"""
Implement atoi to convert a string to an integer.

HINT:
There are 4 cases
1. discard all leading whitespace (we don't have to deal with trailing whitespace)
2. sign of the number
3. overflow
4. invalid input
"""


class Solution:
    INT_MAX, INT_MIN = 0x7FFFFFFF, 0x80000000   # Python doesn't treat 0x80000000 as a signed int so we need to add the minus sign on our own when we use it.

    def my_atoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        # SOLUTION 1: STRAIGHTFORWARD
        # RUNTIME: 64ms
        if not str:
            return 0

        sign, ans, i = 1, 0, 0

        while str[i] == " ":
            i += 1

        if str[i] == "-" or str[i] == "+":
            sign = 1 - 2 * (str[i] == "-")  # If str[i] == '+', sign = 1 - 0 = 1. If str[i] == '-', sign = 1 - 2 = -1
            i += 1

        while i < len(str) and "0" <= str[i] <= "9":     # ord() is the inverse of chr() ie. Given a string of length one, return an integer representing the Unicode code point of the character when the argument is a unicode object, or the value of the byte when the argument is an 8-bit string. For example, ord('a') returns the integer 97, ord(u'\u2020') returns 8224.
            if ans > self.INT_MAX // 10 or (ans == self.INT_MAX // 10 and ord(str[i]) - ord("0") > self.INT_MAX % 10):    # If ans > INT_MAX // 10, it means that we cannot add another digit, it will certainly be greater than INT_MAX. If ans == INT_MAX // 10 and the next number to add is greater than the last digit of the INT_MAX that's also overflow.
                if sign == 1:       # Examining the if statement in the previous line carefully, we see that -2147483648 is treated as overflow even though it is not. In order to solve this problem (which arises because the abs value of int max and int min are off by 1 and we check for int max) we need to have a more complex if statement where we consider the sign. The solution here is simpler and returns the right answer but treats -2147483648 as overflow.
                    return self.INT_MAX
                else:
                    return -self.INT_MIN
            ans = ans * 10 + ord(str[i]) - ord("0")
            i += 1

        return ans * sign

        # SOLUTION 2: MORE PYTHONY
        # RUNTIME: 92ms
        if len(str) == 0:
            return 0
        ls = list(str.strip())

        sign = -1 if ls[0] == '-' else 1
        if ls[0] in ['-', '+']:
            del ls[0]
        ret = i = 0
        while i < len(ls) and ls[i].isdigit():
            ret = ret * 10 + ord(ls[i]) - ord('0')
            i += 1
        return max(-2 ** 31, min(sign * ret, 2 ** 31 - 1))  # NB genius way for dealing with overflow
