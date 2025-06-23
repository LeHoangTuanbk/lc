import { removeKdigits } from './remove-k-digits';

describe('removeKdigits', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const num = '1432219',
        k = 3;
      const expectedOutput = '1219';
      expect(removeKdigits(num, k)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const num = '112',
        k = 1;
      const expectedOutput = '11';
      expect(removeKdigits(num, k)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const num = '33526221184202197273',
        k = 19;
      const expectedOutput = '0';
      expect(removeKdigits(num, k)).toBe(expectedOutput);
    });
  });
});
