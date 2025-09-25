import { isToeplitzMatrix } from './solution'; // sửa lại path nếu cần

describe('isToeplitzMatrix', () => {
  it('returns true for a valid Toeplitz matrix (3x4)', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ];
    expect(isToeplitzMatrix(matrix)).toBe(true);
  });

  it('returns false when one diagonal is broken', () => {
    const matrix = [
      [1, 2, 3],
      [4, 1, 9], // 9 breaks the diagonal
      [7, 4, 1],
    ];
    expect(isToeplitzMatrix(matrix)).toBe(false);
  });

  it('returns true for a single row matrix', () => {
    const matrix = [[1, 2, 3, 4]];
    expect(isToeplitzMatrix(matrix)).toBe(true);
  });

  it('returns true for a single column matrix', () => {
    const matrix = [[1], [2], [3]];
    expect(isToeplitzMatrix(matrix)).toBe(true);
  });

  it('returns true for 1x1 matrix', () => {
    const matrix = [[42]];
    expect(isToeplitzMatrix(matrix)).toBe(true);
  });

  it('returns false for 2x2 matrix not toeplitz', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(isToeplitzMatrix(matrix)).toBe(false);
  });

  it('returns true for 2x2 valid Toeplitz', () => {
    const matrix = [
      [5, 6],
      [7, 5],
    ];
    expect(isToeplitzMatrix(matrix)).toBe(true);
  });
});
