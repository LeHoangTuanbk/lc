import { minLength } from './min-length';

describe('minLength()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = 'ABFCACDB';
      const expectedOutput = 2;
      expect(minLength(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = 'ACBBD';
      const expectedOutput = 5;
      expect(minLength(normalInput)).toBe(expectedOutput);
    });
  });
});
