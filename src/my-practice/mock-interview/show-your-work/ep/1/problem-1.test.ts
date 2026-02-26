import { findTheLongestSubstring } from './problem-1';

describe('functionName', () => {
  describe('core cases', () => {
    test('should handle normal input 1 correctly', () => {
      const normalInput = 'bbbbbb';
      const expectedOutput = 1;
      expect(findTheLongestSubstring(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = 'abcabcbb';
      const expectedOutput = 3;
      expect(findTheLongestSubstring(normalInput)).toBe(expectedOutput);
    });
  });

  describe('edge cases', () => {
    test('should handle empty input', () => {
      const emptyInput = '';
      const expectedForEmpty = 0;
      expect(findTheLongestSubstring(emptyInput)).toBe(expectedForEmpty);
    });
  });

  // describe('special cases', () => {
  //   test('should handle special input', () => {
  //     const specialInput = '';
  //     const expectedForSpecial = '';
  //     expect(functionName(specialInput)).toBe(expectedForSpecial);
  //   });
  // });
});
