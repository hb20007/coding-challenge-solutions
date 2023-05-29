"""
You are given two non-empty linked lists representing two non-negative integers.

The digits are stored in reverse order and each of their nodes contain a single digit.

Add the two numbers and return it as a linked list.

Example
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
"""


# Definition for custom-defined singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def add_two_numbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        # SOLUTION 1: NAIVE (Converting from linked list to integers then back to linked lists)
        # Runtime: 236 ms
        n1, multiplier = 0, 1
        while l1:   # Converting first number to int
            n1 += multiplier * l1.val
            multiplier *= 10
            l1 = l1.next

        n2, multiplier = 0, 1
        while l2:   # Converting second number to int
            n2 += multiplier * l2.val
            multiplier *= 10
            l2 = l2.next

        n3 = n1 + n2

        l3 = ListNode(n3 % 10)
        l3_current = l3
        while (n3 >= 10):   # Converting answer to linked list
            n3 //= 10
            l3_current.next = ListNode(n3 % 10)    # NB: a solution with l3_current = ListNode(n3 % 10) wouldn't work because we would be overwriting l3_current. We need to work with l3_current.next.
            l3_current = l3_current.next
        return l3

        # SOLUTION 2: USING A CARRY
        # An extra advantage of this approach is that the size of the input is not limited to the language's largest possible size of an int since we don't use ints to store the numbers.
        # Time complexity : O(max(len(11), len(l2))). The algorithm iterates at most O(max(len(11), len(l2))) times.
        # Space complexity : O(max(len(11), len(l2))). The length of the new list is at most O(max(len(11), len(l2))) + 1.
        carry = 0
        root = n = ListNode(0)
        while l1 or l2 or carry:
            val1 = val2 = 0
            if l1:
                val1 = l1.val
                l1 = l1.next
            if l2:
                val2 = l2.val
                l2 = l2.next

            carry, val = divmod(val1 + val2 + carry, 10)    # divmod (a, b): Take two numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division.
            # carry = 1 if sum >= 10 else 0   # Ternary operator
            # carry = sum // 10
            n.next = n = ListNode(val)  # n.next = n = ListNode(val) means first n.next = ListNode(val) then n point to the same address
        return root.next  # I'm using a hack. I add an arbitrary node "dummy head" as the first node and then I remove it here. It makes my logic in the while loop more intuitive to me without having to pay special attention to the first node.

        # SOLUTION 3: EXTRA OPTIMIZATION
        # Here we use the carry variable for things beyond what its name implies in order to avoid creating new variables.
        carry = 0
        res = n = ListNode(0)
        while l1 or l2 or carry:
            val1 = val2 = 0
            if l1:
                carry += l1.val
                l1 = l1.next
            if l2:
                carry += l2.val
                l2 = l2.next
            carry, val = divmod(carry, 10)
            n.next = n = ListNode(val)
        return res.next
