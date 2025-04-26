import { balancedStringSplit } from './balanced-string-split';

describe('functionName', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'RLRRLLRLRL';
      const expectedOutput = 4;
      expect(balancedStringSplit(normalInput)).toBe(expectedOutput);
    });

    test('should return 1 when can not split', () => {
      const normalInput = 'LLLLRRRR';
      const expectedOutput = 1;
      expect(balancedStringSplit(normalInput)).toBe(expectedOutput);
    });
  });
});
