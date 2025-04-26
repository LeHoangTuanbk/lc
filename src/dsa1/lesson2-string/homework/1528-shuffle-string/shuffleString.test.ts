import { restoreString } from './shuffleString';

describe('Shuffle string', () => {
  describe('Normal cases', () => {
    test('Core cases', () => {
      const input = 'codeleet';
      const indices = [4, 5, 6, 7, 0, 2, 1, 3];
      const expectedOutput = 'leetcode';
      expect(restoreString(input, indices)).toEqual(expectedOutput);
    });
  });
});
