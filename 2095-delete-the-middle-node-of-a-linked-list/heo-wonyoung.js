/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let tempH = head
    let idx = 0
    while(tempH.next){
        idx++
        tempH = tempH.next
    }
    if(idx === 0) return head.val = null
    const middle = Math.round(idx/2)
    tempH = head
    let step = 1
    while(step !== middle){
        tempH = tempH.next
        step++
    }
    tempH.next = tempH.next.next

    return head
};