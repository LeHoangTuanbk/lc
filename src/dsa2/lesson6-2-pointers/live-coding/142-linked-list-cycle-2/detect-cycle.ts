export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow = head,
    fast = head,
    hasCycle = false;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) return null;

  let slow2 = head;
  while (slow2 !== slow) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
}
