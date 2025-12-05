// Time: O(k * k * n)
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  let results: ListNode | null = lists[0];
  for (let i = 1; i < lists.length; i++) {
    results = mergeTwoLists(results, lists[i]);
  }
  return results;
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;

  return dummy.next;
}
