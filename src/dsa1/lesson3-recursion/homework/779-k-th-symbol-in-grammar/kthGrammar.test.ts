import { kthGrammar } from './kthGrammar';

describe('kthGrammar', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const n = 1,
        k = 1;
      const expectedOutput = 0;
      expect(kthGrammar(n, k)).toBe(expectedOutput);
    });
    test('should handle normal input correctly', () => {
      const n = 2,
        k = 1;
      const expectedOutput = 0;
      expect(kthGrammar(n, k)).toBe(expectedOutput);
    });
    test('should handle normal input correctly', () => {
      const n = 2,
        k = 2;
      const expectedOutput = 1;
      expect(kthGrammar(n, k)).toBe(expectedOutput);
    });

    test('should handle normal input correctly', () => {
      const n = 3,
        k = 1;
      const expectedOutput = 0;
      expect(kthGrammar(n, k)).toBe(expectedOutput);
    });
    test('should handle normal input correctly', () => {
      const n = 30,
        k = 434991989;
      const expectedOutput = 0;
      expect(kthGrammar(n, k)).toBe(expectedOutput);
    });
  });
});
