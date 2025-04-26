import { isPowerOfFour } from './powerOfFour';

describe('isPowerOfFour', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const input = 16;
      const expectedOutput = true;
      expect(isPowerOfFour(input)).toBe(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const input = 1;
      const expectedOutput = true;
      expect(isPowerOfFour(input)).toBe(expectedOutput);
    });
    test('should handle normal input 3 correctly', () => {
      const input = 5;
      const expectedOutput = false;
      expect(isPowerOfFour(input)).toBe(expectedOutput);
    });
  });
});
