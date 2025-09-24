import { findMin } from './solution';

describe('findMin', () => {
  it('should find min in a rotated array', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    expect(findMin([11, 13, 15, 17])).toBe(11); // not rotated
  });

  it('should work with array length 2', () => {
    expect(findMin([2, 1])).toBe(1);
    expect(findMin([1, 2])).toBe(1);
  });

  it('should work with array length 1', () => {
    expect(findMin([5])).toBe(5);
  });

  it('should handle large rotation', () => {
    expect(findMin([5, 6, 7, 8, 1, 2, 3, 4])).toBe(1);
    expect(findMin([2, 3, 4, 5, 6, 7, 8, 1])).toBe(1);
  });

  it('should handle when min is at index 0', () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
  });
});
