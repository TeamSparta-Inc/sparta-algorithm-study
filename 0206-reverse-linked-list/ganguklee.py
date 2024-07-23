# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None: return None
        
        new_head = self.go(head)
        head.next = None
        return new_head

    def go(self, cur: ListNode):
        if cur.next is None:
            return cur

        new_head = self.go(cur.next)
        cur.next.next = cur
        return new_head

        
        