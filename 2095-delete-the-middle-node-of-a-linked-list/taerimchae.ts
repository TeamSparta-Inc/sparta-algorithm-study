/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteMiddle(head: ListNode | null): ListNode | null {

    if (head === null || head.next === null) return null;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = head;
    while (prev.next !== slow) {
        prev = prev.next;
    }

    prev.next = slow.next;
    return head;
};
