import { ListNode, middleNode } from './middleNode';

function createLinkedList(values: number[]): ListNode {
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

describe('middleNode()', () => {
  it('should return middle for odd-length list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const middle = middleNode(head);
    expect(middle?.val).toBe(3);
  });

  it('should return second middle for even-length list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6]);
    const middle = middleNode(head);
    expect(middle?.val).toBe(4);
  });

  it('should return head if list has only one element', () => {
    const head = createLinkedList([42]);
    const middle = middleNode(head);
    expect(middle?.val).toBe(42);
  });

  it('should return second node for two elements', () => {
    const head = createLinkedList([10, 20]);
    const middle = middleNode(head);
    expect(middle?.val).toBe(20);
  });
});
