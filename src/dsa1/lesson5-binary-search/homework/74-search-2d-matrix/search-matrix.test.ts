import { searchMatrix } from './search-matrix';

describe('searchMatrix', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ];
      const target = 3;
      const expectedOutput = true;
      expect(searchMatrix(matrix, target)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ];
      const target = 13;
      const expectedOutput = false;
      expect(searchMatrix(matrix, target)).toEqual(expectedOutput);
    });
  });
});
