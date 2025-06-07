import { findMinHeightTrees } from './find-min-height-trees';

describe('findMinHeightTrees', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const n = 4,
        edges = [
          [1, 0],
          [1, 2],
          [1, 3],
        ];
      const expectedOutput = [1];
      expect(findMinHeightTrees(n, edges)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const n = 6,
        edges = [
          [3, 0],
          [3, 1],
          [3, 2],
          [3, 4],
          [5, 4],
        ];
      const expectedOutput = [3, 4];
      expect(findMinHeightTrees(n, edges)).toEqual(expectedOutput);
    });
  });
});
