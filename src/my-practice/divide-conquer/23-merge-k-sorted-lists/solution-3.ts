import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  const pq = new MinPriorityQueue<ListNode>();

  for (const node of lists) {
    if (node) pq.enqueue(node);
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (!pq.isEmpty()) {
    const node = pq.dequeue();
    current.next = node;
    current = current.next;
    if (node.next) pq.enqueue(node.next);
  }
  return dummy.next;
}
