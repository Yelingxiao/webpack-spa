/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return [].concat(...lists).sort((a, b) => a - b)
}

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))