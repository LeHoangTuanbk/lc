import { searchRange } from './search-range';

describe('searchRange', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [5, 7, 7, 8, 8, 10];
      const target = 8;
      const expectedOutput = [3, 4];
      expect(searchRange(nums, target)).toEqual(expectedOutput);
    });

    test('should handle not found correctly', () => {
      const nums = [5, 7, 7, 8, 8, 10];
      const target = 6;
      const expectedOutput = [-1, -1];
      expect(searchRange(nums, target)).toEqual(expectedOutput);
    });

    test('should handle one element correctly', () => {
      const nums = [1];
      const target = 1;
      const expectedOutput = [0, 0];
      expect(searchRange(nums, target)).toEqual(expectedOutput);
    });
  });

  describe('edge cases', () => {
    test('should handle empty input', () => {
      const nums: number[] = [];
      const target = 0;
      const expectedOutput = [-1, -1];
      expect(searchRange(nums, target)).toEqual(expectedOutput);
    });
  });
});
