# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev_node = head
        if prev_node:
            current_node = head.next
            prev_node.next = None
            next_node = None
            while current_node:
                next_node = current_node.next
                current_node.next = prev_node
                prev_node = current_node
                current_node = next_node
            return prev_node
        return head