import { shortestPath } from './shortest-path';

describe('shortestPath', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const grid = [
          [0, 0, 0],
          [1, 1, 0],
          [0, 0, 0],
          [0, 1, 1],
          [0, 0, 0],
        ],
        k = 1;
      const expectedOutput = 6;
      expect(shortestPath(grid, k)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const grid = [
          [0, 1, 1],
          [1, 1, 1],
          [1, 0, 0],
        ],
        k = 1;
      const expectedOutput = -1;
      expect(shortestPath(grid, k)).toBe(expectedOutput);
    });
  });
});
