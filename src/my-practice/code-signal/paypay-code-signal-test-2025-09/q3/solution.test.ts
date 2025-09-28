import { solveMatrixPuzzle } from './solution';

describe('solveMatrixPuzzle', () => {
  it('case 1: only one block', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, -1],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const output = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(solveMatrixPuzzle(input)).toEqual(output);
  });

  it('case 2: two blocks, already sorted', () => {
    const input = [
      [1, 2, 3, 4, 1, 2, 3, 4],
      [5, 6, 7, -1, 5, 6, 7, 8],
      [9, 10, 11, 12, 9, 10, 11, 12],
      [13, 14, 15, 16, 13, 14, -1, 16],
    ];
    const output = [
      [1, 2, 3, 4, 1, 2, 3, 4],
      [5, 6, 7, 8, 5, 6, 7, 8],
      [9, 10, 11, 12, 9, 10, 11, 12],
      [13, 14, 15, 16, 13, 14, 15, 16],
    ];
    expect(solveMatrixPuzzle(input)).toEqual(output);
  });

  it('case 3: two blocks, need reorder', () => {
    const input = [
      [1, 2, 3, 4, 1, 2, 3, 4],
      [5, 6, 7, -1, 5, 6, -1, 8],
      [9, 10, 11, 12, 9, 10, 11, 12],
      [13, 14, 15, 16, 13, 14, 15, 16],
    ];
    // Left block missing=8, right block missing=7
    // Sorted order should be [right block, left block]
    const output = [
      [1, 2, 3, 4, 1, 2, 3, 4],
      [5, 6, 7, 8, 5, 6, 7, 8],
      [9, 10, 11, 12, 9, 10, 11, 12],
      [13, 14, 15, 16, 13, 14, 15, 16],
    ];
    expect(solveMatrixPuzzle(input)).toEqual(output);
  });
});
