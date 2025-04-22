import { decodeMessage } from './decodeMessage';

describe('decodeMessage', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'G()(al)';
      const expectedOutput = 'Goal';
      expect(decodeMessage(normalInput)).toEqual(expectedOutput);
    });

    test('should handle: test case 2', () => {
      const normalInput = '(al)G(al)()()G';
      const expectedOutput = 'alGalooG';
      expect(decodeMessage(normalInput)).toBe(expectedOutput);
    });
  });
});
