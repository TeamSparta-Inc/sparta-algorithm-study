# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        count = 0
        curr = head
        while curr.next:
            count += 1
            curr = curr.next

        if count == 0:
            return None

        target_cnt = (count + 1) // 2 

        curr = head
        for i in range(target_cnt - 1):
            curr = curr.next

        if curr.next and curr.next.next:
            curr.next = curr.next.next
        else:
            curr.next = None

        return head