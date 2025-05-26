import { shortestPathBinaryMatrix } from './shortest-path-in-binary-matrix';

describe('shortestPathBinaryMatrix', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const grid = [
        [0, 1],
        [1, 0],
      ];
      const expectedOutput = 2;
      expect(shortestPathBinaryMatrix(grid)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const grid = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ];
      const expectedOutput = 4;
      expect(shortestPathBinaryMatrix(grid)).toBe(expectedOutput);
    });
  });
});
