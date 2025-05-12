import { deleteDuplicates } from './deleteDuplicates';
import { createLinkedList } from '../linkedList';

describe('deleteDuplicates()', () => {
  it('should return middle for odd-length list', () => {
    const head = createLinkedList([1, 1, 2, 3, 3]);
    const middle = deleteDuplicates(head);
    // ....
  });
});
