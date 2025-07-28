import { wordBreak } from './word-break-set';

describe('wordBreak', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const s = 'leetcode',
        wordDict = ['leet', 'code'];
      const expectedOutput = true;
      expect(wordBreak(s, wordDict)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const s = 'applepenapple',
        wordDict = ['apple', 'pen'];
      const expectedOutput = true;
      expect(wordBreak(s, wordDict)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const s = 'aaaabc',
        wordDict = ['a', 'aa', 'aaa'];
      const expectedOutput = false;
      expect(wordBreak(s, wordDict)).toBe(expectedOutput);
    });
  });
});
