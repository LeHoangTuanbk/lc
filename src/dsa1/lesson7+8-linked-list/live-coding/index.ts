function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return head;

  let cur: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
