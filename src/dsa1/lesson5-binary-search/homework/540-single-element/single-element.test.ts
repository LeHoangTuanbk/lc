import { singleNonDuplicate } from './single-element';

describe('singleNonDuplicate', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8],
        expectedOutput = 2;
      expect(singleNonDuplicate(nums)).toEqual(expectedOutput);
    });

    test('should handle normal input 2 correctly', () => {
      const nums = [3, 3, 7, 7, 10, 11, 11],
        expectedOutput = 10;
      expect(singleNonDuplicate(nums)).toEqual(expectedOutput);
    });
  });
});
