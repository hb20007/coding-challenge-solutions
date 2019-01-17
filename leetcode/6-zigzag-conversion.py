"""
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR".
Write the code that will take a string and make this conversion given a number of rows.
For example, convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

HINT:
The first step is to generalize the pattern for a string of size n.
Compare with https://leetcode.com/problems/zigzag-conversion/discuss/3435/If-you-are-confused-with-zigzag-patterncome-and-see!
"""


class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        # SOLUTION 1: NAIVE (BREAK DOWN TO PERIODS)
        # Each zig zag pattern can be divided into periods which repeat. Each period is composed of a vertical line then a horizontal rine rising to the second row (index = 1). In every period, every row will always have 2 characters, except for the first and last rows.
        # Runtime on leetcode: 96ms
        if numRows <= 1 or len(s) < 2:
            return s

        res = ""
        period_size = 2 * numRows - 2   # The size of every period can be observed to be = 2 * nRows - 2 (except when nRows == 1). This is because we first have nRows elements going down and then nRows - 2 elements going up diagonally.
        for i in range(numRows):
            for j in range(i, len(s), period_size):  # j is the index of the first element in a particular cycle in row i. The 3rd param is the update statement of the loop. We move on to evaluate the next cycle for the current row.
                res += s[j]             # Note that the first char in each row is always at the index of the row number
                second_j = (j - i) + period_size - i    # In every period, there is a second j because every row has 2 elements. The index of the second char in the current row in the current period is the start (ie. first char) of the current period (j - current row ie. j - i) + period_size - i. This is because (i - j) + period_size is the start of the next period. If you minus i from that, you get the char at the row we want.
                if i != 0 and i != numRows - 1 and second_j < len(s):   # The exceptions to there being a second j are the first and last row and also the last period where in some cases the string might terminate earlier than a second j would have appeared.
                    res += s[second_j]
        return res


        # SOLUTION 2: BETTER APPROACH (2 CASES: GOING DOWN, GOING UP DIAGONALLY)
        # Create an array of strings with n strings where each string will store a row of the zig zag representation. Traverse the string and in order to decide in which row each character goes, check if you are going down (it goes to the next row) or if we are going up (it goes to the previous row).
        # Runtime on leetcode: 80ms
        if not s or len(s) < 2 or numRows < 2:      # Empty strings are falsy (boolean value = false) so if not s checks if the string is empty.
            return s

        going_down = True
        row_idx = 0
        zig_zag_rows_array = ["" for x in range(numRows)]   # This is considered bad Python practice because it creates an array of a fixed size. However, we are writing code for a very specific problem so it's justifiable for simplicity.
        ans = ""

        for string_idx, char_at_current_idx in enumerate(s):    # NB here we are looping through the string directly while in the previous approach we were looping through numRows.
            zig_zag_rows_array[row_idx] += char_at_current_idx

            if going_down:
                if row_idx == numRows - 1:  # Last row
                    row_idx = numRows - 2   # Now the row index will start to decrease
                    going_down = False
                else:
                    row_idx += 1
            else:    # Going up diagonally
                if row_idx == 0:
                    row_idx = 1
                    going_down = True
                else:
                    row_idx -= 1

        for row in zig_zag_rows_array:
            ans += row

        return ans