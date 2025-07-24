import { twoSumLessThanK } from './two-sum-less-than-k';

describe('twoSumLessThanK', () => {
  it('Example 1: normal case', () => {
    const A = [34, 23, 1, 24, 75, 33, 54, 8];
    const K = 60;
    expect(twoSumLessThanK(A, K)).toBe(58); // 34 + 24
  });

  it('Example 2: no valid pair', () => {
    const A = [10, 20, 30];
    const K = 15;
    expect(twoSumLessThanK(A, K)).toBe(-1);
  });

  it('Edge case: only two elements, valid', () => {
    const A = [1, 2];
    const K = 5;
    expect(twoSumLessThanK(A, K)).toBe(3);
  });

  it('Edge case: only two elements, invalid', () => {
    const A = [4, 6];
    const K = 5;
    expect(twoSumLessThanK(A, K)).toBe(-1);
  });

  it('Multiple pairs, pick maximum < K', () => {
    const A = [5, 1, 2, 3, 4];
    const K = 7;
    expect(twoSumLessThanK(A, K)).toBe(6); // 2 + 4 or 3 + 3
  });
});
