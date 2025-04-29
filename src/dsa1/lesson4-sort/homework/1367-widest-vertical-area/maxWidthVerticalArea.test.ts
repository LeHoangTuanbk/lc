import { maxWidthOfVerticalArea } from './maxWidthVerticalArea';

describe('maxWidthOfVerticalArea', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const points = [
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7],
      ];
      const expectedOutput = 1;
      expect(maxWidthOfVerticalArea(points)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const points = [
        [3, 1],
        [9, 0],
        [1, 0],
        [1, 4],
        [5, 3],
        [8, 8],
      ];
      const expectedOutput = 3;
      expect(maxWidthOfVerticalArea(points)).toBe(expectedOutput);
    });
  });
});
