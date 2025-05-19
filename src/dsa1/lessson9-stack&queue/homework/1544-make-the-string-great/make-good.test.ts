import { makeGood } from './make-good';

describe('makeGood()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'leEeetcode';
      const expectedOutput = 'leetcode';
      expect(makeGood(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = 'abBAcC';
      const expectedOutput = '';
      expect(makeGood(normalInput)).toBe(expectedOutput);
    });
  });
});
