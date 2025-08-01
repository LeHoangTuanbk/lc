import { countWays } from './climb-stairs';

describe('countWays', () => {
  it('should return 1 for n = 0 (base case)', () => {
    expect(countWays(0, new Set())).toBe(1);
  });

  it('should return 1 for n = 1', () => {
    expect(countWays(1, new Set())).toBe(1); // Only [1]
  });

  it('should return 2 for n = 2', () => {
    expect(countWays(2, new Set())).toBe(2); // [1+1], [2]
  });

  it('should return 4 for n = 3', () => {
    expect(countWays(3, new Set())).toBe(4); // [1+1+1], [1+2], [2+1], [3]
  });

  it('should return correct result for n = 4, no broken steps', () => {
    expect(countWays(4, new Set())).toBe(7); // All combinations of 1,2,3 that sum to 4
  });

  it('should handle one broken step correctly', () => {
    expect(countWays(4, new Set([2]))).toBe(3); // Valid: [1+1+1+1], [1+3], [3+1]
  });

  it('should return 0 if the last step is broken', () => {
    expect(countWays(5, new Set([5]))).toBe(0);
  });

  it('should return 0 if n = 1 and it is broken', () => {
    expect(countWays(1, new Set([1]))).toBe(0);
  });

  it('should return correct result with multiple broken steps', () => {
    expect(countWays(6, new Set([2, 4]))).toBe(4); // fewer valid paths
  });

  it('should work for n = 10 with no broken steps', () => {
    expect(countWays(10, new Set())).toBe(274);
  });

  it('should work for n = 10 with some broken steps', () => {
    expect(countWays(10, new Set([3, 5, 7]))).toBeLessThan(274);
  });
});
