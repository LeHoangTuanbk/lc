import { sumSubarrayMins } from './sum-subarray-minimum';

describe('functionName', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const arr = [3, 1, 2, 4],
        expectedOutput = 17;
      expect(sumSubarrayMins(arr)).toBe(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const arr = [11, 81, 94, 43, 3],
        expectedOutput = 444;
      expect(sumSubarrayMins(arr)).toBe(expectedOutput);
    });
  });
});
