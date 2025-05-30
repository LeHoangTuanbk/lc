export function middleNode(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head;
  if (!slow) return null;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
