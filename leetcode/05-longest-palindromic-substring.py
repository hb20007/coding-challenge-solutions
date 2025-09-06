"""
Given a string, find its longest palindromic substring.
"""


class Solution:
    def is_palindrome(self, string):
        """
        :type string: str
        """
        for i, char in enumerate(string):
            if char != string[-i - 1]: # More efficient: for i in range(0, int(len(string) / 2)): if string[i] != string[-i-1]:
                return False
        return True

    def expand_around_center_to_find_longest_p(self, s, left, right):
        """
        :type s: str
        :type left: int
        :type right: int
        :rtype: str
        """
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    def longest_palindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        # SOLUTION 1: BRUTE FORCE
        # Time complexity: O(n^3)
        # Space complexity: O(1)
        if s == "" or len(s) == 1:
            return s
        ans = s[0]
        s_len = len(s)
        for i in range(0, s_len):
            for j in range(i + 2, s_len + 1): # We use i + 2 instead of i + 1 to avoid looping through and checking substrings of length 1.
                candidate = s[i:j]
                if self.is_palindrome(candidate) and j - i > len(ans):
                    ans = candidate
        return ans

        # SOLUTION 2: LONGEST COMMON SUBSTRING
        # Good explanation: https://leetcode.com/problems/longest-palindromic-substring/editorial/ (Approach #1)
        # Time complexity: O(n^2)
        # Space complexity: O(n^2)

        # SOLUTION 3: DYNAMIC PROGRAMMING (DP)
        # Idea: If we knew that "bab" is a palindrome, it is obvious that "ababa" must be a palindrome since the two end letters are the same. We start with 1-letter palindromes and then move to 2, 3-letter ones, etc.
        # We can expand the palindrome from its center, and there are 2n - 1 such centers. It is 2n - 1 because the center of a palindrome can be between two letters. Such palindromes have an even number of letters (such as "abba"). So we consider letters as centers, but also the spaces between the letters.
        # Time complexity: O(n^2)
        # Space complexity: O(1)
        start = end = 0 # These will represent the longest palindrome. We work fully with indices, and only retrieve the actual characters in the helper function when checking.
        for i in range(len(s)):
            cand1 = self.expand_around_center_to_find_longest_p(s, i, i) # Taking the current character as the center
            cand2 = self.expand_around_center_to_find_longest_p(s, i, i + 1) # Taking the center to be the current character and the next one
            longest = max(cand1, cand2)
            if longest > end - start + 1:
                start = i - (longest - 1) // 2
                end = i + longest // 2
        return s[start:end + 1] # Optimization can be added by having special cases for palindromes of length one. There is also no need to expand and search for palindromes at the edges. Also, we can return if the longest palindrome ever gets to be equal to the length of the whole string.

        # SOLUTION 4: MANACHER'S ALGORITHM (O(n))
        # Good explanation: https://www.youtube.com/watch?v=nbTSfrEfo6M
