"""
Given a string, find the length of the longest substring without repeating characters.
"""


class Solution:
    def check_if_all_unique(self, string, start, end):
        """
        :type string: str
        :type start: int
        :type end: end
        :rtype: bool
        """
        my_set = set()
        for i in range(start, end):
            if string[i] in my_set:
                return False
            my_set.add(string[i])
        return True

    def length_of_longest_substring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # SOLUTION 1: NAIVE
        longest = 0
        buffer_str = "" # Can also use a set: buffer = set(). Same performance.
        for _ in s:
            for c in s:
                if c not in buffer_str:
                    buffer_str += c # If using a set, buffer.add(c).
                    if len(buffer_str) > longest:
                        longest = len(buffer_str)
                else:
                    buffer_str = "" # If using a set, buffer.add(c).
                    s = s[1:]
                    break
        return longest

        # SOLUTION 2: A DIFFERENT APPROACH
        # Iterate through all possible substrings and check them.
        # Time complexity: O(n^3) (Worse than the previous solution)
        ans = 0
        for i in range(0, len(s)):
            for j in range(i + 1, len(s) + 1):
                if self.check_if_all_unique(s, i, j):
                    ans = max(ans, j - i)
        return ans

        # SOLUTION 3: SLIDING WINDOW
        # In the naive approach, we repeatedly check a substring to see if it has duplicate characters. But this is unnecessary. If a substring s_{ij}s from index i to j - 1 is already checked to have no duplicate characters, we only need to check if s[j] is already in the substring s.
        # A window is a range of elements in the array or string defined by the start and end indices, i.e., [i, j).
        # We use a set to store the characters in the current window, [i, j) (j = i initially). Then we slide the index j to the right, until we find a s[j] already in the HashSet. At this point, we found the maximum size of substrings without duplicate characters starting with index i. If we do this for all i, we get our answer.
        # Time complexity = O(2n) = O(n). This is because, in the worst case, each character will be visited twice by i and j.
        ans = i = j = 0
        hash_set = set()
        while i in range(len(s)) and j in range(len(s)):
            # Try to extend the range [i, j):
            if s[j] not in hash_set:
                hash_set.add(s[j])
                j += 1
                ans = max(ans, j - 1)
            else: # This is the most important part: removing the first character from the set and moving i.
                hash_set.remove(s[i])
                i += 1
        return ans

        # SOLUTION 4: SLIDING WINDOW OPTIMIZED
        # Instead of using a set to detect duplicates, we can define a mapping of the characters to their indices. Then we can skip the characters immediately when we find a repeated character.
        # Time complexity: O(n)
        ans = i = 0
        dict_buff = {}
        for j in range(len(s)):
            if s[j] in dict_buff:
                i = max(dict_buff[s[j]], i) # If s[j] has a duplicate in the range [i, j) with index j', we don't need to increase i little by little. We can skip all the elements in the range [i, j'] and assign i to j' + 1 directly.
            ans = max(ans, j - i + 1) # The "+ 1" is another optimization. This is what allowed the loop condition to be in terms of j only. Think about the case of i = j = 0, where the answer should be 1.
            dict_buff[s[j]] = j + 1
        return ans
