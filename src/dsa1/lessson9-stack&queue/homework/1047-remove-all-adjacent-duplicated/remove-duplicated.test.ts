import { removeDuplicates } from './remove-duplicated';

describe('removeDuplicates()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'abbaca';
      const expectedOutput = 'ca';
      expect(removeDuplicates(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = 'azxxzy';
      const expectedOutput = 'ay';
      expect(removeDuplicates(normalInput)).toBe(expectedOutput);
    });
  });
});
