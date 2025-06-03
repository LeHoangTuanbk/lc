import { minimumEffortPath } from './minimum-effort-path';

describe('minimumEffortPath', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const heights = [
        [1, 2, 2],
        [3, 8, 2],
        [5, 3, 5],
      ];
      const expectedOutput = 2;
      expect(minimumEffortPath(heights)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const heights = [
        [1, 2, 3],
        [3, 8, 4],
        [5, 3, 5],
      ];
      const expectedOutput = 1;
      expect(minimumEffortPath(heights)).toEqual(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const heights = [
        [1, 2, 1, 1, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 1, 2, 1],
      ];
      const expectedOutput = 1;
      expect(minimumEffortPath(heights)).toEqual(expectedOutput);
    });
  });
});
