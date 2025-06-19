import { jump } from './jump';

describe('jump', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [2, 3, 1, 1, 4];
      const expectedOutput = 2;
      expect(jump(nums)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const nums = [2, 3, 0, 1, 4];
      const expectedOutput = 2;
      expect(jump(nums)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const nums = [2, 3, 1, 1, 4, 2, 3, 6];
      const expectedOutput = 3;
      expect(jump(nums)).toBe(expectedOutput);
    });
  });

  describe('special cases', () => {
    test('should handle special input', () => {
      const nums = [0];
      const expectedOutput = 0;
      expect(jump(nums)).toBe(expectedOutput);
    });
  });
});
