import { findKthPositive } from './solution-2';

describe('findKthPositive', () => {
  it('should return 9 for arr=[2,3,4,7,11] and k=5', () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
  });

  it('should return 6 for arr=[1,2,3,4] and k=2', () => {
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });

  it('should return 1 when arr=[2] and k=1', () => {
    expect(findKthPositive([2], 1)).toBe(1);
  });

  it('should return 3 when arr=[1,2,4] and k=1', () => {
    expect(findKthPositive([1, 2, 4], 1)).toBe(3);
  });

  it('should return 1000 when arr=[1..999] and k=1', () => {
    const arr = Array.from({ length: 999 }, (_, i) => i + 1); // [1..999]
    expect(findKthPositive(arr, 1)).toBe(1000);
  });

  it('should return 1001 when arr=[1..1000] and k=1', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(findKthPositive(arr, 1)).toBe(1001);
  });

  it('should return 10 for arr=[1,2,3,4,5] and k=5', () => {
    expect(findKthPositive([1, 2, 3, 4, 5], 5)).toBe(10);
  });

  it('should return 100 for arr=[10,20,30] and k=97', () => {
    expect(findKthPositive([10, 20, 30], 97)).toBe(100);
  });
});
