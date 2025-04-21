import { longestCommonPrefix } from './longestCommonPrefix';

describe('functionName', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = ['flower', 'flow', 'flight'];
      const expectedOutput = 'fl';
      expect(longestCommonPrefix(normalInput)).toBe(expectedOutput);
    });
  });

  describe('edge cases', () => {
    test('should handle empty input', () => {
      const emptyInput: string[] = [''];
      const expectedForEmpty = '';
      expect(longestCommonPrefix(emptyInput)).toBe(expectedForEmpty);
    });
  });
});
