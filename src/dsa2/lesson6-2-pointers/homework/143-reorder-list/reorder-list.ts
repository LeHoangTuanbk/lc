function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;
  // find middle node
  let slow = head,
    fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let prev: ListNode | null = null;
  let curr = slow.next;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  slow.next = null;

  // merge 2 lists
  let first = head;
  let second = prev;
  while (second) {
    const tmp1 = first.next;
    const tmp2 = second.next;

    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
}
