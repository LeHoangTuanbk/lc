import { decodeMessage } from './decodeMessage';

describe('decodeMessage', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const key = 'eljuxhpwnyrdgtqkviszcfmabo';
      const message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb';
      const expectedOutput = 'the five boxing wizards jump quickly';
      expect(decodeMessage(key, message)).toEqual(expectedOutput);
    });

    test('should handle: test case 2', () => {
      const key = 'the quick brown fox jumps over the lazy dog';
      const message = 'vkbs bs t suepuv';
      const expectedOutput = 'this is a secret';
      expect(decodeMessage(key, message)).toBe(expectedOutput);
    });
  });
});
