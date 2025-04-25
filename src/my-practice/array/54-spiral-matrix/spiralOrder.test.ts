import { spiralOrder } from './sprialOrder';

describe('rotate', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expectedOutput = [1, 2, 3, 6, 9, 8, 7, 4, 5];
      expect(spiralOrder(matrix)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ];
      const expectedOutput = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
      expect(spiralOrder(matrix)).toEqual(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20],
        [21, 22, 23, 24],
      ];
      const expectedOutput = [
        1, 2, 3, 4, 8, 12, 16, 20, 24, 23, 22, 21, 17, 13, 9, 5, 6, 7, 11, 15, 19, 18, 14, 10,
      ];
      expect(spiralOrder(matrix)).toEqual(expectedOutput);
    });
  });
});
