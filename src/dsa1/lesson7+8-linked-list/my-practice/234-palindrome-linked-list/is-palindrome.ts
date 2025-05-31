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
import { ListNode } from '../../live-coding/linkedList';
export function isPalindrome(head: ListNode | null): boolean {
  // Get length of linked list
  // n: le lay len Math.floor n/2, n chan, lay den n/2
  let lengthOfList = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    lengthOfList++;
  }
  const indexToReverse = Math.ceil(lengthOfList / 2);
  let needToTravel = lengthOfList - indexToReverse;
  let reverseFromNode = head;
  let i = 1;
  while (i <= indexToReverse && reverseFromNode) {
    reverseFromNode = reverseFromNode.next;
    i++;
  }
  cur = reverseFromNode;
  let nextNode = reverseFromNode?.next;
  while (cur && nextNode) {
    let next = nextNode.next;
    nextNode.next = cur;
    cur = nextNode;
    nextNode = next;
  }
  while (needToTravel > 0 && head && cur) {
    if (head.val !== cur.val) {
      return false;
    }
    head = head.next;
    cur = cur.next;
    needToTravel--;
  }

  return true;
}
