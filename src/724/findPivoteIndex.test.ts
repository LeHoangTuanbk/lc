import { pivotIndex } from './findPivotIndex';

describe('pivotIndex', () => {
  test('example 1: [1,7,3,6,5,6] → 3', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });

  test('no pivot exists: [1,2,3] → -1', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

  test('single element: [1] → 0', () => {
    expect(pivotIndex([1])).toBe(0);
  });

  test('with negatives: [2,1,-1] → 0', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });

  test('empty array → -1', () => {
    expect(pivotIndex([])).toBe(-1);
  });
});
