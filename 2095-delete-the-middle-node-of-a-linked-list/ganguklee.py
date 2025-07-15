# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return None
            
        h = t = prev = head

        while not (h is None or h.next is None):
            h = h.next.next
            prev = t
            t = t.next

        prev.next = t.next

        return head