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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  if (!head) return Array(k).fill(null);
  let n = 0;
  let curNode = head;
  const arr: ListNode[] = [];
  while (curNode) {
    n++;
    curNode = curNode.next;
  }
  const baseSize = Math.floor(n / k);
  let extra = n % k;

  const result: Array<ListNode | null> = [];
  curNode = head;

  for (let i = 0; i < k; i++) {
    if (!curNode) {
      result.push(null);
      continue;
    }
    result.push(curNode);

    let size = baseSize + (extra > 0 ? 1 : 0);
    extra--;

    for (let j = 1; j < size; j++) {
      curNode = curNode.next;
    }
    const nextPart = curNode.next;
    curNode.next = null;
    curNode = nextPart;
  }

  return result;
}
