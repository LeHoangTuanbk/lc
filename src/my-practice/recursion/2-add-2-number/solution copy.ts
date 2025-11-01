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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry = 0,
): ListNode | null {
  if (!l1 && !l2 && carry === 0) return null;

  const sum = (l1.val ?? 0) + (l2.val ?? 0) + carry;
  const node = new ListNode(sum % 10);
  const newCarry = Math.floor(sum / 10);

  node.next = addTwoNumbers(l1.next || null, l2.next || null, newCarry);

  return node;
}
