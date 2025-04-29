import { heightChecker } from './heigherChecker';

describe('smallerNumbersThanCurrent', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const heights = [1, 1, 4, 2, 1, 3];
      const expectedOutput = 3;
      expect(heightChecker(heights)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const heights = [5, 1, 2, 3, 4];
      const expectedOutput = 5;
      expect(heightChecker(heights)).toBe(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const heights = [1, 2, 3, 4, 5];
      const expectedOutput = 0;
      expect(heightChecker(heights)).toBe(expectedOutput);
    });
    test('should handle normal input 4 correctly', () => {
      const heights = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7];
      const expectedOutput = 22;
      expect(heightChecker(heights)).toBe(expectedOutput);
    });
  });
});
