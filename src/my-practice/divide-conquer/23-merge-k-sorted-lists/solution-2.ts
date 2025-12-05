// Time: O(log(k) * k * n)
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists: Array<ListNode | null>, left: number, right: number) {
  if (left == right) return lists[left];

  const mid = Math.floor((left + right) / 2);
  const leftMerged = mergeLists(lists, left, mid);
  const rightMerged = mergeLists(lists, mid + 1, right);

  return mergeTwoLists(leftMerged, rightMerged);
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
