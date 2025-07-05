import { findMaxLength } from './find-max-length';

describe('findMaxLength', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [0, 1];
      const expectedOutput = 2;
      expect(findMaxLength(nums)).toBe(expectedOutput);
    });

    test('should handle normal input 1 correctly', () => {
      const nums = [0, 1, 0];
      const expectedOutput = 2;
      expect(findMaxLength(nums)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
      const expectedOutput = 6;
      expect(findMaxLength(nums)).toBe(expectedOutput);
    });
  });
});
