import { middleNode } from './middleNode';
import { createLinkedList } from '../linkedList';

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
