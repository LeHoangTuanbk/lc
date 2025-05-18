import { isValid } from './isValid';

describe('isValid()', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = '()[]{}';
      const expectedOutput = true;
      expect(isValid(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = '(]';
      const expectedOutput = false;
      expect(isValid(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const normalInput = '(])';
      const expectedOutput = false;
      expect(isValid(normalInput)).toBe(expectedOutput);
    });
  });
});
