# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        root = ListNode()
        cur = root
        r = 0
        while l1 is not None or l2 is not None or r:
            if l1:
                first = l1.val
                l1 = l1.next
            else:
                first = 0
            
            if l2:
                second = l2.val
                l2 = l2.next
            else:
                second = 0

            tot = first + second + r
            r, s = tot // 10, tot % 10

            cur.next = ListNode(s)
            cur = cur.next
        
        return root.next
