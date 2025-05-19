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

import { ListNode } from '../linkedList';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  function getListLength(head: ListNode | null) {
    let length = 0;
    while (head != null) {
      head = head.next;
      length++;
    }
    return length;
  }
  if (!headA || !headB) return null;

  let len1 = getListLength(headA);
  let len2 = getListLength(headB);

  const diff = Math.abs(len1 - len2);
  while (len1 > len2) {
    headA = headA?.next;
    len1--;
  }
  while (len1 < len2) {
    headB = headB?.next;
    len2--;
  }
  while (headA !== null && headB != null) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
}
