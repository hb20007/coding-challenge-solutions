"""
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR".
Write the code that will take a string and make this conversion given a number of rows.
For example, convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
"""


class Solution:
    def convert(self, s, num_rows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        # SOLUTION 1: NAIVE (BREAK DOWN TO PERIODS)
        # Each zig-zag pattern can be divided into repeating periods. Each period comprises a vertical line, then a horizontal line rising to the second row. In every period, every row will always have 2 characters, except for the first and last rows.
        if num_rows <= 1 or len(s) < 2:
            return s

        res = ""
        period_size = 2 * num_rows - 2 # The size of every period is 2 * nRows - 2 (except when nRows == 1). This is because we first have nRows elements going down and then nRows - 2 elements going up diagonally.
        for i in range(num_rows):
            for j in range(i, len(s), period_size): # j is the index of the first element in a particular cycle in row i. The 3rd param is the update statement of the loop. We move on to evaluate the next cycle for the current row.
                res += s[j] # The first char in each row is always at the index of the row number.
                second_j = (j - i) + period_size - i # In every period, there is a second j because every row has two elements. The index of the second char in the current row in the current period is the start (i.e., first char) of the current period (j - current row, i.e., j - i) + period_size - i. This is because (i - j) + period_size is the start of the next period. If you subtract i from that, you get the char at the row we want.
                if i != 0 and i != num_rows - 1 and second_j < len(s): # There is no second j in the first and last row, and possibly in the last period, where the string might terminate earlier than a second j would have appeared.
                    res += s[second_j]
        return res

        # SOLUTION 2: BETTER APPROACH (TWO CASES: GOING DOWN, GOING UP DIAGONALLY)
        # Create an array of strings with n strings, each containing a row of the zig-zag representation. Traverse the string. To decide which row each character goes in, check if you are going down (to the next row) or up (to the previous row).
        if not s or len(s) < 2 or num_rows < 2:
            return s

        going_down = True
        row_idx = 0
        zig_zag_rows_array = ["" for _ in range(num_rows)] # This is bad Python practice because it creates an array of a fixed size. However, we are writing code for a very specific problem, so it's justifiable for simplicity.
        ans = ""

        for string_idx, char_at_current_idx in enumerate(s): # Here we loop through the string directly, while in the previous approach, we looped through numRows.
            zig_zag_rows_array[row_idx] += char_at_current_idx

            if going_down:
                if row_idx == num_rows - 1: # Last row
                    row_idx = num_rows - 2 # Now the row index will start to decrease.
                    going_down = False
                else:
                    row_idx += 1
            else: # Going up diagonally
                if row_idx == 0:
                    row_idx = 1
                    going_down = True
                else:
                    row_idx -= 1

        for row in zig_zag_rows_array:
            ans += row

        return ans
