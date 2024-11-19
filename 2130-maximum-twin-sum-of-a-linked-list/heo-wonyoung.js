/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let n = head
    
    const arr = []
    const temp = head.next
    
    while(n){
        arr.push(n.val)
        n = n.next
    }
    let maxResult = 0
    for(i=0; i<arr.length/2; i++){
        maxResult = Math.max(maxResult, arr[i] + arr[arr.length-i-1])
    }
    
    return maxResult
};