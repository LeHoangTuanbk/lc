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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k == 1) return head;

  let count = 0;
  let current = head;
  while (count < k && current) {
    current = current.next;
    count++;
  }

  if (count < k) return head;

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = null;

  for (let i = 0; i < k && curr; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  if (head) {
    head.next = reverseKGroup(curr, k);
  }
  return prev;
}
