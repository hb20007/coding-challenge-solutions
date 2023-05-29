"""
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays (together).
"""
import statistics


class Solution:
    def find_median_sorted_arrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        # SOLUTION 1: USING THE STATISTICS LIBRARY
        nums1.extend(nums2)
        return statistics.median(sorted(nums1))

        # SOLUTION 2: WITHOUT THE STATISTICS LIBRARY
        nums1.extend(nums2)
        nums1.sort()
        n = len(nums1)
        return nums1[n // 2] if n % 2 else sum(nums1[(n // 2 - 1):(n // 2 + 1)]) / 2
