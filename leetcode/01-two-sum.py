"""
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
"""


class Solution:
    def two_sum(self, nums, target):  # Usually Python vars and functions use lower_case as opposed to mixedCase though. The first argument of every class method, including init, is always a reference to the current instance of the class. By convention, this argument is always named self. When a method definition is decorated, we don't know whether to automatically give it a 'self' parameter or not, which is why this is necessary. Also all Python updates should be backward-compatible.
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        # SOLUTION 1: NAIVE APPROACH.
        # Runtime (mean of 3 runs): 7473 ms on leetcode.
        # Time complexity: O(n^2)
        # Space complexity: O(1)
        for idx, val in enumerate(nums):    # Python: looping over List using index. idx and val: var names can change but the order is what matters, first index then item.
            for idx2, val2 in enumerate(nums[idx + 1:]):
                if val + val2 == target:
                    return [idx, idx + 1 + idx2]    # To get the second index, we use the first index to keep track of where we reached and derive the second index.

        # SOLUTION 2: NAIVE APPROACH.
        # Improvement: enumerate() seems expensive so we eliminate 1 usage of it.
        # Runtime (mean of 3 runs): 5459 ms
        for idx, val in enumerate(nums):
            for val2 in nums[idx + 1:]:     # There is no need for enumerating over this loop because the index will not correspond to the original List's index.
                if val + val2 == target:
                    return [idx, len(nums) - 1 - nums[::-1].index(val2)]     # The second index is a little trickier to get because of possibilities like nums = [3, 3]. If we use nums.index(3) we get 0 but we need the second index which is 1. The solution is to reverse the array and then get the first index by value: nums[::-1].index(val2). However, since the array is reversed the indices are reversed as well so we need to do len(nums) - 1 - that to get the real index.

        # SOLUTION 3: NAIVE APPROACH.
        # Eliminated use of enumerate() completely.
        # Surprisingly, runtime (mean over 3 runs) was 7229 ms.
        for val in nums:
            for val2 in nums[1:]:
                if val + val2 == target:
                    return [nums.index(val), len(nums) - 1 - nums[::-1].index(val2)]

        # SOLUTION 4: TWO-PASS HASH TABLE (In Python the equivalent of a hash table or map is the dictionary)
        # Improvement: Hash tables are the best way to maintain a mapping of each element in the array to its index. Hash tables are a fast way for key -> value lookup. In our case the key is the number and the value is the index.
        # Time complexity: O(n) (Lookup time for a hash table is O(1) assuming no hash colisions occur)
        # Space complexity: O(n). The hash table needs to store n elements at max.
        buff_dict = {}
        if len(nums) <= 1:
            return False
        for i in range(len(nums)):  # Creating the hash table
            buff_dict[nums[i]] = i  # Equivalent to map.put(nums[i], i)
        for i in range(len(nums)):
            complement = target - nums[i]   # The number we need
            if complement in buff_dict and buff_dict[complement] != i:  # The 2nd condition is for the case where the complement is equivalent to the first number (eg. [3, 3] with target = 6)
                return [i, buff_dict[complement]]

        # SOLUTION 5: ONE-PASS HASH TABLE
        # Improvement: It turns out we can do it in one-pass. While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table.
        # Time complexity is still O(n) but now we traverse the list containing n elements once instead of twice.
        dic = {}
        if len(nums) <= 1:
            return False
        for i in range(len(nums)):
            if nums[i] in dic:
                return [dic[nums[i]], i]
            else:
                dic[target - nums[i]] = i   # Note different usage of the hash table. Here we store the complement (as opposed to the curent number) as the key.
