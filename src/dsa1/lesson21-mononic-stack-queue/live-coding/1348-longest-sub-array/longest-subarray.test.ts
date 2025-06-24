import { longestSubarray } from './longest-subarray';

describe('longestSubarray', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [8, 2, 4, 7],
        limit = 4;
      const expectedOutput = 2;
      expect(longestSubarray(nums, limit)).toBe(expectedOutput);
    });

    test('should handle normal input correctly', () => {
      const nums = [10, 1, 2, 4, 7, 2],
        limit = 5;
      const expectedOutput = 4;
      expect(longestSubarray(nums, limit)).toBe(expectedOutput);
    });

    test('should handle normal input correctly', () => {
      const nums = [4, 2, 2, 2, 4, 4, 2, 2],
        limit = 0;
      const expectedOutput = 3;
      expect(longestSubarray(nums, limit)).toBe(expectedOutput);
    });
  });
});
