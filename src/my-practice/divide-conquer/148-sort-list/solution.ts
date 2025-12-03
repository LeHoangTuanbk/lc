export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow = head,
    fast = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;
  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
}

function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let cur = dummy;

  while (a && b) {
    if (a.val < b.val) {
      cur.next = a;
      a = a.next;
    } else {
      cur.next = b;
      b = b.next;
    }
    cur = cur.next;
  }

  if (a) cur.next = a;
  if (b) cur.next = b;
  return dummy.next;
}
