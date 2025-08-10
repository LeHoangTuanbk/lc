import {
  minimumDifferenceBruteForce,
  minimumDifferenceBitmaskAll,
  minimumDifference,
} from './minimum-difference';

describe('minimumDifferenceBruteForce', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = [3, 9, 7, 3];
      const expectedOutput = 2;
      expect(minimumDifferenceBruteForce(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = [-36, 36];
      const expectedOutput = 72;
      expect(minimumDifferenceBruteForce(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const normalInput = [1, 2, 3, 4];
      const expectedOutput = 0;
      expect(minimumDifferenceBruteForce(normalInput)).toBe(expectedOutput);
    });
  });
});

describe('minimumDifferenceBitmaskAll', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = [3, 9, 7, 3];
      const expectedOutput = 2;
      expect(minimumDifferenceBitmaskAll(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = [-36, 36];
      const expectedOutput = 72;
      expect(minimumDifferenceBitmaskAll(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const normalInput = [1, 2, 3, 4];
      const expectedOutput = 0;
      expect(minimumDifferenceBitmaskAll(normalInput)).toBe(expectedOutput);
    });
  });
});

describe('minimumDifference', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const normalInput = [3, 9, 7, 3];
      const expectedOutput = 2;
      expect(minimumDifference(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const normalInput = [-36, 36];
      const expectedOutput = 72;
      expect(minimumDifference(normalInput)).toBe(expectedOutput);
    });

    test('should handle normal input 3 correctly', () => {
      const normalInput = [1, 2, 3, 4];
      const expectedOutput = 0;
      expect(minimumDifference(normalInput)).toBe(expectedOutput);
    });
  });
});
