"""
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
"""


class Solution:
    def helper_is_palindrome(self, string):
        """
        :type string: str
        """
        # res = True
        # str_len = len(string)
        # for i in range(0, int(str_len / 2)):
        #     if string[i] != string[str_len - i - 1]:
        #         res = False
        #         break
        # return res
        for i, char in enumerate(string):
            if char != string[-i - 1]:  # More efficient: for i in range(0, int(len(string) / 2)): if string[i] != string[-i-1]:
                return False
        return True

    def helper_expand_around_center_to_find_longest_p(self, s, left, right):
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

    def longestPalindrome(self, s):
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
            for j in range(i + 2, s_len + 1):  # I use i + 2 instead of i + 1 to avoid looping through and checking substrings of length 1.
                candidate = s[i:j]  # MyString[a:b] gives the substring from index a to (b - 1)
                # if j - i == 2 and s[i] == s[j - 1] and len(ans) < 2:
                #     ans = candidate
                if self.helper_is_palindrome(candidate) and j - i > len(ans):
                    ans = candidate
        return ans

        # SOLUTION 2: LONGEST COMMON SUBSTRING
        # Good explanation: https://leetcode.com/problems/longest-palindromic-substring/solution/ (Approach #1)
        # Time complexity: O(n^2)
        # Space complexity: O(n^2)

        # Finding longest common substring of s and s2:
        # i = 0
        # for ch in s:
        #     if re.search(ch, s2):   # re.search() and re.match() return a match object which has the boolean value of True if a watch was found. Match objects also have useful functions like .start() to find the start index of the match in the string etc. NB: re.match() checks for a match only at the beginning of the string, while re.search() checks for a match anywhere in the string. Regular expressions beginning with '^' can be used with search() to restrict the match at the beginning of the string.
        #         substr = ch
        #         while re.search(substr, s2):
        #             if len(substr) > len(longest):
        #                 longest = substr
        #             if i + len(substr) == len(s):   # If we have reached the end of the string
        #                 break
        #             substr = s[i:i + len(substr) + 1]   # Add a character to the substring
        #     i += 1

        # SOLUTION 3: DYNAMIC PROGRAMMING (DP)
        # Idea: Consider the case ”ababa”. If we already knew that ”bab” is a palindrome, it is obvious that ”ababa” must be a palindrome since the two left and right end letters are the same. We start with 1 letter palindromes and then move to 2, 3 letter ones etc.
        # We can expand the palindrome from its center and there are only 2n - 1 such centers. The reason it is 2n - 1 and not n is that the center of a palindrome can be in between two letters. Such palindromes have an even number of letters (such as ”abba”) and its center are between the two b’s. So we consider letters as centers but also the spaces between the letters.
        # Time complexity: O(n^2)
        # Space complexity: O(1)
        start = end = 0     # These will represent the longest palindrome. We work fully with indexes and we only retrieve the actual characters in the helper function when we are checking them.
        for i in range(len(s)):
            cand1 = self.helper_expand_around_center_to_find_longest_p(s, i, i)  # Taking the current character as the center
            cand2 = self.helper_expand_around_center_to_find_longest_p(s, i, i + 1)  # Taking the center to be the current character and the next one
            longest = max(cand1, cand2)
            if longest > end - start + 1:   # end - start is not exactly the length of the string. This is because if end = start = 0 the length of the string is 1 but end - start is 0. So it should be end - start + 1
                start = i - (longest - 1) // 2
                end = i + longest // 2
        return s[start:end + 1]     # Like before, optimization can be added in the form of having special cases for palindromes of length one. Also no need to expand and search for palindromes at the edges. Also we can return if the longest palindrome ever gets to be equal to the length of the whole string.

        # SOLUTION 4: MANACHER'S ALGORITHM (O(n))
        # Best explanation: https://www.youtube.com/watch?v=nbTSfrEfo6M
