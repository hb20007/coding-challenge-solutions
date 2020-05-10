"""
Given a string, find the length of the longest *substring* without repeating characters.
"""


class Solution:
    def helper_all_unique(self, string, start, end):
        """
        :type string: str
        :type start: int
        :type end: end
        :rtype: bool
        """
        myset = set()
        for i in range(start, end):
            if string[i] in myset:
                return False
            myset.add(string[i])
        return True

    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # SOLUTION 1: FIRST ATTEMPT
        longest = 0
        buffer = ""    # buffer = set() # (Same performance)
        for c1 in s:
            for c2 in s:
                if c2 not in buffer:
                    buffer += c2    # buffer.add(c2) # if using a set
                    if len(buffer) > longest:
                        longest = len(buffer)
                else:
                    buffer = ""     # buffer = set() # if using a set
                    s = s[1:]
                    break
        return longest

        # SOLUTION 2: A DIFFERENT APPROACH
        # Iterate through all possible substrings and check them.
        # Time complexity: O(n^3) (Worse than previous solution)
        ans = 0
        for i in range(0, len(s)):
            for j in range(i + 1, len(s) + 1):  # In Python, adding 1 to the end value of the range is the same as <= in other languages. To see why this is required, take a simple input like "hz".
                if self.helper_all_unique(s, i, j):
                    ans = max(ans, j - i)
        return ans

        # SOLUTION 3: SLIDING WINDOW
        # In the naive approaches, we repeatedly check a substring to see if it has duplicate character. But it is unnecessary. If a substring s_{ij}s from index i to j - 1 is already checked to have no duplicate characters, we only need to check if s[j] is already in the substring s.
        # A window is a range of elements in the array/string which usually defined by the start and end indices, i.e. [i, j) (left-closed, right-open)
        # We use a set to store the characters in current window [i, j) (j = i initially). Then we slide the index j to the right. If it is not in the set, we slide j further. Doing so until s[j] is already in the HashSet. At this point, we found the maximum size of substrings without duplicate characters starting with index i. If we do this for all i, we get our answer.
        # Time complexity = O(2n) = O(n). This is because in the worst case each char will be visited twice by i and j.
        ans = i = j = 0
        hashset = set()
        while i in range(len(s)) and j in range(len(s)):    # Note while (i and j) in range(len(s)): doesn't work.
            # Try to extend the range [i, j)
            if s[j] not in hashset:
                hashset.add(s[j])
                j += 1
                ans = max(ans, j - 1)
            else:   # This is the most important part. Removing the first character from the set and moving i.
                hashset.remove(s[i])
                i += 1
        return ans

        # SOLUTION 4: SLIDING WINDOW OPTIMIZED
        # Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index. Then we can skip the characters immediately when we found a repeated character.
        # Time complexity: O(n)
        ans = i = 0
        dict_buff = {}
        for j in range(len(s)):   # Equivalent to range(0, len(s)) or enumerate(s)
            if s[j] in dict_buff:
                i = max(dict_buff[s[j]], i)     # If s[j] has a duplicate in the range [i, j) with index j', we don't need to increase i little by little. We can skip all the elements in the range [i, j'] and let i to be j' + 1 directly.
            ans = max(ans, j - i + 1)           # Why + 1? There is another optimization at play. It is this which allowed the loop condition to be in terms of j only. Take the case of i = j = 0 where the answer should be 1.
            dict_buff[s[j]] = j + 1
        return ans
