import { smallerNumbersThanCurrent } from './how-many-smaller-than-current';

describe('smallerNumbersThanCurrent', () => {
  describe('core cases', () => {
    test('should handle normal input correctly', () => {
      const nums = [8, 1, 2, 2, 3];
      const expectedOutput = [4, 0, 1, 1, 3];
      expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const nums = [6, 5, 4, 8];
      const expectedOutput = [2, 1, 0, 3];
      expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
    });
    test('should handle normal input 2 correctly', () => {
      const nums = [7, 7, 7, 7];
      const expectedOutput = [0, 0, 0, 0];
      expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
    });
  });
});
