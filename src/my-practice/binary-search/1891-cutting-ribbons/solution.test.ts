import { maxLength } from './solution';

describe('maxLength', () => {
  it('Example 1', () => {
    expect(maxLength([9, 7, 5], 3)).toBe(5);
  });

  it('Example 2', () => {
    expect(maxLength([7, 5, 9], 4)).toBe(4);
  });

  it('Example 3 - impossible', () => {
    expect(maxLength([5, 7, 9], 22)).toBe(0);
  });

  it('Edge case: all ribbons same', () => {
    expect(maxLength([10, 10, 10], 5)).toBe(5); // 3*10 → cut 5x6
  });

  it('Large values', () => {
    expect(maxLength([1000000000], 1)).toBe(1000000000);
    expect(maxLength([1000000000], 2)).toBe(500000000);
    expect(maxLength([1000000000], 3)).toBe(333333333);
  });

  it('Zero case: not enough total length', () => {
    expect(maxLength([1, 1, 1], 5)).toBe(0);
  });
});
