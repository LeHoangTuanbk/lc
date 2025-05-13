import { ListNode } from '../linkedList';

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let cur = head;
  while (cur && cur.val === val) {
    cur = cur.next;
  }
  head = cur;
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
}
